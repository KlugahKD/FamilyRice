<!-- pages/shop.vue -->
<template>
  <div class="shop-page">
    <!-- Hero Banner -->
    <section class="relative bg-gradient-to-r from-primary to-secondary py-16 mb-12">
      <div class="absolute inset-0 opacity-15">
        <img src="/images/logo.jpg" alt="" class="w-full h-full object-cover" />
      </div>
      <div class="container relative z-10">
        <div class="text-center text-white max-w-3xl mx-auto">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">Our Premium Rice Collection</h1>
          <p class="text-lg md:text-xl opacity-90 max-w-2xl mx-auto leading-relaxed">
            Discover our selection of premium quality rice in various sizes to meet your needs.
            Whether you're buying for your household or business, we've got you covered.
          </p>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <div class="container pb-20">
      <!-- Product Filters & Controls -->
      <div class="mb-10 bg-white p-6 rounded-xl shadow-md">
        <div class="flex flex-col md:flex-row gap-6 justify-between items-center">
          <div>
            <h2 class="text-xl font-bold text-primary mb-4">Filter Products</h2>
            <div class="filters flex flex-wrap gap-3">
              <button 
                @click="currentTab = 'all'"
                :class="[
                  'py-2 px-6 rounded-full transition-all duration-300 font-medium', 
                  currentTab === 'all' 
                    ? 'bg-primary text-white shadow-md' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                ]"
              >
                All Products
              </button>
              <button 
                @click="currentTab = 'retail'"
                :class="[
                  'py-2 px-6 rounded-full transition-all duration-300 font-medium', 
                  currentTab === 'retail' 
                    ? 'bg-secondary text-white shadow-md' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                ]"
              >
                <span class="flex items-center">
                  <span class="material-icons text-sm mr-1">shopping_bag</span>
                  Retail
                </span>
              </button>
              <button 
                @click="currentTab = 'wholesale'"
                :class="[
                  'py-2 px-6 rounded-full transition-all duration-300 font-medium', 
                  currentTab === 'wholesale' 
                    ? 'bg-accent text-white shadow-md' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                ]"
              >
                <span class="flex items-center">
                  <span class="material-icons text-sm mr-1">inventory_2</span>
                  Wholesale
                </span>
              </button>
            </div>
          </div>
          
          <!-- Sort Controls -->
          <div class="sort-controls">
            <h2 class="text-sm font-medium text-gray-600 mb-2">Sort By:</h2>
            <select 
              v-model="sortOption" 
              class="py-2 px-4 pr-8 rounded-md bg-gray-50 border border-gray-300 text-gray-700 focus:ring-2 focus:ring-primary/30 focus:border-primary"
            >
              <option value="default">Default Order</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name (A-Z)</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Active Filters -->
      <div class="mb-8">
        <div class="flex items-center gap-2">
          <h2 class="text-lg font-semibold text-gray-700">
            <span v-if="currentTab === 'all'">All Products</span>
            <span v-else-if="currentTab === 'retail'">Retail Products</span>
            <span v-else>Wholesale Products</span>
          </h2>
          <div v-if="currentTab !== 'all'" class="bg-gray-100 py-1 px-3 rounded-full text-sm text-gray-600">
            <button @click="currentTab = 'all'" class="flex items-center">
              Clear filter
              <span class="material-icons text-sm ml-1">close</span>
            </button>
          </div>
        </div>
        <p class="text-gray-500 text-sm">
          Showing {{ displayedProducts.length }} products
        </p>
      </div>

      <!-- Products Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <template v-if="displayedProducts.length > 0">
          <div v-for="product in displayedProducts" :key="product.id" 
              class="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
            <div class="relative">
              <div class="h-64 overflow-hidden">
                <img :src="getProductImage(product.id)" :alt="product.name" class="w-full h-full object-cover" />
              </div>
              <div v-if="product.isWholesale" class="absolute top-4 right-4 bg-accent py-1 px-3 rounded-full text-white text-xs font-bold">
                Wholesale
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-primary mb-2">{{ product.name }}</h3>
              <p class="text-gray-600 mb-4">{{ product.description.substring(0, 100) }}...</p>
              
              <div class="space-y-2 mb-4">
                <div v-if="product.price.retail" class="flex justify-between items-center">
                  <span class="font-medium text-gray-700">Retail Price:</span>
                  <span class="font-bold text-secondary text-lg">GHC {{ formatPrice(product.price.retail) }}</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="font-medium text-gray-700">Wholesale Price:</span>
                  <span class="font-bold text-accent text-lg">GHC {{ formatPrice(product.price.wholesale) }}</span>
                </div>
                <div v-if="product.minWholesaleQty > 1" class="text-xs text-gray-500">
                  Minimum wholesale quantity: {{ product.minWholesaleQty }}
                </div>
              </div>
              
              <div class="flex gap-2 mt-6">
                <NuxtLink :to="`/products/${product.id}`" class="flex-1 py-2 px-4 bg-primary text-white text-center rounded hover:bg-primary-dark transition-colors">
                  View Details
                </NuxtLink>
                <button @click="quickAddToCart(product)" class="p-2 bg-secondary text-white rounded hover:bg-secondary-dark transition-colors">
                  <span class="material-icons">add_shopping_cart</span>
                </button>
              </div>
            </div>
          </div>
        </template>
        
        <!-- Empty State -->
        <div v-if="displayedProducts.length === 0" class="col-span-3 bg-white rounded-lg shadow-md p-12 text-center">
          <div class="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
            <span class="material-icons text-3xl text-gray-400">inventory_2</span>
          </div>
          <h3 class="text-xl font-semibold text-gray-700 mb-2">No products found</h3>
          <p class="text-gray-500 mb-6">Try changing your filter options or check back later.</p>
          <button @click="currentTab = 'all'" class="py-2 px-6 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors">
            Show All Products
          </button>
        </div>
      </div>
      
      <!-- Pagination - For future use -->
      <div v-if="displayedProducts.length > 0" class="mt-12 flex justify-center">
        <button class="hidden px-4 py-2 mx-1 rounded bg-gray-100 text-gray-700">Previous</button>
        <button class="px-4 py-2 mx-1 rounded bg-primary text-white">1</button>
        <button class="hidden px-4 py-2 mx-1 rounded bg-gray-100 hover:bg-gray-200 text-gray-700">2</button>
        <button class="hidden px-4 py-2 mx-1 rounded bg-gray-100 text-gray-700">Next</button>
      </div>
    </div>
    
    <!-- Quick Add to Cart Modal -->
    <div v-if="showQuickAddModal" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div class="bg-white rounded-lg p-6 max-w-md w-full mx-4 relative animate-fadeIn">
        <button @click="showQuickAddModal = false" class="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
          <span class="material-icons">close</span>
        </button>
        <div class="text-center mb-6">
          <h3 class="text-xl font-bold text-primary mb-2">Add to Cart</h3>
          <p class="text-gray-600">{{ selectedProduct?.name }}</p>
        </div>
        
        <div v-if="selectedProduct" class="mb-6">
          <div v-if="selectedProduct.price.retail !== null" class="mb-4 p-4 border border-gray-200 rounded-lg">
            <div class="flex items-center mb-2">
              <input 
                type="radio" 
                id="retail-option" 
                v-model="quickAddMode" 
                value="retail"
                class="w-4 h-4 text-primary focus:ring-primary"
              />
              <label for="retail-option" class="ml-2 font-medium">Retail</label>
              <span class="ml-auto font-semibold">GHC {{ formatPrice(selectedProduct.price.retail) }}</span>
            </div>
            <div class="pl-6">
              <div class="flex items-center">
                <button 
                  @click="quickAddQty > 1 ? quickAddQty-- : null"
                  class="w-8 h-8 flex items-center justify-center bg-gray-100 border border-gray-300 rounded-l"
                  :disabled="quickAddQty <= 1"
                >
                  <span class="material-icons text-sm">remove</span>
                </button>
                <input 
                  v-model.number="quickAddQty" 
                  min="1" 
                  class="w-14 h-8 text-center border-t border-b border-gray-300"
                  type="number" 
                />
                <button 
                  @click="quickAddQty++"
                  class="w-8 h-8 flex items-center justify-center bg-gray-100 border border-gray-300 rounded-r"
                >
                  <span class="material-icons text-sm">add</span>
                </button>
              </div>
            </div>
          </div>
          
          <div class="p-4 border border-gray-200 rounded-lg">
            <div class="flex items-center mb-2">
              <input 
                type="radio" 
                id="wholesale-option" 
                v-model="quickAddMode" 
                value="wholesale"
                class="w-4 h-4 text-accent focus:ring-accent"
              />
              <label for="wholesale-option" class="ml-2 font-medium">Wholesale</label>
              <span class="ml-auto font-semibold">GHC {{ formatPrice(selectedProduct.price.wholesale) }}</span>
            </div>
            <div class="pl-6">
              <div class="flex items-center">
                <button 
                  @click="quickAddQtyWholesale > selectedProduct.minWholesaleQty ? quickAddQtyWholesale-- : null"
                  class="w-8 h-8 flex items-center justify-center bg-gray-100 border border-gray-300 rounded-l"
                  :disabled="quickAddQtyWholesale <= selectedProduct.minWholesaleQty"
                >
                  <span class="material-icons text-sm">remove</span>
                </button>
                <input 
                  v-model.number="quickAddQtyWholesale" 
                  :min="selectedProduct.minWholesaleQty" 
                  class="w-14 h-8 text-center border-t border-b border-gray-300"
                  type="number" 
                />
                <button 
                  @click="quickAddQtyWholesale++"
                  class="w-8 h-8 flex items-center justify-center bg-gray-100 border border-gray-300 rounded-r"
                >
                  <span class="material-icons text-sm">add</span>
                </button>
              </div>
              <p v-if="selectedProduct.minWholesaleQty > 1" class="mt-1 text-xs text-gray-500">
                Minimum quantity: {{ selectedProduct.minWholesaleQty }}
              </p>
            </div>
          </div>
        </div>
        
        <div class="flex gap-3">
          <button 
            @click="showQuickAddModal = false" 
            class="flex-1 py-2 px-4 border border-gray-300 rounded hover:bg-gray-50"
          >
            Cancel
          </button>
          <button 
            @click="confirmAddToCart" 
            class="flex-1 py-2 px-4 bg-primary text-white rounded hover:bg-primary-dark"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useProductsStore } from '~/stores/products';
