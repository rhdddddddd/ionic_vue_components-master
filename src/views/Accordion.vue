<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Accordion</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" class="ion-padding">
      <div id="container">

        <div class="wrapper">
          <ion-toolbar class="ion-margin-vertical ion-padding ion-text-start">
            <b>#Referenced page</b>
            <br/><br/>
            <a href="https://ionicframework.com/docs/api/accordion" target="_blank">https://ionicframework.com/docs/api/accordion</a>
            <br/><br/>
            <a href="https://ionicframework.com/docs/api/accordion-group" target="_blank">https://ionicframework.com/docs/api/accordion-group</a>
          </ion-toolbar>
        </div>

        <div class="wrapper">
          <ion-accordion-group>
            <ion-accordion value="first">
              <ion-item slot="header" color="light">
                <ion-label>First Accordion</ion-label>
              </ion-item>
              <div class="ion-padding" slot="content">
                First Content
              </div>
            </ion-accordion>
            <ion-accordion value="second">
              <ion-item slot="header" color="light">
                <ion-label>Second Accordion</ion-label>
              </ion-item>
              <div class="ion-padding" slot="content">
                Second Content
              </div>
            </ion-accordion>
            <ion-accordion value="third">
              <ion-item slot="header" color="light">
                <ion-label>Third Accordion</ion-label>
              </ion-item>
              <div class="ion-padding" slot="content">
                Third Content
              </div>
            </ion-accordion>
          </ion-accordion-group>
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
  import {
    IonAccordion,
    IonAccordionGroup,
    IonItem,
    IonLabel
  } from '@ionic/vue';
  import { IonContent, IonFooter, IonTitle, IonToolbar } from '@ionic/vue';
</script>

<style scoped>
</style>
