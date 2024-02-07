<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Home</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding" :fullscreen="true">
      <div id="container">
        <div class="wrapper">
          <div class="ion-padding" style="width: 100%; display: flex; justify-content: center; align-items: center;">
            <ion-icon :icon="logoIonic" size="large" style="color:#176BFF;"></ion-icon><ion-text class="" style="padding: 0 20px; font-size: 30px; line-height: 1;">x</ion-text><ion-icon :icon="logoVue" size="large" style="color:#3FB984;"></ion-icon>
          </div>
          <ion-title>ionic x Vue.js Components-master</ion-title>
          <div class="ion-text-center">
            <ion-text class="" style="word-break: break-all;">Please select the 'Components & Utilities' link from the left menu (split-pane display for Window-size 1200px and above)!</ion-text>
          </div>
        </div>

        <div class="wrapper">
          <ion-toolbar class="ion-margin-vertical ion-padding ion-text-start">
            <b>#Referenced page</b>
            <br/><br/>
            <a href="https://ionicframework.com/docs/components" target="_blank">https://ionicframework.com/docs/components</a>
          </ion-toolbar>
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
  import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
  import { logoIonic, logoVue } from 'ionicons/icons';
</script>

<style scoped>
</style>
