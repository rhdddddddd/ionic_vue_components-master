<template>

  <ion-backdrop ref="backdrop1" :visible="true" :class="{ off: backdropCloseFlag }" @ionBackdropTap="backdropClose()"></ion-backdrop>
  <div id="backdropItem" :class="{ off: backdropCloseFlag }">
    <p>ion-backdrop</p>
    <ion-button @click="backdropClose()">Close Backdrop</ion-button>
  </div>

  <ion-page ref="page">
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Modal</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding" :fullscreen="true">
      <div id="container">

        <div class="wrapper">
          <ion-toolbar class="ion-margin-vertical ion-padding ion-text-start">
            <b>#Referenced page</b>
            <br/><br/>
            <a href="https://ionicframework.com/docs/api/modal" target="_blank">https://ionicframework.com/docs/api/modal</a>
            <br/><br/>
            <a href="https://ionicframework.com/docs/api/backdrop" target="_blank">https://ionicframework.com/docs/api/backdrop</a>
          </ion-toolbar>
        </div>

        <div class="wrapper">
          <ion-title>ion-modal</ion-title>
          <p>Inline Modals</p>
          <div>
            <ion-button id="open-modal1" expand="block">Open</ion-button>
            <p>{{ message1 }}</p>
            <ion-modal ref="modal1" trigger="open-modal1" @willDismiss="onWillDismiss">
              <ion-header>
                <ion-toolbar>
                  <ion-buttons slot="start">
                    <ion-button @click="cancel()">Cancel</ion-button>
                  </ion-buttons>
                  <ion-title>Welcome</ion-title>
                  <ion-buttons slot="end">
                    <ion-button :strong="true" @click="confirm()">Confirm</ion-button>
                  </ion-buttons>
                </ion-toolbar>
              </ion-header>
              <ion-content class="ion-padding">
                <ion-item>
                  <ion-label position="stacked">Enter your name</ion-label>
                  <!-- <ion-input ref="input1" type="text" placeholder="Your name"></ion-input> -->
                  <ion-input v-model="name0" type="text" placeholder="Your name"></ion-input>
                </ion-item>
              </ion-content>
            </ion-modal>
          </div>
        </div>

        <div class="wrapper">
          <p>Using isOpen</p>
          <div>
            <ion-button expand="block" @click="setOpen1(true)">Open</ion-button>
            <ion-modal :is-open="isOpen1">
              <ion-header>
                <ion-toolbar>
                  <ion-title>Modal</ion-title>
                  <ion-buttons slot="end">
                    <ion-button @click="setOpen1(false)">Close</ion-button>
                  </ion-buttons>
                </ion-toolbar>
              </ion-header>
              <ion-content class="ion-padding">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni illum quidem recusandae ducimus quos
                  reprehenderit. Veniam, molestias quos, dolorum consequuntur nisi deserunt omnis id illo sit cum qui. Eaque,
                  dicta.
                </p>
              </ion-content>
            </ion-modal>
          </div>
        </div>

        <div class="wrapper">
          <p>Controller Modals</p>
          <div>
            <ion-button expand="block" @click="openModal">Open Modal</ion-button>
            <p>{{ message2 }}</p>
          </div>
        </div>

        <div class="wrapper">
          <ion-title>Preventing a Modal from Dismissing</ion-title>
          <p>Setting a boolean value</p>
          <div>
            <ion-button id="open-modal2" expand="block">Open</ion-button>
            <ion-modal ref="modal2" trigger="open-modal2" :can-dismiss="canDismiss2" :presenting-element="presentingElement2">
              <ion-header>
                <ion-toolbar>
                  <ion-title>Modal</ion-title>
                  <ion-buttons slot="end">
                    <ion-button @click="dismiss2()">Close</ion-button>
                  </ion-buttons>
                </ion-toolbar>
              </ion-header>
              <ion-content>
                <p class="ion-padding-horizontal">You must accept the terms and conditions to close this modal.</p>
                <ion-item>
                  <ion-label class="ion-text-wrap" for="terms">Do you accept the terms and conditions?</ion-label>
                  <ion-checkbox id="terms" @ionChange="onTermsChanged2" :checked="canDismiss2"></ion-checkbox>
                </ion-item>
              </ion-content>
            </ion-modal>
          </div>
        </div>

        <div class="wrapper">
          <p>Setting a callback function</p>
          <div>
            <ion-button id="open-modal3" expand="block">Open</ion-button>
            <ion-modal ref="modal3" trigger="open-modal3" :can-dismiss="canDismiss3" :presenting-element="presentingElement3">
              <ion-header>
                <ion-toolbar>
                  <ion-title>Modal</ion-title>
                  <ion-buttons slot="end">
                    <ion-button @click="dismiss3()">Close</ion-button>
                  </ion-buttons>
                </ion-toolbar>
              </ion-header>
              <ion-content class="ion-padding">
                <p>You will be prompted when closing this modal.</p>
              </ion-content>
            </ion-modal>
          </div>
        </div>

        <div class="wrapper">
          <p>Prevent swipe to close</p>
          <div>
            <ion-button id="open-modal4" expand="block">Open</ion-button>
            <ion-modal ref="modal4" trigger="open-modal4" :can-dismiss="canDismiss4" :presenting-element="page?.$el">
              <ion-header>
                <ion-toolbar>
                  <ion-title>Modal</ion-title>
                  <ion-buttons slot="end">
                    <ion-button @click="dismiss4()">Close</ion-button>
                  </ion-buttons>
                </ion-toolbar>
              </ion-header>
              <ion-content class="ion-padding">
                <p>To close this modal, please use the "Close" button provided. Note that swiping the modal will not dismiss it.</p>
              </ion-content>
            </ion-modal>
          </div>
        </div>

        <div class="wrapper">
          <p>Modifying dismiss behavior in child components</p>
          <div>
            <ion-button id="open-modal13" expand="block">Open</ion-button>
            <ion-modal ref="modal13" trigger="open-modal13" :can-dismiss="canDismiss13" :presenting-element="presentingElement13" @willPresent="willPresent13">
              <ModalItem2 :modal13="modal13" @dismissChange13="dismissChanged13" />
            </ion-modal>
          </div>
        </div>

        <div class="wrapper">
          <ion-title>Types of modals​</ion-title>
          <p>Card Modal</p>
          <div>
            <ion-button id="open-modal5" expand="block">Open Card Modal</ion-button>
            <ion-modal ref="modal5" trigger="open-modal5" :presenting-element="presentingElement5">
              <ion-header>
                <ion-toolbar>
                  <ion-title>Modal</ion-title>
                  <ion-buttons slot="end">
                    <ion-button @click="dismiss5()">Close</ion-button>
                  </ion-buttons>
                </ion-toolbar>
              </ion-header>
              <ion-content class="ion-padding">
                <ion-list>
                  <ion-item>
                    <ion-avatar slot="start">
                      <ion-img src="https://i.pravatar.cc/300?u=b"></ion-img>
                    </ion-avatar>
                    <ion-label>
                      <h2>Connor Smith</h2>
                      <p>Sales Rep</p>
                    </ion-label>
                  </ion-item>
                  <ion-item>
                    <ion-avatar slot="start">
                      <ion-img src="https://i.pravatar.cc/300?u=a"></ion-img>
                    </ion-avatar>
                    <ion-label>
                      <h2>Daniel Smith</h2>
                      <p>Product Designer</p>
                    </ion-label>
                  </ion-item>
                  <ion-item>
                    <ion-avatar slot="start">
                      <ion-img src="https://i.pravatar.cc/300?u=d"></ion-img>
                    </ion-avatar>
                    <ion-label>
                      <h2>Greg Smith</h2>
                      <p>Director of Operations</p>
                    </ion-label>
                  </ion-item>
                  <ion-item>
                    <ion-avatar slot="start">
                      <ion-img src="https://i.pravatar.cc/300?u=e"></ion-img>
                    </ion-avatar>
                    <ion-label>
                      <h2>Zoey Smith</h2>
                      <p>CEO</p>
                    </ion-label>
                  </ion-item>
                </ion-list>
              </ion-content>
            </ion-modal>
          </div>
        </div>

        <div class="wrapper">
          <p>Types of modals​ Sheet Modal</p>
          <div>
            <ion-button id="open-modal6" expand="block">Open Sheet Modal</ion-button>
            <ion-modal ref="modal6" trigger="open-modal6" :initial-breakpoint="0.25" :breakpoints="[0, 0.25, 0.5, 0.75]">
              <ion-content class="ion-padding">
              <ion-searchbar @click="modal6.value.$el.setCurrentBreakpoint(0.75)" placeholder="Search"></ion-searchbar>
                <ion-list>
                  <ion-item>
                    <ion-avatar slot="start">
                      <ion-img src="https://i.pravatar.cc/300?u=b"></ion-img>
                    </ion-avatar>
                    <ion-label>
                      <h2>Connor Smith</h2>
                      <p>Sales Rep</p>
                    </ion-label>
                  </ion-item>
                  <ion-item>
                    <ion-avatar slot="start">
                      <ion-img src="https://i.pravatar.cc/300?u=a"></ion-img>
                    </ion-avatar>
                    <ion-label>
                      <h2>Daniel Smith</h2>
                      <p>Product Designer</p>
                    </ion-label>
                  </ion-item>
                  <ion-item>
                    <ion-avatar slot="start">
                      <ion-img src="https://i.pravatar.cc/300?u=d"></ion-img>
                    </ion-avatar>
                    <ion-label>
                      <h2>Greg Smith</h2>
                      <p>Director of Operations</p>
                    </ion-label>
                  </ion-item>
                  <ion-item>
                    <ion-avatar slot="start">
                      <ion-img src="https://i.pravatar.cc/300?u=e"></ion-img>
                    </ion-avatar>
                    <ion-label>
                      <h2>Zoey Smith</h2>
                      <p>CEO</p>
                    </ion-label>
                  </ion-item>
                </ion-list>
              </ion-content>
            </ion-modal>
          </div>
        </div>

        <div class="wrapper">
          <p>Auto Height Sheet</p>
          <div>
            <ion-button id="open-modal8" expand="block">Auto Height Sheet</ion-button>
            <ion-modal trigger="open-modal8" :initial-breakpoint="1" :breakpoints="[0, 1]" class="AutoHeight">
              <div class="AutoHeightBlock"><span>Block of Content</span></div>
            </ion-modal>
          </div>
        </div>

        <div class="wrapper">
          <p>Handle Behavior</p>
          <div>
            <ion-button id="open-modal9" expand="block">Handle Behavior</ion-button>
            <ion-modal
              trigger="open-modal9"
              :initial-breakpoint="0.25"
              :breakpoints="[0, 0.25, 0.5, 0.75]"
              handle-behavior="cycle"
            >
              <ion-content class="ion-padding">
                <div class="ion-margin-top">
                  <ion-label>Click the handle above to advance to the next breakpoint.</ion-label>
                </div>
              </ion-content>
            </ion-modal>
          </div>
        </div>

        <div class="wrapper">
          <p>Styling</p>
          <div>
            <ion-button id="open-modal10" expand="block">Open Modal</ion-button>
            <ion-modal ref="modal10" trigger="open-modal10" class="StylingItem">
              <ion-content>
                <ion-toolbar>
                  <ion-title>Modal</ion-title>
                  <ion-buttons slot="end">
                    <ion-button color="light" @click="dismiss10()">Close</ion-button>
                  </ion-buttons>
                </ion-toolbar>
                <ion-list>
                  <ion-item>
                    <ion-avatar slot="start">
                      <ion-img src="https://i.pravatar.cc/300?u=b"></ion-img>
                    </ion-avatar>
                    <ion-label>
                      <h2>Connor Smith</h2>
                      <p>Sales Rep</p>
                    </ion-label>
                  </ion-item>
                  <ion-item>
                    <ion-avatar slot="start">
                      <ion-img src="https://i.pravatar.cc/300?u=a"></ion-img>
                    </ion-avatar>
                    <ion-label>
                      <h2>Daniel Smith</h2>
                      <p>Product Designer</p>
                    </ion-label>
                  </ion-item>
                  <ion-item>
                    <ion-avatar slot="start">
                      <ion-img src="https://i.pravatar.cc/300?u=d"></ion-img>
                    </ion-avatar>
                    <ion-label>
                      <h2>Greg Smith</h2>
                      <p>Director of Operations</p>
                    </ion-label>
                  </ion-item>
                  <ion-item>
                    <ion-avatar slot="start">
                      <ion-img src="https://i.pravatar.cc/300?u=e"></ion-img>
                    </ion-avatar>
                    <ion-label>
                      <h2>Zoey Smith</h2>
                      <p>CEO</p>
                    </ion-label>
                  </ion-item>
                </ion-list>
              </ion-content>
            </ion-modal>
          </div>
        </div>

        <div class="wrapper">
          <p>Animations</p>
          <div>
            <ion-button id="open-modal11" expand="block">Open Modal</ion-button>
            <ion-modal ref="modal11" trigger="open-modal11" :enter-animation="enterAnimation" :leave-animation="leaveAnimation">
              <ion-content>
                <ion-toolbar>
                  <ion-title>Modal</ion-title>
                  <ion-buttons slot="end">
                    <ion-button @click="dismiss11()">Close</ion-button>
                  </ion-buttons>
                </ion-toolbar>
                <ion-list>
                  <ion-item>
                    <ion-avatar slot="start">
                      <ion-img src="https://i.pravatar.cc/300?u=b"></ion-img>
                    </ion-avatar>
                    <ion-label>
                      <h2>Connor Smith</h2>
                      <p>Sales Rep</p>
                    </ion-label>
                  </ion-item>
                  <ion-item>
                    <ion-avatar slot="start">
                      <ion-img src="https://i.pravatar.cc/300?u=a"></ion-img>
                    </ion-avatar>
                    <ion-label>
                      <h2>Daniel Smith</h2>
                      <p>Product Designer</p>
                    </ion-label>
                  </ion-item>
                  <ion-item>
                    <ion-avatar slot="start">
                      <ion-img src="https://i.pravatar.cc/300?u=d"></ion-img>
                    </ion-avatar>
                    <ion-label>
                      <h2>Greg Smith</h2>
                      <p>Director of Operations</p>
                    </ion-label>
                  </ion-item>
                  <ion-item>
                    <ion-avatar slot="start">
                      <ion-img src="https://i.pravatar.cc/300?u=e"></ion-img>
                    </ion-avatar>
                    <ion-label>
                      <h2>Zoey Smith</h2>
                      <p>CEO</p>
                    </ion-label>
                  </ion-item>
                </ion-list>
              </ion-content>
            </ion-modal>
          </div>
        </div>

        <div class="wrapper">
          <p>Custom Dialogs</p>
          <div>
            <ion-button id="open-modal12" expand="block">Open Custom Dialog</ion-button>
            <ion-modal id="modal12" ref="modal12" trigger="open-modal12">
              <div class="wrapper">
                <h1>Dialog header</h1>
                <ion-list lines="none">
                  <ion-item :button="true" :detail="false" @click="dismiss12()">
                    <ion-icon :icon="personCircle"></ion-icon>
                    <ion-label>Item 1</ion-label>
                  </ion-item>
                  <ion-item :button="true" :detail="false" @click="dismiss12()">
                    <ion-icon :icon="personCircle"></ion-icon>
                    <ion-label>Item 2</ion-label>
                  </ion-item>
                  <ion-item :button="true" :detail="false" @click="dismiss12()">
                    <ion-icon :icon="personCircle"></ion-icon>
                    <ion-label>Item 3</ion-label>
                  </ion-item>
                </ion-list>
              </div>
            </ion-modal>
          </div>
        </div>

