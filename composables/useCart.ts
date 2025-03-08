// composables/useCart.ts
import { useCartStore } from '~/stores/cart';
import { useProductsStore } from '~/stores/products';
import { computed } from 'vue';
import type { CartItem } from '~/stores/cart';

export const useCart = () => {
  const cartStore = useCartStore();
  const productsStore = useProductsStore();
  
  // Total number of items in cart
  const cartItemCount = computed(() => cartStore.cartItemCount);
  
  // Total price of all items in cart
  const cartTotal = computed(() => cartStore.cartTotal);
  
  // All items in cart
  const cartItems = computed(() => cartStore.cartItems);
  
  // Check if cart is empty
  const isCartEmpty = computed(() => cartItems.value.length === 0);
  
  /**
   * Add a product to cart
   */
  const addToCart = (productId: number, quantity: number, isWholesale: boolean) => {
    try {
      cartStore.addProductToCart({
        productId,
        quantity,
        isWholesale
      });
      return { success: true };
    } catch (error) {
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  };
  
  /**
   * Remove an item from cart
   */
  const removeFromCart = (id: number, isWholesale: boolean) => {
    cartStore.removeFromCart({
      id,
      isWholesale
    });
  };
  
  /**
   * Update quantity of an item in cart
   */
  const updateQuantity = (id: number, quantity: number, isWholesale: boolean) => {
    cartStore.updateCartItemQuantity({
      id,
      quantity,
      isWholesale
    });
  };
  
  /**
   * Clear all items from cart
   */
  const clearCart = () => {
    cartStore.clearCart();
  };
  
  /**
   * Process checkout
   */
  const checkout = () => {
    return cartStore.checkout();
  };
  
  /**
   * Calculate subtotal for a cart item
   */
  const calculateItemSubtotal = (item: CartItem): number => {
    const price = item.isWholesale ? item.price.wholesale : (item.price.retail || 0);
    return price * item.quantity;
  };
  
  /**
   * Format price to display
   */
  const formatPrice = (price: number): string => {
    return price.toFixed(2);
  };
  
  /**
   * Get minimum quantity for a product
   */
  const getMinQuantity = (productId: number, isWholesale: boolean): number => {
    const product = productsStore.getProductById(productId);
    
    if (!product) return 1;
    
    return isWholesale ? product.minWholesaleQty : 1;
  };
  
  return {
    cartItemCount,
    cartTotal,
    cartItems,
    isCartEmpty,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    checkout,
    calculateItemSubtotal,
    formatPrice,
    getMinQuantity
  };
};