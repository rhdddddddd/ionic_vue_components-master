<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Range</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding" :fullscreen="true">
      <div id="container">

        <div class="wrapper">
          <ion-toolbar class="ion-margin-vertical ion-padding ion-text-start">
            <b>#Referenced page</b>
            <br/><br/>
            <a href="https://ionicframework.com/docs/api/range" target="_blank">https://ionicframework.com/docs/api/range</a>
          </ion-toolbar>
        </div>

        <div class="wrapper">
          <ion-title>Labels</ion-title>
          <p>Basic Usage</p>
          <div class="ion-padding-horizontal">
            <ion-range aria-label="Volume"></ion-range>
          </div>
        </div>

        <div class="wrapper">
          <p>Label Placement</p>
          <div class="ion-padding-horizontal">
            <ion-range label-placement="start" label="Label at the Start"></ion-range>
            <br />
            <ion-range label-placement="end" label="Label at the End"></ion-range>
            <br />
            <ion-range label-placement="fixed" label="Fixed Width Label"></ion-range>
            <br />
            <ion-range label-placement="stacked" label="Stacked Label"></ion-range>
          </div>
        </div>

        <div class="wrapper">
          <p>Label Slot</p>
          <div class="ion-padding-horizontal">
            <ion-range>
              <div slot="label">Label with <ion-text color="primary">custom HTML</ion-text></div>
            </ion-range>
          </div>
        </div>

        <div class="wrapper">
          <p>No Visible Label</p>
          <div class="ion-padding-horizontal">
            <ion-range aria-label="Volume"></ion-range>
          </div>
        </div>

        <div class="wrapper">
          <ion-title>Decorations</ion-title>
          <div class="ion-padding-horizontal">
            <ion-range aria-label="Temperature">
              <ion-icon slot="start" :icon="snowOutline"></ion-icon>
              <ion-icon slot="end" :icon="sunnyOutline"></ion-icon>
            </ion-range>
          </div>
        </div>

        <div class="wrapper">
          <ion-title>Dual Knobs</ion-title>
          <div class="ion-padding-horizontal">
            <ion-range aria-label="Dual Knobs Range" :dual-knobs="true" :value="{ lower: 20, upper: 80 }"></ion-range>
          </div>
        </div>

        <div class="wrapper">
          <ion-title>Pins</ion-title>
          <div class="ion-padding-horizontal">
            <ion-range aria-label="Range with pin" :pin="true" :pin-formatter="pinFormatter1"></ion-range>
          </div>
        </div>

        <div class="wrapper">
          <ion-title>Snapping & Ticks</ion-title>
          <div class="ion-padding-horizontal">
            <ion-range aria-label="Range with ticks" :ticks="true" :snaps="true" :min="0" :max="10"></ion-range>
          </div>
        </div>

        <div class="wrapper">
          <ion-title>Event Handling</ion-title>
          <div class="ion-padding-horizontal">
            <ion-range aria-label="Range with ionChange" @ionChange="onIonChange2"></ion-range>
            <ion-label>ionChange emitted value: {{lastEmittedValue2}}</ion-label>
          </div>
        </div>

        <div class="wrapper">
          <ion-title>Using ionKnobMoveStart & ionKnobMoveEnd</ion-title>
          <div class="ion-padding-horizontal">
            <ion-range
              aria-label="Range with knob events"
              @ionKnobMoveStart="onIonKnobMoveStart3"
              @ionKnobMoveEnd="onIonKnobMoveEnd3"
            ></ion-range>
            <div>
              <ion-label>ionKnobMoveStart: {{moveStart3}}</ion-label>
            </div>
            <div>
              <ion-label>onIonKnobMoveEnd: {{moveEnd3}}</ion-label>
            </div>
          </div>
        </div>

        <div class="wrapper">
          <ion-title>Theming</ion-title>
          <p>CSS Custom Properties</p>
          <div class="ion-padding-horizontal">
            <ion-range aria-label="Custom range" :value="50" :pin="true" class="CustomProperties"></ion-range>
          </div>
        </div>

        <div class="wrapper">
          <ion-title>Theming</ion-title>
          <p>CSS Shadow Parts</p>
          <div class="ion-padding-horizontal">
            <ion-range
              aria-label="Custom range"
              :min="0"
              :max="10"
              :value="5"
              :pin="true"
              :ticks="true"
              :snaps="true"
              class="ShadowParts"
            ></ion-range>
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
import {IonItem, IonList, IonRange } from '@ionic/vue';
import { ref, onMounted } from 'vue';
import { snowOutline, sunnyOutline } from 'ionicons/icons';


//
const pinFormatter1 = (value: number) => {
  return `${value}%...`;
};


//
let lastEmittedValue2 = ref();
const onIonChange2 = ({detail}) => {
  lastEmittedValue2.value = detail.value;
}


//
let moveStart3 = ref();
let moveEnd3 = ref();
const onIonKnobMoveStart3 = ({detail}) => {
  moveStart3.value = detail.value;
}
const onIonKnobMoveEnd3 = ({detail}) => {
  moveEnd3.value = detail.value;
}



</script>

<style scoped>


  /*  */
  ion-range.CustomProperties {
    --bar-background: #a2d2ff;
    --bar-background-active: #bde0fe;
    --bar-height: 8px;
    --bar-border-radius: 8px;
    --knob-background: #ffc8dd;
    --knob-size: 40px;
    --pin-background: #ffafcc;
    --pin-color: #fff;
  }

  /*  */
  ion-range.ShadowParts::part(tick) {
    background: #a2d2ff;
  }
  ion-range.ShadowParts::part(tick-active) {
    background: #bde0fe;
  }
  ion-range.ShadowParts::part(pin) {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: #ffafcc;
    color: #fff;
    border-radius: 50%;
    transform: scale(1.01);
    top: -20px;
    min-width: 28px;
    height: 28px;
    transition: transform 120ms ease, background 120ms ease;
  }
  ion-range.ShadowParts::part(pin)::before {
    content: none;
  }
  ion-range.ShadowParts::part(knob) {
    background: #ffc8dd;
  }
  ion-range.ShadowParts::part(bar) {
    background: #a2d2ff;
  }
  ion-range.ShadowParts::part(bar-active) {
    background: #bde0fe;
  }
</style>

