<!-- components/CustomerReview.vue -->
<template>
    <div class="customer-review">
      <div class="bg-white rounded-lg p-6 shadow-sm h-full flex flex-col">
        <!-- Rating Stars -->
        <div class="flex mb-4 text-accent">
          <span 
            v-for="i in 5" 
            :key="i" 
            class="material-icons"
          >
            {{ i <= rating ? 'star' : 'star_border' }}
          </span>
        </div>
        
        <!-- Review Text -->
        <p class="text-gray-700 italic mb-6 flex-grow">{{ text }}</p>
        
        <!-- Author Info -->
        <div class="flex items-center mt-auto">
          <div v-if="authorImage" class="flex-shrink-0 mr-4">
            <img 
              :src="authorImage" 
              :alt="author"
              class="h-12 w-12 rounded-full object-cover"
            />
          </div>
          <div>
            <p class="font-semibold text-gray-800">{{ author }}</p>
            <p class="text-sm text-gray-500">{{ authorType }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  const props = defineProps({
    rating: {
      type: Number,
      required: true,
      validator: (value: number) => value >= 1 && value <= 5
    },
    text: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    },
    authorType: {
      type: String,
      required: true
    },
    authorImage: {
      type: String,
      default: ''
    }
  });
  </script>