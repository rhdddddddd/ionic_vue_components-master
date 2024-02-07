<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Progress</ion-title>
        <ion-progress-bar type="indeterminate"></ion-progress-bar>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding" :fullscreen="true">
      <div id="container">

        <div class="wrapper">
          <ion-toolbar class="ion-margin-vertical ion-padding ion-text-start">
            <b>#Referenced page</b>
            <br/><br/>
            <a href="https://ionicframework.com/docs/api/loading" target="_blank">https://ionicframework.com/docs/api/loading</a>
            <br/><br/>
            <a href="https://ionicframework.com/docs/api/progress-bar" target="_blank">https://ionicframework.com/docs/api/progress-bar</a>
            <br/><br/>
            <a href="https://ionicframework.com/docs/api/skeleton-text" target="_blank">https://ionicframework.com/docs/api/skeleton-text</a>
            <br/><br/>
            <a href="https://ionicframework.com/docs/api/spinner" target="_blank">https://ionicframework.com/docs/api/spinner</a>
          </ion-toolbar>
        </div>

        <div class="wrapper">
          <ion-title>ion-loading</ion-title>
          <p>Inline</p>
          <div class="ion-margin-vertical wrapper">
            <ion-button id="open-loading1">Show Loading</ion-button>
            <ion-loading trigger="open-loading1" :duration="300" message="Dismissing after 3 seconds..."> </ion-loading>
          </div>
        </div>

        <div class="wrapper">
          <p>Controller</p>
          <div class="ion-margin-vertical wrapper">
            <ion-button @click="showLoading1">Show Loading</ion-button>
          </div>
        </div>

        <div class="wrapper">
          <ion-title>Customization</ion-title>
          <p>Spinners</p>
          <div class="ion-margin-vertical wrapper">
            <ion-button id="open-loading2">Show Loading</ion-button>
            <ion-loading trigger="open-loading2" message="Loading..." duration="500" spinner="circles"></ion-loading>
          </div>
        </div>

        <div class="wrapper">
          <p>Theming</p>
          <div class="ion-margin-vertical wrapper">
            <ion-button id="open-loading3">Show Loading</ion-button>
            <ion-loading class="custom-loading" trigger="open-loading3" message="Loading..." duration="300"></ion-loading>
          </div>
        </div>

<hr>

        <div class="wrapper">
          <ion-title>ion-progress-bar</ion-title>
          <p>Determinate</p>
          <div class="ion-margin-vertical">
            <ion-progress-bar :value="progress1"></ion-progress-bar>
          </div>
        </div>

        <div class="wrapper">
          <p>Buffer</p>
          <div class="ion-margin-vertical wrapper">
            <ion-progress-bar :buffer="buffer2" :value="progress2"></ion-progress-bar>
          </div>
        </div>

        <div class="wrapper">
          <p>Indeterminate</p>
          <div class="ion-margin-vertical wrapper">
            <ion-progress-bar type="indeterminate"></ion-progress-bar>
          </div>
        </div>

        <div class="wrapper">
          <p>Progress Bars in Toolbars</p>
          <div class="ion-margin-vertical wrapper">
            <span>↑Look at the toolbar in the header :)</span>
          </div>
        </div>

        <div class="wrapper">
          <ion-title>Theming</ion-title>
          <p>Colors</p>
          <div class="ion-margin-vertical wrapper">
            <ion-progress-bar type="indeterminate" color="primary"></ion-progress-bar>
            <ion-progress-bar type="indeterminate" color="secondary"></ion-progress-bar>
            <ion-progress-bar type="indeterminate" color="tertiary"></ion-progress-bar>
            <ion-progress-bar type="indeterminate" color="success"></ion-progress-bar>
            <ion-progress-bar type="indeterminate" color="warning"></ion-progress-bar>
            <ion-progress-bar type="indeterminate" color="danger"></ion-progress-bar>
            <ion-progress-bar type="indeterminate" color="light"></ion-progress-bar>
            <ion-progress-bar type="indeterminate" color="medium"></ion-progress-bar>
            <ion-progress-bar type="indeterminate" color="dark"></ion-progress-bar>
          </div>
        </div>

        <div class="wrapper">
          <p>CSS Custom Properties</p>
          <div class="ion-margin-vertical wrapper">
            <ion-progress-bar class="CustomProperties" :value=".25" :buffer=".5"></ion-progress-bar>
            <ion-progress-bar class="CustomProperties" type="indeterminate"></ion-progress-bar>
          </div>
        </div>

        <div class="wrapper">
          <p>CSS Shadow Parts</p>
          <div class="ion-margin-vertical wrapper">
            <ion-progress-bar class="ShadowParts" value=".25" buffer=".5"></ion-progress-bar>
            <ion-progress-bar class="ShadowParts" type="indeterminate"></ion-progress-bar>
          </div>
        </div>

