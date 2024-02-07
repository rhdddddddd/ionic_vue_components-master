<template>
  <ion-app>
    <ion-split-pane when="xl" content-id="main-content">
      <ion-menu content-id="main-content">
        <ion-header>
          <ion-toolbar>
            <ion-buttons slot="start">
              <ion-menu-button color="primary" style="position: absolute;"></ion-menu-button>
            </ion-buttons>
            <ion-title>Menu Content</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content color="light" class="ion-padding">

          <ion-list class="ion-margin-vertical">
            <ion-item>
              <ion-toggle :checked="themeToggle" @ionChange="toggleChange($event)" justify="space-between"
                >Dark Mode</ion-toggle
              >
            </ion-item>
          </ion-list>

          <ion-list class="ion-margin-vertical">
            <ion-item>
              <ion-label><a href="/home">Home</a></ion-label>
            </ion-item>
            <ion-item>
              <ion-label><a href="/cssutilities">CssUtilities</a></ion-label>
            </ion-item>
            <ion-item>
              <ion-label><a href="/folder">Routing (ID) Parameters</a></ion-label>
            </ion-item>
            <ion-item>
              <ion-label><a href="/accordion">Accordion</a></ion-label>
            </ion-item>
            <ion-item>
              <ion-label><a href="/actionsheet">ActionSheet</a></ion-label>
            </ion-item>
            <ion-item>
              <ion-label><a href="/alerts">Alerts</a></ion-label>
            </ion-item>
            <ion-item>
              <ion-label><a href="/badge">Badge</a></ion-label>
            </ion-item>
            <ion-item>
              <ion-label><a href="/breadcrumb">Breadcrumb</a></ion-label>
            </ion-item>
            <ion-item>
              <ion-label><a href="/button">Button</a></ion-label>
            </ion-item>
            <ion-item>
              <ion-label><a href="/card">Card</a></ion-label>
            </ion-item>
            <ion-item>
              <ion-label><a href="/checkbox">Checkbox</a></ion-label>
            </ion-item>
            <ion-item>
              <ion-label><a href="/chip">Chip</a></ion-label>
            </ion-item>
            <ion-item>
              <ion-label><a href="/content">Content</a></ion-label>
            </ion-item>
            <ion-item>
              <ion-label><a href="/datetime">Datetime</a></ion-label>
            </ion-item>
            <ion-item>
              <ion-label><a href="/fab">Fab</a></ion-label>
            </ion-item>
            <ion-item>
              <ion-label><a href="/grid">Grid</a></ion-label>
            </ion-item>
            <ion-item>
              <ion-label><a href="/infinitescroll">Infinitescroll</a></ion-label>
            </ion-item>
            <ion-item>
              <ion-label><a href="/icon">Icon</a></ion-label>
            </ion-item>
            <ion-item>
              <ion-label><a href="/input">Input</a></ion-label>
            </ion-item>
            <ion-item>
              <ion-label><a href="/item">Item</a></ion-label>
            </ion-item>
            <ion-item>
              <ion-label><a href="/list">List</a></ion-label>
            </ion-item>
            <ion-item>
              <ion-label><a href="/media">Media</a></ion-label>
            </ion-item>
            <ion-item>
              <ion-label><a href="/menu">Menu</a></ion-label>
            </ion-item>
            <ion-item>
              <ion-label><a href="/modal">Modal</a></ion-label>
            </ion-item>
            <ion-item>
              <ion-label><a href="/nav">Nav</a></ion-label>
            </ion-item>
            <ion-item>
              <ion-label><a href="/popover">Popover</a></ion-label>
            </ion-item>
            <ion-item>
              <ion-label><a href="/progress">Progress</a></ion-label>
            </ion-item>
            <ion-item>
              <ion-label><a href="/radio">Radio</a></ion-label>
            </ion-item>
            <ion-item>
              <ion-label><a href="/range">Range</a></ion-label>
            </ion-item>
            <ion-item>
              <ion-label><a href="/refresher">Refresher</a></ion-label>
            </ion-item>
            <ion-item>
              <ion-label><a href="/reorder">Reorder</a></ion-label>
            </ion-item>
            <ion-item>
              <ion-label><a href="/router">Router</a></ion-label>
            </ion-item>
            <ion-item>
              <ion-label><a href="/searchbar">Searchbar</a></ion-label>
            </ion-item>
            <ion-item>
              <ion-label><a href="/segment">Segment</a></ion-label>
            </ion-item>
            <ion-item>
              <ion-label><a href="/select">Select</a></ion-label>
            </ion-item>
            <ion-item>
              <ion-label><a href="/tabs">Tabs</a></ion-label>
            </ion-item>
            <ion-item>
              <ion-label><a href="/toast">Toast</a></ion-label>
            </ion-item>
            <ion-item>
              <ion-label><a href="/toggle">Toggle</a></ion-label>
            </ion-item>
            <ion-item>
              <ion-label><a href="/toolbar">Toolbar</a></ion-label>
            </ion-item>
            <ion-item>
              <ion-label><a href="/headerfooter">HeaderFooter</a></ion-label>
            </ion-item>
            <ion-item>
              <ion-label><a href="/backbutton">BackButton</a></ion-label>
            </ion-item>

          </ion-list>
        </ion-content>
      </ion-menu>
      <ion-router-outlet id="main-content"></ion-router-outlet>
    </ion-split-pane>
  </ion-app>