<hr>

        <div class="wrapper">
          <p>Interacting with background content</p>
          <div>
            <p>You can interact with the +/- buttons until the sheet is fully expanded.</p>
            <div class="counter__section">
              <ion-button id="decrement" @click="decrement()">-</ion-button>
              <p>{{count}}</p>
              <ion-button id="increment" @click="increment()">+</ion-button>
            </div>
            <ion-modal
              ref="modal7"
              trigger="open-modal7"
              :is-open="true"
              :initial-breakpoint="0.05"
              :breakpoints="[0.05, 0.25, 0.5, 0.75]"
              :backdrop-dismiss="false"
              :backdrop-breakpoint="0.5"
            >
              <ion-content class="ion-padding">
                <ion-searchbar @click="modal7.value.$el.setCurrentBreakpoint(0.75)" placeholder="Search"></ion-searchbar>
                <ion-list>
                  <ion-item>
                    <ion-avatar slot="start">
                      <ion-img src="https://i.pravatar.cc/300?u=b"></ion-img>
                    </ion-avatar>
                    <ion-label>
                      <h2>Connor Smith</h2>
                      <p>Sales Rep</p>
                    </ion-label>
                  </ion-item>
                  <ion-item>
                    <ion-avatar slot="start">
                      <ion-img src="https://i.pravatar.cc/300?u=a"></ion-img>
                    </ion-avatar>
                    <ion-label>
                      <h2>Daniel Smith</h2>
                      <p>Product Designer</p>
                    </ion-label>
                  </ion-item>
                  <ion-item>
                    <ion-avatar slot="start">
                      <ion-img src="https://i.pravatar.cc/300?u=d"></ion-img>
                    </ion-avatar>
                    <ion-label>
                      <h2>Greg Smith</h2>
                      <p>Director of Operations</p>
                    </ion-label>
                  </ion-item>
                  <ion-item>
                    <ion-avatar slot="start">
                      <ion-img src="https://i.pravatar.cc/300?u=e"></ion-img>
                    </ion-avatar>
                    <ion-label>
                      <h2>Zoey Smith</h2>
                      <p>CEO</p>
                    </ion-label>
                  </ion-item>
                </ion-list>
              </ion-content>
            </ion-modal>
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
  import { IonButtons, IonButton, IonModal, IonHeader, IonContent, IonToolbar, IonTitle, IonItem, IonInput, IonLabel, modalController, IonCheckbox, CheckboxCustomEvent, actionSheetController,createAnimation } from '@ionic/vue';
  import { OverlayEventDetail } from '@ionic/core/components';
  import { ref, onMounted } from 'vue';
  import { personCircle } from 'ionicons/icons';

  import ModalItem1 from '../components/ModalItem1.vue';
  import ModalItem2 from '../components/ModalItem2.vue';


  const modal1 = ref();
  const input1 = ref();

  let name0 = ref<string>();

  let message1 = ref('This modal example uses triggers to automatically open a modal when the button is clicked.');

  const cancel = () => {
    modal1.value.$el.dismiss(null, 'cancel');
  }
  const confirm = () => {
    const name = input1.value;
    modal1.value.$el.dismiss(name, 'confirm');
  }
  // const onWillDismiss = (ev: CustomEvent<OverlayEventDetail>) => {
  //   console.log('onWillDismiss');
  //   if (ev.detail.role === 'confirm') {
  //     console.log({role:ev.detail.role});
  //     console.log({data:ev.detail.data});
  //     message1.value = `Hello, ${ev.detail.data}!`;
  //   }
  // }
  const onWillDismiss = (ev: CustomEvent<OverlayEventDetail>) => {
    console.log('onWillDismiss');
    if (ev.detail.role === 'confirm') {
      console.log({role:ev.detail.role});
      console.log({name0:name0.value});
      if (name0.value !== undefined){
        message1.value = `Hello, ${name0.value}!`;
      } else {
        message1.value = `Hello, Hello!`;
      }
    }
  }