<hr>

        <div class="wrapper">
          <ion-title>ion-skeleton-text</ion-title>
          <p>Basic Usage</p>
          <div class="ion-margin-vertical wrapper">
            <ion-list v-if="loaded1">
              <ion-list-header>Albums</ion-list-header>
              <ion-item>
                <ion-thumbnail slot="start">
                  <ion-icon style="width: 100%; height: 100%" :icon="musicalNotes"></ion-icon>
                </ion-thumbnail>
                <ion-label>
                  <h3>Abbey Road</h3>
                  <p>The Beatles</p>
                  <p>1969</p>
                </ion-label>
              </ion-item>
            </ion-list>
            <ion-list v-if="!loaded1">
              <ion-list-header>
                <ion-skeleton-text :animated="true" style="width: 80px"></ion-skeleton-text>
              </ion-list-header>
              <ion-item>
                <ion-thumbnail slot="start">
                  <ion-skeleton-text :animated="true"></ion-skeleton-text>
                </ion-thumbnail>
                <ion-label>
                  <h3>
                    <ion-skeleton-text :animated="true" style="width: 80%;"></ion-skeleton-text>
                  </h3>
                  <p>
                    <ion-skeleton-text :animated="true" style="width: 60%;"></ion-skeleton-text>
                  </p>
                  <p>
                    <ion-skeleton-text :animated="true" style="width: 30%;"></ion-skeleton-text>
                  </p>
                </ion-label>
              </ion-item>
            </ion-list>
            <p class="ion-text-center">
              <ion-button @click="setLoaded1(!loaded1)">Toggle</ion-button>
            </p>
          </div>
        </div>

        <div class="wrapper">
          <ion-title>Theming</ion-title>
          <p>​CSS Custom Properties</p>
          <div class="ion-margin-vertical wrapper">
            <ion-list>
              <ion-list-header>
                <ion-skeleton-text class="CustomProperties" :animated="true" style="width: 80px"></ion-skeleton-text>
              </ion-list-header>
              <ion-item>
                <ion-thumbnail slot="start">
                  <ion-skeleton-text class="CustomProperties" :animated="true"></ion-skeleton-text>
                </ion-thumbnail>
                <ion-label>
                  <h3>
                    <ion-skeleton-text class="CustomProperties" :animated="true" style="width: 80%;"></ion-skeleton-text>
                  </h3>
                  <p>
                    <ion-skeleton-text class="CustomProperties" :animated="true" style="width: 60%;"></ion-skeleton-text>
                  </p>
                  <p>
                    <ion-skeleton-text class="CSS_Custom" :animated="true" style="width: 30%;"></ion-skeleton-text>
                  </p>
                </ion-label>
              </ion-item>
            </ion-list>
          </div>
        </div>

