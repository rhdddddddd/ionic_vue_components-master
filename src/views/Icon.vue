<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Icon</ion-title>
      </ion-toolbar>
    </ion-header>
-
    <ion-content class="ion-padding" :fullscreen="true">
      <div id="container">

        <div class="wrapper">
          <ion-toolbar class="ion-margin-vertical ion-padding ion-text-start">
            <b>#Referenced page</b>
            <br/><br/>
            <a href="https://ionicframework.com/docs/api/icon" target="_blank">https://ionicframework.com/docs/api/icon</a>
          </ion-toolbar>
        </div>

        <div class="wrapper">
          <ion-title>Basic Icon</ion-title>
          <div class="ion-margin-vertical ion-justify-content-center ion-align-items-center" style="display: flex;">
            <ion-icon :icon="logoIonic"></ion-icon>
            <ion-icon :icon="logoIonic" size="large"></ion-icon>
            <ion-icon :icon="logoIonic" color="primary"></ion-icon>
            <ion-icon :icon="logoIonic" size="large" color="primary"></ion-icon>
            <ion-icon name="heart" aria-hidden="true"></ion-icon>
            <ion-button aria-label="Favorite">
              <ion-icon :icon="logoIonic"></ion-icon>
            </ion-button>
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
  import { IonIcon } from '@ionic/vue';
  import { logoIonic } from 'ionicons/icons';
</script>

<style scoped>

  .infinite-scroll-content {
    text-align: center;
    padding: 20px 0;
  }

</style>
