<template>
    <div>
        <h1>Image Test</h1>
        <img :src="imageData" alt="Test Image" />
    </div>
</template>
    
<script lang="ts">
import { ref, onMounted } from 'vue';

export default {
    setup() {
        const imageData = ref<string | null>(null);

        onMounted(async () => {
            // Replace '9eEofnTDwI9P6vHIWutoxXOWTVq9nu8MKXFvEdlP.png' with your actual image filename
            const filename = '9eEofnTDwI9P6vHIWutoxXOWTVq9nu8MKXFvEdlP.png';

            try {
                console.log('Fetching image...');
                const response = await fetch(`api/images/${filename}`, {
                    method: 'GET',
                });

                if (!response.ok) {
                    console.error('Error fetching image:', response.status);
                    return;
                }

                // Assuming the response contains the image URL
                const imageUrl = await response.text();
                console.log('Image fetched successfully:', imageUrl);
                imageData.value = imageUrl;
            } catch (error) {
                console.error('Error fetching image:', error);
            }
        });

        return {
            imageData,
        };
    },
};
</script>
  