<hr>

        <div class="wrapper">
          <ion-title>ion-spinner</ion-title>
          <p>Basic Usage</p>
          <div class="ion-margin-vertical">
            <ion-item>
              <ion-label>Default</ion-label>
              <ion-spinner></ion-spinner>
            </ion-item>
            <ion-item>
              <ion-label>Dots</ion-label>
              <ion-spinner name="dots"></ion-spinner>
            </ion-item>
            <ion-item>
              <ion-label>Lines</ion-label>
              <ion-spinner name="lines"></ion-spinner>
            </ion-item>
            <ion-item>
              <ion-label>Lines Small</ion-label>
              <ion-spinner name="lines-small"></ion-spinner>
            </ion-item>
            <ion-item>
              <ion-label>Lines Sharp</ion-label>
              <ion-spinner name="lines-sharp"></ion-spinner>
            </ion-item>
            <ion-item>
              <ion-label>Lines Sharp Small</ion-label>
              <ion-spinner name="lines-sharp-small"></ion-spinner>
            </ion-item>
            <ion-item>
              <ion-label>Bubbles</ion-label>
              <ion-spinner name="bubbles"></ion-spinner>
            </ion-item>
            <ion-item>
              <ion-label>Circles</ion-label>
              <ion-spinner name="circles"></ion-spinner>
            </ion-item>
            <ion-item>
              <ion-label>Circular</ion-label>
              <ion-spinner name="circular"></ion-spinner>
            </ion-item>
            <ion-item>
              <ion-label>Crescent</ion-label>
              <ion-spinner name="crescent"></ion-spinner>
            </ion-item>
          </div>
        </div>

        <div class="wrapper">
          <ion-title>Theming</ion-title>
          <p>Colors</p>
          <div class="ion-margin-vertical">
            <ion-spinner></ion-spinner>
            <ion-spinner color="primary"></ion-spinner>
            <ion-spinner color="secondary"></ion-spinner>
            <ion-spinner color="tertiary"></ion-spinner>
            <ion-spinner color="success"></ion-spinner>
            <ion-spinner color="warning"></ion-spinner>
            <ion-spinner color="danger"></ion-spinner>
            <ion-spinner color="light"></ion-spinner>
            <ion-spinner color="medium"></ion-spinner>
            <ion-spinner color="dark"></ion-spinner>
          </div>
        </div>

        <div class="wrapper">
          <p>Styling</p>
          <div class="ion-margin-vertical">
            <ion-spinner class="Styling"></ion-spinner>
          </div>
        </div>

        <div class="wrapper">
          <p>CSS Custom Properties</p>
          <div class="ion-margin-vertical">
            <ion-spinner class="CustomProperties"></ion-spinner>
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
import {IonPage, IonTitle, IonButton, IonLoading, loadingController, IonProgressBar, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonSkeletonText, IonThumbnail, IonSpinner } from '@ionic/vue';
import { ref, onMounted } from 'vue';
import { musicalNotes } from 'ionicons/icons';


//
  const showLoading1 = async () => {
    const loading = await loadingController.create({
      message: 'Dismissing after 3 seconds......',
      duration: 1000,
    });
    loading.present();
  };


//
  let progress1 = ref(0);
  const progressAction1 = onMounted(() => {
    setInterval(() => {
      progress1.value += 0.01;
      if (progress1.value > 1) {
        setTimeout(() => {
          progress1.value = 0;
        }, 1000);
      }
    }, 50);
  });


//
  let buffer2 = ref(0.06);
  let progress2 = ref(0);
  const progressAction2 = onMounted(() => {
    setInterval(() => {
      buffer2.value += 0.06;
      progress2.value += 0.06;
      if (progress2.value > 1) {
        setTimeout(() => {
          buffer2.value = 0.06;
          progress2.value = 0;
        }, 1000);
      }
    }, 1000);
  });


  //
  const loaded1 = ref(false);
  const setLoaded1 = (state: boolean) => (loaded1.value = state);



</script>

<style scoped>
/*  */
  ion-loading.custom-loading {
    --background: #e3edff;
    --spinner-color: #1c6dff;
    color: #1c6dff;
  }

/*  */
  ion-progress-bar + ion-progress-bar {
    margin-top: 20px;
  }
  ion-progress-bar.CustomProperties {
    --background: #f3e895;
    --progress-background: #09c567;
  }
  ion-progress-bar.ShadowParts::part(track) {
    background: #f3e895;
  }
  ion-progress-bar.ShadowParts::part(progress) {
    background: #09c567;
  }
  ion-progress-bar.ShadowParts::part(stream) {
    background-image: radial-gradient(ellipse at center, #e475f3 0%, #e475f3 30%, transparent 30%);
  }


/*  */
  ion-skeleton-text.CustomProperties {
    --border-radius: 9999px;
    --background: rgba(188, 0, 255, 0.065);
    --background-rgb: 188, 0, 255;
  }

  /*  */
  ion-spinner.Styling {
    width: 100px;
    height: 100px;
  }
  ion-spinner.CustomProperties {
    width: 50px;
    height: 50px;
    --color: #54dc98;
  }
</style>

