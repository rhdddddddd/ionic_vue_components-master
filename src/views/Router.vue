<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Router</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding" :fullscreen="true">
      <div id="container">

        <div class="wrapper">
          <ion-toolbar class="ion-margin-vertical ion-padding ion-text-start">
            <b>#Referenced page</b>
            <br/><br/>
            <a href="https://ionicframework.com/docs/api/router" target="_blank">https://ionicframework.com/docs/api/router</a>
          </ion-toolbar>
        </div>

        <div class="wrapper">
          <p class="ion-text-center" style="margin-bottom: 30px;">The router is a component for handling routing inside vanilla and Stencil JavaScript projects.<br/><br/>Note: This component should only be used with vanilla and Stencil JavaScript projects. See the routing guides for Angular, React, and Vue for framework-specific routing solutions.</p>
        </div>

        <div class="wrapper">
          <ion-toolbar class="ion-padding ion-text-center">
            <span class="ion-text-center">Please open the left menu in the header to check the behavior!</span>
            <br/><br/>
            <b>As special mention point...</b>
            <br/><br/>
            <a href="/folder">Routing (ID) Parameters</a>
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
import { IonItem, IonLabel, IonList, IonReorder, IonReorderGroup } from '@ionic/vue';
import { ref, onMounted } from 'vue';


//

</script>

<style scoped>


</style>

