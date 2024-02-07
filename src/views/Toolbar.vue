<template>
  <ion-page>
    <ion-header :translucent="true">
<!-- Header Toolbar -->
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Toolbar</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding" :fullscreen="true">
      <div id="container">

        <div class="wrapper">
          <ion-toolbar class="ion-margin-vertical ion-padding ion-text-start">
            <b>#Referenced page</b>
            <br/><br/>
            <a href="https://ionicframework.com/docs/api/toolbar" target="_blank">https://ionicframework.com/docs/api/toolbar</a>
            <br/><br/>
            <a href="https://ionicframework.com/docs/api/buttons" target="_blank">https://ionicframework.com/docs/api/buttons</a>
          </ion-toolbar>
        </div>

        <div class="wrapper">
          <ion-title>Basic Usage</ion-title>
          <div class="ion-margin-vertical ion-text-center">
            <span>↑↓Look at the toolbar in the header &amp; footer :)</span>
          </div>
        </div>

        <div class="wrapper">
          <ion-title>Buttons in Toolbars</ion-title>
          <div class="ion-margin-vertical">
            <ion-toolbar>
              <ion-buttons slot="start">
                <ion-button> Start </ion-button>
              </ion-buttons>
              <ion-title>Start / End Buttons</ion-title>
              <ion-buttons slot="end">
                <ion-button> End </ion-button>
              </ion-buttons>
            </ion-toolbar>
            <ion-toolbar>
              <ion-buttons slot="secondary">
                <ion-button> Secondary </ion-button>
              </ion-buttons>
              <ion-buttons slot="primary">
                <ion-button> Primary </ion-button>
              </ion-buttons>
              <ion-title>Primary / Secondary Buttons</ion-title>
            </ion-toolbar>
            <ion-toolbar>
              <ion-buttons slot="secondary">
                <ion-button>
                  <ion-icon slot="icon-only" :icon="personCircle"></ion-icon>
                </ion-button>
                <ion-button>
                  <ion-icon slot="icon-only" :icon="search"></ion-icon>
                </ion-button>
              </ion-buttons>
              <ion-buttons slot="primary">
                <ion-button>
                  <ion-icon slot="icon-only" :ios="ellipsisHorizontal" :md="ellipsisVertical"></ion-icon>
                </ion-button>
              </ion-buttons>
              <ion-title>Icon Buttons</ion-title>
            </ion-toolbar>
            <ion-toolbar>
              <ion-buttons slot="secondary">
                <ion-button fill="solid">
                  <ion-icon slot="start" :icon="personCircle"></ion-icon>
                  Contact
                </ion-button>
              </ion-buttons>
              <ion-buttons slot="primary">
                <ion-button fill="solid">
                  Help
                  <ion-icon slot="end" :icon="helpCircle"></ion-icon>
                </ion-button>
              </ion-buttons>
              <ion-title>Solid Buttons</ion-title>
            </ion-toolbar>
            <ion-toolbar>
              <ion-buttons slot="secondary">
                <ion-button fill="outline">
                  <ion-icon slot="start" :icon="star"></ion-icon>
                  Star
                </ion-button>
              </ion-buttons>
              <ion-buttons slot="primary">
                <ion-button fill="outline">
                  Edit
                  <ion-icon slot="end" :icon="create"></ion-icon>
                </ion-button>
              </ion-buttons>
              <ion-title>Outline Buttons</ion-title>
            </ion-toolbar>
            <ion-toolbar>
              <ion-buttons slot="start">
                <ion-back-button default-href="#"></ion-back-button>
              </ion-buttons>
              <ion-title>Back Button</ion-title>
            </ion-toolbar>
            <ion-toolbar>
              <ion-buttons slot="start">
                <ion-menu-button :auto-hide="false"></ion-menu-button>
              </ion-buttons>
              <ion-title>Menu Button</ion-title>
            </ion-toolbar>
          </div>
        </div>

        <div class="wrapper">
          <ion-title>Searchbars in Toolbars</ion-title>
          <div class="ion-margin-vertical">
            <ion-toolbar>
              <ion-searchbar></ion-searchbar>
            </ion-toolbar>
          </div>
        </div>

        <div class="wrapper">
          <ion-title>Segments in Toolbars</ion-title>
          <div class="ion-margin-vertical">
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
          </div>
        </div>

        <div class="wrapper">
          <ion-title>Progress Bars in Toolbars</ion-title>
          <div class="ion-margin-vertical">
            <ion-toolbar>
              <ion-title>Toolbar</ion-title>
              <ion-progress-bar type="indeterminate"></ion-progress-bar>
            </ion-toolbar>
          </div>
        </div>

        <div class="wrapper">
          <ion-title>Theming</ion-title>
          <p>Colors</p>
          <div class="ion-margin-vertical">
            <ion-toolbar>
              <ion-title>Default Toolbar</ion-title>
            </ion-toolbar>
            <ion-toolbar color="primary">
              <ion-title>Primary Toolbar</ion-title>
            </ion-toolbar>
            <ion-toolbar color="secondary">
              <ion-title>Secondary Toolbar</ion-title>
            </ion-toolbar>
            <ion-toolbar color="tertiary">
              <ion-title>Tertiary Toolbar</ion-title>
            </ion-toolbar>
            <ion-toolbar color="success">
              <ion-title>Success Toolbar</ion-title>
            </ion-toolbar>
            <ion-toolbar color="warning">
              <ion-title>Warning Toolbar</ion-title>
            </ion-toolbar>
            <ion-toolbar color="danger">
              <ion-title>Danger Toolbar</ion-title>
            </ion-toolbar>
            <ion-toolbar color="light">
              <ion-title>Light Toolbar</ion-title>
            </ion-toolbar>
            <ion-toolbar color="medium">
              <ion-title>Medium Toolbar</ion-title>
            </ion-toolbar>
            <ion-toolbar color="dark">
              <ion-title>Dark Toolbar</ion-title>
            </ion-toolbar>
          </div>
        </div>

        <div class="wrapper">
          <p>CSS Custom Properties</p>
          <div class="ion-margin-vertical">
            <ion-toolbar class="CustomProperties">
              <ion-title>Custom Toolbar</ion-title>
            </ion-toolbar>
          </div>
        </div>

