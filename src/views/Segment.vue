<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Segment</ion-title>
      </ion-toolbar>
      <!-- Segments in Toolbars -->
      <ion-toolbar>
        <ion-segment value="all">
          <ion-segment-button value="all">
            <ion-label>All</ion-label>
          </ion-segment-button>
          <ion-segment-button value="favorites">
            <ion-label>Favorites</ion-label>
          </ion-segment-button>
        </ion-segment>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding" :fullscreen="true">
      <div id="container">

        <div class="wrapper">
          <ion-toolbar class="ion-margin-vertical ion-padding ion-text-start">
            <b>#Referenced page</b>
            <br/><br/>
            <a href="https://ionicframework.com/docs/api/segment" target="_blank">https://ionicframework.com/docs/api/segment</a>
            <br/><br/>
            <a href="https://ionicframework.com/docs/api/segment-button" target="_blank">https://ionicframework.com/docs/api/segment-button</a>
          </ion-toolbar>
        </div>

        <div class="wrapper">
          <ion-title>ion-segment</ion-title>
          <p>Basic Usage</p>
          <div class="ion-margin-vertical">
            <ion-segment value="default">
              <ion-segment-button value="default">
                <ion-label>Default</ion-label>
              </ion-segment-button>
              <ion-segment-button value="segment">
                <ion-label>Segment</ion-label>
              </ion-segment-button>
            </ion-segment>
            <br/>
            <ion-segment :disabled="true" value="disabled">
              <ion-segment-button value="disabled">
                <ion-label>Disabled</ion-label>
              </ion-segment-button>
              <ion-segment-button value="segment">
                <ion-label>Segment</ion-label>
              </ion-segment-button>
            </ion-segment>
          </div>
        </div>

        <div class="wrapper">
          <p>Scrollable Segments</p>
          <div class="ion-margin-vertical">
            <ion-segment :scrollable="true" value="heart">
              <ion-segment-button value="home">
                <ion-icon :icon="home"></ion-icon>
              </ion-segment-button>
              <ion-segment-button value="heart">
                <ion-icon :icon="heart"></ion-icon>
              </ion-segment-button>
              <ion-segment-button value="pin">
                <ion-icon :icon="pin"></ion-icon>
              </ion-segment-button>
              <ion-segment-button value="star">
                <ion-icon :icon="star"></ion-icon>
              </ion-segment-button>
              <ion-segment-button value="call">
                <ion-icon :icon="call"></ion-icon>
              </ion-segment-button>
              <ion-segment-button value="globe">
                <ion-icon :icon="globe"></ion-icon>
              </ion-segment-button>
              <ion-segment-button value="basket">
                <ion-icon :icon="basket"></ion-icon>
              </ion-segment-button>
              <ion-segment-button value="barbell">
                <ion-icon :icon="barbell"></ion-icon>
              </ion-segment-button>
              <ion-segment-button value="trash">
                <ion-icon :icon="trash"></ion-icon>
              </ion-segment-button>
              <ion-segment-button value="person">
                <ion-icon :icon="person"></ion-icon>
              </ion-segment-button>
            </ion-segment>
          </div>
        </div>

        <div class="wrapper">
          <ion-title>Segments in Toolbars</ion-title>
          <div class="ion-margin-vertical wrapper">
            <span>↑Look at the toolbar in the header :)</span>
          </div>
        </div>

        <div class="wrapper">
          <ion-title>Theming</ion-title>
          <p>Colors</p>
          <div class="ion-margin-vertical">
            <ion-segment value="default">
              <ion-segment-button value="default">
                <ion-label>Default</ion-label>
              </ion-segment-button>
              <ion-segment-button value="segment">
                <ion-label>Segment</ion-label>
              </ion-segment-button>
            </ion-segment>
            <ion-segment color="primary" value="primary">
              <ion-segment-button value="primary">
                <ion-label>Primary</ion-label>
              </ion-segment-button>
              <ion-segment-button value="segment">
                <ion-label>Segment</ion-label>
              </ion-segment-button>
            </ion-segment>
            <ion-segment color="secondary" value="secondary">
              <ion-segment-button value="secondary">
                <ion-label>Secondary</ion-label>
              </ion-segment-button>
              <ion-segment-button value="segment">
                <ion-label>Segment</ion-label>
              </ion-segment-button>
            </ion-segment>
            <ion-segment color="tertiary" value="tertiary">
              <ion-segment-button value="tertiary">
                <ion-label>Tertiary</ion-label>
              </ion-segment-button>
              <ion-segment-button value="segment">
                <ion-label>Segment</ion-label>
              </ion-segment-button>
            </ion-segment>
            <ion-segment color="success" value="success">
              <ion-segment-button value="success">
                <ion-label>Success</ion-label>
              </ion-segment-button>
              <ion-segment-button value="segment">
                <ion-label>Segment</ion-label>
              </ion-segment-button>
            </ion-segment>
            <ion-segment color="warning" value="warning">
              <ion-segment-button value="warning">
                <ion-label>Warning</ion-label>
              </ion-segment-button>
              <ion-segment-button value="segment">
                <ion-label>Segment</ion-label>
              </ion-segment-button>
            </ion-segment>
            <ion-segment color="danger" value="danger">
              <ion-segment-button value="danger">
                <ion-label>Danger</ion-label>
              </ion-segment-button>
              <ion-segment-button value="segment">
                <ion-label>Segment</ion-label>
              </ion-segment-button>
            </ion-segment>
            <ion-segment color="light" value="light">
              <ion-segment-button value="light">
                <ion-label>Light</ion-label>
              </ion-segment-button>
              <ion-segment-button value="segment">
                <ion-label>Segment</ion-label>
              </ion-segment-button>
            </ion-segment>
            <ion-segment color="medium" value="medium">
              <ion-segment-button value="medium">
                <ion-label>Medium</ion-label>
              </ion-segment-button>
              <ion-segment-button value="segment">
                <ion-label>Segment</ion-label>
              </ion-segment-button>
            </ion-segment>
            <ion-segment color="dark" value="dark">
              <ion-segment-button value="dark">
                <ion-label>Dark</ion-label>
              </ion-segment-button>
              <ion-segment-button value="segment">
                <ion-label>Segment</ion-label>
              </ion-segment-button>
            </ion-segment>
          </div>
        </div>

        <div class="wrapper">
          <p>CSS Custom Properties</p>
          <div class="ion-margin-vertical">
            <ion-segment value="custom" class="custom">
              <ion-segment-button value="custom">
                <ion-label>Custom</ion-label>
              </ion-segment-button>
              <ion-segment-button value="segment">
                <ion-label>Segment</ion-label>
              </ion-segment-button>
            </ion-segment>
          </div>
        </div>

