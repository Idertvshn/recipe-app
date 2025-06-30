<template>
  <div>
    <h2>📌 Saved Recipes</h2>
    <div v-if="recipes.length === 0">No saved recipes found.</div>
    <div class="recipes">
      <RecipeCard v-for="recipe in recipes" :key="recipe.id" :recipe="recipe" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { db, auth } from '../firebase'
import { collection, getDocs } from 'firebase/firestore'
import RecipeCard from '../components/RecipeCard.vue'

const recipes = ref([])

onMounted(async () => {
  const user = auth.currentUser
  if (!user) return

  const snapshot = await getDocs(collection(db, 'users', user.uid, 'savedRecipes'))
  recipes.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
})
</script>
