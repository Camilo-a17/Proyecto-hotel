
<template>
    <div class="flex flex-wrap bg-slate-100 justify-center">
            <div class="mt-4 w-full lg:w-6/12 xl:w-3/12 px-5 mb-4">
                <div class="relative flex flex-col min-w-0 break-words border-t-4 bg-white rounded mb-3 xl:mb-0 shadow-lg">
                    <div class="flex-auto p-4 pb-12">
                        <div class="flex flex-wrap">
                            <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                                <h5 class="text-blueGray-400 uppercase font-bold text-xs"> Hoteles</h5>
                                <span class="font-semibold text-xl text-blueGray-700">{{ num_hoteles }}</span>
                            </div>
                            <div class="relative w-auto pl-4 flex-initial">
                                <a href="/list"
                                    class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full  bg-blue-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M0 32C0 14.3 14.3 0 32 0H480c17.7 0 32 14.3 32 32s-14.3 32-32 32V448c17.7 0 32 14.3 32 32s-14.3 32-32 32H304V464c0-26.5-21.5-48-48-48s-48 21.5-48 48v48H32c-17.7 0-32-14.3-32-32s14.3-32 32-32V64C14.3 64 0 49.7 0 32zm96 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H112c-8.8 0-16 7.2-16 16zM240 96c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H240zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H368c-8.8 0-16 7.2-16 16zM112 192c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H112zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H240c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H368zM328 384c13.3 0 24.3-10.9 21-23.8c-10.6-41.5-48.2-72.2-93-72.2s-82.5 30.7-93 72.2c-3.3 12.8 7.8 23.8 21 23.8H328z"/></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
           
        </div>
    
            
</template>

<script>
import axios from "axios";

export default {
  name: "InicioDashboardComp",
  data() {
    return {      
      num_hoteles: 0  
    };
  },
  methods: {
    cargarDatos: async function () {
      try {
        const response = await axios.get("hotels");
        this.num_hoteles = response.data.data.length;   
        
      } catch (error) {
        console.log(error);
      }
    },
  },

  mounted: function () {
    this.cargarDatos();
  },
};

</script>