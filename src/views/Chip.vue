<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Chip</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" class="ion-padding">
      <div id="container">

        <div class="wrapper">
          <ion-toolbar class="ion-margin-vertical ion-padding ion-text-start">
            <b>#Referenced page</b>
            <br/><br/>
            <a href="https://ionicframework.com/docs/api/chip" target="_blank">https://ionicframework.com/docs/api/chip</a>
          </ion-toolbar>
        </div>

        <div class="wrapper">
          <ion-chip>Default</ion-chip>
          <ion-chip :disabled="true">Disabled</ion-chip>
          <ion-chip :outline="true">Outline</ion-chip>
        </div>

        <div class="wrapper">
          <ion-chip>
            <ion-avatar>
              <img alt="Silhouette of a person's head" src="/img/avatar.svg" />
            </ion-avatar>
            <ion-label>Avatar Chip</ion-label>
            <ion-icon :icon="closeCircle"></ion-icon>
          </ion-chip>
          <ion-chip>
            <ion-icon :icon="pin" color="primary"></ion-icon>
            <ion-label>Icon Chip</ion-label>
            <ion-icon :icon="close"></ion-icon>
          </ion-chip>
        </div>

        <div class="wrapper">
          <ion-chip>Default</ion-chip>
          <ion-chip color="primary">Primary</ion-chip>
          <ion-chip color="secondary">Secondary</ion-chip>
          <ion-chip color="tertiary">Tertiary</ion-chip>
          <ion-chip color="success">Success</ion-chip>
          <ion-chip color="warning">Warning</ion-chip>
          <ion-chip color="danger">Danger</ion-chip>
          <ion-chip color="light">Light</ion-chip>
          <ion-chip color="medium">Medium</ion-chip>
          <ion-chip color="dark">Dark</ion-chip>
        </div>

        <div class="wrapper">
          <ion-chip class="custom">Custom</ion-chip>
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
</script>

<style scoped>
  ion-chip.custom {
    --background: #3f4d5a;
    --color: #adefd1;
  }

</style>
