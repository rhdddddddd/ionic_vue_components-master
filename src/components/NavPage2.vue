<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="#"></ion-back-button>
        </ion-buttons>
        <ion-title>Nav Page 2</ion-title>
        <ion-buttons slot="end">
          <a href="/"><ion-icon :icon="arrowUndo"></ion-icon>All UI</a>
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
          </ion-toolbar>
        </div>

        <div class="wrapper" style="margin-top: 0; margin-bottom: auto;">
          <div>
            <h1>Nav Page 2</h1>
            <ion-nav-link router-direction="forward" :component="component">
              <ion-button>Go to Nav Page 3</ion-button>
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
  import { IonHeader, IonTitle, IonToolbar, IonContent, IonNavLink, IonButton, IonButtons, IonBackButton} from '@ionic/vue';
  import { arrowUndo } from 'ionicons/icons';
  import { ref } from 'vue';
  import NavPage3 from '../components/NavPage3.vue';

  let component = ref(NavPage3);
</script>

<style scoped>
</style>
