<!-- components/CartItem.vue -->
<template>
    <div class="cart-item flex flex-col sm:flex-row gap-4 sm:items-center pb-6" :class="{ 'border-b border-gray-200': !isLast }">
      <!-- Product Image -->
      <div class="flex-shrink-0">
        <NuxtImg 
          :src="item.image" 
          :alt="item.name"
          width="100" 
          height="100"
          class="w-24 h-24 object-cover rounded"
        />
      </div>
      
      <!-- Product Info -->
      <div class="flex-grow">
        <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-2">
          <h3 class="text-lg font-semibold">{{ item.name }}</h3>
          <div class="flex items-center">
            <span 
              v-if="item.isWholesale" 
              class="bg-accent/20 text-accent text-xs px-2 py-1 rounded-full mr-2"
            >
              Wholesale
            </span>
            <span 
              v-else 
              class="bg-secondary/20 text-secondary text-xs px-2 py-1 rounded-full mr-2"
            >
              Retail
            </span>
          </div>
        </div>
        
        <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
          <div class="text-sm text-gray-600">
            <p>
              Unit Price: GHC {{ formatPrice(item.isWholesale ? item.price.wholesale : (item.price.retail || 0)) }}
            </p>
          </div>
          
          <div class="flex items-center gap-4">
            <!-- Quantity Selector -->
            <QuantitySelector 
              v-model="localQuantity"
              :min="minQuantity"
              @update:model-value="updateQuantity"
            />
            
            <!-- Subtotal -->
            <div class="min-w-[90px] text-right">
              <p class="font-semibold">
                GHC {{ formatPrice(itemSubtotal) }}
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Remove Button -->
      <button 
        @click="remove"
        class="text-red-500 hover:text-red-700 transition-colors self-start sm:self-center"
        aria-label="Remove item"
      >
        <span class="material-icons">delete</span>
      </button>
    </div>
  </template>
  
  <script setup lang="ts">
  import type { CartItem } from '~/stores/cart';
  
  const props = defineProps({
    item: {
      type: Object as () => CartItem,
      required: true
    },
    isLast: {
      type: Boolean,
      default: false
    }
  });
  
  const emit = defineEmits(['update:quantity', 'remove']);
  
  // Local quantity state that syncs with parent
  const localQuantity = ref(props.item.quantity);
  
  // Watch for changes in item.quantity from parent
  watch(() => props.item.quantity, (newQuantity) => {
    localQuantity.value = newQuantity;
  });
  
  // Minimum quantity is 1 for retail or the product's minWholesaleQty for wholesale
  const minQuantity = computed(() => {
    // In a real app, you would need to access the product's minWholesaleQty
    // For now, we'll just use 1 as the minimum quantity
    return 1;
  });
  
  // Calculate item subtotal
  const itemSubtotal = computed(() => {
    const price = props.item.isWholesale ? props.item.price.wholesale : (props.item.price.retail || 0);
    return price * localQuantity.value;
  });
  
  // Format price with 2 decimal places
  function formatPrice(price: number): string {
    return price.toFixed(2);
  }
  
  // Emit event to update quantity
  function updateQuantity(value: number): void {
    emit('update:quantity', {
      id: props.item.id,
      quantity: value,
      isWholesale: props.item.isWholesale
    });
  }
  
  // Emit event to remove item
  function remove(): void {
    emit('remove', {
      id: props.item.id,
      isWholesale: props.item.isWholesale
    });
  }
  </script>