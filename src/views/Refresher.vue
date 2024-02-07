<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Refresher</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding" :fullscreen="true">
    <!-- <ion-content class="ion-padding" :fullscreen="true" :scroll-y="false"> -->
      <div id="container">

        <div class="wrapper">
          <ion-toolbar class="ion-margin-vertical ion-padding ion-text-start">
            <b>#Referenced page</b>
            <br/><br/>
            <a href="https://ionicframework.com/docs/api/refresher" target="_blank">https://ionicframework.com/docs/api/refresher</a>
          </ion-toolbar>
        </div>


        <div class="wrapper">
          <ion-title>Basic Usage</ion-title>
          <p>Pull to Refresh</p>
          <div class="ion-margin-vertical">
            <ion-refresher slot="fixed" @ionRefresh="handleRefresh1($event)">
              <ion-refresher-content></ion-refresher-content>
            </ion-refresher>
            <p>Pull this content down to trigger the refresh.</p>
          </div>
        </div>

<!--
        <div class="wrapper">
          <p>Pull Properties</p>
          <div class="ion-margin-vertical">
            <ion-refresher slot="fixed" :pull-factor="0.5" :pull-min="100" :pull-max="200" @ionRefresh="handleRefresh2($event)">
              <ion-refresher-content></ion-refresher-content>
            </ion-refresher>
            <p>Pull this content down to trigger the refresh.</p>
          </div>
        </div>

        <div class="wrapper">
          <p>Custom Refresher Content</p>
          <div class="ion-margin-vertical">
            <ion-refresher slot="fixed" @ionRefresh="handleRefresh3($event)">
              <ion-refresher-content
                :pulling-icon="chevronDownCircleOutline"
                pulling-text="Pull to refresh"
                refreshing-spinner="circles"
                refreshing-text="Refreshing..."
              >
              </ion-refresher-content>
            </ion-refresher>
            <p>Pull this content down to trigger the refresh.</p>
          </div>
        </div> -->

        <!-- <div class="wrapper">
          <p>Usage with Virtual Scroll</p>
          <div class="ion-margin-vertical">
            <ion-refresher slot="fixed" @ionRefresh="handleRefresh4($event)">
              <ion-refresher-content></ion-refresher-content>
            </ion-refresher>
            <div class="ion-content-scroll-host ion-padding VirtualScroll">
              <p>Pull this content down to trigger the refresh.</p>
            </div>
          </div>
        </div> -->

        <div class="wrapper">
          <ion-title>Usage with Virtual Scroll</ion-title>
          <p>Advanced Usage</p>
          <div class="ion-margin-vertical">
            <ion-refresher slot="fixed" @ionRefresh="handleRefresh5($event)">
              <ion-refresher-content></ion-refresher-content>
            </ion-refresher>
            <ion-list>
              <ion-item :button="true" v-for="item in items5">
                <ion-icon slot="start" color="primary" :icon="item.unread ? ellipse : ''"></ion-icon>
                <ion-label>
                  <h2>{{ item.name }}</h2>
                  <p>New message from {{ item.name }}</p>
                </ion-label>
              </ion-item>
            </ion-list>
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
  import { IonContent, IonHeader, IonRefresher, IonRefresherContent, IonTitle, IonToolbar } from '@ionic/vue';
import { ref, onMounted } from 'vue';
import { chevronDownCircleOutline, ellipse } from 'ionicons/icons';


//
  const handleRefresh1 = (event: CustomEvent) => {
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 2000);
  };


//
  const handleRefresh2 = (event: CustomEvent) => {
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 2000);
  };


//
  const handleRefresh3 = (event: CustomEvent) => {
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 2000);
  };

//
  const handleRefresh4 = (event: CustomEvent) => {
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 2000);
  };


//
  const names5 = [
    'Burt Bear',
    'Charlie Cheetah',
    'Donald Duck',
    'Eva Eagle',
    'Ellie Elephant',
    'Gino Giraffe',
    'Isabella Iguana',
    'Karl Kitten',
    'Lionel Lion',
    'Molly Mouse',
    'Paul Puppy',
    'Rachel Rabbit',
    'Ted Turtle',
  ];
  let items5 = ref([]);

  const chooseRandomName = () => {
    return names5[Math.floor(Math.random() * names5.length)];
  };

  const addItems = (count, unread = false) => {
    for (let i = 0; i < count; i++) {
      items5.value.unshift({ name: chooseRandomName(), unread });
    }
  };

  addItems(5);

  const handleRefresh5 = (event: CustomEvent) => {
    setTimeout(() => {
      addItems(3, true);
      event.target.complete();
    }, 2000);
  };


</script>

<style scoped>


  /*  */
  .ion-content-scroll-host.VirtualScroll {
    position: absolute;
    top: 50px;
    left: 0;
    height: 100%;
    width: 100%;
    overflow-y: auto;
  }


</style>

