<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})
</script>
<template>
   
  <div class="mt-4">
    <figure
      class="relative max-w-full transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
    >
      <a href="#">
        <img
          class="rounded-none"
          src="https://images5.alphacoders.com/681/681402.jpg"
          alt="image description"
        />
      </a>
      <figcaption class="absolute px-4 text-lg text-white bottom-6">
      <p>WELCOME</p>
  </figcaption>
      
    </figure>
  

  </div> 
  
  
</template>
