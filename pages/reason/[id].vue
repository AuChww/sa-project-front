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
    <div class="flex w-full h-full flex-col justify-center px-6 py-8 lg:px-8 z-10 bg-gradient-to-r
          from-green-500
          via-blue-500
          to-purple-500
          background-animate">
        <div class=" mb-28  sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-4 bg-white shadow-xl rounded-lg text-gray-900"
            style="width: 1200px; height: 650px; border">

            <div class="grid grid-cols-2 ">
                <div class=" rounded-lg ml-2 my-4 pl-8">
                    <div class="font-semibold mt-4 text-3xl">Report Id : {{ report.id }} </div>
                    <div class="text-gray-600 mt-4 font-semibold text-3xl">From : {{ order.user_name }} </div>
                    <div class="text-gray-600 text-lg">Telephone : {{ report.telephone }} </div>
                    <div class="text-gray-600 mt-4 text-xl">Address : {{ order.address }} </div>

                    <div class="text-gray-600 ml-4 mt-8 text-md"> : {{ report.reason }} </div>
                    
                    
                </div>


                <div class="">
                    <div class="text-black font-semibold ml-24 px-1  mt-4 text-2xl">Order Bill</div>
                    <div style="height: 550px; width: 400px; border"
                        class="overflow-y-auto mt-2 px-4 py-2 sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto  bg-gray-700 shadow-xl rounded-lg text-black">
                        <div>
                            <div class=" px-4 py-6 justify-between my-4 bg-white w-72 mx-auto">
                                <div class="font-semibold text-lg">Order Id : {{ order.id }}</div>
                                <div class="text-gray-600 text-xs">{{ formatCreatedAt(order.created_at) }}</div>
                                <div class="text-gray-600 text-xs">Customer : {{ order.user_name }}</div>
                                <div class="mt-4 font-semibold text-md">
                                    Products :
                                </div>
                                <div class="font-semibold mt-2 text-right grid grid-cols-4">
                                    <div class="text-center text-sm font-semi">
                                        Id
                                    </div>
                                    <div class="text-left text-sm font-semi">
                                        Name
                                    </div>
                                    <div class="text-center text-sm font-semi">
                                        Quality
                                    </div>
                                    <div class="text-center text-sm font-semi">
                                        Price
                                    </div>
                                </div>
                                <div v-for="product in specificOrder.products" :key="product.id"
                                    class="font-semi my-2 text-right grid grid-cols-4">
                                    <div class="text-center text-sm font-semi">
                                        {{ product.id }}
                                    </div>
                                    <div class="text-left text-xs font-semi">
                                        {{ product.name }}
                                    </div>
                                    <div class="text-center text-sm font-semi">
                                        {{ product.pivot.quantity }}
                                    </div>
                                    <div class="text-center text-sm font-semi">
                                        {{ product.price }}
                                    </div>
                                </div>
                                <div class="font-semi mt-2 text-right grid grid-cols-4">
                                    <div class="text-right text-sm font-semi">
                                    </div>
                                    <div class="text-right text-sm font-semi">
                                    </div>
                                    <div class="text-right mr-2 text-sm font-semibold underline">
                                        Total
                                    </div>
                                    <div class="text-left text-sm font-semi">
                                        {{ order.total_price }}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


            </div>

        </div>
    </div>
</template>

<script setup lang="ts">

const route = useRoute();
const previewUrl = ref(null);
const { data: order, error } = await useMyFetch<any>(`order/${route.params.id}`, {});
const { data: specificOrder } = await useMyFetch<any>(`showOrderSpecific/${route.params.id}`, {});
    const { data: report } = await useMyFetch<any>(`report/${route.params.id}`, {});

const previewImage = (event) => {
    const file = event.target.files ? event.target.files[0] : null; // Check if there are files

    if (file) {
        const reader = new FileReader();

        reader.onload = () => {
            previewUrl.value = reader.result; // Store the data URL for preview
            selectedFile.value = file; // Store the selected file

            // Optionally, you can encode the image to base64
            const base64String = reader.result.split(',')[1]; // Get the base64 part of the data URL
            orderData.payment_receipt = base64String; // Store the base64-encoded image in orderData
        };

        reader.readAsDataURL(file);
    }
};

if (error.value !== null) {
    if ('statusCode' in error.value) {
        const { statusCode, statusMessage } = error.value;
        console.log(statusCode, statusMessage);
        if (statusCode === 404) {
            await navigateTo("/");
        }
    }
}

if (order.value !== null) {
    console.log(order.value);
    console.log(specificOrder.value);
}

const formatDateTime = (dateTime: string) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
    return new Date(dateTime).toLocaleString('en-US', options);
};

const formatCreatedAt = (timestamp: string) => {
    return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    }).format(new Date(timestamp));
};
</script>
  
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