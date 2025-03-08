// stores/cart.ts
import { defineStore } from 'pinia'

// Simplified types
export interface CartItem {
  id: number;
  name: string;
  price: { retail: number | null; wholesale: number };
  image: string;
  quantity: number;
  isWholesale: boolean;
}

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as CartItem[],
    checkoutStatus: null as string | null
  }),
  
  getters: {
    cartItems: (state) => state.items,
    cartTotal: (state) => {
      return state.items.reduce((total, item) => {
        const price = item.isWholesale ? item.price.wholesale : (item.price.retail || 0);
        return total + price * item.quantity;
      }, 0);
    },
    cartItemCount: (state) => {
      return state.items.reduce((count, item) => count + item.quantity, 0);
    }
  },
  
  actions: {
    // Simplified action that doesn't rely on product store
    addToCart(item: CartItem) {
      const existingItem = this.items.find(i => 
        i.id === item.id && i.isWholesale === item.isWholesale
      );
      
      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        this.items.push(item);
      }
    },
    
    // This is just a wrapper around addToCart that gets product info first
    addProductToCart({ productId, quantity, isWholesale }: { productId: number, quantity: number, isWholesale: boolean }) {
      // Get product store inside the action
      const productsStore = useProductsStore();
      const product = productsStore.getProductById(productId);
      
      if (!product) return;
      
      if (isWholesale && quantity < product.minWholesaleQty) {
        throw new Error(`Minimum wholesale quantity for ${product.name} is ${product.minWholesaleQty}`);
      }
      
      this.addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity,
        isWholesale
      });
    },
    
    removeFromCart({ id, isWholesale }: { id: number, isWholesale: boolean }) {
      const index = this.items.findIndex(item => 
        item.id === id && item.isWholesale === isWholesale
      );
      if (index !== -1) {
        this.items.splice(index, 1);
      }
    },
    
    clearCart() {
      this.items = [];
    },
  },
  persist: true,
})