<template>
  <ion-page>

    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
        </ion-buttons>
        <ion-title>BackButtonTest2</ion-title>
        <ion-buttons slot="end">
          <ion-back-button default-href="/backbutton"></ion-back-button>
        </ion-buttons>
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
            <ion-title>BackButtonTest2</ion-title>
            <ion-nav-link router-direction="back" :component="component">
              <ion-button>Back Page</ion-button>
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
  import { IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/vue';
</script>

<style scoped>
</style>
