<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Radio</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding" :fullscreen="true">
      <div id="container">

        <div class="wrapper">
          <ion-toolbar class="ion-margin-vertical ion-padding ion-text-start">
            <b>#Referenced page</b>
            <br/><br/>
            <a href="https://ionicframework.com/docs/api/radio" target="_blank">https://ionicframework.com/docs/api/radio</a>
          </ion-toolbar>
        </div>

        <div class="wrapper">
          <ion-title>Basic Usage</ion-title>
          <div class="ion-margin-vertical wrapper">
            <ion-radio-group value="strawberries">
              <ion-radio value="grapes">Grapes</ion-radio><br />
              <ion-radio value="strawberries">Strawberries</ion-radio><br />
              <ion-radio value="pineapple">Pineapple</ion-radio><br />
              <ion-radio value="cherries">Cherries</ion-radio>
            </ion-radio-group>
          </div>
        </div>

        <div class="wrapper">
          <ion-title>Label Placement</ion-title>
          <div class="ion-margin-vertical wrapper">
            <ion-radio-group value="start" class="wrapper">
              <ion-radio value="start1" label-placement="start">Label Start</ion-radio>
              <ion-radio value="start2" label-placement="start">Label Start</ion-radio>
            </ion-radio-group>
            <ion-radio-group value="end" class="wrapper">
              <ion-radio value="enda" label-placement="end">Label End</ion-radio>
              <ion-radio value="end2" label-placement="end">Label End</ion-radio>
            </ion-radio-group>
            <ion-radio-group value="fixed" class="wrapper">
              <ion-radio value="fixed1" label-placement="fixed">Fixed Width Label</ion-radio>
              <ion-radio value="fixed2" label-placement="fixed">Fixed Width Label</ion-radio>
            </ion-radio-group>
            <ion-radio-group value="stacked">
              <ion-radio value="stacked" label-placement="stacked">Stacked Label</ion-radio>
            </ion-radio-group>
          </div>
        </div>

        <div class="wrapper">
          <ion-title>Object Value References</ion-title>
          <div class="ion-margin-vertical wrapper">
            <ion-radio-group :compareWith="compareWith" @ionChange="handleChange($event)">
              <ion-item v-for="food in foods" v-bind:key="food.id">
                <ion-radio :value="food">{{ food.name }}</ion-radio>
              </ion-item>
            </ion-radio-group>
          </div>
        </div>

        <div class="wrapper">
          <ion-title>Alignment</ion-title>
          <div class="ion-margin-vertical wrapper">
            <ion-list>
              <ion-radio-group value="start">
                <ion-item>
                  <ion-radio value="start" label-placement="stacked" alignment="start">Aligned to the Start</ion-radio>
                </ion-item>
              </ion-radio-group>
              <ion-radio-group value="center">
                <ion-item>
                  <ion-radio value="center" label-placement="stacked" alignment="center">Aligned to the Center</ion-radio>
                </ion-item>
              </ion-radio-group>
            </ion-list>
          </div>
        </div>

        <div class="wrapper">
          <ion-title>Justification</ion-title>
          <div class="ion-margin-vertical wrapper">
            <ion-list>
              <ion-radio-group value="start">
                <ion-item>
                  <ion-radio value="start1" justify="start">Packed at the Start of Line</ion-radio>
                </ion-item>
                <ion-item>
                  <ion-radio value="start2" justify="start">Packed at the Start of Line</ion-radio>
                </ion-item>
              </ion-radio-group>
              <ion-radio-group value="end">
                <ion-item>
                  <ion-radio value="end1" justify="end">Packed at the End of Line</ion-radio>
                </ion-item>
                <ion-item>
                  <ion-radio value="end2" justify="end">Packed at the End of Line</ion-radio>
                </ion-item>
              </ion-radio-group>
              <ion-radio-group value="space-between">
                <ion-item>
                  <ion-radio value="space-between1" justify="space-between">Space Between Label and Control</ion-radio>
                </ion-item>
                <ion-item>
                  <ion-radio value="space-between2" justify="space-between">Space Between Label and Control</ion-radio>
                </ion-item>
              </ion-radio-group>
            </ion-list>
          </div>
        </div>

        <div class="wrapper">
          <ion-title>Deselecting Radios</ion-title>
          <div class="ion-margin-vertical wrapper">
            <ion-radio-group allow-empty-selection="true" value="turtles">
              <ion-radio value="dogs">Dogs</ion-radio><br />
              <ion-radio value="cats">Cats</ion-radio><br />
              <ion-radio value="turtles">Turtles</ion-radio><br />
              <ion-radio value="fish">Fish</ion-radio><br />
            </ion-radio-group>
          </div>
        </div>

        <div class="wrapper">
          <ion-title>Theming</ion-title>
          <p>​Colors</p>
          <div class="ion-margin-vertical wrapper">
            <ion-radio-group value="primary">
              <ion-radio aria-label="Primary" color="primary" value="primary"></ion-radio>
            </ion-radio-group>
            <ion-radio-group value="secondary">
              <ion-radio aria-label="Secondary" color="secondary" value="secondary"></ion-radio>
            </ion-radio-group>
            <ion-radio-group value="tertiary">
              <ion-radio aria-label="Tertiary" color="tertiary" value="tertiary"></ion-radio>
            </ion-radio-group>
            <ion-radio-group value="success">
              <ion-radio aria-label="Success" color="success" value="success"></ion-radio>
            </ion-radio-group>
            <ion-radio-group value="warning">
              <ion-radio aria-label="Warning" color="warning" value="warning"></ion-radio>
            </ion-radio-group>
            <ion-radio-group value="danger">
              <ion-radio aria-label="Danger" color="danger" value="danger"></ion-radio>
            </ion-radio-group>
            <ion-radio-group value="light">
              <ion-radio aria-label="Light" color="light" value="light"></ion-radio>
            </ion-radio-group>
            <ion-radio-group value="medium">
              <ion-radio aria-label="Medium" color="medium" value="medium"></ion-radio>
            </ion-radio-group>
            <ion-radio-group value="dark">
              <ion-radio aria-label="Dark" color="dark" value="dark"></ion-radio>
            </ion-radio-group>
          </div>
        </div>

        <div class="wrapper">
          <p>CSS Custom Properties</p>
          <div class="ion-margin-vertical wrapper">
            <ion-radio-group class="CustomProperties" value="custom-checked">
              <ion-radio value="custom" aria-label="Custom checkbox"></ion-radio>
              <ion-radio value="custom-checked" aria-label="Custom checkbox that is checked"></ion-radio>
            </ion-radio-group>
          </div>
        </div>

        <div class="wrapper">
          <p>CSS Shadow Parts</p>
          <div class="ion-margin-vertical wrapper">
            <ion-radio-group class="ShadowParts" value="custom-checked">
              <ion-radio value="custom" aria-label="Custom checkbox"></ion-radio>
              <ion-radio value="custom-checked" aria-label="Custom checkbox that is checked"></ion-radio>
            </ion-radio-group>
          </div>
        </div>

        <div class="wrapper">
          <ion-title>Migrating from Legacy Radio Syntax</ion-title>
          <p>Using the Modern Syntax</p>
          <div class="ion-margin-vertical wrapper">
            <!-- Before -->
            <ion-item>
              <ion-label>Radio Label</ion-label>
              <ion-radio></ion-radio>
            </ion-item>
            <!-- After -->
            <ion-item>
              <ion-radio>Radio Label</ion-radio>
            </ion-item>
            <!-- Fixed Labels -->
            <!-- Before -->
            <ion-item>
              <ion-label position="fixed">Radio Label</ion-label>
              <ion-radio></ion-radio>
            </ion-item>
            <!-- After -->
            <ion-item>
              <ion-radio label-placement="fixed">Radio Label</ion-radio>
            </ion-item>
            <!-- Radio at the start of line, Label at the end of line -->
            <!-- Before -->
            <ion-item>
              <ion-label slot="end">Radio Label</ion-label>
              <ion-radio></ion-radio>
            </ion-item>
            <!-- After -->
            <ion-item>
              <ion-radio label-placement="end">Radio Label</ion-radio>
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
  import {IonItem, IonList, IonRadio, IonRadioGroup } from '@ionic/vue';
  import { ref, onMounted } from 'vue';