<hr>

        <div class="wrapper">
          <ion-title>ion-buttons</ion-title>
          <p>Basic Usage</p>
          <div class="ion-margin-vertical">
            <ion-toolbar>
              <ion-buttons slot="start">
                <ion-button>Button</ion-button>
              </ion-buttons>
              <ion-title>Default Buttons</ion-title>
            </ion-toolbar>
          </div>
        </div>

        <div class="wrapper">
          <p>Buttons Placement</p>
          <div class="ion-margin-vertical">
            <ion-toolbar>
              <ion-buttons slot="start">
                <ion-button>Start</ion-button>
              </ion-buttons>
              <ion-title>Buttons</ion-title>
              <ion-buttons slot="end">
                <ion-button>End</ion-button>
              </ion-buttons>
            </ion-toolbar>
            <ion-toolbar>
              <ion-buttons slot="secondary">
                <ion-button>Secondary</ion-button>
              </ion-buttons>
              <ion-title>Buttons</ion-title>
              <ion-buttons slot="primary">
                <ion-button>Primary</ion-button>
              </ion-buttons>
            </ion-toolbar>
          </div>
        </div>

        <div class="wrapper">
          <p>Types of Buttons</p>
          <div class="ion-margin-vertical">
            <ion-toolbar>
              <ion-buttons slot="secondary">
                <ion-button size="large"> Favorite </ion-button>
              </ion-buttons>
              <ion-title>Default Buttons</ion-title>
              <ion-buttons slot="primary">
                <ion-button> Delete </ion-button>
              </ion-buttons>
            </ion-toolbar>
            <ion-toolbar>
              <ion-buttons slot="secondary">
                <ion-button>
                  <ion-icon slot="icon-only" :icon="personCircle"></ion-icon>
                </ion-button>
                <ion-button>
                  <ion-icon slot="icon-only" :icon="search"></ion-icon>
                </ion-button>
              </ion-buttons>
              <ion-buttons slot="primary">
                <ion-button>
                  <ion-icon slot="icon-only" :ios="ellipsisHorizontal" :md="ellipsisVertical"></ion-icon>
                </ion-button>
              </ion-buttons>
              <ion-title>Icon Buttons</ion-title>
            </ion-toolbar>
            <ion-toolbar>
              <ion-buttons slot="secondary">
                <ion-button fill="solid">
                  <ion-icon slot="start" :icon="personCircle"></ion-icon>
                  Contact
                </ion-button>
              </ion-buttons>
              <ion-buttons slot="primary">
                <ion-button fill="solid">
                  Help
                  <ion-icon slot="end" :icon="helpCircle"></ion-icon>
                </ion-button>
              </ion-buttons>
              <ion-title>Solid Buttons</ion-title>
            </ion-toolbar>
            <ion-toolbar>
              <ion-buttons slot="secondary">
                <ion-button fill="outline">
                  <ion-icon slot="start" :icon="star"></ion-icon>
                  Star
                </ion-button>
              </ion-buttons>
              <ion-buttons slot="primary">
                <ion-button fill="outline">
                  Edit
                  <ion-icon slot="end" :icon="create"></ion-icon>
                </ion-button>
              </ion-buttons>
              <ion-title>Outline Buttons</ion-title>
            </ion-toolbar>
            <ion-toolbar>
              <ion-buttons slot="start">
                <ion-back-button default-href="#"></ion-back-button>
              </ion-buttons>
              <ion-title>Back Button</ion-title>
            </ion-toolbar>
            <ion-toolbar>
              <ion-buttons slot="start">
                <ion-menu-button :auto-hide="false"></ion-menu-button>
              </ion-buttons>
              <ion-title>Menu Button</ion-title>
            </ion-toolbar>
          </div>
        </div>

        <div class="wrapper">
          <ion-title>Collapsible Buttons<br/> (Unavailable for iOS)</ion-title>
          <div class="ion-text-center">
            <a href="/headerfooter"><span>Can check it on the the header &amp; footer page :)</span></a>
          </div>
        </div>

      </div>
    </ion-content>

<!-- Footer Toolbar -->
    <ion-footer :translucent="true">
      <ion-toolbar>
        <ion-title>ionic x Vue.js Components-master</ion-title>
      </ion-toolbar>
    </ion-footer>
  </ion-page>
</template>


<script setup lang="ts">
  import { IonBackButton, IonButton, IonButtons, IonIcon, IonMenuButton, IonTitle, IonToolbar, IonSearchbar, IonSegment, IonSegmentButton, IonProgressBar } from '@ionic/vue';
  import { create, ellipsisHorizontal, ellipsisVertical, helpCircle, search, personCircle, star } from 'ionicons/icons';
  import { ref, onMounted } from 'vue';

</script>

<style scoped>

  /*  */
  .wrapper ion-toolbar {
    width: 100%;
    margin-bottom: 20px;
  }

ion-toolbar .sc-ion-searchbar-ios-h {
    padding-top: 10px;
    padding-bottom: 10px;
    min-height: 52px;
}


  /*  */
  ion-toolbar.CustomProperties {
    --background: #19422d;
    --color: white;
    --border-color: #f24aec;
    --border-width: 4px 0;
    --border-style: double;
    --min-height: 80px;
    --padding-top: 20px;
    --padding-bottom: 20px;
  }
</style>

