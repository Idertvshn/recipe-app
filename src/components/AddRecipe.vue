<template>
  <div class="add-recipe">
    <h2>Шинэ жор нэмэх</h2>
    <form @submit.prevent="addRecipe">
      <input v-model="title" placeholder="Хоолны нэр" required />

      <input type="file" @change="handleFileUpload" accept="image/*" required />
      <div v-if="imagePreview">
        <img :src="imagePreview" alt="Preview" class="preview-image" />
      </div>

      <h3>орц</h3>
      <div class="ingredient-inputs">
        <input v-model="ingredientName" placeholder="Name (орц)" />
        <input v-model="ingredientAmount" placeholder="Amount (жин)" />
        <button type="button" @click="addIngredient">Орц нэмэх</button>
      </div>

      <ul>
        <li v-for="(item, index) in ingredients" :key="index">
          {{ item.name }} - {{ item.amount }}
          <button @click="removeIngredient(index)">❌</button>
        </li>
      </ul>

      <textarea v-model="instructions" placeholder="Хийх заавар" required></textarea>
      <button type="submit">Жор нэмэх</button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { collection, addDoc } from 'firebase/firestore'
import { db, auth } from '../firebase'

const title = ref('')
const instructions = ref('')
const ingredients = ref([])
const ingredientName = ref('')
const ingredientAmount = ref('')
const imageFile = ref(null)
const imagePreview = ref(null)
const user = ref(null)

onMounted(() => {
  user.value = auth.currentUser
})

const handleFileUpload = (event) => {
  imageFile.value = event.target.files[0]
  imagePreview.value = URL.createObjectURL(imageFile.value)
}

const convertToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = (error) => reject(error)
  })
}

const addIngredient = () => {
  if (ingredientName.value && ingredientAmount.value) {
    ingredients.value.push({
      name: ingredientName.value,
      amount: ingredientAmount.value,
    })
    ingredientName.value = ''
    ingredientAmount.value = ''
  }
}

const removeIngredient = (index) => {
  ingredients.value.splice(index, 1)
}

const addRecipe = async () => {
  if (!user.value) {
    alert('Please login to add a recipe.')
    return
  }

  if (!imageFile.value) {
    alert('Please select an image.')
    return
  }

  try {
    const base64Image = await convertToBase64(imageFile.value)

    await addDoc(collection(db, 'recipes'), {
      title: title.value,
      image: base64Image,
      ingredients: ingredients.value,
      instructions: instructions.value,
      createdBy: user.value.uid,
      savedBy: [],
      createdAt: new Date(),
    })

    alert('Recipe added!')
    title.value = ''
    instructions.value = ''
    ingredients.value = []
    imageFile.value = null
    imagePreview.value = null
  } catch (err) {
    console.error('Error adding recipe:', err)
    alert('Failed to add recipe: ' + err.message)
  }
}
</script>

<style scoped>
.add-recipe {
  padding: 40px 20px;
  background-color: #ffffff;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  max-width: 700px;
  margin: 40px auto;
  font-family: 'Inter', sans-serif;
}

h2 {
  font-size: 28px;
  margin-bottom: 20px;
  text-align: center;
  font-weight: 700;
  color: #222;
}

form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

input,
textarea {
  padding: 14px 16px;
  font-size: 16px;
  border-radius: 10px;
  border: 1px solid #ccc;
  transition: border-color 0.3s ease;
}

input:focus,
textarea:focus {
  border-color: #28a745;
  outline: none;
}

.preview-image {
  max-width: 100%;
  max-height: 250px;
  border-radius: 10px;
  object-fit: cover;
  margin-top: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.ingredient-inputs {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.ingredient-inputs input {
  flex: 1;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  background-color: #f3f3f3;
  padding: 8px 12px;
  border-radius: 6px;
  margin-bottom: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

li button {
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 4px 10px;
  font-size: 14px;
  cursor: pointer;
}

li button:hover {
  background-color: #c82333;
}

button[type='submit'],
button[type='button'] {
  background-color: #28a745;
  color: white;
  font-weight: 600;
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.add-recipe {
  position: relative;
  min-height: 100vh;
  background-image: url('https://wallpapers.com/images/featured/1pf6px6ryqfjtnyr.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  padding: 40px 500px;
  font-family: 'Inter', sans-serif;
  z-index: 0;
}

/* overlay */
.add-recipe::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.85);
  z-index: 0;
}

/* content дээр давхцуулж гаргах */
.add-recipe > * {
  position: relative;
  z-index: 1;
}


button:hover {
  background-color: #218838;
}
</style>
