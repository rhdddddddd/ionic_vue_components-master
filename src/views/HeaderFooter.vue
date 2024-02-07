<template>
  <ion-page>
<!-- Header -->
    <ion-header :translucent="true"  collapse="fade">
    <!-- <ion-header class="ion-no-border"> -->
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Header-Footer</ion-title>
        <ion-buttons :collapse="true" slot="end">
          <ion-button>Button</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding" :fullscreen="true">
      <div id="container">

        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title>Header-Footer</ion-title>
            <ion-buttons :collapse="true" slot="end">
              <ion-button>Button</ion-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>

<hr>

        <div class="wrapper">
          <ion-title style="margin-top: -10px;">Condensed Header<br/> (Unavailable for iOS)</ion-title>
          <div class="ion-text-center">
            <span>↓Please scroll down while paying attention to the header↑ :)</span><br/><br/>
            <span>Collapsible Titles &amp; Buttons</span>
          </div>
        </div>

<hr>

        <div class="wrapper">
          <ion-toolbar class="ion-margin-vertical ion-padding ion-text-start">
            <b>#Referenced page</b>
            <br/><br/>
            <a href="https://ionicframework.com/docs/api/header" target="_blank">https://ionicframework.com/docs/api/header</a>
            <br/><br/>
            <a href="https://ionicframework.com/docs/api/footer" target="_blank">https://ionicframework.com/docs/api/footer</a>
            <br/><br/>
            <a href="https://ionicframework.com/docs/api/title" target="_blank">https://ionicframework.com/docs/api/title</a>
          </ion-toolbar>
        </div>

        <div class="wrapper">
          <ion-title>Header</ion-title>
          <p>Translucent Header</p>
          <p>Condensed Header</p>
          <p>Fade Header</p>
          <p>Borders</p>
        </div>

        <div class="wrapper">
          <ion-title>Footer</ion-title>
          <p>Translucent Footer</p>
          <p>Fade Footer</p>
          <p>Borders</p>
        </div>

        <div class="wrapper">
          <ion-title>Dummy</ion-title>
          <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit dolorem, expedita nam voluptatem repellendus autem quibusdam quam eius voluptas voluptatum dicta, quidem laudantium corporis et facilis excepturi ratione sit laboriosam?
          </div>

          <div>
            <h1>Animal Facts</h1>

            <h2>Rhinoceros</h2>
            <img
              alt="rhino standing near grass"
              src="https://images.unsplash.com/flagged/photo-1556983257-71fddc36bc75?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
            />
            <p>
              The rhinoceros gets its name from one of its most notable features: its horns. The word rhinoceros come from the
              Greek words rhino meaning “nose” and ceros meaning “horn.” The number of horns that a rhino has varies on the
              species. The two African species (the black rhino and the white rhino) and the Sumatran rhino have two horns,
              while the Javan rhino and one-horned rhino have one horn.
            </p>

            <h2>Sea Turtle</h2>
            <img
              alt="brown sea turtle in water"
              src="https://images.unsplash.com/photo-1573551089778-46a7abc39d9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
            />
            <p>
              Sea turtles are characterized by a large, streamlined shell and non-retractile head and limbs. Unlike other
              turtles, sea turtles cannot pull their limbs and head inside their shells. Their limbs are flippers that are
              adapted for swimming, so they are vulnerable while on land.
            </p>

            <h2>Giraffe</h2>
            <img
              alt="giraffe sticking its tongue out"
              src="https://images.unsplash.com/photo-1577114995803-d8ce0e2b4aa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1746&q=80"
            />
            <p>
              Giraffes are known for their long, tall appearance. They have a small hump on their back like a camel and have a
              spotted pattern similar to that of a leopard. Because of the combination of these features, some people called the
              giraffe a “camel-leopard.” That’s where the giraffe’s species name “camelopardalis” comes from.
            </p>

            <h2>Elephant</h2>
            <img
              alt="two grey elephants on grass plains during sunset"
              src="https://images.unsplash.com/photo-1564760055775-d63b17a55c44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1754&q=80"
            />
            <p>
              Elephants are the largest existing land animal, with massive bodies, large ears, and long trunks. Elephants’ long
              trunks are multifunctional. They are used to pick up objects, trumpet warnings, greet other elephants, or suck up
              water for drinking or bathing.
            </p>

            <h2>Dolphin</h2>
            <img
              alt="black and white dolphin in water"
              src="https://images.unsplash.com/photo-1607153333879-c174d265f1d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
            />
            <p>
              Dolphins range in color depending on the species, from white, pearl, and pink to darker shades of brown, gray,
              blue, and black. They have smooth skin, flippers, and a dorsal fin. They have a long, slender snout with about 100
              teeth and a streamlined body. They have a single blowhole on top of their head, which has a flap that opens to
              reveal a pair of nostrils. The dolphin uses these nostrils for breathing when it surfaces.
            </p>
          </div>
        </div>

<hr>

        <div class="wrapper">
          <ion-title>ion-title</ion-title>
          <p>Basic</p>
          <div class="ion-margin-vertical">
            <ion-toolbar>
              <ion-title>Title</ion-title>
            </ion-toolbar>
          </div>
        </div>

        <div class="wrapper">
          <p>Large Titles</p>
          <p class="ion-margin-vertical ion-text-center">This feature is only available for iOS.</p>
          <div class="ion-margin-vertical">
            <ion-toolbar>
              <ion-title size="large">Title</ion-title>
            </ion-toolbar>
          </div>
        </div>

        <div class="wrapper">
          <ion-title>Theming</ion-title>
          <p>CSS Custom Properties</p>
          <div class="ion-margin-vertical">
            <p class="ion-margin-vertical ion-text-center">↑Look at the toolbar in the header :)</p>
            <ion-toolbar>
              <ion-title class="CustomProperties">Title</ion-title>
            </ion-toolbar>
          </div>
        </div>

      </div>
    </ion-content>

<!-- Footer -->
    <ion-footer :translucent="true" collapse="fade">
    <!-- <ion-footer class="ion-no-border"> -->
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
  .wrapper > ion-item {
    width: 100%;
    text-align: left;
  }

  .wrapper ion-toolbar {
    width: 100%;
    margin-bottom: 20px;
  }

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
  ion-title.CustomProperties {
    color: #c897d8;
    font-size: 30px;
  }
  ion-header ion-toolbar {
    --background: #c897d8;
  }
</style>