//
  const foods = ref(
    [
      {
        id: 1,
        name: 'Apples',
        type: 'fruit',
      },
      {
        id: 2,
        name: 'Carrots',
        type: 'vegetable',
      },
      {
        id: 3,
        name: 'Cupcakes',
        type: 'dessert',
      },
    ]
  );
  const compareWith = (o1, o2) => {
    return o1.id === o2.id;
  };
  const handleChange = (ev) => {
    console.log('Current value:', JSON.stringify(ev.detail.value));
  };


</script>

<style scoped>

/*  */
  ion-radio-group.CustomProperties ion-radio {
    --border-radius: 4px;
    --inner-border-radius: 4px;
    --color: #ddd;
    --color-checked: #6815ec;
    margin: 5px;
  }
  ion-radio-group.CustomProperties ion-radio.ios::part(container) {
    width: 20px;
    height: 20px;
    border: 2px solid #ddd;
    border-radius: 4px;
  }
  ion-radio-group.CustomProperties .radio-checked.ios::part(container) {
    border-color: #6815ec;
  }


  ion-radio-group.ShadowParts ion-radio::part(container) {
    width: 30px;
    height: 30px;
    border-radius: 8px;
    border: 2px solid #ddd;
    margin: 5px;
  }
  ion-radio-group.ShadowParts ion-radio::part(mark) {
    background: none;
    transition: none;
    transform: none;
    border-radius: 0;
  }
  ion-radio-group.ShadowParts ion-radio.radio-checked::part(container) {
    background: #6815ec;
    border-color: transparent;
  }
  ion-radio-group.ShadowParts ion-radio.radio-checked::part(mark) {
    width: 6px;
    height: 10px;
    border-width: 0px 2px 2px 0px;
    border-style: solid;
    border-color: #fff;
    transform: rotate(45deg);
  }
</style>

