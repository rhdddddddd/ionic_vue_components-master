<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Page ID: {{ $route.params.id }}</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding" :fullscreen="true">
      <div id="container">

        <div class="wrapper">
          <ion-toolbar class="ion-margin-vertical ion-padding ion-text-start">
            <b>#Referenced page</b>
            <br/><br/>
            <a href="https://ionicframework.com/docs/vue/navigation#url-parameters" target="_blank">https://ionicframework.com/docs/vue/navigation#url-parameters</a>
          </ion-toolbar>
        </div>

        <div class="wrapper">
          <ion-title>Routing of ID Parameters</ion-title>
          <div>
            <strong class="capitalize">Page ID: {{ $route.params.id }}</strong>
          </div>
          <div>
            <p>Dynamically generate pages by changing URL parameters.<br/>Try changing the ID (number) at the end of the URL.</p><br/>
            <code class="ion-padding">~/folder/<ion-text color="danger"><b>{{ $route.params.id }}</b></ion-text></code>
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
import { IonItem, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
</script>

<style scoped>


</style>
