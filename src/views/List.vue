<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>List</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding" :fullscreen="true">
      <div id="container">

        <div class="wrapper">
          <ion-toolbar class="ion-margin-vertical ion-padding ion-text-start">
            <b>#Referenced page</b>
            <br/><br/>
            <a href="https://ionicframework.com/docs/api/list" target="_blank">https://ionicframework.com/docs/api/list</a>
            <br/><br/>
            <a href="https://ionicframework.com/docs/api/list-header" target="_blank">https://ionicframework.com/docs/api/list-header</a>
          </ion-toolbar>
        </div>

        <div class="wrapper">
          <ion-title>ion-list</ion-title>
          <p>Basic List</p>
          <div class="ion-margin-vertical">
            <ion-list>
              <ion-item>
                <ion-label>Pokémon Yellow</ion-label>
              </ion-item>
              <ion-item>
                <ion-label>Mega Man X</ion-label>
              </ion-item>
              <ion-item>
                <ion-label>The Legend of Zelda</ion-label>
              </ion-item>
              <ion-item>
                <ion-label>Pac-Man</ion-label>
              </ion-item>
              <ion-item>
                <ion-label>Super Mario World</ion-label>
              </ion-item>
            </ion-list>
          </div>
        </div>

        <div class="wrapper">
          <p>Inset List</p>
          <div class="ion-margin-vertical">
            <ion-list :inset="true">
              <ion-item>
                <ion-label>Pokémon Yellow</ion-label>
              </ion-item>
              <ion-item>
                <ion-label>Mega Man X</ion-label>
              </ion-item>
              <ion-item>
                <ion-label>The Legend of Zelda</ion-label>
              </ion-item>
              <ion-item>
                <ion-label>Pac-Man</ion-label>
              </ion-item>
              <ion-item>
                <ion-label>Super Mario World</ion-label>
              </ion-item>
            </ion-list>
          </div>
        </div>

        <div class="wrapper">
          <p>List Lines</p>
          <div class="ion-margin-vertical">
            <ion-list lines="full">
              <ion-item>
                <ion-label>Full Lines</ion-label>
              </ion-item>
              <ion-item>
                <ion-label>Full Lines</ion-label>
              </ion-item>
              <ion-item>
                <ion-label>Full Lines</ion-label>
              </ion-item>
            </ion-list>
            <ion-list lines="inset">
              <ion-item>
                <ion-label>Inset Lines</ion-label>
              </ion-item>
              <ion-item>
                <ion-label>Inset Lines</ion-label>
              </ion-item>
              <ion-item>
                <ion-label>Inset Lines</ion-label>
              </ion-item>
            </ion-list>
            <ion-list lines="none">
              <ion-item>
                <ion-label>No Lines</ion-label>
              </ion-item>
              <ion-item>
                <ion-label>No Lines</ion-label>
              </ion-item>
              <ion-item>
                <ion-label>No Lines</ion-label>
              </ion-item>
            </ion-list>
          </div>
        </div>

        <div class="wrapper">
          <ion-title>ion-list-header</ion-title>
          <p>Basic Usage</p>
          <div class="ion-margin-vertical">
            <ion-list>
              <ion-list-header>
                <ion-label>Video Games</ion-label>
              </ion-list-header>
              <ion-item>
                <ion-label>Pokémon Yellow</ion-label>
              </ion-item>
              <ion-item>
                <ion-label>Mega Man X</ion-label>
              </ion-item>
              <ion-item>
                <ion-label>The Legend of Zelda</ion-label>
              </ion-item>
              <ion-item>
                <ion-label>Pac-Man</ion-label>
              </ion-item>
              <ion-item>
                <ion-label>Super Mario World</ion-label>
              </ion-item>
            </ion-list>
          </div>
        </div>

        <div class="wrapper">
          <p>Buttons in List Headers</p>
          <div class="ion-margin-vertical">
            <ion-list>
              <ion-list-header>
                <ion-label>Video Games</ion-label>
                <ion-button>See All</ion-button>
              </ion-list-header>
              <ion-item>
                <ion-label>Pokémon Yellow</ion-label>
              </ion-item>
              <ion-item>
                <ion-label>Mega Man X</ion-label>
              </ion-item>
              <ion-item>
                <ion-label>The Legend of Zelda</ion-label>
              </ion-item>
              <ion-item>
                <ion-label>Pac-Man</ion-label>
              </ion-item>
              <ion-item>
                <ion-label>Super Mario World</ion-label>
              </ion-item>
            </ion-list>
          </div>
        </div>

        <div class="wrapper">
          <p>List Header Lines</p>
          <div class="ion-margin-vertical">
            <ion-list>
              <ion-list-header>
                <ion-label>Default</ion-label>
              </ion-list-header>
              <ion-item>
                <ion-label>Item</ion-label>
              </ion-item>
              <ion-item>
                <ion-label>Item</ion-label>
              </ion-item>
            </ion-list>
            <ion-list>
              <ion-list-header lines="inset">
                <ion-label>Inset</ion-label>
              </ion-list-header>
              <ion-item>
                <ion-label>Item</ion-label>
              </ion-item>
              <ion-item>
                <ion-label>Item</ion-label>
              </ion-item>
            </ion-list>
            <ion-list>
              <ion-list-header lines="full">
                <ion-label>Full</ion-label>
              </ion-list-header>
              <ion-item>
                <ion-label>Item</ion-label>
              </ion-item>
              <ion-item>
                <ion-label>Item</ion-label>
              </ion-item>
            </ion-list>
          </div>
        </div>

        <div class="wrapper">
          <ion-title>Theming</ion-title>
          <p>Colors</p>
          <div class="ion-margin-vertical">
            <ion-list-header>
              <ion-label>Default</ion-label>
            </ion-list-header>
            <ion-list-header color="primary">
              <ion-label>Primary</ion-label>
            </ion-list-header>
            <ion-list-header color="secondary">
              <ion-label>Secondary</ion-label>
            </ion-list-header>
            <ion-list-header color="tertiary">
              <ion-label>Tertiary</ion-label>
            </ion-list-header>
            <ion-list-header color="success">
              <ion-label>Success</ion-label>
            </ion-list-header>
            <ion-list-header color="warning">
              <ion-label>Warning</ion-label>
            </ion-list-header>
            <ion-list-header color="danger">
              <ion-label>Danger</ion-label>
            </ion-list-header>
            <ion-list-header color="light">
              <ion-label>Light</ion-label>
            </ion-list-header>
            <ion-list-header color="medium">
              <ion-label>Medium</ion-label>
            </ion-list-header>
            <ion-list-header color="dark">
              <ion-label>Dark</ion-label>
            </ion-list-header>
          </div>
        </div>

        <div class="wrapper">
          <p>List Custom Properties</p>
          <div class="ion-margin-vertical">
            <ion-list-header class="CustomProperties">
              <ion-label>Custom List Header</ion-label>
            </ion-list-header>
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
  import { IonItem, IonLabel, IonList, IonListHeader, IonButton } from '@ionic/vue';


</script>

<style scoped>
ion-page {
  display: flex;
  flex-direction: column;
  height: 100%;
}

#container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100%;
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}




/*  */
  .wrapper {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: auto;
    margin: 0 auto 30px;
  }
  .wrapper p,
  .wrapper div {
    width: 100%;
    text-align: left;
  }

  .wrapper > ion-item {
    width: 100%;
    text-align: left;
  }


/*  */
  ion-list-header.CustomProperties {
    --background: #19422d;
    --color: #fff;
    --border-width: 0 0 4px 0;
    --border-color: #f24aec;
    --border-style: double;
  }


</style>

