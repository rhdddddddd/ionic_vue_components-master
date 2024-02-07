<template>
  <ion-nav :root="component"></ion-nav>
</template>

<script setup lang="ts">
  import { IonNav } from '@ionic/vue';
  import { ref } from 'vue';
  import BackButtonTest1Page from '../components/BackButtonTest1.vue';

  let component = ref(BackButtonTest1Page);
</script>

<style scoped>
</style>