//
  let isOpen1 = ref(false);
  const setOpen1 = (openFlag: boolean) => {
    console.log({openFlag:openFlag})
    isOpen1.value = openFlag;
  }



//
  let message2 = ref('This modal example uses the modalController to present and dismiss modals.');

  const openModal = async () => {
    const modal = await modalController.create({
      component: ModalItem1,
    });
    modal.present();
    const { data, role } = await modal.onWillDismiss();
    if (role === 'confirm') {
      console.log('confirm')
      console.log({data:data})
      message2.value = `Hello, ${data}!`;
    }
  }



//
  const page = ref();
  const modal2 = ref();
  let canDismiss2 = ref(false);
  let presentingElement2 = ref(undefined);

  const dismiss2 = () => {
    modal2.value.$el.dismiss();
  };
  const onTermsChanged2 = (ev: CheckboxCustomEvent) => {
    console.log(canDismiss2.value);
    console.log(ev.detail.checked);
    canDismiss2.value = ev.detail.checked;
  };



//
  const modal3 = ref();
  let presentingElement3 = ref(undefined);

  const dismiss3 = () => {
    modal3.value.$el.dismiss();
  };
  const canDismiss3 = async () => {
    const actionSheet3 = await actionSheetController.create({
      header: 'Are you sure?',
      buttons: [
        {
          text: 'Yes',
          role: 'confirm',
        },
        {
          text: 'No',
          role: 'cancel',
        },
      ],
    });
    actionSheet3.present();
    const { role } = await actionSheet3.onWillDismiss();
    return role === 'confirm';
  }



