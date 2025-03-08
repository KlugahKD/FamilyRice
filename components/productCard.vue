<!-- components/ProductCard.vue -->
<template>
    <div class="card hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
      <div 
        class="relative overflow-hidden cursor-pointer" 
        @click="viewDetails"
      >
        <img
          :src="product.image" 
          :alt="product.name"
          width="400"
          height="400"
          format="webp"
          quality="90"
          placeholder
          class="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      
      <div class="p-5 flex flex-col flex-grow">
        <h3 
          class="text-lg font-medium text-gray-800 hover:text-primary cursor-pointer mb-2"
          @click="viewDetails"
        >
          {{ product.name }}
        </h3>
        
        <p class="text-gray-600 text-sm mb-4 flex-grow">{{ shortDescription }}</p>
        
        <div v-if="showRetail && product.price.retail !== null" class="mb-2">
          <p class="font-semibold">Retail: <span class="text-primary">GHC {{ formatPrice(product.price.retail) }}</span></p>
        </div>
        
        <div v-if="showWholesale && product.price.wholesale !== null" class="mb-4">
          <p class="font-semibold">Wholesale: <span class="text-primary">GHC {{ formatPrice(product.price.wholesale) }}</span></p>
          <p v-if="product.minWholesaleQty > 1" class="text-xs text-gray-500">
            Min qty: {{ product.minWholesaleQty }}
          </p>
        </div>
        
        <div class="flex gap-2 mt-auto">
          <button 
            class="btn btn-outline flex-1 text-sm py-2" 
            @click="viewDetails"
          >
            View Details
          </button>
          
          <AddToCartButton 
            :product="product" 
            :show-retail="showRetail" 
            :show-wholesale="showWholesale"
            class="flex-1"
          />
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { computed } from 'vue';
  import type { Product } from '~/stores/products';
  
  const props = defineProps({
    product: {
      type: Object as () => Product,
      required: true
    },
    showRetail: {
      type: Boolean,
      default: true
    },
    showWholesale: {
      type: Boolean,
      default: true
    }
  });
  
  const router = useRouter();
  
  const shortDescription = computed(() => {
    return props.product.description.length > 100
      ? props.product.description.substring(0, 97) + '...'
      : props.product.description;
  });
  
  function formatPrice(price: number): string {
    return price.toFixed(2);
  }
  
  function viewDetails(): void {
    router.push(`/products/${props.product.id}`);
  }
  </script>