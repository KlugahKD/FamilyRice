<!-- pages/checkout.vue -->
<template>
  <div class="py-12">
    <div class="container">
      <h1 class="text-3xl font-bold text-primary mb-8">Checkout</h1>
      
      <div v-if="cartItems.length > 0" class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Checkout Form -->
        <div class="lg:col-span-2">
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="p-6">
              <h2 class="text-xl font-bold mb-6">Shipping Information</h2>
              
              <form @submit.prevent="placeOrder">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label for="firstName" class="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <input
                      id="firstName"
                      v-model="form.firstName"
                      type="text"
                      class="w-full p-2 border border-gray-300 rounded-md"
                      required
                    />
                  </div>
                  
                  <div>
                    <label for="lastName" class="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <input
                      id="lastName"
                      v-model="form.lastName"
                      type="text"
                      class="w-full p-2 border border-gray-300 rounded-md"
                      required
                    />
                  </div>
                  
                  <div>
                    <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input
                      id="email"
                      v-model="form.email"
                      type="email"
                      class="w-full p-2 border border-gray-300 rounded-md"
                      required
                    />
                  </div>
                  
                  <div>
                    <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input
                      id="phone"
                      v-model="form.phone"
                      type="tel"
                      class="w-full p-2 border border-gray-300 rounded-md"
                      required
                    />
                  </div>
                </div>
                
                <div class="mb-6">
                  <label for="address" class="block text-sm font-medium text-gray-700 mb-1">Address</label>
                  <input
                    id="address"
                    v-model="form.address"
                    type="text"
                    class="w-full p-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <label for="city" class="block text-sm font-medium text-gray-700 mb-1">City</label>
                    <input
                      id="city"
                      v-model="form.city"
                      type="text"
                      class="w-full p-2 border border-gray-300 rounded-md"
                      required
                    />
                  </div>
                  
                  <div>
                    <label for="region" class="block text-sm font-medium text-gray-700 mb-1">Region</label>
                    <select
                      id="region"
                      v-model="form.region"
                      class="w-full p-2 border border-gray-300 rounded-md"
                      required
                    >
                      <option value="" disabled selected>Select a region</option>
                      <option v-for="region in regions" :key="region" :value="region">
                        {{ region }}
                      </option>
                    </select>
                  </div>
                  
                  <div>
                    <label for="postalCode" class="block text-sm font-medium text-gray-700 mb-1">Postal Code</label>
                    <input
                      id="postalCode"
                      v-model="form.postalCode"
                      type="text"
                      class="w-full p-2 border border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                
                <div class="mb-6">
                  <label for="notes" class="block text-sm font-medium text-gray-700 mb-1">Order Notes (Optional)</label>
                  <textarea
                    id="notes"
                    v-model="form.notes"
                    rows="3"
                    class="w-full p-2 border border-gray-300 rounded-md"
                    placeholder="Special instructions for delivery or additional information"
                  ></textarea>
                </div>
                
                <h2 class="text-xl font-bold mb-6 pt-4 border-t border-gray-200">Payment Method</h2>
                
                <div class="space-y-4 mb-6">
                  <div class="flex items-center p-4 border border-gray-200 rounded-lg">
                    <input
                      id="payment-mobile-money"
                      v-model="form.paymentMethod"
                      type="radio"
                      value="mobile-money"
                      class="h-4 w-4 text-primary border-gray-300"
                      required
                    />
                    <label for="payment-mobile-money" class="ml-3 flex items-center cursor-pointer">
                      <span class="material-icons text-orange-500 mr-2">smartphone</span>
                      <span>Mobile Money</span>
                    </label>
                  </div>
                  
                  <div class="flex items-center p-4 border border-gray-200 rounded-lg">
                    <input
                      id="payment-cash"
                      v-model="form.paymentMethod"
                      type="radio"
                      value="cash"
                      class="h-4 w-4 text-primary border-gray-300"
                    />
                    <label for="payment-cash" class="ml-3 flex items-center cursor-pointer">
                      <span class="material-icons text-green-500 mr-2">payments</span>
                      <span>Cash on Delivery</span>
                    </label>
                  </div>
                  
                  <div class="flex items-center p-4 border border-gray-200 rounded-lg">
                    <input
                      id="payment-bank"
                      v-model="form.paymentMethod"
                      type="radio"
                      value="bank"
                      class="h-4 w-4 text-primary border-gray-300"
                    />
                    <label for="payment-bank" class="ml-3 flex items-center cursor-pointer">
                      <span class="material-icons text-blue-500 mr-2">account_balance</span>
                      <span>Bank Transfer</span>
                    </label>
                  </div>
                </div>
                
                <div class="mb-6">
                  <div class="flex items-center">
                    <input
                      id="terms"
                      v-model="form.termsAccepted"
                      type="checkbox"
                      class="h-4 w-4 text-primary border-gray-300 rounded"
                      required
                    />
                    <label for="terms" class="ml-2 text-sm text-gray-700">
                      I agree to the 
                      <a href="#" class="text-primary hover:underline">terms and conditions</a>
                    </label>
                  </div>
                </div>
                
                <div class="flex justify-between items-center pt-4 border-t border-gray-200">
                  <NuxtLink 
                    to="/cart" 
                    class="text-primary font-medium hover:underline inline-flex items-center"
                  >
                    <span class="material-icons mr-1 text-sm">arrow_back</span>
                    Back to Cart
                  </NuxtLink>
                  
                  <button 
                    type="submit"
                    class="py-3 px-8 bg-primary text-white rounded hover:bg-primary-dark transition-colors"
                    :disabled="isSubmitting"
                  >
                    <span v-if="isSubmitting" class="flex items-center">
                      <span class="animate-spin mr-2">
                        <span class="material-icons">sync</span>
                      </span>
                      Processing...
                    </span>
                    <span v-else>
                      Place Order
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        
        <!-- Order Summary -->
        <div class="lg:col-span-1">
          <div class="bg-white rounded-lg shadow-md overflow-hidden sticky top-20">
            <div class="p-6">
              <h2 class="text-xl font-bold mb-4">Order Summary</h2>
              
              <div class="mb-4">
                <div v-for="(item, index) in cartItems" 
                  :key="`${item.id}-${item.isWholesale ? 'w' : 'r'}`"
                  class="flex justify-between py-2"
                  :class="{ 'border-b border-gray-200': index < cartItems.length - 1 }"
                >
                  <div>
                    <span class="font-medium">{{ item.name }}</span>
                    <span class="text-xs text-gray-500 ml-1">
                      ({{ item.quantity }}x {{ item.isWholesale ? 'Wholesale' : 'Retail' }})
                    </span>
                  </div>
                  <span class="font-semibold">
                    GHC {{ formatPrice(itemSubtotal(item)) }}
                  </span>
                </div>
              </div>
              
              <div class="space-y-2 mb-4">
                <div class="flex justify-between pt-2 border-t border-gray-200">
                  <span class="text-gray-600">Subtotal</span>
                  <span class="font-semibold">GHC {{ formatPrice(cartTotal) }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Shipping</span>
                  <span class="font-semibold">
                    {{ shipping > 0 ? `GHC ${formatPrice(shipping)}` : 'Free' }}
                  </span>
                </div>
              </div>
              
              <div class="border-t border-gray-200 pt-4 mb-6">
                <div class="flex justify-between items-center">
                  <span class="text-lg font-bold">Total</span>
                  <span class="text-xl font-bold text-primary">GHC {{ formatPrice(orderTotal) }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Order Confirmation -->
      <div v-else-if="orderCompleted" class="bg-white rounded-lg shadow-md p-8 text-center">
        <div class="flex flex-col items-center">
          <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <span class="material-icons text-3xl text-green-500">check_circle</span>
          </div>
          <h2 class="text-2xl font-bold text-gray-800 mb-2">Order Placed Successfully!</h2>
          <p class="text-gray-600 mb-6">
            Thank you for your order. We've received your order and will process it shortly.
          </p>
          <div class="bg-gray-50 p-6 rounded-lg w-full max-w-md mb-6">
            <p class="font-medium text-gray-800 mb-2">Order Reference: <span class="text-primary">#{{ orderReference }}</span></p>
            <p class="text-gray-600">A confirmation email has been sent to {{ form.email }}</p>
          </div>
          <div class="flex flex-col sm:flex-row gap-4">
            <NuxtLink to="/" class="py-2 px-6 border border-gray-300 rounded hover:bg-gray-50 transition-colors">
              Return to Home
            </NuxtLink>
            <NuxtLink to="/shop" class="py-2 px-6 bg-primary text-white rounded hover:bg-primary-dark transition-colors">
              Continue Shopping
            </NuxtLink>
          </div>
        </div>
      </div>
      
      <!-- Empty Cart -->
      <div v-else class="empty-cart bg-white rounded-lg shadow-md p-12 text-center">
        <div class="flex flex-col items-center">
          <span class="material-icons text-5xl text-gray-400 mb-4">shopping_cart</span>
          <h2 class="text-2xl font-semibold text-gray-700 mb-2">Your cart is empty</h2>
          <p class="text-gray-500 mb-6">You need to add items to your cart before proceeding to checkout.</p>
          <NuxtLink to="/shop" class="py-2 px-6 bg-primary text-white rounded hover:bg-primary-dark transition-colors">
            Start Shopping
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useCartStore } from '~/stores/cart';
import type { CartItem } from '~/stores/cart';

const router = useRouter();
const cartStore = useCartStore();
const cartItems = computed(() => cartStore.cartItems);
const cartTotal = computed(() => cartStore.cartTotal);

// Form state
const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  address: '',
  city: '',
  region: '',
  postalCode: '',
  notes: '',
  paymentMethod: '',
  termsAccepted: false
});

