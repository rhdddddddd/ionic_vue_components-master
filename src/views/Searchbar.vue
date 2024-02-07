<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Searchbar</ion-title>
      </ion-toolbar>
      <!-- Searchbars in Toolbars -->
      <ion-toolbar class="">
        <ion-searchbar></ion-searchbar>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding" :fullscreen="true">
      <div id="container">

        <div class="wrapper">
          <ion-toolbar class="ion-margin-vertical ion-padding ion-text-start">
            <b>#Referenced page</b>
            <br/><br/>
            <a href="https://ionicframework.com/docs/api/searchbar" target="_blank">https://ionicframework.com/docs/api/searchbar</a>
          </ion-toolbar>
        </div>

        <div class="wrapper">
          <ion-title>Basic Usage</ion-title>
          <div class="ion-margin-vertical">
            <ion-searchbar></ion-searchbar>
            <ion-searchbar placeholder="Custom Placeholder"></ion-searchbar>
            <ion-searchbar disabled="true" placeholder="Disabled"></ion-searchbar>
            <ion-searchbar value="Value"></ion-searchbar>
            <ion-searchbar animated="true" placeholder="Animated"></ion-searchbar>
          </div>
        </div>

        <div class="wrapper">
          <ion-title>Search Icon</ion-title>
          <div class="ion-margin-vertical">
            <ion-searchbar></ion-searchbar>
            <ion-searchbar :search-icon="searchCircle" placeholder="Custom Search Icon"></ion-searchbar>
          </div>
        </div>

        <div class="wrapper">
          <ion-title>Clear Button</ion-title>
          <div class="ion-margin-vertical">
            <ion-searchbar show-clear-button="focus" value="Show on Focus"></ion-searchbar>
            <ion-searchbar show-clear-button="always" value="Always Show"></ion-searchbar>
            <ion-searchbar show-clear-button="never" value="Never Show"></ion-searchbar>
            <ion-searchbar show-clear-button="always" :clear-icon="trashBin" value="Custom Clear Icon"></ion-searchbar>
          </div>
        </div>

        <div class="wrapper --ion-grid-padding-xs">
          <ion-title>Cancel Button</ion-title>
          <div class="ion-margin-vertical">
            <ion-searchbar show-cancel-button="focus" placeholder="Show on Focus"></ion-searchbar>
            <ion-searchbar show-cancel-button="always" placeholder="Always Show"></ion-searchbar>
            <ion-searchbar show-cancel-button="never" placeholder="Never Show"></ion-searchbar>
            <ion-searchbar
              show-cancel-button="always"
              cancel-button-text="Custom Cancel"
              :cancel-button-icon="trash"
              placeholder="Custom Cancel Button"
            ></ion-searchbar>
          </div>
        </div>

        <div class="wrapper">
          <ion-title>Searchbars in Toolbars</ion-title>
          <div class="ion-margin-vertical wrapper">
            <span>↑Look at the toolbar in the header :)</span>
          </div>
        </div>

        <div class="wrapper">
          <ion-title>Debounce</ion-title>
          <div class="ion-margin-vertical">
            <ion-searchbar :debounce="1000" @ionInput="handleInput1($event)"></ion-searchbar>
            <ion-list>
              <ion-item v-for="result in results1">
                <ion-label>{{ result }}</ion-label>
              </ion-item>
            </ion-list>
          </div>
        </div>

        <div class="wrapper">
          <ion-title>Theming​</ion-title>
          <p>Colors</p>
          <div class="ion-margin-vertical">
            <ion-searchbar placeholder="Default"></ion-searchbar>
            <ion-searchbar color="primary" placeholder="Primary"></ion-searchbar>
            <ion-searchbar color="secondary" placeholder="Secondary"></ion-searchbar>
            <ion-searchbar color="tertiary" placeholder="Tertiary"></ion-searchbar>
            <ion-searchbar color="success" placeholder="Success"></ion-searchbar>
            <ion-searchbar color="warning" placeholder="Warning"></ion-searchbar>
            <ion-searchbar color="danger" placeholder="Danger"></ion-searchbar>
            <ion-searchbar color="light" placeholder="Light"></ion-searchbar>
            <ion-searchbar color="medium" placeholder="Medium"></ion-searchbar>
            <ion-searchbar color="dark" placeholder="Dark"></ion-searchbar>
          </div>
        </div>

        <div class="wrapper">
          <p>CSS Custom Properties</p>
          <div class="ion-margin-vertical">
            <ion-searchbar showCancelButton="focus" class="custom"></ion-searchbar>
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
  import { IonContent, IonHeader, IonSearchbar, IonTitle, IonToolbar } from '@ionic/vue';
import { ref, onMounted } from 'vue';
import { searchCircle, trashBin, trash } from 'ionicons/icons';


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
  /* Scoped components require higher specificity to customize */
  ion-searchbar.custom {
    --background: #19422d;
    --color: #fff;
    --placeholder-color: #fff;
    --icon-color: #fff;
    --clear-button-color: #fff;
    --border-radius: 4px;
  }
  ion-searchbar.ios.custom {
    --cancel-button-color: #19422d;
  }
  ion-searchbar.md.custom {
    --cancel-button-color: #fff;
  }

</style>

