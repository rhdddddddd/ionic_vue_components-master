<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Media</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding" :fullscreen="true">
      <div id="container">

        <div class="wrapper">
          <ion-toolbar class="ion-margin-vertical ion-padding ion-text-start">
            <b>#Referenced page</b>
            <br/><br/>
            <a href="https://ionicframework.com/docs/api/avatar" target="_blank">https://ionicframework.com/docs/api/avatar</a>
            <br/><br/>
            <a href="https://ionicframework.com/docs/api/icon" target="_blank">https://ionicframework.com/docs/api/icon</a>
            <br/><br/>
            <a href="https://ionicframework.com/docs/api/img" target="_blank">https://ionicframework.com/docs/api/img</a>
            <br/><br/>
            <a href="https://ionicframework.com/docs/api/thumbnail" target="_blank">https://ionicframework.com/docs/api/thumbnail</a>
          </ion-toolbar>
        </div>

        <div class="wrapper">
          <ion-title>ion-avatar</ion-title>
          <p>Basic Usage</p>
          <div class="ion-margin-vertical wrapper">
            <ion-avatar class="">
              <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
            </ion-avatar>
          </div>
          <p>Chip Avatar</p>
          <div class="ion-margin-vertical wrapper">
            <ion-chip>
              <ion-avatar>
                <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
              </ion-avatar>
              <ion-label>Chip Avatar</ion-label>
            </ion-chip>
          </div>
          <p>Item Avatar</p>
          <div class="ion-margin-vertical wrapper">
            <ion-item>
              <ion-avatar slot="start">
                <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
              </ion-avatar>
              <ion-label>Item Avatar</ion-label>
            </ion-item>
          </div>
          <p>Theming CSS Custom Properties</p>
          <div class="ion-margin-vertical wrapper">
            <ion-avatar class="customProperties">
              <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
            </ion-avatar>
          </div>
        </div>

        <div class="wrapper">
          <ion-title>ion-icon</ion-title>
          <p>Basic Usage</p>
          <div class="ion-margin-vertical wrapper">
            <ion-icon :icon="logoIonic"></ion-icon>
            <ion-icon :icon="logoIonic" size="large"></ion-icon>
            <ion-icon :icon="logoIonic" color="primary"></ion-icon>
            <ion-icon :icon="logoIonic" size="large" color="primary"></ion-icon>
          </div>
        </div>

        <div class="wrapper">
          <ion-title>ion-img</ion-title>
          <p>Basic Usage</p>
          <div class="ion-margin-vertical">
            <ion-img
              src="https://docs-demo.ionic.io/assets/madison.jpg"
              alt="The Wisconsin State Capitol building in Madison, WI at night"
            ></ion-img>
          </div>
        </div>

        <div class="wrapper">
          <ion-title>ion-thumbnail</ion-title>
          <p>Basic Usage</p>
          <div class="ion-margin-vertical wrapper">
            <ion-thumbnail>
              <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
            </ion-thumbnail>
          </div>
          <p>Item Thumbnails</p>
          <div class="ion-margin-vertical wrapper">
            <ion-item>
              <ion-thumbnail slot="start">
                <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
              </ion-thumbnail>
              <ion-label>Item Thumbnail</ion-label>
            </ion-item>
          </div>
          <p>Theming​ CSS Custom Properties</p>
          <div class="ion-margin-vertical wrapper">
            <ion-thumbnail class="customProperties">
              <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
            </ion-thumbnail>
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
import { IonItem, IonLabel, IonAvatar, IonIcon, IonImg,  IonThumbnail } from '@ionic/vue';
import { logoIonic } from 'ionicons/icons';
</script>

<style scoped>
ion-avatar.customProperties {
  --border-radius: 4px;
}
ion-thumbnail.customProperties {
  --size: 140px;
  --border-radius: 14px;
}
</style>

