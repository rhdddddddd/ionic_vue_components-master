<template>
  <ion-nav :root="component"></ion-nav>
</template>



<script setup lang="ts">
  import { IonNav } from '@ionic/vue';
  import { ref } from 'vue';
  import NavPage1 from '../components/NavPage1.vue';

  let component = ref(NavPage1);
</script>

<style scoped>
</style>

