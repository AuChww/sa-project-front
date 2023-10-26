import { defineStore } from 'pinia';
import { useProductStore } from '@/stores/useProductStore'; 

// Define the CartItem interface with the necessary properties
interface CartItem {
  productId: number;
  name: string; // Add product name
  description: string; // Add product description
  price: number; // Add product price
  quantity: number;
  // Add other properties as needed
}

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: [] as CartItem[],
  }),

  getters: {
    // Calculate the total number of items in the cart
    totalItems: (state) => {
      return state.cart.reduce((total, item) => total + item.quantity, 0);
    },
    // Add other getters as needed
  },

  actions: {
    addToCart(product: Product) {
        const productStore = useProductStore();
        const productDetails = productStore.getProductById(product.id);
  
        if (productDetails) {
          // Check if the product is already in the cart by checking its id
          const existingProduct = this.cart.find((item) => item.productId === product.id);
  
          if (existingProduct) {
            // If the product is already in the cart, you can update the quantity
            existingProduct.quantity++;
          } else {
            // If it's not in the cart, add it as a new cart item
            this.cart.push({
              productId: product.id,
              name: productDetails.name,
              description: productDetails.description,
              price: productDetails.price,
              quantity: 1,
            });
          }
        }
    },
    
    // Remove a product from the cart
    removeFromCart(productId: number) {
      // Find the index of the item to remove
      const itemIndex = this.cart.findIndex((item) => item.productId === productId);

      if (itemIndex !== -1) {
        // Remove the item from the cart
        this.cart.splice(itemIndex, 1);
      }
    },
    // Update the quantity of a product in the cart
    updateCartItemQuantity(productId: number, quantity: number) {
      const existingItem = this.cart.find((item) => item.productId === productId);

      if (existingItem) {
        existingItem.quantity = quantity;
      }
    },
    // Clear the entire cart
    clearCart() {
      this.cart = [];
    },
    // Add other actions as needed
  },
});
