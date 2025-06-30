<template>
  <div class="recipe-list">
    <h2>Бүх хоол</h2>

    <!-- 🔍 Search -->
    <input v-model="searchTerm" placeholder="Жор хайх..." class="search" />

    <!-- No Recipes -->
    <div v-if="filteredRecipes.length === 0" class="no-recipes">Жор олдсонгүй.</div>

    <!-- Recipes Grid -->
    <div v-else class="grid">
      <div
        v-for="recipe in filteredRecipes"
        :key="recipe.id"
        class="card"
      >
        <img
          :src="recipe.image || 'https://via.placeholder.com/250x150?text=No+Image'"
          alt="recipe image"
        />
        <h3>{{ recipe.title }}</h3>

        <!-- Орц товчхон -->
        <p class="short-ingredients">
          <strong>Орц:</strong>
          <span v-if="Array.isArray(recipe.ingredients)">
            {{ recipe.ingredients.map(i => i.name || i).join(', ') }}
          </span>
        </p>

        <!-- Like button -->
        <button class="like-btn" @click="toggleLike(recipe)">
          ❤️ {{ recipe.likes?.length || 0 }}
        </button>

        <!-- View button -->
        <button @click="toggleDetails(recipe.id)">
          {{ expandedId === recipe.id ? 'Хураах' : 'Дэлгэрэнгүй' }}
        </button>

        <!-- Delete button -->
        <button
          v-if="recipe.createdBy === user?.uid"
          class="delete-btn"
          @click="deleteRecipe(recipe.id)"
        >
          🗑️ Устгах
        </button>

        <!-- Дэлгэрэнгүй -->
        <div v-if="expandedId === recipe.id" class="details">
          <h4>Орц:</h4>
          <ul>
            <li v-for="(item, index) in recipe.ingredients" :key="index">
              {{ item.name || item }} - {{ item.amount || '' }}
            </li>
          </ul>
          <h4>Хийх заавар:</h4>
          <p>{{ recipe.instructions }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
  arrayUnion,
  arrayRemove
} from 'firebase/firestore'
import { db, auth } from '../firebase'
import { onAuthStateChanged } from 'firebase/auth'

const props = defineProps({
  filterLiked: Boolean
})

const recipes = ref([])
const searchTerm = ref('')
const expandedId = ref(null)
const showLikedOnly = ref(props.filterLiked)
const user = ref(null)

watch(() => props.filterLiked, (newVal) => {
  showLikedOnly.value = newVal
})

const toggleLikedFilter = () => {
  showLikedOnly.value = !showLikedOnly.value
}

onMounted(() => {
  fetchRecipes()
  onAuthStateChanged(auth, (currentUser) => {
    user.value = currentUser
  })
})

const fetchRecipes = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'recipes'))
    recipes.value = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))
  } catch (err) {
    console.error('Жор татаж авахад алдаа гарлаа:', err)
  }
}

const deleteRecipe = async (id) => {
  if (!confirm('Энэ жорыг устгах уу?')) return
  try {
    await deleteDoc(doc(db, 'recipes', id))
    recipes.value = recipes.value.filter(r => r.id !== id)
  } catch (err) {
    console.error('Жор устгах үед алдаа гарлаа:', err)
    alert('Жор устгаж чадсангүй')
  }
}

const toggleDetails = id => {
  expandedId.value = expandedId.value === id ? null : id
}

const toggleLike = async (recipe) => {
  if (!user.value) {
    alert('Like дарахын тулд нэвтрэх хэрэгтэй!')
    return
  }

  const recipeRef = doc(db, 'recipes', recipe.id)
  const hasLiked = recipe.likes?.includes(user.value.uid)

  try {
    await updateDoc(recipeRef, {
      likes: hasLiked
        ? arrayRemove(user.value.uid)
        : arrayUnion(user.value.uid)
    })
    recipe.likes = hasLiked
      ? recipe.likes.filter(uid => uid !== user.value.uid)
      : [...(recipe.likes || []), user.value.uid]
  } catch (err) {
    console.error('Like хийх үед алдаа гарлаа:', err)
  }
}

const filteredRecipes = computed(() => {
  let filtered = recipes.value

  if (searchTerm.value) {
    filtered = filtered.filter(recipe =>
      recipe.title.toLowerCase().includes(searchTerm.value.toLowerCase())
    )
  }

  if (showLikedOnly.value && user.value) {
    filtered = filtered.filter(recipe =>
      recipe.likes?.includes(user.value.uid)
    )
  }

  return filtered
})
</script>

<style scoped>
.recipe-list {
  min-height: 100vh; /* ✅ дэлгэц дүүрэн болгоно */
  background-image: url('https://admin.sriboga.com/storage/news/1685519116-asian-cuisine-ingredients-food-background-ginger-2023-05-09-20-34-33-utc.webp');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  /* position relative for overlay */
  position: relative;

  padding: 40px 20px;
  text-align: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}


/* ✅ Light overlay */
.recipe-list::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.85);
  z-index: 0;
}
.recipe-list > * {
  position: relative;
  z-index: 1;
}

.search {
  width: 70%;
  padding: 12px 16px;
  font-size: 16px;
  border: 2px solid #ff5c00;
  border-radius: 8px;
  outline: none;
  margin-bottom: 20px;
  transition: box-shadow 0.3s ease;
}
.search:focus {
  box-shadow: 0 0 0 3px rgba(255, 92, 0, 0.3);
}

.filter-btn {
  margin-bottom: 30px;
  padding: 10px 18px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.filter-btn:hover {
  background-color: #0056b3;
}

.no-recipes {
  font-size: 1.2rem;
  color: #888;
  margin-top: 30px;
}

.grid {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
}

.card {
  width: 300px;
  padding: 16px;
  border: 1px solid #e0e0e0;
  background: #fff;
  border-radius: 12px;
  transition: transform 0.2s ease, box-shadow 0.3s ease;
  position: relative;
}
.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.08);
}

img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 12px;
}

h3 {
  font-size: 20px;
  margin: 8px 0;
  color: #222;
}

.short-ingredients {
  font-size: 14px;
  color: #666;
  margin-bottom: 10px;
}

button {
  margin-top: 10px;
  padding: 8px 14px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.3s ease;
}
button:hover {
  background-color: #218838;
}

.like-btn {
  background-color: #ff5c00;
  margin-right: 10px;
}
.like-btn:hover {
  background-color: #e65300;
}

.delete-btn {
  background-color: #dc3545;
  margin-left: 10px;
}
.delete-btn:hover {
  background-color: #c82333;
}

.details {
  margin-top: 14px;
  padding: 12px;
  background: #fef9f5;
  border-left: 4px solid #ff5c00;
  border-radius: 8px;
  text-align: left;
}

.details h4 {
  margin-bottom: 6px;
  font-size: 16px;
  color: #ff5c00;
}

.details ul {
  padding-left: 16px;
  margin-bottom: 10px;
}

.details li {
  font-size: 14px;
  margin-bottom: 4px;
}

.details p {
  font-size: 15px;
  line-height: 1.5;
  color: #444;
}
</style>
