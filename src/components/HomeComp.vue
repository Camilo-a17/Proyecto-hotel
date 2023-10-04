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
  <div>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-5 p-10 ">
      
<div id="toast-message-cta" class="w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:bg-gray-800 dark:text-gray-400" role="alert">
    <div class="flex">
        <img class="w-8 h-8 rounded-full shadow-lg" src="https://images3.alphacoders.com/638/thumbbig-638436.webp" alt="Jese Leos image"/>
        <div class="ml-3 text-sm font-normal">
            <span class="mb-1 text-sm font-semibold text-gray-900 dark:text-white">Jese Leos</span>
            <div class="mb-2 text-sm font-normal">Hi Neil, thanks for sharing your thoughts regarding Flowbite.</div> 
            <a href="#" class="inline-flex px-2.5 py-1.5 text-xs font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800">Reply</a>   
        </div>
        <button type="button" class="ml-auto -mx-1.5 -my-1.5 bg-white justify-center items-center flex-shrink-0 text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-message-cta" aria-label="Close">
            <span class="sr-only">Close</span>
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
            </svg>
        </button>
    </div>
</div>

<div id="toast-message-cta" class="w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:bg-gray-800 dark:text-gray-400" role="alert">
    <div class="flex">
        <img class="w-8 h-8 rounded-full shadow-lg" src="https://images.alphacoders.com/643/643945.jpg" alt="Jese Leos image"/>
        <div class="ml-3 text-sm font-normal">
            <span class="mb-1 text-sm font-semibold text-gray-900 dark:text-white">Jese Leos</span>
            <div class="mb-2 text-sm font-normal">Hi Neil, thanks for sharing your thoughts regarding Flowbite.</div> 
            <a href="#" class="inline-flex px-2.5 py-1.5 text-xs font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800">Reply</a>   
        </div>
        <button type="button" class="ml-auto -mx-1.5 -my-1.5 bg-white justify-center items-center flex-shrink-0 text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-message-cta" aria-label="Close">
            <span class="sr-only">Close</span>
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
            </svg>
        </button>
    </div>
</div>

<div id="toast-message-cta" class="w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:bg-gray-800 dark:text-gray-400" role="alert">
    <div class="flex">
        <img class="w-8 h-8 rounded-full shadow-lg" src="https://images3.alphacoders.com/645/thumbbig-645402.webp" alt="Jese Leos image"/>
        <div class="ml-3 text-sm font-normal">
            <span class="mb-1 text-sm font-semibold text-gray-900 dark:text-white">Jese Leos</span>
            <div class="mb-2 text-sm font-normal">Hi Neil, thanks for sharing your thoughts regarding Flowbite.</div> 
            <a href="#" class="inline-flex px-2.5 py-1.5 text-xs font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800">Reply</a>   
        </div>
        <button type="button" class="ml-auto -mx-1.5 -my-1.5 bg-white justify-center items-center flex-shrink-0 text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-message-cta" aria-label="Close">
            <span class="sr-only">Close</span>
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
            </svg>
        </button>
    </div>
</div>


    </div>
  </div>
  
</template>
