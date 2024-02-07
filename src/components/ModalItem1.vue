<template>
  <ion-header>
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-button color="medium" @click="cancel">Cancel</ion-button>
      </ion-buttons>
      <ion-title>Child1</ion-title>
      <ion-buttons slot="end">
        <ion-button @click="confirm" :strong="true">Confirm</ion-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <ion-item>
      <ion-input label-placement="stacked" label="Enter your name" v-model="name1" placeholder="Your name"></ion-input>
    </ion-item>
  </ion-content>
</template>


<script setup lang="ts">
  import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonButton, IonItem, IonInput, modalController,
  } from '@ionic/vue';

  let name1 = 'aaaaaaaaaa';

  const cancel = () => {
    return modalController.dismiss(null, 'cancel');
  }
  const confirm = () => {
    return modalController.dismiss(name1, 'confirm');
  }

</script>