import { useCartStore } from '~/stores/cart';
import type { Product } from '~/stores/products';

const productsStore = useProductsStore();
const cartStore = useCartStore();
const products = computed((): Product[] => productsStore.allProducts);

// Tabs for filtering
const currentTab = ref('all');

// Sorting options
const sortOption = ref('default');

// Quick add to cart modal
const showQuickAddModal = ref(false);
const selectedProduct = ref<Product | null>(null);
const quickAddMode = ref('retail');
const quickAddQty = ref(1);
const quickAddQtyWholesale = ref(1);

// Helper function to get product image directly
function getProductImage(productId: number): string {
  // Hardcoded image paths based on product ID
  switch (productId) {
    case 1:
      return '/images/rice-5kg.jpg';
    case 2:
      return '/images/rice-1kg.jpg';
    case 3:
      return '/images/rice_50kg.jpg';
    default:
      return '/images/rice-default.jpg';
  }
}

// Format price with 2 decimal places
function formatPrice(price: number): string {
  return price.toFixed(2);
}

// Filter products based on current tab
const filteredProducts = computed((): Product[] => {
  switch (currentTab.value) {
    case 'retail':
      return products.value.filter(product => product.price.retail !== null);
    case 'wholesale':
      return products.value.filter(product => product.price.wholesale !== null);
    default:
      return products.value;
  }
});

