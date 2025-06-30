<template>
  <div class="home">
    <header class="app-header">
      <div class="logo">
        <img src="https://th.bing.com/th?q=Food+Logo.png+Copyright+Free&w=120&h=120" alt="logo" />
        <h1>
          <span class="brand-primary">хоолны</span><span class="brand-highlight">жор</span>
        </h1>
      </div>
      <div class="auth">
        <button v-if="!user" @click="loginWithFacebook">Нэвтрэх</button>
        <div v-else>
          <span>👋 {{ user.displayName }}</span>
          <button @click="logout">Гарах</button>
        </div>
      </div>
    </header>

    <div class="hero-banner">
      <h2>Амттай Хоол Хийе!</h2>
      <p>Туршаад Үз!</p>
      <div class="actions">
        <button v-if="user" @click="showAddRecipe = !showAddRecipe">
          {{ showAddRecipe ? 'хаах' : '➕ Хоол нэмэх' }}
        </button>
        <button v-if="user" @click="toggleLikedRecipes">
          {{ showLikedRecipes ? 'Бүх хоолыг харуулах' : '❤️ Надад таалагдсан хоол' }}
        </button>
      </div>
    </div>

    <main>
      <div v-if="user">
        <div v-if="showAddRecipe">
          <AddRecipe />
        </div>
        <RecipesList :filterLiked="showLikedRecipes" />
      </div>
      <div v-else class="login-reminder">
        <p>Please login to view and manage recipes.</p>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { onAuthStateChanged, signOut, signInWithPopup, FacebookAuthProvider } from 'firebase/auth'
import { auth } from './firebase'
import AddRecipe from './components/AddRecipe.vue'
import RecipesList from './components/RecipesList.vue'

const user = ref(null)
const showAddRecipe = ref(false)
const showLikedRecipes = ref(false)

onMounted(() => {
  onAuthStateChanged(auth, (currentUser) => {
    user.value = currentUser
  })
})

const loginWithFacebook = async () => {
  const provider = new FacebookAuthProvider()
  try {
    const result = await signInWithPopup(auth, provider)
    user.value = result.user
  } catch (error) {
    alert('Login failed: ' + error.message)
  }
}

const logout = async () => {
  await signOut(auth)
  user.value = null
  showAddRecipe.value = false
}

const toggleLikedRecipes = () => {
  showLikedRecipes.value = !showLikedRecipes.value
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');

.home {
  font-family: 'Inter', sans-serif;
  background-color: #f9f9f9;
  color: #333;
  min-height: 100vh;
}

.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 16px 32px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  position: sticky;
  top: 0;
  z-index: 100;
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo img {
  width: 50px;
  border-radius: 50%;
  border: 2px solid #fb6f62;
}

.logo h1 {
  font-size: 1.8rem;
  display: flex;
  gap: 4px;
}

.brand-primary {
  color: #1c355e;
}

.brand-highlight {
  color: #fb6f62;
  font-style: italic;
}

.auth {
  display: flex;
  gap: 12px;
  align-items: center;
}

.auth button {
  background-color: #3b5998;
  color: white;
  font-weight: bold;
  border-radius: 6px;
  padding: 8px 16px;
  border: none;
  cursor: pointer;
}

.auth button:hover {
  background-color: #2d4373;
}

.hero-banner {
  background-image: url('https://t3.ftcdn.net/jpg/02/52/38/80/360_F_252388016_KjPnB9vglSCuUJAumCDNbmMzGdzPAucK.jpg');
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
  padding: 60px 20px;
  border-radius: 0 0 16px 16px;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.3);
}

.hero-banner h2 {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.hero-banner p {
  font-size: 1.2rem;
  margin-bottom: 20px;
}

.actions {
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
}

.actions button {
  background-color: #28a745;
  font-size: 16px;
  font-weight: 600;
  padding: 10px 20px;
  border-radius: 30px;
}

.actions button:hover {
  background-color: #218838;
}

.login-reminder {
  text-align: center;
  margin: 40px auto;
  font-size: 1.1rem;
  color: #555;
}
</style>
