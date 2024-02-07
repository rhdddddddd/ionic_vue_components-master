<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Select</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding" :fullscreen="true">
      <div id="container">

        <div class="wrapper">
          <ion-toolbar class="ion-margin-vertical ion-padding ion-text-start">
            <b>#Referenced page</b>
            <br/><br/>
            <a href="https://ionicframework.com/docs/api/select" target="_blank">https://ionicframework.com/docs/api/select</a>
          </ion-toolbar>
        </div>

        <div class="wrapper">
          <ion-title>Labels</ion-title>
          <p>Label Placement</p>
          <div class="ion-margin-vertical">
            <ion-list>
              <ion-item>
                <ion-select label="Default label" placeholder="Favorite Fruit">
                  <ion-select-option value="apple">Apple</ion-select-option>
                  <ion-select-option value="banana">Banana</ion-select-option>
                  <ion-select-option value="orange">Orange</ion-select-option>
                </ion-select>
              </ion-item>
              <ion-item>
                <ion-select label="Fixed label" label-placement="fixed" placeholder="Favorite fruit">
                  <ion-select-option value="apple">Apple</ion-select-option>
                  <ion-select-option value="banana">Banana</ion-select-option>
                  <ion-select-option value="orange">Orange</ion-select-option>
                </ion-select>
              </ion-item>
              <ion-item>
                <ion-select label="Stacked label" label-placement="stacked">
                  <ion-select-option value="apple">Apple</ion-select-option>
                  <ion-select-option value="banana">Banana</ion-select-option>
                  <ion-select-option value="orange">Orange</ion-select-option>
                </ion-select>
              </ion-item>
              <ion-item>
                <ion-select label="Floating label" label-placement="floating">
                  <ion-select-option value="apple">Apple</ion-select-option>
                  <ion-select-option value="banana">Banana</ion-select-option>
                  <ion-select-option value="orange">Orange</ion-select-option>
                </ion-select>
              </ion-item>
            </ion-list>
          </div>
        </div>

        <div class="wrapper">
          <p>Label Slot</p>
          <div class="ion-margin-vertical">
            <ion-list>
              <ion-item>
                <ion-select placeholder="Select a Fruit">
                  <div slot="label">Favorite Fruit <ion-text color="danger">(Required)</ion-text></div>
                  <ion-select-option value="apple">Apple</ion-select-option>
                  <ion-select-option value="banana">Banana</ion-select-option>
                  <ion-select-option value="orange">Orange</ion-select-option>
                </ion-select>
              </ion-item>
            </ion-list>
          </div>
        </div>

        <div class="wrapper">
          <p>No Visible Label</p>
          <div class="ion-margin-vertical">
            <ion-list>
              <ion-item>
                <ion-select aria-label="Favorite Fruit" value="apple">
                  <ion-select-option value="apple">Apple</ion-select-option>
                  <ion-select-option value="banana">Banana</ion-select-option>
                  <ion-select-option value="orange">Orange</ion-select-option>
                </ion-select>
              </ion-item>
            </ion-list>
          </div>
        </div>

        <div class="wrapper">
          <ion-title>Single Selection</ion-title>
          <div class="ion-margin-vertical">
            <ion-list>
              <ion-item>
                <ion-select aria-label="fruit" placeholder="Select fruit">
                  <ion-select-option value="apples">Apples</ion-select-option>
                  <ion-select-option value="oranges">Oranges</ion-select-option>
                  <ion-select-option value="bananas">Bananas</ion-select-option>
                </ion-select>
              </ion-item>
            </ion-list>
          </div>
        </div>

        <div class="wrapper">
          <ion-title>Multiple Selection</ion-title>
          <div class="ion-margin-vertical">
            <ion-list>
              <ion-item>
                <ion-select aria-label="Fruit" placeholder="Select all fruits that apply" :multiple="true">
                  <ion-select-option value="apples">Apples</ion-select-option>
                  <ion-select-option value="oranges">Oranges</ion-select-option>
                  <ion-select-option value="bananas">Bananas</ion-select-option>
                </ion-select>
              </ion-item>
            </ion-list>
          </div>
        </div>

        <div class="wrapper">
          <ion-title>Interfaces</ion-title>
          <p>Alert</p>
          <div class="ion-margin-vertical">
            <ion-list>
              <ion-item>
                <ion-select aria-label="fruit" placeholder="Select fruit">
                  <ion-select-option value="apples">Apples</ion-select-option>
                  <ion-select-option value="oranges">Oranges</ion-select-option>
                  <ion-select-option value="bananas">Bananas</ion-select-option>
                </ion-select>
              </ion-item>
            </ion-list>
          </div>
        </div>

        <div class="wrapper">
          <p>Action Sheet</p>
          <div class="ion-margin-vertical">
            <ion-list>
              <ion-item>
                <ion-select aria-label="Fruit" interface="action-sheet" placeholder="Select fruit">
                  <ion-select-option value="apples">Apples</ion-select-option>
                  <ion-select-option value="oranges">Oranges</ion-select-option>
                  <ion-select-option value="bananas">Bananas</ion-select-option>
                </ion-select>
              </ion-item>
            </ion-list>
          </div>
        </div>

        <div class="wrapper">
          <p>Popover</p>
          <div class="ion-margin-vertical">
            <ion-list>
              <ion-item>
                <ion-select aria-label="Fruit" interface="popover" placeholder="Select fruit">
                  <ion-select-option value="apples">Apples</ion-select-option>
                  <ion-select-option value="oranges">Oranges</ion-select-option>
                  <ion-select-option value="bananas">Bananas</ion-select-option>
                </ion-select>
              </ion-item>
            </ion-list>
          </div>
        </div>

        <div class="wrapper">
          <ion-title>Responding to Interaction</ion-title>
          <div class="ion-margin-vertical">
            <ion-list>
              <ion-item>
                <ion-select
                  aria-label="Fruit"
                  placeholder="Select fruit"
                  @ionChange="pushLog1('ionChange fired with value: ' + $event.detail.value)"
                  @ionCancel="pushLog1('ionCancel fired')"
                  @ionDismiss="pushLog1('ionDismiss fired')"
                >
                  <ion-select-option value="apples">Apples</ion-select-option>
                  <ion-select-option value="oranges">Oranges</ion-select-option>
                  <ion-select-option value="bananas">Bananas</ion-select-option>
                </ion-select>
              </ion-item>
            </ion-list>
            <div class="ion-padding">
              <p v-for="log in logs1" v-bind:key="log.id">{{ log }}</p>
            </div>
          </div>
        </div>

        <div class="wrapper">
          <ion-title>Object Value References</ion-title>
          <p>Using compareWith</p>
          <div class="ion-margin-vertical">
            <ion-list>
              <ion-item>
                <ion-select
                  aria-label="Food"
                  placeholder="Select fruit"
                  :compareWith="compareWith2"
                  @ionChange="currentFood2 = JSON.stringify($event.detail.value)"
                >
                  <ion-select-option v-for="food in foods2" :key="food.id" :value="food">{{ food.name }}</ion-select-option>
                </ion-select>
              </ion-item>
              <ion-item lines="none">
                <ion-label>Current value: {{ currentFood2 }}</ion-label>
              </ion-item>
            </ion-list>
          </div>
        </div>

        <div class="wrapper">
          <p>Object Values and Multiple Selection</p>
          <div class="ion-margin-vertical">
            <ion-list>
              <ion-item>
                <ion-select
                  aria-label="Food"
                  placeholder="Select food"
                  :compareWith="compareWith3"
                  @ionChange="currentFood3 = JSON.stringify($event.detail.value)"
                  :multiple="true"
                >
                  <ion-select-option v-for="food in foods3" :key="food.id" :value="food">{{ food.name }}</ion-select-option>
                </ion-select>
              </ion-item>
              <ion-item lines="none">
                <ion-label>Current value: {{ currentFood3 }}</ion-label>
              </ion-item>
            </ion-list>
          </div>
        </div>

        <div class="wrapper">
          <p>Justification</p>
          <div class="ion-margin-vertical">
            <ion-list>
              <ion-item>
                <ion-select justify="start" label="Start" placeholder="Favorite fruit">
                  <ion-select-option value="apple">Apple</ion-select-option>
                  <ion-select-option value="banana">Banana</ion-select-option>
                  <ion-select-option value="orange">Orange</ion-select-option>
                </ion-select>
              </ion-item>
              <ion-item>
                <ion-select justify="end" label="End" placeholder="Favorite fruit">
                  <ion-select-option value="apple">Apple</ion-select-option>
                  <ion-select-option value="banana">Banana</ion-select-option>
                  <ion-select-option value="orange">Orange</ion-select-option>
                </ion-select>
              </ion-item>
              <ion-item>
                <ion-select justify="space-between" label="Space Between" placeholder="Favorite fruit">
                  <ion-select-option value="apple">Apple</ion-select-option>
                  <ion-select-option value="banana">Banana</ion-select-option>
                  <ion-select-option value="orange">Orange</ion-select-option>
                </ion-select>
              </ion-item>
            </ion-list>
          </div>
        </div>

        <div class="wrapper">
          <p>Filled Selects</p>
          <p class="ion-text-center"><b>Unavaliable for iOS</b></p>
          <div class="ion-margin-vertical">
            <ion-select label="Solid select" label-placement="floating" fill="solid">
              <ion-select-option value="apple">Apple</ion-select-option>
              <ion-select-option value="banana">Banana</ion-select-option>
              <ion-select-option value="orange">Orange</ion-select-option>
            </ion-select>
            <br />
            <ion-select label="Outline select" label-placement="floating" fill="outline">
              <ion-select-option value="apple">Apple</ion-select-option>
              <ion-select-option value="banana">Banana</ion-select-option>
              <ion-select-option value="orange">Orange</ion-select-option>
            </ion-select>
          </div>
        </div>

        <div class="wrapper">
          <p>Select Buttons</p>
          <div class="ion-margin-vertical">
            <ion-list>
              <ion-item>
                <ion-select label="Alert Interface" placeholder="Select fruit" ok-text="Choose Fruit" cancel-text="Cancel Choice">
                  <ion-select-option value="apples">Apples</ion-select-option>
                  <ion-select-option value="oranges">Oranges</ion-select-option>
                  <ion-select-option value="bananas">Bananas</ion-select-option>
                </ion-select>
              </ion-item>
              <ion-item>
                <ion-select
                  label="Action Sheet Interface"
                  interface="action-sheet"
                  placeholder="Select fruit"
                  cancel-text="Cancel Choice"
                >
                  <ion-select-option value="apples">Apples</ion-select-option>
                  <ion-select-option value="oranges">Oranges</ion-select-option>
                  <ion-select-option value="bananas">Bananas</ion-select-option>
                </ion-select>
              </ion-item>
            </ion-list>
          </div>
        </div>

        <div class="wrapper">
          <p>Select Buttons</p>
          <div class="ion-margin-vertical">
            <ion-list>
              <ion-item>
                <ion-select label="Alert Interface" placeholder="Select fruit" ok-text="Choose Fruit" cancel-text="Cancel Choice">
                  <ion-select-option value="apples">Apples</ion-select-option>
                  <ion-select-option value="oranges">Oranges</ion-select-option>
                  <ion-select-option value="bananas">Bananas</ion-select-option>
                </ion-select>
              </ion-item>
              <ion-item>
                <ion-select
                  label="Action Sheet Interface"
                  interface="action-sheet"
                  placeholder="Select fruit"
                  cancel-text="Cancel Choice"
                >
                  <ion-select-option value="apples">Apples</ion-select-option>
                  <ion-select-option value="oranges">Oranges</ion-select-option>
                  <ion-select-option value="bananas">Bananas</ion-select-option>
                </ion-select>
              </ion-item>
            </ion-list>
          </div>
        </div>

        <div class="wrapper">
          <p>Interface Options</p>
          <div class="ion-margin-vertical">
            <ion-list>
              <ion-item>
                <ion-select label="Alert" :interface-options="customAlertOptions4" interface="alert" placeholder="Select One">
                  <ion-select-option value="bacon">Bacon</ion-select-option>
                  <ion-select-option value="onions">Onions</ion-select-option>
                  <ion-select-option value="pepperoni">Pepperoni</ion-select-option>
                </ion-select>
              </ion-item>
              <ion-item>
                <ion-select
                  label="Popover"
                  :interface-options="customPopoverOptions4"
                  interface="popover"
                  placeholder="Select One"
                >
                  <ion-select-option value="brown">Brown</ion-select-option>
                  <ion-select-option value="blonde">Blonde</ion-select-option>
                  <ion-select-option value="red">Red</ion-select-option>
                </ion-select>
              </ion-item>
              <ion-item>
                <ion-select
                  label="Action Sheet"
                  :interface-options="customActionSheetOptions4"
                  interface="action-sheet"
                  placeholder="Select One"
                >
                  <ion-select-option value="red">Red</ion-select-option>
                  <ion-select-option value="green">Green</ion-select-option>
                  <ion-select-option value="blue">Blue</ion-select-option>
                </ion-select>
              </ion-item>
            </ion-list>
          </div>
        </div>

        <div class="wrapper">
          <ion-title>Start and End Slots</ion-title>
          <div class="ion-margin-vertical wrapper">
            <ion-list>
              <ion-item>
                <ion-select label-placement="stacked" label="Favorite fruit" value="apple">
                  <ion-icon slot="start" :icon="leaf" aria-hidden="true"></ion-icon>
                  <ion-select-option value="apple">Apple</ion-select-option>
                  <ion-select-option value="banana">Banana</ion-select-option>
                  <ion-select-option value="orange">Orange</ion-select-option>
                  <ion-button fill="clear" slot="end" aria-label="Show/hide password">
                    <ion-icon slot="icon-only" :icon="eye" aria-hidden="true"></ion-icon>
                  </ion-button>
                </ion-select>
              </ion-item>
            </ion-list>
          </div>
        </div>

        <div class="wrapper">
          <ion-title>Customization</ion-title>
          <p>Styling Select Element</p>
          <div class="ion-margin-vertical wrapper">
            <ion-select aria-label="Fruit" class="StylingSelectElement​" placeholder="Select fruit">
              <ion-select-option value="apples">Apples</ion-select-option>
              <ion-select-option value="oranges">Oranges</ion-select-option>
              <ion-select-option value="bananas">Bananas</ion-select-option>
            </ion-select>
          </div>
        </div>

        <div class="wrapper">
          <p>Custom Toggle Icons</p>
          <div class="ion-margin-vertical wrapper">
            <ion-list>
              <ion-item>
                <ion-select
                  interface="popover"
                  :toggle-icon="add"
                  :expanded-icon="remove"
                  aria-label="fruit"
                  placeholder="Select fruit"
                >
                  <ion-select-option value="apples">Apples</ion-select-option>
                  <ion-select-option value="oranges">Oranges</ion-select-option>
                  <ion-select-option value="bananas">Bananas</ion-select-option>
                </ion-select>
              </ion-item>
            </ion-list>
          </div>
        </div>

        <div class="wrapper">
          <p>Icon Flip Behavior</p>
          <div class="ion-margin-vertical wrapper">
            <ion-list>
              <ion-item>
                <ion-select
                  class="always-flip"
                  :toggle-icon="caretDownSharp"
                  interface="popover"
                  label="Icon flips on both modes"
                  placeholder="Select fruit"
                >
                  <ion-select-option value="apples">Apples</ion-select-option>
                  <ion-select-option value="oranges">Oranges</ion-select-option>
                  <ion-select-option value="bananas">Bananas</ion-select-option>
                </ion-select>
              </ion-item>
              <ion-item>
                <ion-select
                  class="never-flip"
                  :toggle-icon="caretDownSharp"
                  interface="popover"
                  label="Icon never flips"
                  placeholder="Select fruit"
                >
                  <ion-select-option value="apples">Apples</ion-select-option>
                  <ion-select-option value="oranges">Oranges</ion-select-option>
                  <ion-select-option value="bananas">Bananas</ion-select-option>
                </ion-select>
              </ion-item>
            </ion-list>
          </div>
        </div>



        <div class="wrapper">
          <ion-title>Typeahead Component​</ion-title>
          <div class="ion-margin-vertical wrapper">
            <div>
              <ion-list :inset="true">
                <ion-item :button="true" :detail="false" id="select-fruits5">
                  <ion-label>Favorite Fruits</ion-label>
                  <div slot="end" id="selected-fruits5">{{ selectedFruitsText5 }}</div>
                </ion-item>
              </ion-list>
            </div>
            <ion-modal trigger="select-fruits5" ref="modal5">
              <SelectTypeahead
                class="ion-page"
                title="Favorite Fruits"
                :items="fruits"
                :selectedItems="selectedFruits5"
                @selection-change="fruitSelectionChanged5($event)"
                @selection-cancel="modal5.$el.dismiss()"
              ></SelectTypeahead>
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
  import { IonContent, IonHeader, IonTitle, IonToolbar, IonSelect, IonSelectOption, IonModal } from '@ionic/vue';
  import { ref, onMounted } from 'vue';
  import { eye, leaf } from 'ionicons/icons';
  import { add, remove } from 'ionicons/icons';
  import { caretDownSharp } from 'ionicons/icons';

  import SelectTypeahead from '../components/SelectTypeahead1.vue';

  export interface Item5 {
    text: string;
    val: string;
  }


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
  let logs1 = ref([]);
  const pushLog1 = (msg: any) => {
    logs1.value.unshift(msg);
  };