//
  const modal4 = ref();

  const dismiss4 = () => {
    modal4.value.$el.dismiss();
  };
  const canDismiss4 = async (data?: any, role?: string) => {
    return role !== 'gesture';
  }



//
  const modal5 = ref();
  let presentingElement5 = ref(null);
  const dismiss5 = () => {
    modal5.value.$el.dismiss();
  };



//
  const modal6 = ref();


//
  const modal10 = ref();
  const dismiss10 = () => {
    modal10.value.$el.dismiss();
  };



//
  const modal11 = ref();
  const dismiss11 = () => {
    modal11.value.$el.dismiss();
  };

  const enterAnimation = (baseEl: HTMLElement) => {
    const root = baseEl.shadowRoot;
    const backdropAnimation = createAnimation()
      .addElement(root.querySelector('ion-backdrop'))!
      .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');
    const wrapperAnimation = createAnimation()
      .addElement(root.querySelector('.modal-wrapper'))!
      .keyframes([
        { offset: 0, opacity: '0', transform: 'scale(0)' },
        { offset: 1, opacity: '0.99', transform: 'scale(1)' },
      ]);
    return createAnimation()
      .addElement(baseEl)
      .easing('ease-out')
      .duration(500)
      .addAnimation([backdropAnimation, wrapperAnimation]);
  };
  const leaveAnimation = (baseEl: HTMLElement) => {
    return enterAnimation(baseEl).direction('reverse');
  };