// Ghana regions
const regions = [
  'Greater Accra',
  'Ashanti',
  'Western',
  'Eastern',
  'Central',
  'Volta',
  'Northern',
  'Upper East',
  'Upper West',
  'Bono East',
  'Bono',
  'Ahafo',
  'Western North',
  'Oti',
  'Savannah',
  'North East'
];

// Checkout process state
const isSubmitting = ref(false);
const orderCompleted = ref(false);
const orderReference = ref('');

// Calculate shipping cost (free above 500 GHC)
const shipping = computed(() => {
  return cartTotal.value >= 500 ? 0 : 20;
});

const orderTotal = computed(() => {
  return cartTotal.value + shipping.value;
});

function formatPrice(price: number): string {
  return price.toFixed(2);
}

function itemSubtotal(item: CartItem): number {
  const price = item.isWholesale ? item.price.wholesale : (item.price.retail || 0);
  return price * item.quantity;
}

function generateOrderReference(): string {
  const timestamp = Date.now().toString().slice(-6);
  const random = Math.floor(Math.random() * 9000) + 1000;
  return `FR${timestamp}${random}`;
}

async function placeOrder(): Promise<void> {
  if (cartItems.value.length === 0) {
    alert('Your cart is empty');
    return;
  }
  
  isSubmitting.value = true;
  
  try {
    // In a real app, you would send the order to your backend here
    await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API call
    
    // Generate order reference
    orderReference.value = generateOrderReference();
    
    // Process checkout in store
    cartStore.checkout();
    
    // Show success page
    orderCompleted.value = true;
    window.scrollTo(0, 0);
  } catch (error) {
    alert('There was an error processing your order. Please try again.');
  } finally {
    isSubmitting.value = false;
  }
}

// Set page meta
useHead({
  title: 'Checkout - Family Rice',
  meta: [
    { 
      name: 'description', 
      content: 'Complete your purchase of premium quality rice products from Family Rice Wholesale & Retail.' 
    }
  ]
});
</script>