//
  const foods2 = [
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
  ];
  let currentFood2 = ref('');
  const compareWith2 = (o1, o2) => {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  }



//
  const foods3 = [
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
  ];
  let currentFood3 = ref('');
  const compareWith3 = (o1, o2) => {
    if (!o1 || !o2) {
      return o1 === o2;
    }
    if (Array.isArray(o2)) {
      return o2.some((o) => o.id === o1.id);
    }
    return o1.id === o2.id;
  }




//
  const customAlertOptions4:object = {
    header: 'Pizza Toppings',
    subHeader: 'Select your favorite topping',
    message: 'Choose only one',
    translucent: true,
  }
  const customPopoverOptions4:object = {
    header: 'Hair Color',
    subHeader: 'Select your hair color',
    message: 'Only select your dominant hair color',
  };
  const customActionSheetOptions4:object = {
    header: 'Colors',
    subHeader: 'Select your favorite color',
  };



//
  const fruits: Item5[] = [
    { text: 'Apple', val: 'apple' },
    { text: 'Apricot', val: 'apricot' },
    { text: 'Banana', val: 'banana' },
    { text: 'Blackberry', val: 'blackberry' },
    { text: 'Blueberry', val: 'blueberry' },
    { text: 'Cherry', val: 'cherry' },
    { text: 'Cranberry', val: 'cranberry' },
    { text: 'Grape', val: 'grape' },
    { text: 'Grapefruit', val: 'grapefruit' },
    { text: 'Guava', val: 'guava' },
    { text: 'Jackfruit', val: 'jackfruit' },
    { text: 'Lime', val: 'lime' },
    { text: 'Mango', val: 'mango' },
    { text: 'Nectarine', val: 'nectarine' },
    { text: 'Orange', val: 'orange' },
    { text: 'Papaya', val: 'papaya' },
    { text: 'Passionfruit', val: 'passionfruit' },
    { text: 'Peach', val: 'peach' },
    { text: 'Pear', val: 'pear' },
    { text: 'Plantain', val: 'plantain' },
    { text: 'Plum', val: 'plum' },
    { text: 'Pineapple', val: 'pineapple' },
    { text: 'Pomegranate', val: 'pomegranate' },
    { text: 'Raspberry', val: 'raspberry' },
    { text: 'Strawberry', val: 'strawberry' },
  ];
  const modal5 = ref();
  const selectedFruitsText5 = ref('0 Items');
  const selectedFruits5 = ref([]);
  const formatData5 = (data: string[]) => {
    if (data.length === 1) {
      const fruit = fruits.find((fruit) => fruit.val === data[0]);
      return fruit.text;
    }
    return `${data.length} items`;
  };
  const fruitSelectionChanged5 = (fruits: string[]) => {
    selectedFruits5.value = fruits;
    selectedFruitsText5.value = formatData5(selectedFruits5.value);
    modal5.value.$el.dismiss();
  };



