<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Toggle</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding" :fullscreen="true">
      <div id="container">

        <div class="wrapper">
          <ion-toolbar class="ion-margin-vertical ion-padding ion-text-start">
            <b>#Referenced page</b>
            <br/><br/>
            <a href="https://ionicframework.com/docs/api/toggle" target="_blank">https://ionicframework.com/docs/api/toggle</a>
          </ion-toolbar>
        </div>


        <div class="wrapper">
          <ion-title>Basic Usage</ion-title>
          <div class="ion-margin-vertical ion-text-center">
            <ion-toggle>Default Toggle</ion-toggle><br /><br />
            <ion-toggle :checked="true">Checked Toggle</ion-toggle><br /><br />
            <ion-toggle :disabled="true">Disabled Toggle</ion-toggle><br /><br />
            <ion-toggle :checked="true" :disabled="true">Disabled Checked Toggle</ion-toggle>
          </div>
        </div>


        <div class="wrapper">
          <ion-title>On / Off Labels</ion-title>
          <div class="ion-margin-vertical ion-text-center">
            <ion-toggle :enable-on-off-labels="true">Enable Notifications</ion-toggle>
          </div>
        </div>


        <div class="wrapper">
          <ion-title>Toggles in a List</ion-title>
          <div class="ion-margin-vertical">
            <ion-list>
              <ion-item>
                <ion-toggle>Receive Push Notifications</ion-toggle>
              </ion-item>
              <ion-item>
                <ion-toggle>Receive Emails</ion-toggle>
              </ion-item>
              <ion-item>
                <ion-toggle>Receive Text Messages</ion-toggle>
              </ion-item>
            </ion-list>
          </div>
        </div>

        <div class="wrapper">
          <ion-title>Label Placement</ion-title>
          <div class="ion-margin-vertical ion-text-center">
            <ion-toggle label-placement="start">Label at the Start</ion-toggle><br /><br />
            <ion-toggle label-placement="end">Label at the End</ion-toggle><br /><br />
            <ion-toggle label-placement="fixed">Fixed Width Label</ion-toggle><br /><br />
            <ion-toggle label-placement="stacked">Stacked Label</ion-toggle>
          </div>
        </div>

        <div class="wrapper">
          <ion-title>Alignment</ion-title>
          <div class="ion-margin-vertical ion-text-center">
            <ion-toggle label-placement="stacked" alignment="start">Aligned to the Start</ion-toggle><br /><br />
            <ion-toggle label-placement="stacked" alignment="center">Aligned to the Center</ion-toggle>
          </div>
        </div>

        <div class="wrapper">
          <ion-title>Justification</ion-title>
          <div class="ion-margin-vertical">
            <ion-list>
              <ion-item>
                <ion-toggle justify="start">Packed at the Start of Line</ion-toggle>
              </ion-item>
              <ion-item>
                <ion-toggle justify="end">Packed at the End of Line</ion-toggle>
              </ion-item>
              <ion-item>
                <ion-toggle justify="space-between">Space Between Label and Control</ion-toggle>
              </ion-item>
            </ion-list>
          </div>
        </div>

        <div class="wrapper">
          <ion-title>Theming</ion-title>
          <p>Colors</p>
          <div class="ion-margin-vertical wrapper">
            <ion-toggle aria-label="Primary toggle" color="primary" class="ion-margin" :checked="true"></ion-toggle>
            <ion-toggle aria-label="Secondary toggle" color="secondary" class="ion-margin" :checked="true"></ion-toggle>
            <ion-toggle aria-label="Tertiary toggle" color="tertiary" class="ion-margin" :checked="true"></ion-toggle>
            <ion-toggle aria-label="Success toggle" color="success" class="ion-margin" :checked="true"></ion-toggle>
            <ion-toggle aria-label="Warning toggle" color="warning" class="ion-margin" :checked="true"></ion-toggle>
            <ion-toggle aria-label="Danger toggle" color="danger" class="ion-margin" :checked="true"></ion-toggle>
            <ion-toggle aria-label="Light toggle" color="light" class="ion-margin" :checked="true"></ion-toggle>
            <ion-toggle aria-label="Medium toggle" color="medium" class="ion-margin" :checked="true"></ion-toggle>
            <ion-toggle aria-label="Dark toggle" color="dark" class="ion-margin" :checked="true"></ion-toggle>
          </div>
        </div>

        <div class="wrapper">
          <p>CSS Custom Properties</p>
          <div class="ion-margin-vertical wrapper">
            <ion-toggle aria-label="Enable Notifications" class="CustomProperties"></ion-toggle>
            <ion-toggle :checked="true" aria-label="Enable Notifications" class="CustomProperties"></ion-toggle>
          </div>
        </div>

        <div class="wrapper">
          <p>CSS Shadow Parts</p>
          <div class="ion-margin-vertical wrapper">
            <ion-toggle aria-label="Enable Notifications" class="ShadowParts"></ion-toggle>
            <ion-toggle :checked="true" aria-label="Enable Notifications" class="ShadowParts"></ion-toggle>
          </div>
        </div>

        <div class="wrapper">
          <ion-title>Using the Modern Syntax</ion-title>
          <div class="ion-margin-vertical">
            <!-- Before -->
            <ion-item>
              <ion-label>Notifications</ion-label>
              <ion-toggle></ion-toggle>
            </ion-item>
            <!-- After -->
            <ion-item>
              <ion-toggle>Notifications</ion-toggle>
            </ion-item>
            <!-- Fixed Labels -->
            <!-- Before -->
            <ion-item>
              <ion-label position="fixed">Notifications</ion-label>
              <ion-toggle></ion-toggle>
            </ion-item>
            <!-- After -->
            <ion-item>
              <ion-toggle label-placement="fixed">Notifications</ion-toggle>
            </ion-item>
            <!-- Toggle at the start of line, Label at the end of line -->
            <!-- Before -->
            <ion-item>
              <ion-label slot="end">Notifications</ion-label>
              <ion-toggle></ion-toggle>
            </ion-item>
            <!-- After -->
            <ion-item>
              <ion-toggle label-placement="end">Notifications</ion-toggle>
            </ion-item>
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
  import { IonContent, IonHeader, IonTitle, IonToolbar, IonToggle, IonButton, toastController } from '@ionic/vue';
  import { ref, onMounted } from 'vue';