// Sort products based on selected option
const displayedProducts = computed((): Product[] => {
  const sorted = [...filteredProducts.value];
  
  switch (sortOption.value) {
    case 'price-low':
      return sorted.sort((a, b) => {
        const priceA = currentTab.value === 'wholesale' ? a.price.wholesale : (a.price.retail || Infinity);
        const priceB = currentTab.value === 'wholesale' ? b.price.wholesale : (b.price.retail || Infinity);
        return priceA - priceB;
      });
    case 'price-high':
      return sorted.sort((a, b) => {
        const priceA = currentTab.value === 'wholesale' ? a.price.wholesale : (a.price.retail || 0);
        const priceB = currentTab.value === 'wholesale' ? b.price.wholesale : (b.price.retail || 0);
        return priceB - priceA;
      });
    case 'name':
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
    default:
      return sorted;
  }
});

// Open quick add modal
function quickAddToCart(product: Product) {
  selectedProduct.value = product;
  
  // Set default values based on product
  if (product.price.retail === null) {
    quickAddMode.value = 'wholesale';
  }
  
  // Set minimum wholesale quantity
  quickAddQtyWholesale.value = product.minWholesaleQty;
  
  showQuickAddModal.value = true;
}

// Add product to cart from modal
function confirmAddToCart() {
  if (!selectedProduct.value) return;
  
  try {
    const isWholesale = quickAddMode.value === 'wholesale';
    const quantity = isWholesale ? quickAddQtyWholesale.value : quickAddQty.value;
    
    cartStore.addProductToCart({
      productId: selectedProduct.value.id,
      quantity,
      isWholesale
    });
    
    // Show success message
    alert('Product added to cart!');
    
    // Reset and close modal
    showQuickAddModal.value = false;
    quickAddQty.value = 1;
  } catch (error) {
    if (error instanceof Error) {
      alert(error.message);
    } else {
      alert('An error occurred while adding to cart');
    }
  }
}

// Set page meta
useHead({
  title: 'Shop - Family Rice',
  meta: [
    { 
      name: 'description', 
      content: 'Shop for premium quality rice in various sizes. We offer both retail and wholesale options with competitive pricing.' 
    }
  ]
});
</script>

<style scoped>
/* Custom animations */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fadeIn {
  animation: fadeIn 0.3s ease-out;
}
</style>