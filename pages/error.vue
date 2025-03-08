<!-- error.vue -->
<template>
    <div class="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full text-center">
        <div class="mb-8">
          <NuxtImg 
            src="/images/logo.png" 
            alt="Family Rice Logo"
            width="200"
            height="100"
            class="mx-auto h-24 w-auto"
          />
        </div>
        
        <div class="bg-white rounded-lg shadow-md p-8">
          <div class="text-6xl font-bold text-primary mb-4">
            {{ errorMessage.code }}
          </div>
          
          <h1 class="text-2xl font-bold text-gray-800 mb-4">
            {{ errorMessage.title }}
          </h1>
          
          <p class="text-gray-600 mb-8">
            {{ errorMessage.message }}
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              @click="handleError"
              class="btn btn-primary py-2 px-6"
            >
              {{ error.statusCode === 404 ? 'Go Home' : 'Try Again' }}
            </button>
            
            <NuxtLink 
              v-if="error.statusCode === 404"
              to="/shop"
              class="btn btn-outline py-2 px-6"
            >
              Browse Products
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  const error = useError();
  const router = useRouter();
  
  // Generate appropriate error message based on status code
  const errorMessage = computed(() => {
    switch (error.value?.statusCode) {
      case 404:
        return {
          code: 404,
          title: 'Page Not Found',
          message: 'The page you are looking for doesn\'t exist or may have been moved.'
        };
      case 500:
        return {
          code: 500,
          title: 'Server Error',
          message: 'Oops! Something went wrong on our end. Please try again later.'
        };
      default:
        return {
          code: error.value?.statusCode || '?',
          title: 'An Error Occurred',
          message: error.value?.message || 'Something went wrong. Please try again.'
        };
    }
  });
  
  // Handle error based on status code
  function handleError() {
    if (error.value?.statusCode === 404) {
      // For 404, navigate to homepage
      return navigateTo('/');
    } else {
      // For other errors, clear the error and refresh the page
      clearError({ redirect: router.currentRoute.value.path });
    }
  }
  
  // Set page title based on error
  useHead({
    title: computed(() => `${errorMessage.value.title} - Family Rice`)
  });
  </script>