</script>

<style scoped>

  /*  */
   ion-toggle.CustomProperties {
    padding: 12px;
    --track-background: #ddd;
    --track-background-checked: #ddd;
    --handle-background: #eb7769;
    --handle-background-checked: #95c34e;
    --handle-width: 25px;
    --handle-height: 27px;
    --handle-max-height: auto;
    --handle-spacing: 6px;
    --handle-border-radius: 4px;
    --handle-box-shadow: none;
  }
  ion-toggle.CustomProperties::part(track) {
    height: 10px;
    width: 65px;
    /* Required for iOS handle to overflow the height of the track */
    overflow: visible;
  }


  /*  */
    ion-toggle.ShadowParts {
    padding: 12px;
    --handle-width: 25px;
    --handle-height: 27px;
    --handle-max-height: auto;
    --handle-spacing: 6px;
    contain: none;
  }
  ion-toggle.ShadowParts::part(track),
  ion-toggle.ShadowParts.toggle-checked::part(track) {
    height: 10px;
    width: 65px;
    background: #ddd;
    /* Required for iOS handle to overflow the height of the track */
    overflow: visible;
  }
  ion-toggle.ShadowParts::part(handle) {
    background: #eb7769;
    border-radius: 4px;
    box-shadow: none;
  }
  ion-toggle.ShadowParts.toggle-checked::part(handle) {
    background: #95c34e;
  }
</style>

