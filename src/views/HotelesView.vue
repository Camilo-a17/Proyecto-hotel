<template>
  <FromEditComp :hotelId="hotelId" />
</template>

<script setup>
import FromEditComp from '../components/FromEditComp.vue';
import { useRoute } from 'vue-router';

// Obtener el ID del hotel de alguna fuente, por ejemplo, desde la ruta
const route = useRoute();
const hotelId = route.params.hotelId;
</script>
