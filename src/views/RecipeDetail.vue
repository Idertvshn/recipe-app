<template>
  <div v-if="recipe">
    <h2>{{ recipe.title }}</h2>
    <img :src="recipe.image" alt="recipe image" />
    <h3>Ingredients</h3>
    <ul>
      <li v-for="(item, index) in recipe.ingredients" :key="index">
        {{ item.name }} - {{ item.amount }}
      </li>
    </ul>
    <p>{{ recipe.instructions }}</p>
  </div>
  <div v-else>
    <p>Loading recipe...</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase'

const route = useRoute()
const recipe = ref(null)

const fetchRecipe = async () => {
  const docRef = doc(db, 'recipes', route.params.id)
  const docSnap = await getDoc(docRef)
  if (docSnap.exists()) {
    recipe.value = docSnap.data()
  } else {
    console.error('No such recipe!')
  }
}

onMounted(() => {
  fetchRecipe()
})
</script>
