<!-- components/AppHeader.vue -->
<template>
  <header class="bg-white shadow-sm sticky top-0 z-50">
    <div class="container mx-auto px-4 py-3">
      <div class="flex justify-between items-center">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center">
          <img src="/images/logo.jpg" alt="Family Rice Logo" class="h-14 w-auto" />
        </NuxtLink>
        
        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center space-x-2">
          <NuxtLink to="/" class="py-2 px-4 text-gray-700 hover:text-indigo-950 font-medium" :class="{ 'text-indigo-950 font-semibold': $route.path === '/' }">
            Home
          </NuxtLink>
          <NuxtLink to="/shop" class="py-2 px-4 text-gray-700 hover:text-indigo-950 font-medium" :class="{ 'text-indigo-950 font-semibold': $route.path.includes('/shop') }">
            Shop
          </NuxtLink>
          <NuxtLink to="/about" class="py-2 px-4 text-gray-700 hover:text-indigo-950 font-medium" :class="{ 'text-indigo-950 font-semibold': $route.path.includes('/about') }">
            About us
          </NuxtLink>
          <NuxtLink to="/testimonials" class="py-2 px-4 text-gray-700 hover:text-indigo-950 font-medium" :class="{ 'text-indigo-950 font-semibold': $route.path.includes('/testimonials') }">
            Testimonials
          </NuxtLink>
          <NuxtLink to="/cart" class="py-2 px-4 text-gray-700 hover:text-indigo-950 font-medium flex items-center" :class="{ 'text-indigo-950 font-semibold': $route.path.includes('/cart') }">
            <span class="material-icons mr-1 text-xl">shopping_cart</span>
            Cart
            <span v-if="cartItemCount > 0" class="ml-1 bg-accent text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {{ cartItemCount }}
            </span>
          </NuxtLink>
          <NuxtLink to="/contact" class="ml-2 py-2 px-6 bg-indigo-950 text-white rounded hover:bg-indigo-900 transition-colors font-medium">
            Contact us
          </NuxtLink>
        </nav>
        
        <!-- Mobile Menu Button -->
        <div class="flex items-center md:hidden">
          <!-- Cart Icon for Mobile -->
          <NuxtLink to="/cart" class="mr-4 relative">
            <span class="material-icons text-gray-700">shopping_cart</span>
            <span v-if="cartItemCount > 0" class="absolute -top-1 -right-1 bg-accent text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              {{ cartItemCount }}
            </span>
          </NuxtLink>
          
          <!-- Hamburger Menu -->
          <button 
            @click="toggleMobileMenu" 
            class="text-gray-700 focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            <span v-if="!mobileMenuOpen" class="material-icons">menu</span>
            <span v-else class="material-icons">close</span>
          </button>
        </div>
      </div>
      
      <!-- Mobile Navigation -->
      <div v-if="mobileMenuOpen" class="md:hidden mt-4 py-4 border-t border-gray-100">
        <nav class="flex flex-col space-y-2">
          <NuxtLink to="/" class="py-2 px-4 text-gray-700 hover:text-indigo-950 font-medium" @click="closeMobileMenu">
            Home
          </NuxtLink>
          <NuxtLink to="/shop" class="py-2 px-4 text-gray-700 hover:text-indigo-950 font-medium" @click="closeMobileMenu">
            Shop
          </NuxtLink>
          <NuxtLink to="/about" class="py-2 px-4 text-gray-700 hover:text-indigo-950 font-medium" @click="closeMobileMenu">
            About us
          </NuxtLink>
          <NuxtLink to="/testimonials" class="py-2 px-4 text-gray-700 hover:text-indigo-950 font-medium" @click="closeMobileMenu">
            Testimonials
          </NuxtLink>
          <NuxtLink to="/contact" class="py-2 px-4 bg-indigo-950 text-white rounded hover:bg-indigo-900 transition-colors font-medium text-center mt-2" @click="closeMobileMenu">
            Contact us
          </NuxtLink>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useCartStore } from '~/stores/cart'

const mobileMenuOpen = ref(false)
const cartStore = useCartStore()

// Get cart item count from store
const cartItemCount = computed(() => {
  return cartStore.cartItemCount
})

function toggleMobileMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

function closeMobileMenu() {
  mobileMenuOpen.value = false
}

// Watch route changes to close mobile menu
const route = useRoute()
watch(() => route.path, () => {
  closeMobileMenu()
})
</script>