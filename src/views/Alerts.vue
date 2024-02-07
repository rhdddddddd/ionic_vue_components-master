<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Alert</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" class="ion-padding">
      <div id="container">

        <div class="wrapper">
          <ion-toolbar class="ion-margin-vertical ion-padding ion-text-start">
            <b>#Referenced page</b>
            <br/><br/>
            <a href="https://ionicframework.com/docs/api/alert" target="_blank">https://ionicframework.com/docs/api/alert</a>
          </ion-toolbar>
        </div>

        <div class="wrapper">
          <ion-button id="present-alert">Click Me</ion-button>
          <ion-alert
            trigger="present-alert"
            header="Alert"
            sub-header="Important message"
            message="This is an alert!"
            :buttons="alertButtons"
          ></ion-alert>
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
  import { IonAlert, IonButton } from '@ionic/vue';

  const alertButtons = ['OK'];
</script>

<style scoped>
</style>
