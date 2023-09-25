<template>
    <Navbar />
    <div class="container">
        <form class="mt-5 grid gap-6 text-lg font-medium">
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

          <div v-for="reasons in reason" :key="reasons.id" class="relative">
              <input class="peer hidden" id="radio_1" type="radio" name="radio" checked />
              <span class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
              <label class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" for="radio_1">
              <img class="w-14 object-contain" src="" alt="" />
              <div class="ml-5">
                  <span class="mt-2 font-semibold">{{ reasons.name }}</span>
                  <p class="text-slate-500 text-sm leading-6">{{ reasons.description }}</p>
              </div>
              </label>
          </div>

          <input type="submit" value="Send">
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
          name: 'asda',
          description: 'Explore our latest computer Components.',
          image: '',
      },
      {
          id: 2,
          name: 'asd',
          description: 'Explore our latest computer Components.',
          image: '',
      },
      ]
    }
  },
  methods: {
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