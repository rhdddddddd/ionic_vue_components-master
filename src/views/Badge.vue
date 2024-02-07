<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Badge</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" class="ion-padding">
      <div id="container">

        <div class="wrapper">
          <ion-toolbar class="ion-margin-vertical ion-padding ion-text-start">
            <b>#Referenced page</b>
            <br/><br/>
            <a href="https://ionicframework.com/docs/api/badge" target="_blank">https://ionicframework.com/docs/api/badge</a>
          </ion-toolbar>
        </div>

        <div class="wrapper">
          <ion-list>
            <ion-item>
              <ion-badge slot="start">11</ion-badge>
              <ion-label>Badge in start slot</ion-label>
            </ion-item>
            <ion-item>
              <ion-badge slot="end">22</ion-badge>
              <ion-label>Badge in end slot</ion-label>
            </ion-item>
          </ion-list>
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
  import { IonBadge, IonItem, IonLabel, IonList } from '@ionic/vue';

  const alertButtons = ['OK'];
</script>

<style scoped>
</style>
