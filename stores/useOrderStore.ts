import { defineStore } from 'pinia';

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

interface Order {
    orderId: number;
    user_name: string; // Add product name
    address: string; // Add product description
    product: Product[]; // make this product array
    quantity: number;
    total_price: number,
    payment_receipt: string,
    shipment_method: string,
    track_num: string,
    user_role: string,
    // Add other properties as needed
}

export const useOrderStore = defineStore('order', {
    state: () => ({
        orders: [] as Order[],
    }),
    getters: {
        
        // Getter to retrieve all orders
        allOrders(): Order[] {
          return this.orders;
        },
        // Getter to retrieve a specific order by order ID
        getOrderById: (state) => (orderId: number) => {
          return state.orders.find((order) => order.orderId === orderId);
        },
    },
    actions: {
        async fetchOrders() {
            try {
                // Make an API request to fetch orders from your backend
                const response = await fetch('http://localhost/api/orders', {
                    method: 'GET',
                    // Add any headers or parameters needed
                });

                if (response.ok) {
                    const data = await response.json();
                    this.orders = data; // Update the orders state with the fetched data
                } else {
                    console.error('Failed to fetch orders', response.statusText);
                }
            } catch (error) {
                console.error('Error while fetching orders', error);
            }
        },
    },
});