<template>
    <Navbar />
    <!-- customer , audit , admin-->
    <div id="bill">
        <!-- Your bill content goes here -->
        <h1>Bill</h1>
        <p>Date: {{ currentDate }}</p>
        <p>Amount: ${{ amount }}</p>
    </div>

    <div id="bill">
        <!-- Your bill content goes here -->
        <h1>Bill</h1>
        <p>Date: {{ currentDate }}</p>
        <p>Amount: ${{ amount }}</p>

        <button @click="saveBillAsPNG">Save as PNG</button>
    </div>
</template>

<style scoped>
/* Add your CSS styling for the bill here */
#bill {
  border: 1px solid #ccc;
  padding: 20px;
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