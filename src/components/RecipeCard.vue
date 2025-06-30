<template>
  <div class="card">
    <img :src="recipe.image" alt="recipe image" />
    <h3>{{ recipe.title }}</h3>
    <button @click="$emit('save', recipe)">Save Recipe</button>
  </div>
</template>

<script setup>
defineProps(['recipe'])
</script>

<style scoped>
.card {
  border: 1px solid #ccc;
  padding: 1rem;
  margin: 1rem;
}
img {
  width: 100%;
  height: auto;
}
</style>
