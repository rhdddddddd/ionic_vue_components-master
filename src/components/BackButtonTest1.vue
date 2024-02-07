<template>
  <ion-page>

    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>BackButtonTest1</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <div id="container">

        <div class="wrapper">
          <ion-toolbar class="ion-margin-vertical ion-padding ion-text-start">
            <b>#Referenced page</b>
            <br/><br/>
            <a href="https://ionicframework.com/docs/api/nav" target="_blank">https://ionicframework.com/docs/api/nav</a>
            <br/><br/>
            <a href="https://ionicframework.com/docs/api/back-button" target="_blank">https://ionicframework.com/docs/api/back-button</a>
          </ion-toolbar>
        </div>

        <div class="wrapper">
          <div class="ion-text-center">
            <ion-title>BackButtonTest1</ion-title>
            <ion-nav-link router-direction="forward" :component="component">
              <ion-button>Forward Page</ion-button>
            </ion-nav-link>
          </div>
        </div>

      </div>
    </ion-content>
    <ion-footer :translucent="true">
      <ion-toolbar>
        <ion-title>ionic x Vue.js Components-master</ion-title>
      </ion-toolbar>
    </ion-footer>
  </ion-page>
</template>

<script setup lang="ts">
  import { IonButton, IonContent, IonHeader, IonNavLink, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
  import { ref } from 'vue';
  import BackButtonTest2Page from '../components/BackButtonTest2.vue';

  let component = ref(BackButtonTest2Page);
</script>

<style scoped>
</style>

