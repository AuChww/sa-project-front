<template>
    <Navbar />
    <!-- customer , audit , admin-->
    <div id="bill">
        <!-- Your bill content goes here -->
        <h1>Bill</h1>
        <p>Date: {{ currentDate }}</p>
        <p>Amount: ${{ amount }}</p>
    </div>

    <form class="mt-5 grid gap-6">
        <div class="relative">
            <input class="peer hidden" id="radio_1" type="radio" name="radio" checked />
            <span class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
            <label class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" for="radio_1">
            <img class="w-14 object-contain" src="" alt="" />
            <div class="ml-5">
                <span class="mt-2 font-semibold">Fedex Delivery</span>
                <p class="text-slate-500 text-sm leading-6">Delivery: 2-4 Days</p>
            </div>
            </label>
        </div>
        <div class="relative">
            <input class="peer hidden" id="radio_2" type="radio" name="radio" checked />
            <span class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
            <label class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" for="radio_2">
            <img class="w-14 object-contain" src="" alt="" />
            <div class="ml-5">
                <span class="mt-2 font-semibold">Fedex Delivery</span>
                <p class="text-slate-500 text-sm leading-6">Delivery: 2-4 Days</p>
            </div>
            </label>
        </div>
      </form>

    <div id="bill">
        <!-- Your bill content goes here -->
        <form>
          <label>Name</label>
          <input 
            type="text" 
            v-model="name"
            name="name"
            placeholder="Your Name"
          >
          <label>Email</label>
          <input 
            type="email" 
            v-model="email"
            name="email"
            placeholder="Your Email"
            >
          <label>Message</label>
          <textarea 
            name="message"
            v-model="message"
            cols="30" rows="5"
            placeholder="Message">
          </textarea>

          <div class="bg-blue-500 w-20 h-15">
            <button @click="saveBillAsPNG" class="bold-text">Save as PNG</button>
          </div>
        </form>

    </div>
</template>

<style scoped>
/* Add your CSS styling for the bill here */
#bill {
  border: 1px solid #ccc;
  padding: 20px;
}

* {box-sizing: border-box;}

.container {
  display: block;
  margin:auto;
  text-align: center;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  width: 50%;
}

label {
  float: left;
}

input[type=text], [type=email], textarea {
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

<script>
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';

export default {
  data() {
    return {
      currentDate: new Date().toLocaleDateString(),
      amount: 100.00,
      
    };
  },
  methods: {
    async saveBillAsPNG() {
      const billElement = document.getElementById('bill'); // Replace 'bill' with the ID of your bill div
      const canvas = await html2canvas(billElement);

      // Convert canvas to PNG and save it
      canvas.toBlob((blob) => {
        saveAs(blob, 'bill.png');
      });
    },
  },
};
</script>