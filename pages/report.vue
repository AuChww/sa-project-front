<template>
    <Navbar />
    <section :style="{'background-image':'url(https://t3.ftcdn.net/jpg/05/11/25/36/360_F_511253627_zuzpapnIVQueMx4eSL1ilAoH61OBgj0C.jpg)'}" class="bg-blue-900 text-white py-12">
        <div class="mx-auto text-center">
            <h1 class="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4 transition-all">
                REPORT
            </h1>
        </div>
    </section>

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
      <div class="mx-4 mb-28  sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-4 bg-white shadow-xl rounded-lg text-gray-900">
        <div class="grid grid-cols-2 ">
          <div class="h-[460px] rounded-lg bg-gray-300 ml-2 my-4">
              <img class="w-full h-full object-cover" src="" alt="Product Image">
          </div>
          <form class="" @submit.prevent="submitForm" enctype="multipart/form-data">
            <div class="mx-2 my-4">
              <div v-for="reasons in reason" :key="reasons.id" class="relative">
                <div class="pl-4 my-2 border border-gray-200 bg-gray-700 rounded dark:border-black">
                  <div class="inline-flex py-4">
                    <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" class=" w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label for="bordered-radio-1" class="w-full ml-4 text-xl font-medium text-white dark:text-white">{{ reasons.name }}</label>
                  </div>
                    <p class="text-gray-300 text-sm leading-6 mb-2">{{ reasons.description }}</p>
                </div>
              </div>

              <div class="w-full border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                  <div class="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                      <label for="comment" class="sr-only">Your comment</label>
                      <textarea id="comment" rows="5" class="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Write a comment..." required></textarea>
                  </div>
                  <div class="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
                      <button type="submit" class="inline-flex items-center py-2.5 px-8 text-xm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                          Submit
                      </button>
                      <div class="flex pl-0 space-x-1 sm:pl-2">
                        <button for="upload" type="button"  >
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
export default {
  name: 'ContactUs',
  data() {
    
    return {
      name: '',
      email: '',
      message: '',
      reason: [
      {
          id: 1,
          name: 'Product issue',
          description: 'If you have a problem with your product please select this option',
          image: '',
      },
      {
          id: 2,
          name: 'Refund Problem',
          description: 'If you have a problem with your Refund',
          image: '',
      },
      ]
    }
  },
  methods: {
    submitForm() {
      const imageInput = this.$refs.imageInput;
      const selectedFile = imageInput.files[0];

      if (selectedFile) {
        // You can now work with the selectedFile, e.g., upload it to a server or display it.
        console.log('Selected file:', selectedFile);

        // Reset the file input if needed
        imageInput.value = '';
      }
    },
    sendEmail(e) {
      try {
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target,
        'YOUR_USER_ID', {
          name: this.name,
          email: this.email,
          message: this.message
        })

      } catch(error) {
          console.log({error})
      }
      // Reset form field
      this.name = ''
      this.email = ''
      this.message = ''
    },
  }
}
</script>