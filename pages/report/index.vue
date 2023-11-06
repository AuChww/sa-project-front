<template>
  <Navbar />

  <ul class="circles">
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
  <div class="flex w-full h-full flex-col justify-center px-6 py-12 lg:px-8 z-10 bg-gradient-to-r
        from-green-500
        via-blue-500
        to-purple-500
        background-animate">
    <div class="mx-4 mb-28  sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-4 bg-white shadow-xl rounded-lg text-gray-900"
      style="width: 800px; border">
      <div
        :style="{ 'background-image': 'url(https://t3.ftcdn.net/jpg/05/11/25/36/360_F_511253627_zuzpapnIVQueMx4eSL1ilAoH61OBgj0C.jpg)' }"
        class="bg-blue-900 text-white py-4">
        <div class="mx-auto text-center">
          <h1 class="text-xl md:text-5xl lg:text-6xl font-semibold transition-all">
            REPORT
          </h1>
        </div>
      </div>
      <div class="grid grid-cols-2 ">
        <div class="h-[460px] rounded-lg ml-2 my-4 px-4">
          <div class="font-semibold text-2xl">Order Id : {{ orders.id }}</div>
          <div class="text-gray-600 text-md">Status : {{ orders.status }}</div>
          <div class="text-gray-600 text-md">Date : {{ orders.created_at }}</div>
          <div class="text-gray-600 text-md">Price : {{ orders.total_price }}</div>
          <div class="text-gray-600 text-md">Customer : {{ orders.user_name }}</div>
          <div class="font-semi grid grid-cols-3 mt-4">
            <div class="text-sm font-semi">
              Id
            </div>
            <div class="text-sm font-semi">
              Name
            </div>
            <div class="text-sm font-semi">
              Price
            </div>
          </div>
          <div v-for="product in products" :key="product.id" class="font-semi grid grid-cols-3">
            <div class="text-sm font-semi">
              {{ product.id }}
            </div>
            <div class="text-sm font-semi">
              {{ product.name }}
            </div>
            <div class="text-sm font-semi">
              {{ product.price }}
            </div>
          </div>
          <div class="font-semi mt-2 text-right grid grid-cols-3">
            <div class="text-right text-sm font-semi">
            </div>
            <div class="text-right mr-4 text-sm font-semibold underline">
              Total
            </div>
            <div class="text-sm font-semi">
              {{ orders.total_price }}
            </div>
          </div>
        </div>
        <form class="" @submit.prevent="submitForm" enctype="multipart/form-data">
          <div class="mx-2 my-4">
            <div class="relative">
              <div class="pl-4 my-2 py-2 border border-gray-200 bg-gray-700 rounded dark:border-black">
                <div class="inline-flex my-2">
                  <input id="bordered-radio-1" type="radio" value="" name="bordered-radio"
                    class=" w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                  <label for="bordered-radio-1" class="w-full ml-4 text-xl font-medium text-white dark:text-white">Refund
                    Issue</label>
                </div>
                <p class="text-gray-300 text-sm leading-6 ml-10 mb-2">description</p>
              </div>
              <div class="pl-4 my-2 py-2 border border-gray-200 bg-gray-700 rounded dark:border-black">
                <div class="inline-flex my-2">
                  <input id="bordered-radio-1" type="radio" value="" name="bordered-radio"
                    class=" w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                  <label for="bordered-radio-1"
                    class="w-full ml-4 text-xl font-medium text-white dark:text-white">Products Problem</label>
                </div>
                <p class="text-gray-300 text-sm leading-6 ml-10 mb-2">description</p>
              </div>
            </div>

            <div class="w-full border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-600 dark:border-gray-600">
              <div class="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-700">
                <label for="comment" class="sr-only">Your comment</label>
                <textarea id="comment" rows="5"
                  class="w-full px-0 text-md text-gray-900 bg-white border-0 dark:bg-gray-200 focus:ring-0 dark:text-black dark:placeholder-gray-800"
                  placeholder="Write a comment..." required></textarea>
              </div>
              <div class="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
                <button type="submit"
                  class="inline-flex items-center py-2.5 px-8 text-xm font-medium text-center text-gray-800 bg-gray-200 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-gray-900 hover:bg-emerald-400">
                  Submit
                </button>
                <div class="flex pl-0 space-x-1 sm:pl-2">
                  <button for="upload" type="button">
                    <label for="upload"
                      class="bg-gray-700 hover:bg-gray-500 text-gray-300 py-1 px-2 rounded cursor-pointer">
                      Upload Picture
                    </label>
                    <input type="file" id="upload" class="hidden">
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>

    </div>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}

.container {
  display: block;
  margin: auto;
  text-align: center;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  width: 50%;
}

label {
  float: left;
}

input[type=text],
[type=email],
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type=submit] {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}
</style>

<script setup lang="ts">
import { useAuthStore } from "~/stores/useAuthStore";
import { useOrderStore } from '~/stores/useOrderStore';
import { useProductStore } from '~/stores/useProductStore';


const orderStore = useOrderStore();
const orders = ref<Order[]>([]); // Initialize as an empty array
const productStore = useProductStore();
const products = ref<Product[]>([]);

const fetchOrders = async () => {
  try {
    // Fetch all orders
    await orderStore.fetchOrders();

    // Get all orders without filtering
    orders.value = orderStore.allOrders.orders;

  } catch (error) {
    console.error('Failed to fetch orders', error);
  }
};

const fetchProducts = async () => {
  try {
    // Fetch all orders
    await orderStore.fetchProducts();

    // Get all orders without filtering
    products.value = productStore.allProducts.products;

  } catch (error) {
    console.error('Failed to fetch orders', error);
  }
};

const auth = useAuthStore()

definePageMeta({
  middleware: 'authenticated'
})

onMounted(() => {
  fetchOrders();
  fetchProducts();
});

// Define the Order type here to match the structure of your order data
type Order = {
  id: number;
  user_id: number;
  user_name: string;
  product_id: number;
  product_name: string;
  product_price: number;
  address: string;
  total_price: string;
  payment_receipt: string;
  shipment_method: string;
  status: string;
  created_at: string;
  updated_at: string;
};

</script>