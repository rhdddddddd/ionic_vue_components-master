<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tabstest1" href="/tabstest1">
          <ion-icon :icon="radio" />
          <ion-label>TabsTest1</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="tabstest2" href="/tabstest2">
          <ion-icon :icon="library" />
          <ion-label>TabsTest2</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="tabstest3" href="/tabstest3">
          <ion-icon :icon="search" />
          <ion-label>TabsTest3</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
  import { IonPage, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonLabel, IonIcon } from '@ionic/vue';
  import { playCircle, radio, library, search } from 'ionicons/icons';
</script>
