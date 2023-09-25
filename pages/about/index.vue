<template>
    <div>
      <button @click="toggleInfo">Show Information</button>
      <div v-if="showInfo">This is the hidden information.</div>
    </div>
</template>
  
<script>
  export default {
    data() {
      return {
        showInfo: false
      };
    },
    methods: {
      toggleInfo() {
        this.showInfo = !this.showInfo;
      }
    }
  };
</script>