<hr>

        <div class="wrapper">
          <ion-title>ion-segment-button</ion-title>
          <p>Basic Usage</p>
          <div class="ion-margin-vertical">
            <ion-segment value="buttons">
              <ion-segment-button value="default">
                <ion-label>Default</ion-label>
              </ion-segment-button>
              <ion-segment-button value="segment">
                <ion-label>Segment</ion-label>
              </ion-segment-button>
              <ion-segment-button value="buttons">
                <ion-label>Button</ion-label>
              </ion-segment-button>
            </ion-segment>
            <br/>
            <ion-segment value="buttons">
              <ion-segment-button value="disabled" :disabled="true">
                <ion-label>Disabled</ion-label>
              </ion-segment-button>
              <ion-segment-button value="segment">
                <ion-label>Segment</ion-label>
              </ion-segment-button>
              <ion-segment-button value="buttons">
                <ion-label>Button</ion-label>
              </ion-segment-button>
            </ion-segment>
          </div>
        </div>

        <div class="wrapper">
          <p>Layout</p>
          <div class="ion-margin-vertical">
            <ion-segment value="heart">
              <ion-segment-button value="call">
                <ion-icon :icon="call"></ion-icon>
              </ion-segment-button>
              <ion-segment-button value="heart">
                <ion-icon :icon="heart"></ion-icon>
              </ion-segment-button>
              <ion-segment-button value="pin">
                <ion-icon :icon="pin"></ion-icon>
              </ion-segment-button>
            </ion-segment>
            <br/>
            <ion-segment value="heart">
              <ion-segment-button value="call">
                <ion-label>Call</ion-label>
                <ion-icon :icon="call"></ion-icon>
              </ion-segment-button>
              <ion-segment-button value="heart">
                <ion-label>Heart</ion-label>
                <ion-icon :icon="heart"></ion-icon>
              </ion-segment-button>
              <ion-segment-button value="pin">
                <ion-label>Pin</ion-label>
                <ion-icon :icon="pin"></ion-icon>
              </ion-segment-button>
            </ion-segment>
            <br/>
            <ion-segment value="heart">
              <ion-segment-button value="call" layout="icon-bottom">
                <ion-label>Call</ion-label>
                <ion-icon :icon="call"></ion-icon>
              </ion-segment-button>
              <ion-segment-button value="heart" layout="icon-bottom">
                <ion-label>Heart</ion-label>
                <ion-icon :icon="heart"></ion-icon>
              </ion-segment-button>
              <ion-segment-button value="pin" layout="icon-bottom">
                <ion-label>Pin</ion-label>
                <ion-icon :icon="pin"></ion-icon>
              </ion-segment-button>
            </ion-segment>
            <br/>
            <ion-segment value="heart">
              <ion-segment-button value="call" layout="icon-start">
                <ion-label>Call</ion-label>
                <ion-icon :icon="call"></ion-icon>
              </ion-segment-button>
              <ion-segment-button value="heart" layout="icon-start">
                <ion-label>Heart</ion-label>
                <ion-icon :icon="heart"></ion-icon>
              </ion-segment-button>
              <ion-segment-button value="pin" layout="icon-start">
                <ion-label>Pin</ion-label>
                <ion-icon :icon="pin"></ion-icon>
              </ion-segment-button>
            </ion-segment>
            <br/>
            <ion-segment value="heart">
              <ion-segment-button value="call" layout="icon-end">
                <ion-label>Call</ion-label>
                <ion-icon :icon="call"></ion-icon>
              </ion-segment-button>
              <ion-segment-button value="heart" layout="icon-end">
                <ion-label>Heart</ion-label>
                <ion-icon :icon="heart"></ion-icon>
              </ion-segment-button>
              <ion-segment-button value="pin" layout="icon-end">
                <ion-label>Pin</ion-label>
                <ion-icon :icon="pin"></ion-icon>
              </ion-segment-button>
            </ion-segment>
          </div>
        </div>

        <div class="wrapper">
          <ion-title>Theming</ion-title>
          <p>CSS Shadow Parts</p>
          <div class="ion-margin-vertical">
            <ion-segment value="custom" class="shadow">
              <ion-segment-button value="custom">
                <ion-label>Custom</ion-label>
              </ion-segment-button>
              <ion-segment-button value="segment">
                <ion-label>Segment</ion-label>
              </ion-segment-button>
              <ion-segment-button value="buttons">
                <ion-label>Buttons</ion-label>
              </ion-segment-button>
            </ion-segment>
          </div>
        </div>

        <div class="wrapper">
          <p>CSS Custom Properties</p>
          <div class="ion-margin-vertical">
            <ion-segment value="custom" class="custom2">
              <ion-segment-button value="custom">
                <ion-label>Custom</ion-label>
              </ion-segment-button>
              <ion-segment-button value="segment">
                <ion-label>Segment</ion-label>
              </ion-segment-button>
              <ion-segment-button value="buttons">
                <ion-label>Buttons</ion-label>
              </ion-segment-button>
            </ion-segment>
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
  import { IonContent, IonHeader, IonSegment, IonSegmentButton, IonTitle, IonToolbar } from '@ionic/vue';
