<!-- components/AppFooter.vue -->
<template>
    <footer class="bg-indigo-950 text-white pt-16 pb-8">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
          <!-- Company Info -->
          <div class="col-span-1 md:col-span-1 lg:col-span-1">
            <div class="mb-6">
              <img src="/images/logo.jpg" alt="Family Rice Logo" class="h-12 mb-4 bg-white p-1 rounded" />
              <p class="text-gray-300 mb-4">
                Premium quality rice for wholesale and retail customers.
                Nourishing generations, one grain at a time.
              </p>
            </div>
            <div class="space-y-2">
              <div class="flex items-center">
                <span class="material-icons text-sm mr-2">email</span>
                <a href="mailto:familyricewholesaleandretail@gmail.com" class="text-gray-300 hover:text-white transition-colors">
                  familyricewholesaleandretail@gmail.com
                </a>
              </div>
              <div class="flex items-center">
                <span class="material-icons text-sm mr-2">phone</span>
                <a href="tel:0550210487" class="text-gray-300 hover:text-white transition-colors">
                  0550210487
                </a>
              </div>
            </div>
          </div>
          
          <!-- Quick Links -->
          <div>
            <h3 class="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul class="space-y-2">
              <li>
                <NuxtLink to="/" class="text-gray-300 hover:text-white transition-colors">Home</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/shop" class="text-gray-300 hover:text-white transition-colors">Shop</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/about" class="text-gray-300 hover:text-white transition-colors">About Us</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/contact" class="text-gray-300 hover:text-white transition-colors">Contact</NuxtLink>
              </li>
            </ul>
          </div>
          
          <!-- Products -->
          <div>
            <h3 class="text-lg font-semibold mb-4 text-white">Products</h3>
            <ul class="space-y-2">
              <li>
                <NuxtLink to="/shop?tab=retail" class="text-gray-300 hover:text-white transition-colors">Retail Products</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/shop?tab=wholesale" class="text-gray-300 hover:text-white transition-colors">Wholesale Products</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/products/1" class="text-gray-300 hover:text-white transition-colors">Family Rice 5kg</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/products/2" class="text-gray-300 hover:text-white transition-colors">Family Rice 1kg</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/products/3" class="text-gray-300 hover:text-white transition-colors">Family Rice 50kg</NuxtLink>
              </li>
            </ul>
          </div>
          
          <!-- Newsletter -->
          <div>
            <h3 class="text-lg font-semibold mb-4 text-white">Stay Connected</h3>
            <p class="text-gray-300 mb-4">
              Subscribe to our newsletter for updates on new products, promotions, and more.
            </p>
            <form @submit.prevent="subscribeNewsletter" class="space-y-2">
              <div>
                <input 
                  v-model="email"
                  type="email" 
                  placeholder="Your email address" 
                  class="w-full p-2 rounded bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
                  required
                />
              </div>
              <button 
                type="submit"
                class="w-full bg-amber-400 hover:bg-amber-500 text-white py-2 rounded transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <!-- Social Media and Copyright -->
        <div class="border-t border-gray-700 pt-8 mt-8">
          <div class="flex flex-col md:flex-row justify-between items-center">
            <div class="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {{ new Date().getFullYear() }} Family Rice Wholesale & Retail. All rights reserved.
            </div>
            <div class="flex space-x-4">
              <a href="#" class="text-gray-400 hover:text-white transition-colors">
                <span class="material-icons">facebook</span>
              </a>
              <a href="#" class="text-gray-400 hover:text-white transition-colors">
                <span class="material-icons">diversity_3</span>
              </a>
              <a href="#" class="text-gray-400 hover:text-white transition-colors">
                <span class="material-icons">whatsapp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </template>
  
  <script setup>
  
  const email = ref('')
  
  function subscribeNewsletter() {
    // In a real application, this would send the email to a backend API
    // For now, we'll just show an alert
    alert(`Thank you for subscribing with ${email.value}!`)
    email.value = ''
  }
  </script>