<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Card</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" class="ion-padding">
      <div id="container">

        <div class="wrapper">
          <ion-toolbar class="ion-margin-vertical ion-padding ion-text-start">
            <b>#Referenced page</b>
            <br/><br/>
            <a href="https://ionicframework.com/docs/api/card" target="_blank">https://ionicframework.com/docs/api/card</a>
          </ion-toolbar>
        </div>

        <div class="wrapper">
          <ion-card>
            <ion-card-header>
              <ion-card-title>Card Title</ion-card-title>
              <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
            </ion-card-header>

            <ion-card-content>
              Here's a small text description for the card content. Nothing more, nothing less.
            </ion-card-content>
          </ion-card>
        </div>

        <div class="wrapper">
          <ion-card>
            <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
            <ion-card-header>
              <ion-card-title>Card Title</ion-card-title>
              <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
            </ion-card-header>

            <ion-card-content>
              Here's a small text description for the card content. Nothing more, nothing less.
            </ion-card-content>
          </ion-card>
        </div>


        <div class="wrapper">
          <ion-card>
            <ion-card-header>
              <ion-card-title>Card Title</ion-card-title>
              <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
            </ion-card-header>

            <ion-card-content>
              Here's a small text description for the card content. Nothing more, nothing less.
            </ion-card-content>

            <ion-button fill="clear">Action 1</ion-button>
            <ion-button fill="clear">Action 2</ion-button>
          </ion-card>
        </div>

        <div class="wrapper">
          <ion-card>
            <ion-card-header>
              <ion-card-title>Card Title</ion-card-title>
              <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
            </ion-card-header>
            <ion-card-content>
              <ion-list>
                <ion-item>
                  <ion-thumbnail slot="start">
                    <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
                  </ion-thumbnail>
                  <ion-label>Item</ion-label>
                </ion-item>

                <ion-item>
                  <ion-thumbnail slot="start">
                    <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
                  </ion-thumbnail>
                  <ion-label>Item</ion-label>
                </ion-item>

                <ion-item>
                  <ion-thumbnail slot="start">
                    <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
                  </ion-thumbnail>
                  <ion-label>Item</ion-label>
                </ion-item>

                <ion-item lines="none">
                  <ion-thumbnail slot="start">
                    <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
                  </ion-thumbnail>
                  <ion-label>Item</ion-label>
                </ion-item>
              </ion-list>
            </ion-card-content>
          </ion-card>
        </div>

        <div class="wrapper">
          <ion-card color="primary">
            <ion-card-header>
              <ion-card-title>Card Title</ion-card-title>
              <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
            </ion-card-header>

            <ion-card-content>
              Card Content
            </ion-card-content>
          </ion-card>

          <ion-card color="secondary">
            <ion-card-header>
              <ion-card-title>Card Title</ion-card-title>
              <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
            </ion-card-header>

            <ion-card-content>
              Card Content
            </ion-card-content>
          </ion-card>

          <ion-card color="tertiary">
            <ion-card-header>
              <ion-card-title>Card Title</ion-card-title>
              <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
            </ion-card-header>

            <ion-card-content>
              Card Content
            </ion-card-content>
          </ion-card>

          <ion-card color="success">
            <ion-card-header>
              <ion-card-title>Card Title</ion-card-title>
              <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
            </ion-card-header>

            <ion-card-content>
              Card Content
            </ion-card-content>
          </ion-card>

          <ion-card color="warning">
            <ion-card-header>
              <ion-card-title>Card Title</ion-card-title>
              <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
            </ion-card-header>

            <ion-card-content>
              Card Content
            </ion-card-content>
          </ion-card>

          <ion-card color="danger">
            <ion-card-header>
              <ion-card-title>Card Title</ion-card-title>
              <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
            </ion-card-header>

            <ion-card-content>
              Card Content
            </ion-card-content>
          </ion-card>

          <ion-card color="light">
            <ion-card-header>
              <ion-card-title>Card Title</ion-card-title>
              <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
            </ion-card-header>

            <ion-card-content>
              Card Content
            </ion-card-content>
          </ion-card>

          <ion-card color="medium">
            <ion-card-header>
              <ion-card-title>Card Title</ion-card-title>
              <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
            </ion-card-header>

            <ion-card-content>
              Card Content
            </ion-card-content>
          </ion-card>

          <ion-card color="dark">
            <ion-card-header>
              <ion-card-title>Card Title</ion-card-title>
              <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
            </ion-card-header>

            <ion-card-content>
              Card Content
            </ion-card-content>
          </ion-card>
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
  import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/vue';
</script>

<style scoped>
</style>
