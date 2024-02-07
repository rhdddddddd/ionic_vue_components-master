<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Breadcrumb</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" class="ion-padding">
      <div id="container">

        <div class="wrapper">
          <ion-toolbar class="ion-margin-vertical ion-padding ion-text-start">
            <b>#Referenced page</b>
            <br/><br/>
            <a href="https://ionicframework.com/docs/api/breadcrumb" target="_blank">https://ionicframework.com/docs/api/breadcrumb</a>
          </ion-toolbar>
        </div>

        <div class="wrapper">
          <ion-breadcrumbs>
            <ion-breadcrumb href="#home">Home</ion-breadcrumb>
            <ion-breadcrumb href="#electronics">Electronics</ion-breadcrumb>
            <ion-breadcrumb href="#cameras">Cameras</ion-breadcrumb>
            <ion-breadcrumb href="#film">Film</ion-breadcrumb>
          </ion-breadcrumbs>

          <div>
            <ion-title>Icons at Start</ion-title>
            <ion-breadcrumbs>
              <ion-breadcrumb href="#home">
                <ion-icon slot="start" :icon="home"></ion-icon>
                Home
              </ion-breadcrumb>
              <ion-breadcrumb href="#electronics">
                <ion-icon slot="start" :icon="flash"></ion-icon>
                Electronics
              </ion-breadcrumb>
              <ion-breadcrumb href="#cameras">
                <ion-icon slot="start" :icon="camera"></ion-icon>
                Cameras
              </ion-breadcrumb>
              <ion-breadcrumb href="#film">
                <ion-icon slot="start" :icon="film"></ion-icon>
                Film
              </ion-breadcrumb>
            </ion-breadcrumbs>

            <ion-title class="ion-margin-top">Icons at End</ion-title>
            <ion-breadcrumbs>
              <ion-breadcrumb href="#home">
                Home
                <ion-icon slot="end" :icon="home"></ion-icon>
              </ion-breadcrumb>
              <ion-breadcrumb href="#electronics">
                Electronics
                <ion-icon slot="end" :icon="flash"></ion-icon>
              </ion-breadcrumb>
              <ion-breadcrumb href="#cameras">
                Cameras
                <ion-icon slot="end" :icon="camera"></ion-icon>
              </ion-breadcrumb>
              <ion-breadcrumb href="#film">
                Film
                <ion-icon slot="end" :icon="film"></ion-icon>
              </ion-breadcrumb>
            </ion-breadcrumbs>
          </div>

          <div>
            <ion-breadcrumbs :max-items="4">
              <ion-breadcrumb href="#home">Home</ion-breadcrumb>
              <ion-breadcrumb href="#electronics">Electronics</ion-breadcrumb>
              <ion-breadcrumb href="#photography">Photography</ion-breadcrumb>
              <ion-breadcrumb href="#cameras">Cameras</ion-breadcrumb>
              <ion-breadcrumb href="#film">Film</ion-breadcrumb>
              <ion-breadcrumb href="#35mm">35 mm</ion-breadcrumb>
            </ion-breadcrumbs>
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
    import { IonBreadcrumb, IonBreadcrumbs, IonIcon, IonLabel } from '@ionic/vue';
    import { camera, film, flash, home } from 'ionicons/icons';

  const alertButtons = ['OK'];
</script>

<style scoped>
</style>
