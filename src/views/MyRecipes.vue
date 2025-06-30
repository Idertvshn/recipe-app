<template>
  <div>
    <h2>👨‍🍳 My Recipes</h2>
    <form @submit.prevent="addRecipe">
      <input v-model="newRecipe.title" placeholder="Title" required />
      <input v-model="newRecipe.image" placeholder="Image URL" required />
      <button type="submit">Add Recipe</button>
    </form>

    <div class="recipes">
      <div v-for="recipe in myRecipes" :key="recipe.id" class="card">
        <img :src="recipe.image" />
        <h3>{{ recipe.title }}</h3>
        <button @click="deleteRecipe(recipe.id)">🗑 Delete</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { db, auth } from '../firebase'
import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore'

const newRecipe = ref({ title: '', image: '' })
const myRecipes = ref([])

const fetchMyRecipes = async () => {
  const user = auth.currentUser
  if (!user) return

  const snapshot = await getDocs(collection(db, 'users', user.uid, 'myRecipes'))
  myRecipes.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
}

const addRecipe = async () => {
  const user = auth.currentUser
  if (!user) return

  await addDoc(collection(db, 'users', user.uid, 'myRecipes'), newRecipe.value)
  newRecipe.value = { title: '', image: '' }
  fetchMyRecipes()
}

const deleteRecipe = async (id) => {
  const user = auth.currentUser
  if (!user) return

  await deleteDoc(doc(db, 'users', user.uid, 'myRecipes', id))
  fetchMyRecipes()
}

onMounted(fetchMyRecipes)
</script>

<style scoped>
form {
  display: flex;
  gap: 10px;
  margin: 1rem 0;
}
.card {
  border: 1px solid #ccc;
  padding: 1rem;
  margin: 1rem 0;
}
</style>
