<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Checkbox</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" class="ion-padding">

      <div id="container">

        <div class="wrapper">
          <ion-toolbar class="ion-margin-vertical ion-padding ion-text-start">
            <b>#Referenced page</b>
            <br/><br/>
            <a href="https://ionicframework.com/docs/api/checkbox" target="_blank">https://ionicframework.com/docs/api/checkbox</a>
          </ion-toolbar>
        </div>

        <div class="wrapper">
          <ion-checkbox>I agree to the terms and conditions</ion-checkbox>
        </div>

        <div class="wrapper">
          <ion-checkbox label-placement="start">Label at the Start</ion-checkbox>
          <br />
          <ion-checkbox label-placement="end">Label at the End</ion-checkbox>
          <br />
          <ion-checkbox label-placement="fixed">Fixed Width Label</ion-checkbox>
          <br>
          <ion-checkbox :indeterminate="true">Indeterminate checkbox</ion-checkbox>
        </div>

        <div class="wrapper">
          <ion-list>
            <ion-item>
              <ion-checkbox justify="start">Packed at the Start of Line</ion-checkbox>
            </ion-item>

            <ion-item>
              <ion-checkbox justify="end">Packed at the End of Line</ion-checkbox>
            </ion-item>

            <ion-item>
              <ion-checkbox justify="space-between">Space Between Label and Control</ion-checkbox>
            </ion-item>
          </ion-list>
        </div>

        <div class="wrapper">
          <ion-checkbox class="themed">Themed checkbox</ion-checkbox>
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
  import { IonCheckbox, IonItem, IonList } from '@ionic/vue';
</script>

<style scoped>

  ion-checkbox.themed {
    --size: 32px;
    --checkbox-background-checked: #6815ec;
  }

  ion-checkbox.themed::part(container) {
    border-radius: 6px;
    border: 2px solid #6815ec;
  }
</style>
