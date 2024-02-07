<template>

  <ion-menu :type="menuType" menu-id="menu1" content-id="menu-page-content">
    <ion-header>
      <ion-toolbar>
        <ion-title>menu1</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-item>{{ menuType }}</ion-item>
      <br />
      <ion-button expand="block" @click="toggleMenu1()">toggle menu1</ion-button>
      <ion-button expand="block" @click="closeMenu1()">Close menu1</ion-button>
      <!-- <ion-menu-toggle>
        <ion-button>Click to close the menu</ion-button>
      </ion-menu-toggle> -->
    </ion-content>
  </ion-menu>

  <ion-menu :type="menuType" side="end" menu-id="menu2" content-id="menu-page-content">
    <ion-header>
      <ion-toolbar>
        <ion-title>menu2</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-item>{{ menuType }}</ion-item>
      <br />
      <ion-button expand="block" @click="toggleMenu2()">toggle menu2</ion-button>
      <ion-button expand="block" @click="closeMenu2()">Close menu2</ion-button>
      <!-- <ion-menu-toggle>
        <ion-button>Click to close the menu</ion-button>
      </ion-menu-toggle> -->
    </ion-content>
  </ion-menu>

  <div class="ion-page" id="menu-page-content">
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Menu</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <div id="container">

        <div class="wrapper">
          <ion-toolbar class="ion-margin-vertical ion-padding ion-text-start">
            <b>#Referenced page</b>
            <br/><br/>
            <a href="https://ionicframework.com/docs/api/menu" target="_blank">https://ionicframework.com/docs/api/menu</a>
            <br/><br/>
            <a href="https://ionicframework.com/docs/api/split-pane" target="_blank">https://ionicframework.com/docs/api/split-pane</a>
          </ion-toolbar>
        </div>

        <div class="wrapper">
          <ion-title>ion-menu</ion-title>
          <p class="ion-text-center">Menu Toggle & Menu Types & Menu Sides & Multiple Menus & CSS Shadow Parts</p>
          <div class="ion-margin-vertical">
            <h2 class="ion-text-center">Select an overlay type:</h2>
            <ion-radio-group value="overlay" v-model="menuType">
              <ion-item>
                <ion-label>
                  <code>overlay</code>
                </ion-label>
                <ion-radio value="overlay"></ion-radio>
              </ion-item>
              <ion-item>
                <ion-label>
                  <code>reveal</code>
                </ion-label>
                <ion-radio value="reveal"></ion-radio>
              </ion-item>
              <ion-item>
                <ion-label>
                  <code>push</code>
                </ion-label>
                <ion-radio value="push"></ion-radio>
              </ion-item>
              <ion-item class="ion-text-center">
                <strong>Select Type</strong>
                <ion-text class="ion-padding-start" color="primary">{{ menuType }}</ion-text>
              </ion-item>
            </ion-radio-group>
          </div>
          <div class="ion-margin-vertical">
            <ion-row class="ion-justify-content-center">
              <ion-col size="6">
                <ion-button expand="block" @click="toggleMenu1()">toggle menu1</ion-button>
              </ion-col>
              <ion-col size="6">
                <ion-button expand="block" @click="openMenu1()">Open menu1</ion-button>
              </ion-col>
              <ion-col size="6">
                <ion-button expand="block" @click="toggleMenu2()">toggle menu2</ion-button>
              </ion-col>
              <ion-col size="6">
                <ion-button expand="block" @click="openMenu2()">Open menu2</ion-button>
              </ion-col>
            </ion-row>
          </div>
        </div>

        <div class="wrapper">
          <ion-title>ion-split-pane</ion-title>
          <div class="ion-margin-vertical">
            <ion-toolbar class="ion-padding ion-text-start">
              <ion-text style="word-break: break-all;">Please open the left menu in the header to check the behavior!</ion-text>
            </ion-toolbar>
          </div>
        </div>

      </div>
    </ion-content>

    <ion-footer :translucent="true">
      <ion-toolbar>
        <ion-title>ionic x Vue.js Components-master</ion-title>
      </ion-toolbar>
    </ion-footer>
  </div>
</template>



<script setup lang="ts">
  import { IonButton, IonContent, IonHeader, IonItem, IonLabel, IonMenu, IonMenuToggle, IonPage, IonRadio, IonRadioGroup, IonTitle, IonToolbar, menuController
  } from '@ionic/vue';
  import { ref } from 'vue';

  const menuType = ref('overlay');


  const openMenu1 = async () => {
    await menuController.open('menu1');
  };
  const closeMenu1 = async () => {
    await menuController.close('menu1');
  };
  const toggleMenu1 = async () => {
    await menuController.toggle('menu1');
  };

  const openMenu2 = async () => {
    await menuController.open('menu2');
  };
  const closeMenu2 = async () => {
    await menuController.close('menu2');
  };
  const toggleMenu2 = async () => {
    await menuController.toggle('menu2');
  };

</script>

<style scoped>

/*  */
ion-menu::part(backdrop) {
  background-color: rgba(255, 0, 255, 0.5);
}
ion-menu::part(container) {
  border-radius: 0 20px 20px 0;
  box-shadow: 4px 0px 16px rgba(255, 0, 255, 0.18);
}
</style>

