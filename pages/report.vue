<template>
    <Navbar />
    <div class="container">
      <h1 class="text-center text-3xl mt-2 mb-4">
        REPORT
      </h1>
      <div class="h-[460px] rounded-lg bg-gray-300 mb-4">
          <img class="w-full h-full object-cover" src="" alt="Product Image">
      </div>
        <form class="" @submit.prevent="submitForm" enctype="multipart/form-data">
          <div v-for="reasons in reason" :key="reasons.id" class="relative">
            <div class="pl-4 my-2 border border-gray-200 rounded dark:border-gray-700">
              <div class="inline-flex py-4">
                <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" class=" w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                <label for="bordered-radio-1" class="w-full ml-4 text-xl font-medium text-gray-900 dark:text-black">{{ reasons.name }}</label>
              </div>
                <p class="text-black text-sm leading-6 mb-2">{{ reasons.description }}</p>
            </div>
          </div>

          <div class="w-full mt-2 mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
              <div class="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                  <label for="comment" class="sr-only">Your comment</label>
                  <textarea id="comment" rows="4" class="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Write a comment..." required></textarea>
              </div>
              <div class="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
                  <button type="submit" class="inline-flex items-center py-2.5 px-8 text-xm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                      Submit
                  </button>
                  <div class="flex pl-0 space-x-1 sm:pl-2">
                      <button type="button" class="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                          <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                            </svg>
                          <span class="sr-only">Upload image</span>
                      </button>
                  </div>
              </div>
          </div>
        </form>
      
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