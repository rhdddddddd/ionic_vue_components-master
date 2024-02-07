<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Toast</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding" :fullscreen="true">
      <div id="container">

        <div class="wrapper">
          <ion-toolbar class="ion-margin-vertical ion-padding ion-text-start">
            <b>#Referenced page</b>
            <br/><br/>
            <a href="https://ionicframework.com/docs/api/toast" target="_blank">https://ionicframework.com/docs/api/toast</a>
          </ion-toolbar>
        </div>

        <div class="wrapper">
          <ion-title>Inline Toasts (Recommended)</ion-title>
          <div>
            <ion-button id="open-toast0" expand="block">Open</ion-button>
            <p>This toast example uses triggers to automatically open a toast when the button is clicked.</p>
            <ion-toast trigger="open-toast0" message="This toast will disappear after 2 seconds" :duration="2000"></ion-toast>
          </div>
        </div>

        <div class="wrapper">
          <p>Using isOpen</p>
          <div>
            <ion-button expand="block" @click="setOpen1(true)">Open</ion-button>
            <ion-toast
              :is-open="isOpen1"
              message="This toast will close in 1 seconds"
              :duration="1000"
              @didDismiss="setOpen1(false)"
            ></ion-toast>
          </div>
        </div>

        <div class="wrapper">
          <ion-title>Controller Toasts</ion-title>
          <div>
            <ion-button expand="block" @click="presentToast2('top')">Present Toast At the Top</ion-button>
            <ion-button expand="block" @click="presentToast2('middle')">Present Toast At the Middle</ion-button>
            <ion-button expand="block" @click="presentToast2('bottom')">Present Toast At the Bottom</ion-button>
          </div>
        </div>

        <div class="wrapper">
          <ion-title>Dismissing</ion-title>
          <div class="wrapper">
            <ion-button id="open-toast3">Open Toast</ion-button>
            <ion-toast
              trigger="open-toast3"
              message="Hello World!"
              :duration="3000"
              :buttons="toastButtons3"
              @didDismiss="setRoleMessage3($event)"
            ></ion-toast>
            <p style="margin: 10px 0 0;">{{ handlerMessage3 }}</p>
            <p style="margin: 10px 0 0;">{{ roleMessage3 }}</p>
          </div>
        </div>

        <div class="wrapper">
          <ion-title>Positioning</ion-title>
          <p>Relative Positioning</p>
          <div class="wrapper">
            <ion-button id="headerAnchor" style="width: 100%;">Anchor to Header</ion-button>
            <ion-button id="footerAnchor" style="width: 100%;">Anchor to Footer</ion-button>
            <ion-toast
              trigger="headerAnchor"
              position="top"
              position-anchor="header"
              message="Hello World!"
              :duration="2000"
            ></ion-toast>
            <ion-toast
              trigger="footerAnchor"
              position="bottom"
              position-anchor="footer"
              message="Hello World!"
              :duration="2000"
            ></ion-toast>
          </div>
        </div>

        <div class="wrapper">
          <ion-title>Swipe to Dismiss</ion-title>
          <div class="wrapper">
            <ion-button id="open-toast">Open Toast</ion-button>
            <ion-toast
              message="This toast can be swiped to dismiss"
              trigger="open-toast"
              swipe-gesture="vertical"
              position="bottom"
              position-anchor="footer"
            ></ion-toast>
          </div>
        </div>

        <div class="wrapper">
          <ion-title>Layout</ion-title>
          <div class="wrapper">
            <ion-button id="open-inline-toast4">Open Baseline Layout Toast</ion-button>
            <ion-button id="open-stacked-toast4">Open Stacked Layout Toast</ion-button>
            <ion-toast
              trigger="open-inline-toast4"
              :duration="3000"
              :buttons="toastButtons4"
              message="This is a toast with a long message and a button that appears on the same line."
            ></ion-toast>
            <ion-toast
              trigger="open-stacked-toast4"
              :duration="3000"
              :buttons="toastButtons4"
              message="This is a toast with a long message and a button that appears on the next line."
              layout="stacked"
            ></ion-toast>
          </div>
        </div>

        <div class="wrapper">
          <ion-title>Icons</ion-title>
          <div class="wrapper">
            <ion-button id="open-toast5">Open Toast</ion-button>
            <ion-toast trigger="open-toast5" message="Hello World!" :duration="3000" :icon="globe"></ion-toast>
          </div>
        </div>

        <div class="wrapper">
          <ion-title>Theming</ion-title>
          <div class="wrapper">
            <ion-button id="open-toast6">Open Toast</ion-button>
            <ion-toast
              trigger="open-toast6"
              :duration="3000"
              message="Hello Styled World!"
              class="custom-toast"
              :buttons="toastButtons6"
            ></ion-toast>
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
  import { IonContent, IonHeader, IonTitle, IonToolbar, IonToast, IonButton, toastController } from '@ionic/vue';
  import { ref, onMounted } from 'vue';
  import { globe } from 'ionicons/icons';

//
  const isOpen1 = ref(false);
  const setOpen1 = (state: boolean) => {
    isOpen1.value = state;
  };



//
  const presentToast2 = async (position: 'top' | 'middle' | 'bottom') => {
    const toast = await toastController.create({
      message: 'Hello World!',
      duration: 1500,
      position: position,
    });
    await toast.present();
  }



//
  const handlerMessage3 = ref('');
  const roleMessage3 = ref('');
  const toastButtons3 = [
    {
      text: 'More Info',
      role: 'info',
      handler: () => {
        handlerMessage3.value = 'More Info clicked';
      },
    },
    {
      text: 'Dismiss',
      role: 'cancel',
      handler: () => {
        handlerMessage3.value = 'Dismiss clicked';
      },
    },
  ];
  const setRoleMessage3 = (ev: CustomEvent) => {
    const { role } = ev.detail;
    console.log('hi there');
    roleMessage3.value = `Dismissed with role: ${role}`;
  };



//
  const toastButtons4 = [
    {
      text: 'Action With Long Text'
    }
  ]


//
  const toastButtons6 = [
    {
      text: 'Dismiss',
      role: 'cancel',
    }
  ]


</script>

<style scoped>

  /*  */
  ion-toast.custom-toast {
    --background: #f4f4fa;
    --box-shadow: 3px 3px 10px 0 rgba(0, 0, 0, 0.2);
    --color: #08b132;
  }
  ion-toast.custom-toast::part(message) {
    font-style: italic;
  }
  ion-toast.custom-toast::part(button) {
    border-left: 1px solid #d2d2d2;
    color: #030207;
    font-size: 15px;
  }
</style>

