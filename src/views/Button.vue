<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Button</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" class="ion-padding">
      <div id="container">

        <div class="wrapper">
          <ion-toolbar class="ion-margin-vertical ion-padding ion-text-start">
            <b>#Referenced page</b>
            <br/><br/>
            <a href="https://ionicframework.com/docs/api/button" target="_blank">https://ionicframework.com/docs/api/button</a>
            <br/><br/>
            <a href="https://ionicframework.com/docs/api/ripple-effect" target="_blank">https://ionicframework.com/docs/api/ripple-effect</a>
          </ion-toolbar>
        </div>

        <div class="wrapper">
          <ion-button>Default</ion-button>
          <ion-button :disabled="true">Disabled</ion-button>
          <ion-button expand="block">Block</ion-button>
          <ion-button expand="full">Full</ion-button>
          <ion-button>Default</ion-button>
          <ion-button shape="round">Round</ion-button>
          <ion-button>Default</ion-button>
          <ion-button fill="clear">Clear</ion-button>
          <ion-button fill="outline">Outline</ion-button>
          <ion-button fill="solid">Solid</ion-button>
          <ion-button size="small">Small</ion-button>
          <ion-button size="default">Default</ion-button>
          <ion-button size="large">Large</ion-button>
          <ion-button>
            <ion-icon slot="start" :icon="star"></ion-icon>
            Left Icon
          </ion-button>
          <ion-button>
            Right Icon
            <ion-icon slot="end" :icon="star"></ion-icon>
          </ion-button>
          <ion-button>
            <ion-icon slot="icon-only" :icon="star"></ion-icon>
          </ion-button>
          <ion-button>Default</ion-button>
          <ion-button color="primary">Primary</ion-button>
          <ion-button color="secondary">Secondary</ion-button>
          <ion-button color="tertiary">Tertiary</ion-button>
          <ion-button color="success">Success</ion-button>
          <ion-button color="warning">Warning</ion-button>
          <ion-button color="danger">Danger</ion-button>
          <ion-button color="light">Light</ion-button>
          <ion-button color="medium">Medium</ion-button>
          <ion-button color="dark">Dark</ion-button>
        </div>

        <div class="wrapper">
          <ion-title class="ion-margin-vertical">Click on a shape to see the ripple</ion-title>
          <div class="ion-activatable ripple-parent ion-margin rectangle">
            <ion-ripple-effect></ion-ripple-effect>
          </div>
          <div class="ion-activatable ripple-parent ion-margin rounded-rectangle">
            <ion-ripple-effect></ion-ripple-effect>
          </div>
          <div class="ion-activatable ripple-parent ion-margin circle">
            <ion-ripple-effect></ion-ripple-effect>
          </div>
        </div>

        <div class="wrapper">
          <ion-title class="ion-margin-vertical">Click on a shape to see the ripple</ion-title>
          <div class="ion-activatable ripple-parent ion-margin rounded-rectangle">
            Bounded
            <ion-ripple-effect></ion-ripple-effect>
          </div>
          <div class="ion-activatable ripple-parent ion-margin circle">
            Unbounded
            <ion-ripple-effect type="unbounded"></ion-ripple-effect>
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
  import { IonIcon } from '@ionic/vue';
  import { star } from 'ionicons/icons';
</script>

<style scoped>

/*  */

  .ripple-parent {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    border: 1px solid #ddd;
    user-select: none;
  }
  .rectangle {
    width: 300px;
    height: 150px;
  }
  .rounded-rectangle {
    width: 250px;
    height: 75px;
    border-radius: 8px;
  }
  .circle {
    width: 120px;
    height: 120px;
    border-radius: 50%;
  }
</style>
