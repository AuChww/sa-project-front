import { defineStore } from 'pinia';

// Define the Product interface with the additional properties
interface Product {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
  brand: string;
  category: string;
  quantity: number;
  // Add other properties as needed
}

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [] as Product[],
  }),
  getters: {
    getProductById: (state) => (product_id: number) => {
      return state.products.find((product) => product.id === product_id);
    },
    checkCategory: (state) => (categoryToCheck) => {
      return state.products.category === categoryToCheck;
    },
    // Add other getters as needed
  },
  actions: {
    async fetchProducts() {
      try {
        const response = await fetch('http://localhost/api/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }

        const data = await response.json();

        // Convert the data to the defined Product type
        this.products = data.map((item: any) => ({
          id: item.id,
          name: item.name,
          image: item.image,
          description: item.description, // Map new properties
          price: item.price, // Map new properties
          brand: item.brand, // Map new properties
          category: item.category, // Map new properties
          quantity: item.quantity, // Map new properties
          // Map other properties as needed
        })) as Product[];
      } catch (error) {
        console.error('Error fetching products:', error);
        // Handle errors
      }
    },
  },
});
