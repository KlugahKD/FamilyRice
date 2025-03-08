// stores/products.ts
import { defineStore } from 'pinia';

export interface ProductPrice {
  retail: number | null;
  wholesale: number;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: ProductPrice;
  image: string;
  stockQuantity: number;
  category: string;
  options: string[];
  isWholesale: boolean;
  minWholesaleQty: number;
}

interface ProductsState {
  products: Product[];
}

export const useProductsStore = defineStore('products', {
  state: (): ProductsState => ({
    products: [
      {
        id: 1,
        name: "Family Rice 5kg",
        description: "Premium quality rice in a convenient 5kg package. Perfect for households and small businesses.",
        price: {
          retail: 200.00,
          wholesale: 720.00 // for 5x5 pack
        },
        image: "/images/rice-5kg.jpg",
        stockQuantity: 100,
        category: "retail",
        options: ["Wholesale (5x5 pack)", "Retail (single pack)"],
        isWholesale: false,
        minWholesaleQty: 5
      },
      {
        id: 2,
        name: "Family Rice 1kg",
        description: "Premium quality rice in a convenient 1kg package. Ideal for small households.",
        price: {
          retail: 40.00,
          wholesale: 620.00 // for 20x1 pack
        },
        image: "/images/rice-1kg.jpg",
        stockQuantity: 200,
        category: "retail",
        options: ["Wholesale (20x1 pack)", "Retail (single pack)"],
        isWholesale: false,
        minWholesaleQty: 20
      },
      {
        id: 3,
        name: "Family Rice 50kg",
        description: "Premium quality rice in a large 50kg package. Perfect for businesses and bulk buyers.",
        price: {
          retail: null, // Not sold individually at retail
          wholesale: 850.00
        },
        image: "/images/rice_50kg.jpg",
        stockQuantity: 50,
        category: "wholesale",
        options: ["Wholesale only"],
        isWholesale: true,
        minWholesaleQty: 1
      }
    ]
  }),
  
  getters: {
    allProducts: (state): Product[] => state.products,
    retailProducts: (state): Product[] => state.products.filter(product => product.price.retail !== null),
    wholesaleProducts: (state): Product[] => state.products.filter(product => product.price.wholesale !== null),
    getProductById: (state) => (id: number): Product | undefined => {
      return state.products.find(product => product.id === id);
    }
  },
  
  actions: {
    updateProductStock(productId: number, quantity: number): void {
      const product = this.products.find(p => p.id === productId);
      if (product) {
        product.stockQuantity -= quantity;
      }
    },
    
    // Since we're using fixed data, this is just a placeholder for compatibility
    fetchProducts(): Product[] {
      return this.products;
    }
  }
});