</template>

<script setup lang="ts">
  import {
    IonApp,
    IonContent,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonMenu,
    IonMenuToggle,
    IonMenuButton,
    IonNote,
    IonRouterOutlet,
    IonSplitPane,
    IonFooter,
    IonTitle,
    IonButton,
    IonButtons,
    IonHeader,
    IonRange,
    IonText,
    IonToggle,
    IonToolbar
  } from '@ionic/vue';
  import { ref } from 'vue';
  import type { ToggleCustomEvent } from '@ionic/vue';
  import { Preferences } from '@capacitor/preferences';


  // Dark theme switching is controlled by the presence or absence of dark class
// The value of window.matchMedia is saved as the initial value in Preferences storage, and the information is saved even after manually switching dark mode/page transition.

  const themeToggle = ref(false);

  const setName = async (k, v) => {
    await Preferences.set({
      key: k,
      value: v,
    });
  };

  const checkDarkMode = async () => {
    const { value } = await Preferences.get({ key: 'darkmode' });
    // console.log(`DarkMode is ${value}!`);
    if (value === null) {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
      if (prefersDark.matches) {
        setName('darkmode', 'dark');
        initializeDarkTheme(true);
      } else {
        setName('darkmode', '');
      }
    } else if (value === 'dark') {
      initializeDarkTheme(true);
    } else {
      initializeDarkTheme(false);
    }
  };
  checkDarkMode();

  const toggleDarkTheme = (shouldAdd) => {
    document.body.classList.toggle('dark', shouldAdd);
    if(shouldAdd){
      setName('darkmode', 'dark');
    }else{
      setName('darkmode', '');
    }
  };

  const initializeDarkTheme = (isDark) => {
    themeToggle.value = isDark;
    toggleDarkTheme(isDark);
  };

  const toggleChange = (ev: ToggleCustomEvent) => {
    toggleDarkTheme(ev.detail.checked);
  };


</script>

<style>

/* common */
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
.wrapper {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: auto;
  margin: 0 auto;
}
.wrapper p {
  width: 100%;
  text-align: left;
  margin: 20px 0 10px;
}
.wrapper div {
  width: 100%;
}



ion-title {
  position: relative;
  text-align: center;
  padding-inline: 0;
  margin-top: 20px;
  margin-bottom: 10px;
}
ion-toolbar > ion-title {
  margin: 10px 0;
}

ion-note {
  display: inline-block;
  font-size: 16px;
  color: var(--ion-color-medium-shade);
}
ion-item.selected {
  --color: var(--ion-color-primary);
}

hr {
  height: 1px !important;
  box-sizing: border-box !important;
  width: 100% !important;
  margin: 32px 0 !important;
  border-top-width: 4px !important;
  border-top-style: dotted !important;
  border-top-color: var(--ion-item-border-color) !important;
}

code {
  background-color: var(--ion-color-light-shade);
}



/* header */
ion-header {
}
ion-header > ion-toolbar > ion-buttons {
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
}
ion-header > ion-toolbar > ion-buttons[slot="start"] {
  left: 8px;
}
ion-header > ion-toolbar > ion-buttons[slot="end"] {
  right: 8px;
}



/* menu */
ion-menu ion-content {
  --background: var(--ion-item-background, var(--ion-background-color, #fff));
}

ion-menu ion-list {
  padding: 20px 0;
}
ion-menu ion-note {
  margin-bottom: 30px;
}
ion-menu ion-list-header,
ion-menu ion-note {
  padding-left: 10px;
}
ion-menu ion-list#inbox-list {
  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);
}

ion-menu ion-item {
  border-radius: 4px;
}
ion-menu ion-item.selected {
  --background: rgba(var(--ion-color-primary-rgb), 0.14);
}
ion-menu ion-item.selected ion-icon {
  color: var(--ion-color-primary);
}

/* footer */
ion-footer {
}
ion-footer ion-title {
  display: flex;
  align-items: center;
  height: 100%;
  margin: 10px auto;
}


/* form fix */
.textarea-wrapper div {
  width: auto;
}
ion-radio-group ion-radio {
  padding: 8px 8px;
}
ion-label + ion-radio {
  margin: 0px 8px;
}



/* popover fix */
ion-popover {
  --backdrop-opacity: 0.8;
}

/* md fix */
.sc-ion-searchbar-md-h {
  --box-shadow: inherit;
}

/* ios fix */


</style>