</script>

<style scoped>


  /*  */
  ion-select.StylingSelectElement​ {
    --placeholder-color: #971e49;
    --placeholder-opacity: 1;
    width: 100%;
    justify-content: center;
  }
  ion-select.StylingSelectElement​::part(placeholder),
  ion-select.StylingSelectElement​::part(text) {
    flex: 0 0 auto;
  }
  ion-select.StylingSelectElement​::part(placeholder)::first-letter {
    font-size: 24px;
    font-weight: 500;
  }
  ion-select.StylingSelectElement​::part(text) {
    color: #545ca7;
  }
  ion-select.StylingSelectElement​::part(icon) {
    color: #971e49;
    opacity: 1;
  }


  /*  */
  ion-segment.shadow ion-segment-button::part(indicator-background) {
    background: #08a391;
  }
  /* Material Design styles */
  ion-segment.shadow ion-segment-button.md::part(native) {
    color: #000;
  }
  ion-segment.shadow .segment-button-checked.md::part(native) {
    color: #08a391;
  }
  ion-segment.shadow ion-segment-button.md::part(indicator-background) {
    height: 4px;
  }
  /* iOS styles */
  ion-segment.shadow on-segment-button.ios::part(native) {
    color: #08a391;
  }
  ion-segment.shadow .segment-button-checked.ios::part(native) {
    color: #fff;
  }
  ion-segment.shadow ion-segment-button.ios::part(indicator-background) {
    border-radius: 20px;
  }



/*  */
  ion-select.always-flip::part(icon) {
    transition: transform 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  }
  ion-select.always-flip.select-expanded::part(icon) {
    transform: rotate(180deg);
  }
  ion-select.never-flip::part(icon) {
    transform: none;
  }


  /*  */
  ion-segment.custom2 ion-segment-button {
    --indicator-color: #08a391;
  }
  /* Material Design styles */
  ion-segment.custom2 on-segment-button.md {
    --color: #000;
    --color-checked: #08a391;
    --indicator-height: 4px;
  }
  /* iOS styles */
  ion-segment.custom2 ion-segment-button.ios {
    --color: #08a391;
    --color-checked: #fff;
    --border-radius: 20px;
  }
</style>

