<!-- pages/cart.vue -->
<template>
  <div class="py-12">
    <div class="container">
      <h1 class="text-3xl font-bold text-primary mb-6">Shopping Cart</h1>
      
      <div v-if="cartItems.length > 0" class="cart-content grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Cart Items -->
        <div class="lg:col-span-2">
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="p-6">
              <div class="cart-items space-y-6">
                <div 
                  v-for="(item, index) in cartItems" 
                  :key="`${item.id}-${item.isWholesale ? 'w' : 'r'}`"
                  class="cart-item flex flex-col sm:flex-row gap-4 sm:items-center pb-6"
                  :class="{ 'border-b border-gray-200': index < cartItems.length - 1 }"
                >
                  <!-- Product Image -->
                  <div class="flex-shrink-0">
                    <img 
                      :src="item.image" 
                      :alt="item.name"
                      class="w-24 h-24 object-cover rounded"
                      onerror="this.src='/images/product-placeholder.jpg'"
                    />
                  </div>
                  
                  <!-- Product Info -->
                  <div class="flex-grow">
                    <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-2">
                      <h3 class="text-lg font-semibold">{{ item.name }}</h3>
                      <div class="flex items-center">
                        <span v-if="item.isWholesale" class="bg-accent/20 text-accent text-xs px-2 py-1 rounded-full mr-2">
                          Wholesale
                        </span>
                        <span v-else class="bg-secondary/20 text-secondary text-xs px-2 py-1 rounded-full mr-2">
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
                        <div class="quantity-selector flex items-center">
                          <button 
                            @click="decrementQuantity(item)"
                            :disabled="item.quantity <= 1"
                            class="w-8 h-8 flex items-center justify-center rounded bg-gray-100 border border-gray-300 hover:bg-gray-200 disabled:opacity-50"
                          >
                            <span class="material-icons text-sm">remove</span>
                          </button>
                          <input 
                            type="number" 
                            :value="item.quantity"
                            @input="updateQuantity(item, parseInt(($event.target as HTMLInputElement).value))"
                            class="w-14 h-8 mx-1 text-center border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-primary"
                            min="1"
                          />
                          <button 
                            @click="incrementQuantity(item)"
                            class="w-8 h-8 flex items-center justify-center rounded bg-gray-100 border border-gray-300 hover:bg-gray-200"
                          >
                            <span class="material-icons text-sm">add</span>
                          </button>
                        </div>
                        
                        <!-- Subtotal -->
                        <div class="min-w-[90px] text-right">
                          <p class="font-semibold">
                            GHC {{ formatPrice(itemSubtotal(item)) }}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Remove Button -->
                  <button 
                    @click="removeItem(item)"
                    class="text-red-500 hover:text-red-700 transition-colors self-start sm:self-center"
                    aria-label="Remove item"
                  >
                    <span class="material-icons">delete</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Order Summary -->
        <div class="lg:col-span-1">
          <div class="bg-white rounded-lg shadow-md overflow-hidden sticky top-20">
            <div class="p-6">
              <h2 class="text-xl font-bold mb-4">Order Summary</h2>
              
              <div class="space-y-2 mb-4">
                <div class="flex justify-between">
                  <span class="text-gray-600">Subtotal</span>
                  <span class="font-semibold">GHC {{ formatPrice(cartTotal) }}</span>
                </div>
                <div class="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span>Calculated at checkout</span>
                </div>
              </div>
              
              <div class="border-t border-gray-200 pt-4 mb-6">
                <div class="flex justify-between items-center">
                  <span class="text-lg font-bold">Total</span>
                  <span class="text-xl font-bold text-primary">GHC {{ formatPrice(cartTotal) }}</span>
                </div>
              </div>
              
              <button 
                @click="goToCheckout"
                class="w-full py-3 bg-primary text-white rounded hover:bg-primary-dark transition-colors"
              >
                Proceed to Checkout
              </button>
              
              <div class="mt-4">
                <NuxtLink 
                  to="/shop" 
                  class="text-primary font-medium hover:underline inline-flex items-center"
                >
                  <span class="material-icons mr-1 text-sm">arrow_back</span>
                  Continue Shopping
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Empty Cart State -->
      <div v-else class="empty-cart bg-white rounded-lg shadow-md p-12 text-center">
        <div class="flex flex-col items-center">
          <span class="material-icons text-5xl text-gray-400 mb-4">shopping_cart</span>
          <h2 class="text-2xl font-semibold text-gray-700 mb-2">Your cart is empty</h2>
          <p class="text-gray-500 mb-6">Looks like you haven't added any items to your cart yet.</p>
          <NuxtLink to="/shop" class="btn btn-primary py-2 px-6">
            Start Shopping
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '~/stores/cart';
import type { CartItem } from '~/stores/cart';

const router = useRouter();
const cartStore = useCartStore();

const cartItems = computed(() => cartStore.cartItems);
const cartTotal = computed(() => cartStore.cartTotal);

function formatPrice(price: number): string {
  return price.toFixed(2);
}

function itemSubtotal(item: CartItem): number {
  const price = item.isWholesale ? item.price.wholesale : (item.price.retail || 0);
  return price * item.quantity;
}

function incrementQuantity(item: CartItem): void {
  cartStore.updateCartItemQuantity({
    id: item.id,
    quantity: item.quantity + 1,
    isWholesale: item.isWholesale
  });
}

function decrementQuantity(item: CartItem): void {
  if (item.quantity > 1) {
    cartStore.updateCartItemQuantity({
      id: item.id,
      quantity: item.quantity - 1,
      isWholesale: item.isWholesale
    });
  }
}

function updateQuantity(item: CartItem, quantity: number): void {
  if (isNaN(quantity) || quantity < 1) {
    quantity = 1;
  }
  
  cartStore.updateCartItemQuantity({
    id: item.id,
    quantity,
    isWholesale: item.isWholesale
  });
}

function removeItem(item: CartItem): void {
  cartStore.removeFromCart({
    id: item.id,
    isWholesale: item.isWholesale
  });
}

function goToCheckout(): void {
  if (cartItems.value.length === 0) {
    alert('Your cart is empty');
    return;
  }
  
  router.push('/checkout');
}

// Set page meta
useHead({
  title: 'Shopping Cart - Family Rice',
  meta: [
    { 
      name: 'description', 
      content: 'Review your shopping cart and proceed to checkout. Family Rice offers premium quality rice at competitive prices.' 
    }
  ]
});
</script>