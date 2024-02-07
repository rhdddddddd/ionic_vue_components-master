<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Infinitescroll</ion-title>
      </ion-toolbar>
    </ion-header>
-
    <ion-content class="ion-padding" :fullscreen="true">
      <div id="container">

        <div class="wrapper">
          <ion-toolbar class="ion-margin-vertical ion-padding ion-text-start">
            <b>#Referenced page</b>
            <br/><br/>
            <a href="https://ionicframework.com/docs/api/infinite-scroll" target="_blank">https://ionicframework.com/docs/api/infinite-scroll</a>
          </ion-toolbar>
        </div>

        <div class="wrapper">
          <p>Basic</p>
          <div class="ion-margin-vertical">
            <ion-list>
              <ion-item v-for="(item, index) in items">
                <ion-avatar slot="start">
                  <img :src="'https://picsum.photos/80/80?random=' + index" alt="avatar" />
                </ion-avatar>
                <ion-label>{{ item }}</ion-label>
              </ion-item>
            </ion-list>
            <ion-infinite-scroll @ionInfinite="ionInfinite">
              <ion-infinite-scroll-content
                loading-text="Please wait..."
                loading-spinner="bubbles"
              ></ion-infinite-scroll-content>
            </ion-infinite-scroll>
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
  import {
    IonContent,
    IonInfiniteScroll,
    IonInfiniteScrollContent,
    IonList,
    IonItem,
    IonAvatar,
    IonImg,
    IonLabel
  } from '@ionic/vue';
  import { reactive } from 'vue';

  const items = reactive([]);

  const generateItems = () => {
    const count = items.length + 1;
    for (let i = 0; i < 50; i++) {
      items.push(`Item ${count + i}`);
    }
  };

  const ionInfinite = (ev: InfiniteScrollCustomEvent) => {
    generateItems();
    setTimeout(() => ev.target.complete(), 500);
  };

  generateItems();

</script>

<style scoped>

.infinite-loading {
  text-align: center;
  padding: 20px 0;
}

.infinite-loading .infinite-loading-text {
  margin-inline-start: 0;
  margin-inline-end: 0;
}
</style>
