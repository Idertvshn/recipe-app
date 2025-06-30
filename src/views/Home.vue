<template>
  <div>
    <h2>Search Recipes</h2>
    <input v-model="search" @input="filterRecipes" placeholder="Search..." />
    <div class="recipes">
      <RecipeCard
        v-for="recipe in filtered"
        :key="recipe.id"
        :recipe="recipe"
        @save="saveRecipe"
      />
    </div>
  </div>
</template>

<script setup>
import RecipeCard from '../components/RecipeCard.vue'
import { ref } from 'vue'
import { db, auth } from '../firebase'
import { collection, addDoc } from 'firebase/firestore'

const search = ref("")
const recipes = ref([
  { id: 1, title: "Pasta", image: "/images/pasta.jpg" },
  { id: 2, title: "Burger", image: "/images/burger.jpg" }
])
const filtered = ref([...recipes.value])

const filterRecipes = () => {
  filtered.value = recipes.value.filter(r =>
    r.title.toLowerCase().includes(search.value.toLowerCase())
  )
}

const saveRecipe = async (recipe) => {
  const user = auth.currentUser
  if (!user) return alert("Please login first")
  await addDoc(collection(db, "users", user.uid, "savedRecipes"), recipe)
}
</script>