import { ref, onMounted } from 'vue';
import { home, heart, pin, star, call, globe, basket, barbell, trash, person } from 'ionicons/icons';



//
  const data1 = [
    'Amsterdam',
    'Buenos Aires',
    'Cairo',
    'Geneva',
    'Hong Kong',
    'Istanbul',
    'London',
    'Madrid',
    'New York',
    'Panama City',
  ];
  const results1 = ref(data1);
  const handleInput1 = (event: CustomEvent) => {
    const query = event.target.value.toLowerCase();
    results1.value = data1.filter((d) => d.toLowerCase().indexOf(query) > -1);
  };




</script>

<style scoped>


  /*  */
  ion-segment.custom {
    --background: #54dc98;
  }


  /*  */
  ion-segment.shadow ion-segment-button::part(indicator-background) {
    background: #08a391;
  }
  /* Material Design styles */
  ion-segment.shadow ion-segment-button.md::part(native) {
    color: #474747;
  }
  ion-segment.shadow .segment-button-checked.md::part(native) {
    color: #08a391;
  }
  ion-segment.shadow ion-segment-button.md::part(indicator-background) {
    height: 4px;
  }
  /* iOS styles */
  ion-segment.shadow on-segment-button.ios::part(native) {
    color: #08a391;
  }
  ion-segment.shadow .segment-button-checked.ios::part(native) {
    color: #fff;
  }
  ion-segment.shadow ion-segment-button.ios::part(indicator-background) {
    border-radius: 20px;
  }



  /*  */
  ion-segment.custom2 ion-segment-button {
    --indicator-color: #08a391;
  }
  /* Material Design styles */
  ion-segment.custom2 on-segment-button.md {
    --color: #000;
    --color-checked: #08a391;
    --indicator-height: 4px;
  }
  /* iOS styles */
  ion-segment.custom2 ion-segment-button.ios {
    --color: #08a391;
    --color-checked: #fff;
    --border-radius: 20px;
  }
</style>

