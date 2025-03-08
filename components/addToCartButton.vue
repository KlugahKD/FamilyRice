<!-- components/AddToCartButton.vue -->
<template>
  <div class="relative">
    <!-- Button content remains the same -->
    <button 
      class="btn btn-secondary text-sm py-2 w-full"
      @click="handleAddToCart"
      :disabled="isAddingToCart"
    >
      <span class="material-icons text-base mr-1">add_shopping_cart</span>
      <span>Add to Cart</span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '~/stores/cart';
import { useProductsStore } from '~/stores/products';
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

const emit = defineEmits(['added-to-cart']);

const isAddingToCart = ref(false);

// Simplified add to cart handling
function handleAddToCart() {
  isAddingToCart.value = true;
  
  try {
    const cartStore = useCartStore();
    const isWholesale = props.product.isWholesale;
    const quantity = isWholesale ? props.product.minWholesaleQty : 1;
    
    cartStore.addProductToCart({
      productId: props.product.id,
      quantity,
      isWholesale
    });
    
    emit('added-to-cart');
    alert('Added to cart!'); // Simple notification
  } catch (error) {
    alert(error instanceof Error ? error.message : 'Error adding to cart');
  } finally {
    isAddingToCart.value = false;
  }
}
</script>