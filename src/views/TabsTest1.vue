<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>TabsTest1</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding" :fullscreen="true">
      <div id="container">

        <div class="wrapper">
          <ion-toolbar class="ion-margin-vertical ion-padding ion-text-start">
            <b>#Referenced page</b>
            <br/><br/>
            <a href="https://ionicframework.com/docs/api/tabs" target="_blank">https://ionicframework.com/docs/api/tabs</a>
          </ion-toolbar>
        </div>

        <div class="wrapper" style="margin-bottom: auto;">
          <ion-title>TabsTest1</ion-title>
        </div>

      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
  import { IonHeader, IonToolbar, IonTitle, IonContent, IonPage } from '@ionic/vue';
</script>

<style scoped>
</style>
