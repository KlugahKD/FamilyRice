<!-- pages/products/[id].vue -->
<template>
    <div class="py-12">
      <div class="container">
        <div v-if="product" class="bg-white rounded-lg shadow-md overflow-hidden">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
            <!-- Product Image -->
            <div class="product-image">
              <img
                :src="product.image" 
                :alt="product.name"
                width="600"
                height="600"
                format="webp"
                quality="90"
                placeholder
                class="w-full h-auto rounded-lg shadow"
              />
            </div>
            
            <!-- Product Details -->
            <div class="product-details flex flex-col">
              <h1 class="text-3xl font-bold text-primary mb-4">{{ product.name }}</h1>
              <p class="text-gray-700 mb-6">{{ product.description }}</p>
              
              <!-- Price Options -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div v-if="product.price.retail !== null" 
                  class="bg-gray-50 p-4 rounded-lg">
                  <h3 class="font-semibold text-lg mb-2">Retail Price</h3>
                  <p class="text-2xl font-bold text-primary mb-1">GHC {{ formatPrice(product.price.retail) }}</p>
                  <p class="text-sm text-gray-500">Per package</p>
                </div>
                
                <div v-if="product.price.wholesale !== null" 
                  class="bg-gray-50 p-4 rounded-lg">
                  <h3 class="font-semibold text-lg mb-2">Wholesale Price</h3>
                  <p class="text-2xl font-bold text-primary mb-1">GHC {{ formatPrice(product.price.wholesale) }}</p>
                  <p class="text-sm text-gray-500">
                    <span v-if="product.id === 1">For 5x5 (5kg) bundle</span>
                    <span v-else-if="product.id === 2">For 20x1 (1kg) bundle</span>
                    <span v-else>Per 50kg bag</span>
                  </p>
                </div>
              </div>
              
              <!-- Purchase Options -->
              <div class="space-y-6 mb-8">
                <!-- Retail Option -->
                <div v-if="product.price.retail !== null" 
                  class="purchase-option p-4 border border-gray-200 rounded-lg">
                  <h3 class="font-semibold mb-3 flex items-center">
                    <span class="material-icons text-secondary mr-2">shopping_bag</span>
                    Retail Purchase
                  </h3>
                  
                  <div class="flex flex-wrap items-end gap-4">
                    <div class="quantity-selector">
                      <label for="retail-qty" class="block text-sm font-medium text-gray-700 mb-1">Quantity:</label>
                      <div class="flex items-center">
                        <button 
                          @click="decrementRetailQty" 
                          :disabled="retailQty <= 1"
                          class="w-10 h-10 flex items-center justify-center bg-gray-100 border border-gray-300 rounded-l-md hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          <span class="material-icons text-xl">remove</span>
                        </button>
                        <input 
                          id="retail-qty" 
                          type="number" 
                          v-model.number="retailQty" 
                          min="1"
                          @input="validateRetailQty"
                          class="w-16 h-10 text-center border-t border-b border-gray-300 focus:ring-0 focus:border-gray-300"
                        >
                        <button 
                          @click="incrementRetailQty"
                          class="w-10 h-10 flex items-center justify-center bg-gray-100 border border-gray-300 rounded-r-md hover:bg-gray-200"
                        >
                          <span class="material-icons text-xl">add</span>
                        </button>
                      </div>
                    </div>
                    
                    <button 
                      class="btn btn-secondary py-2.5 px-6"
                      @click="addToCart(false, retailQty)"
                      :disabled="isAddingToCart"
                    >
                      <span class="flex items-center">
                        <span class="material-icons mr-2">add_shopping_cart</span>
                        Add to Cart
                      </span>
                    </button>
                  </div>
                </div>
                
                <!-- Wholesale Option -->
                <div v-if="product.price.wholesale !== null" 
                  class="purchase-option p-4 border border-gray-200 rounded-lg">
                  <h3 class="font-semibold mb-3 flex items-center">
                    <span class="material-icons text-accent mr-2">inventory_2</span>
                    Wholesale Purchase
                  </h3>
                  
                  <div class="flex flex-wrap items-end gap-4">
                    <div class="quantity-selector">
                      <label for="wholesale-qty" class="block text-sm font-medium text-gray-700 mb-1">Quantity:</label>
                      <div class="flex items-center">
                        <button 
                          @click="decrementWholesaleQty" 
                          :disabled="wholesaleQty <= product.minWholesaleQty"
                          class="w-10 h-10 flex items-center justify-center bg-gray-100 border border-gray-300 rounded-l-md hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          <span class="material-icons text-xl">remove</span>
                        </button>
                        <input 
                          id="wholesale-qty" 
                          type="number" 
                          v-model.number="wholesaleQty" 
                          :min="product.minWholesaleQty"
                          @input="validateWholesaleQty"
                          class="w-16 h-10 text-center border-t border-b border-gray-300 focus:ring-0 focus:border-gray-300"
                        >
                        <button 
                          @click="incrementWholesaleQty"
                          class="w-10 h-10 flex items-center justify-center bg-gray-100 border border-gray-300 rounded-r-md hover:bg-gray-200"
                        >
                          <span class="material-icons text-xl">add</span>
                        </button>
                      </div>
                      <p v-if="product.minWholesaleQty > 1" class="text-xs text-gray-500 mt-1">
                        Minimum quantity: {{ product.minWholesaleQty }}
                      </p>
                    </div>
                    
                    <button 
                      class="btn px-6 py-2.5"
                      :class="[wholesaleQty >= product.minWholesaleQty ? 'bg-accent text-white hover:bg-accent-dark' : 'bg-gray-300 text-gray-500 cursor-not-allowed']"
                      @click="addToCart(true, wholesaleQty)"
                      :disabled="isAddingToCart || wholesaleQty < product.minWholesaleQty"
                    >
                      <span class="flex items-center">
                        <span class="material-icons mr-2">add_shopping_cart</span>
                        Add to Cart
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              
              <!-- Stock Info -->
              <div class="mt-auto pt-4 border-t border-gray-200">
                <div class="flex items-center">
                  <span
                    :class="[
                      'flex h-3 w-3 rounded-full mr-2',
                      product.stockQuantity > 0 ? 'bg-green-500' : 'bg-red-500'
                    ]"
                  ></span>
                  <span :class="product.stockQuantity > 0 ? 'text-green-700' : 'text-red-700'">
                    {{ product.stockQuantity > 0 ? 'In Stock' : 'Out of Stock' }}
                  </span>
                </div>
              </div>
              
              <!-- Back to Shop -->
              <div class="mt-6">
                <NuxtLink 
                  to="/shop" 
                  class="text-primary font-medium hover:underline inline-flex items-center"
                >
                  <span class="material-icons mr-1 text-sm">arrow_back</span>
                  Back to Shop
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
        
        <div v-else class="bg-white p-16 rounded-lg shadow-md text-center">
          <div class="animate-pulse flex flex-col items-center">
            <div class="rounded-full bg-gray-200 h-16 w-16 mb-4"></div>
            <div class="h-6 bg-gray-200 rounded w-1/2 mb-2"></div>
            <div class="h-4 bg-gray-200 rounded w-1/3"></div>
          </div>
          <p class="mt-6 text-gray-500">Loading product information...</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useProductsStore } from '~/stores/products';
  import { useCartStore } from '~/stores/cart';
  import { useToast } from 'vue-toastification';
  import type { Product } from '~/stores/products';
  
  const route = useRoute();
  const productsStore = useProductsStore();
  const cartStore = useCartStore();
  const toast = useToast();
  
  const retailQty = ref(1);
  const wholesaleQty = ref(0);
  const isAddingToCart = ref(false);
  
  const productId = computed(() => parseInt(route.params.id as string));
  
  const product = computed((): Product | undefined => {
    return productsStore.getProductById(productId.value);
  });
  
  onMounted(() => {
    // Fetch products if not already loaded
    productsStore.fetchProducts();
    
    // Set initial wholesale quantity to minimum
    if (product.value && product.value.minWholesaleQty) {
      wholesaleQty.value = product.value.minWholesaleQty;
    }
  });
  
  function formatPrice(price: number): string {
    return price.toFixed(2);
  }
  
  function incrementRetailQty(): void {
    retailQty.value++;
  }
  
  function decrementRetailQty(): void {
    if (retailQty.value > 1) {
      retailQty.value--;
    }
  }
  
  function validateRetailQty(): void {
    if (retailQty.value < 1) {
      retailQty.value = 1;
    } else {
      retailQty.value = parseInt(retailQty.value.toString());
    }
  }
  
  function incrementWholesaleQty(): void {
    wholesaleQty.value++;
  }
  
  function decrementWholesaleQty(): void {
    if (product.value && wholesaleQty.value > product.value.minWholesaleQty) {
      wholesaleQty.value--;
    }
  }
  
  function validateWholesaleQty(): void {
    if (product.value && wholesaleQty.value < product.value.minWholesaleQty) {
      wholesaleQty.value = product.value.minWholesaleQty;
    } else {
      wholesaleQty.value = parseInt(wholesaleQty.value.toString());
    }
  }
  
  async function addToCart(isWholesale: boolean, quantity: number): Promise<void> {
    if (!product.value) return;
    
    isAddingToCart.value = true;
    
    try {
      cartStore.addProductToCart({ 
        productId: product.value.id, 
        quantity, 
        isWholesale 
      });
      
      toast.success('Added to cart!');
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error('An error occurred while adding to cart');
      }
    } finally {
      isAddingToCart.value = false;
    }
  }
  
  // Set page meta
  useHead({
    title: computed(() => product.value ? `${product.value.name} - Family Rice` : 'Product - Family Rice'),
    meta: [
      { 
        name: 'description',
        content: computed(() => product.value 
          ? product.value.description 
          : 'Premium quality rice product from Family Rice')
      }
    ]
  });
  </script>