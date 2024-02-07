<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Popover</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding" :fullscreen="true">
      <div id="container">

        <div class="wrapper">
          <ion-toolbar class="ion-margin-vertical ion-padding ion-text-start">
            <b>#Referenced page</b>
            <br/><br/>
            <a href="https://ionicframework.com/docs/api/popover" target="_blank">https://ionicframework.com/docs/api/popover</a>
          </ion-toolbar>
        </div>

        <div class="wrapper">
          <ion-title>Inline Popovers</ion-title>
          <p>Triggers</p>
          <div class="ion-margin-vertical wrapper">
            <ion-button id="click-trigger">Left-Click Me</ion-button>
            <ion-popover trigger="click-trigger" trigger-action="click">
              <ion-content class="ion-padding">Hello World!0</ion-content>
            </ion-popover>
            <ion-button id="context-menu-trigger">Right-Click Me</ion-button>
            <ion-popover trigger="context-menu-trigger" trigger-action="context-menu">
              <ion-content class="ion-padding">Hello World!0</ion-content>
            </ion-popover>
            <ion-button id="hover-trigger">Hover Over Me</ion-button>
            <ion-popover trigger="hover-trigger" trigger-action="hover">
              <ion-content class="ion-padding">Hello World!0</ion-content>
            </ion-popover>
          </div>
        </div>

        <div class="wrapper">
          <p>isOpen Property</p>
          <div class="ion-margin-vertical wrapper">
            <ion-button @click="openPopover1($event)">Click Me</ion-button>
            <ion-popover :is-open="popoverOpen1" :event="event1" @didDismiss="popoverOpen1 = false">
              <ion-content class="ion-padding">Hello World!1</ion-content>
            </ion-popover>
          </div>
        </div>

        <div class="wrapper">
          <ion-title>Inline Popovers</ion-title>
          <p>Usage</p>
          <div class="ion-margin-vertical wrapper">
            <ion-button @click="openPopover2">Click Me</ion-button>
            <p class="ion-text-center">{{ roleMsg2 }}</p>
          </div>
        </div>

        <div class="wrapper">
          <ion-title>Styling</ion-title>
          <div class="ion-margin-vertical wrapper">
            <ion-button id="trigger-button3">Click Me</ion-button>
            <ion-popover trigger="trigger-button3" id="stylingItem3">
              <ion-content class="ion-padding">Hello Styled World!3</ion-content>
            </ion-popover>
          </div>
        </div>

        <div class="wrapper">
          <ion-title>Positioning</ion-title>
          <p>Side and Alignment Demo</p>
          <div class="ion-margin-vertical wrapper">
            <ion-button id="top-center">Side=Top, Alignment=Center</ion-button>
            <ion-popover trigger="top-center" side="top" alignment="center">
              <ion-content class="ion-padding">Hello World!</ion-content>
            </ion-popover>
            <ion-button id="bottom-start">Side=Bottom, Alignment=Start</ion-button>
            <ion-popover trigger="bottom-start" side="bottom" alignment="start">
              <ion-content class="ion-padding">Hello World!</ion-content>
            </ion-popover>
            <ion-button id="left-start">Side=Left, Alignment=Start</ion-button>
            <ion-popover trigger="left-start" side="left" alignment="start">
              <ion-content class="ion-padding">Hello World!</ion-content>
            </ion-popover>
            <ion-button id="right-end">Side=Right, Alignment=End</ion-button>
            <ion-popover trigger="right-end" side="right" alignment="end">
              <ion-content class="ion-padding">Hello World!</ion-content>
            </ion-popover>
          </div>
        </div>

        <div class="wrapper">
          <ion-title>Sizing</ion-title>
          <div class="ion-margin-vertical wrapper">
            <ion-button id="auto-trigger">Size=Auto</ion-button>
            <ion-popover trigger="auto-trigger" size="auto">
              <ion-content class="ion-padding">Hello!</ion-content>
            </ion-popover>
            <ion-button id="cover-trigger">Size=Cover</ion-button>
            <ion-popover trigger="cover-trigger" size="cover">
              <ion-content class="ion-padding">Hello!</ion-content>
            </ion-popover>
          </div>
        </div>

        <div class="wrapper">
          <ion-title>Nested Popovers</ion-title>
          <div class="ion-margin-vertical wrapper">
            <ion-button id="popover-button">Open Menu</ion-button>
            <ion-popover trigger="popover-button" :dismiss-on-select="true">
              <ion-content>
                <ion-list>
                  <ion-item :button="true" :detail="false">Option 1</ion-item>
                  <ion-item :button="true" :detail="false">Option 2</ion-item>
                  <ion-item :button="true" id="nested-trigger">More options...</ion-item>
                  <ion-popover trigger="nested-trigger" :dismiss-on-select="true" side="end">
                    <ion-content>
                      <ion-list>
                        <ion-item :button="true" :detail="false">Nested option</ion-item>
                      </ion-list>
                    </ion-content>
                  </ion-popover>
                </ion-list>
              </ion-content>
            </ion-popover>
          </div>
        </div>

        <div class="wrapper">
          <ion-title>Performance</ion-title>
          <p>Mounting Inner Contents</p>
          <div class="ion-margin-vertical wrapper">
            <ion-button id="open-popover">Open Popover</ion-button>
            <ion-popover :keep-contents-mounted="true" trigger="open-popover">
              <ion-content class="ion-padding">This content was mounted as soon as the popover was created.</ion-content>
            </ion-popover>
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
import { IonPopover, IonButton, popoverController } from '@ionic/vue';
import { ref, onMounted } from 'vue';
import { logoIonic } from 'ionicons/icons';

import PopoverItem1 from '../components/PopoverItem1.vue';

//
  let popoverOpen1 = ref(false);
  let event1 = ref();
  const openPopover1 = (e: Event) => {
    event1.value = e;
    popoverOpen1.value = true;
  };


//
  let roleMsg2 = ref('');
  const openPopover2 = async (e: Event) => {
    const popover = await popoverController.create({
      component: PopoverItem1,
      event: e,
    });
    await popover.present();
    const { role } = await popover.onDidDismiss();
    roleMsg2.value = `Popover dismissed with role: ${role}`;
  };


</script>

<style scoped>


/*  */
  ion-popover#stylingItem3 {
    --background: rgba(40, 173, 218, 0.6);
    --backdrop-opacity: 0.6;
    --box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.6);
    --color: white;
    /* --width: 300px; */
  }
  ion-popover#stylingItem3 ion-content {
    --background: rgba(40, 173, 218, 0.6);
  }
  ion-popover#stylingItem3::part(backdrop) {
    background-color: rgb(6, 14, 106);
  }
</style>