//
  const modal12 = ref();
  const dismiss12 = () => {
    modal12.value.$el.dismiss();
  };



//
  const modal13 = ref();
  let presentingElement13 = ref(null);
  let canDismissOverride13 = false;
  const dismiss13 = () => {
    modal13.value.$el.dismiss();
  };

  const canDismiss13 = async () => {
    if (canDismissOverride13) {
      // Checks for the override flag to return early if we can dismiss the overlay immediately
      return true;
    }
    const actionSheet13 = await actionSheetController.create({
      header: 'Are you sure?',
      buttons: [
        {
          text: 'Yes',
          role: 'confirm',
        },
        {
          text: 'No',
          role: 'cancel',
        },
      ],
    });
    actionSheet13.present();
    const { role } = await actionSheet13.onWillDismiss();
    return role === 'confirm';
  };
  const willPresent13 = () => {
    // Resets the override when the modal is presented
    canDismissOverride13 = false;
  };
  const dismissChanged13 = () => {
    // Allows the modal to be dismissed based on the state of the checkbox
    canDismissOverride13 = true;
  };







//
  const modal7 = ref();
  let count = ref(0);

  const increment = () => {
    count.value++;
  };
  const decrement = () => {
    count.value--;
  };



//
  const backdrop1 = ref();
  let backdropCloseFlag = ref(false);
  const backdropClose = () => {
    backdropCloseFlag.value = true;
  };



