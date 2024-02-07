<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Fab</ion-title>
      </ion-toolbar>
    </ion-header>
-
    <ion-content class="ion-padding" :fullscreen="true">
      <div id="container">

        <div class="wrapper">
          <ion-toolbar class="ion-margin-vertical ion-padding ion-text-start">
            <b>#Referenced page</b>
            <br/><br/>
            <a href="https://ionicframework.com/docs/api/fab" target="_blank">https://ionicframework.com/docs/api/fab</a>
          </ion-toolbar>
        </div>

        <div class="wrapper">
          <p>Basic</p>
            <ion-fab>
              <ion-fab-button>
                <ion-icon :icon="add"></ion-icon>
              </ion-fab-button>
            </ion-fab>
        </div>
<br>
<br>
        <div class="wrapper">
          <p>List Side</p>
            <ion-fab slot="fixed" horizontal="center" vertical="center">
              <ion-fab-button>
                <ion-icon :icon="add"></ion-icon>
              </ion-fab-button>
              <ion-fab-list side="top">
                <ion-fab-button>
                  <ion-icon :icon="chevronUp"></ion-icon>
                </ion-fab-button>
              </ion-fab-list>
              <ion-fab-list side="end">
                <ion-fab-button>
                  <ion-icon :icon="chevronForward"></ion-icon>
                </ion-fab-button>
                <ion-fab-button>
                  <ion-icon :icon="chevronForward"></ion-icon>
                </ion-fab-button>
              </ion-fab-list>
              <ion-fab-list side="bottom">
                <ion-fab-button>
                  <ion-icon :icon="chevronDown"></ion-icon>
                </ion-fab-button>
              </ion-fab-list>
              <ion-fab-list side="start">
                <ion-fab-button>
                  <ion-icon :icon="chevronBack"></ion-icon>
                </ion-fab-button>
                <ion-fab-button>
                  <ion-icon :icon="chevronBack"></ion-icon>
                </ion-fab-button>
              </ion-fab-list>
            </ion-fab>
        </div>
<br>
<br>
        <div class="wrapper">
          <p>Positioning</p>
          <ion-fab slot="fixed" vertical="bottom" horizontal="end" class="Positioning">
            <ion-fab-button>
              <ion-icon :icon="chevronUpCircle"></ion-icon>
            </ion-fab-button>
            <ion-fab-list side="top">
              <ion-fab-button>
                <ion-icon :icon="document"></ion-icon>
              </ion-fab-button>
              <ion-fab-button>
                <ion-icon :icon="colorPalette"></ion-icon>
              </ion-fab-button>
              <ion-fab-button>
                <ion-icon :icon="globe"></ion-icon>
              </ion-fab-button>
            </ion-fab-list>
          </ion-fab>
        </div>
<br>
<br>
        <div class="wrapper">
          <p>Button Sizing</p>
          <ion-fab>
            <ion-fab-button size="small">
              <ion-icon :icon="add"></ion-icon>
            </ion-fab-button>
            <ion-fab-list side="end">
              <ion-fab-button>
                <ion-icon :icon="document"></ion-icon>
              </ion-fab-button>
              <ion-fab-button>
                <ion-icon :icon="colorPalette"></ion-icon>
              </ion-fab-button>
              <ion-fab-button>
                <ion-icon :icon="globe"></ion-icon>
              </ion-fab-button>
            </ion-fab-list>
          </ion-fab>
        </div>
<br>
<br>
        <div class="wrapper">
          <p>Theming Colors</p>
          <ion-fab slot="fixed" horizontal="center" vertical="center">
            <ion-fab-button color="secondary">
              <ion-icon :icon="add"></ion-icon>
            </ion-fab-button>
            <ion-fab-list side="top">
              <ion-fab-button color="primary">
                <ion-icon :icon="chevronUp"></ion-icon>
              </ion-fab-button>
            </ion-fab-list>
            <ion-fab-list side="end">
              <ion-fab-button color="tertiary">
                <ion-icon :icon="chevronForward"></ion-icon>
              </ion-fab-button>
              <ion-fab-button color="success">
                <ion-icon :icon="chevronForward"></ion-icon>
              </ion-fab-button>
            </ion-fab-list>
            <ion-fab-list side="bottom">
              <ion-fab-button color="warning">
                <ion-icon :icon="chevronDown"></ion-icon>
              </ion-fab-button>
            </ion-fab-list>
            <ion-fab-list side="start">
              <ion-fab-button color="danger">
                <ion-icon :icon="chevronBack"></ion-icon>
              </ion-fab-button>
              <ion-fab-button color="dark">
                <ion-icon :icon="chevronBack"></ion-icon>
              </ion-fab-button>
            </ion-fab-list>
          </ion-fab>
          <p>CSS Custom Properties</p>
          <ion-fab class="customP">
            <ion-fab-button>
              <ion-icon :icon="add"></ion-icon>
            </ion-fab-button>
            <ion-fab-list side="end">
              <ion-fab-button>
                <ion-icon :icon="document"></ion-icon>
              </ion-fab-button>
              <ion-fab-button>
                <ion-icon :icon="colorPalette"></ion-icon>
              </ion-fab-button>
              <ion-fab-button>
                <ion-icon :icon="globe"></ion-icon>
              </ion-fab-button>
            </ion-fab-list>
          </ion-fab>
          <p>CSS Shadow Parts</p>
          <ion-fab class="shadowP">
            <ion-fab-button>
              <ion-icon :icon="add"></ion-icon>
            </ion-fab-button>
            <ion-fab-list side="end">
              <ion-fab-button>
                <ion-icon :icon="document"></ion-icon>
              </ion-fab-button>
              <ion-fab-button>
                <ion-icon :icon="colorPalette"></ion-icon>
              </ion-fab-button>
              <ion-fab-button>
                <ion-icon :icon="globe"></ion-icon>
              </ion-fab-button>
            </ion-fab-list>
          </ion-fab>
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
  import { IonContent, IonFab, IonFabButton, IonFabList, IonHeader, IonIcon, IonTitle, IonToolbar } from '@ionic/vue';
  import { add, chevronBack, chevronDown, chevronForward, chevronUp, chevronDownCircle, chevronForwardCircle, chevronUpCircle, colorPalette, document, globe } from 'ionicons/icons';

</script>

<style scoped>

ion-fab[slot="fixed"].Positioning {
  margin: 50px 0;
}

.customP ion-fab-button {
  --background: #b7f399;
  --background-activated: #87d361;
  --background-hover: #a3e681;
  --border-radius: 15px;
  --box-shadow: 0px 1px 2px 0px rgba(0,0,0,.3), 0px 1px 3px 1px rgba(0,0,0,.15);
  --color: black;
}


.shadowP ion-fab-button::part(native) {
    background-color: #b7f399;
    border-radius: 15px;
    box-shadow: 0px 1px 2px 0px rgba(0,0,0,.3), 0px 1px 3px 1px rgba(0,0,0,.15);
    color: black;
  }

.shadowP ion-fab-button::part(native):hover::after {
    background-color: #a3e681;
  }

.shadowP ion-fab-button::part(native):active::after {
    background-color: #87d361;
  }

</style>