//
  onMounted(() => {
    presentingElement2 = page.value.$el;
    presentingElement3 = page.value.$el;
    presentingElement5 = page.value.$el;
    presentingElement13.value = page.value;
  });







</script>

<style scoped>
.counter__section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 100px;
}
.counter__section p {
  text-align: center;
}

/*  */
  .AutoHeightBlock {
    width: 100%;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--ion-color-medium);
  }
  ion-modal.AutoHeight {
    --height: auto;
  }

/*  */
  ion-modal.StylingItem {
    --height: 50%;
    --border-radius: 16px;
    --box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  }
  ion-modal.StylingItem::part(backdrop) {
    background: rgba(209, 213, 219);
    opacity: 1;
  }
  ion-modal.StylingItem ion-toolbar {
    --background: rgb(14 116 144);
    --color: white;
  }


  /*  */
    ion-modal#modal12 {
    --width: fit-content;
    --min-width: 250px;
    --height: fit-content;
    --border-radius: 6px;
    --box-shadow: 0 28px 48px rgba(0, 0, 0, 0.4);
    color: var(--ion-color-medium);
  }
  ion-modal#modal12 h1 {
    margin: 20px 20px 10px 20px;
  }
  ion-modal#modal12 ion-icon {
    margin-right: 6px;
    width: 48px;
    height: 48px;
    padding: 4px 0;
    color: #aaaaaa;
  }
  ion-modal#modal12 .wrapper {
    margin-bottom: 10px;
  }
  ion-modal#modal12 .wrapper > h1{
    width: 100%;
  }


/*  */
  ion-backdrop {
    opacity: 0.9;
    background: var(--ion-color-tertiary);
  }
  ion-backdrop.off {
    display: none !important;
  }
  #backdropItem {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap:wrap;
    background: var(--ion-background-color, #fff);
    width: 90%;
    height: 180px;
    border-radius: 10px;
    padding: 10px;
  }
  #backdropItem.off {
    display: none !important;
  }
  #backdropItem p {
    width: 80%;
    color: var(--ion-color-secondary);
    text-align: center;
  }


</style>

