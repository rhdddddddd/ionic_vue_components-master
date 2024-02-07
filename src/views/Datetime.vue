<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Datetime</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding" :fullscreen="true">
      <div id="container">

        <div class="wrapper">
          <ion-toolbar class="ion-margin-vertical ion-padding ion-text-start">
            <b>#Referenced page</b>
            <br/><br/>
            <a href="https://ionicframework.com/docs/api/datetime" target="_blank">https://ionicframework.com/docs/api/datetime</a>
            <br/><br/>
            <a href="https://ionicframework.com/docs/api/picker" target="_blank">https://ionicframework.com/docs/api/picker</a>
          </ion-toolbar>
        </div>

        <div class="wrapper">
          <ion-title>Basic</ion-title>
          <div class="ion-margin-vertical wrapper">
            <ion-datetime></ion-datetime>
          </div>
        </div>
<br>
<br>
        <div class="wrapper">
          <ion-title>Max and Min Dates</ion-title>
          <div class="ion-margin-vertical wrapper">
            <ion-datetime
              value="2022-04-21T00:00:00"
              min="2022-03-01T00:00:00"
              max="2022-05-31T23:59:59"
            >
            </ion-datetime>
          </div>
        </div>
<br>
<br>
        <div class="wrapper">
          <ion-title>Selecting Specific Values</ion-title>
          <div class="ion-margin-vertical wrapper">
            <ion-datetime :is-date-enabled="isWeekday"></ion-datetime>
          </div>
        </div>
<br>
<br>
        <div class="wrapper">
          <ion-title>Date will be enabled if it is not Sunday or Saturday</ion-title>
          <div class="ion-margin-vertical wrapper">
            <ion-datetime
              minute-values="0,15,30,45"
              day-values="5,10,15,20,25,30"
            >
            </ion-datetime>
          </div>
        </div>
<br>
<br>
        <div class="wrapper">
          <ion-title>Custom Locale & Hour Cycle</ion-title>
          <div class="ion-margin-vertical wrapper">
            <ion-datetime locale="ja-JA" hour-cycle="h12">
              <span slot="time-label">時間</span>
            </ion-datetime>
          </div>
          <ion-title>Locale Extension Tags</ion-title>
          <div class="ion-margin-vertical wrapper">
            <ion-datetime locale="en-GB-u-hc-h12"></ion-datetime>
          </div>
        </div>
<br>
<br>
        <div class="wrapper">
          <ion-title>First Day of the Week</ion-title>
          <div class="ion-margin-vertical wrapper">
            <ion-datetime :first-day-of-week="1"></ion-datetime>
          </div>
        </div>
<br>
<br>
        <div class="wrapper">
          <ion-title>Month and Year Selection</ion-title>
          <div class="ion-margin-vertical wrapper">
            <ion-datetime presentation="month-year"></ion-datetime>
          </div>
          <ion-title>Time Selection</ion-title>
          <div class="ion-margin-vertical wrapper">
            <ion-datetime presentation="time"></ion-datetime>
          </div>
          <ion-title>Date Selection</ion-title>
          <div class="ion-margin-vertical wrapper">
            <ion-datetime presentation="date"></ion-datetime>
          </div>
        </div>
<br>
<br>
        <div class="wrapper">
          <ion-title>Multiple Date Selection</ion-title>
          <div class="ion-margin-vertical wrapper">
            <ion-datetime
              presentation="date"
              :multiple="true"
              :value="['2022-06-03', '2022-06-13', '2022-06-29']"
            >
            </ion-datetime>
          </div>
        </div>
<br>
<br>
        <div class="wrapper">
          <ion-title>Showing the Default Title</ion-title>
          <div class="ion-margin-vertical wrapper">
            <ion-datetime :show-default-title="true"></ion-datetime>
          </div>
          <ion-title>Customizing the Title</ion-title>
          <div class="ion-margin-vertical wrapper">
            <ion-datetime :show-default-title="true">
              <span slot="title">Select a Reservation Date</span>
            </ion-datetime>
          </div>
        </div>
<br>
<br>
        <div class="wrapper">
          <ion-title>Showing Confirmation Buttons</ion-title>
          <div class="ion-margin-vertical wrapper">
            <ion-datetime :show-default-buttons="true"></ion-datetime>
          </div>
          <ion-title>Customizing Button Texts</ion-title>
          <div class="ion-margin-vertical wrapper">
            <ion-datetime
              :show-default-buttons="true"
              done-text="All set"
              cancel-text="Never mind"
            ></ion-datetime>
          </div>
        </div>
<br>
<br>
        <div class="wrapper">
          <ion-title>Customizing Button Elements</ion-title>
          <div class="ion-margin-vertical wrapper">
            <ion-datetime ref="datetime">
              <ion-buttons slot="buttons">
                <ion-button color="danger" @click="reset()">Reset</ion-button>
                <ion-button color="primary" @click="cancel()">Never mind</ion-button>
                <ion-button color="primary" @click="confirm()">All Set</ion-button>
              </ion-buttons>
            </ion-datetime>
          </div>
        </div>
<br>
<br>
        <div class="wrapper">
          <ion-title>Highlighting Specific Dates</ion-title>
          <p>
            <ion-title>Using Array</ion-title>
          </p>
          <div class="ion-margin-vertical wrapper">
            <ion-datetime
              presentation="date"
              value="2023-01-01"
              :highlighted-dates="highlightedDates1"
            ></ion-datetime>
          </div>
          <ion-title>Using Callback</ion-title>
          <div class="ion-margin-vertical wrapper">
            <ion-datetime presentation="date" :highlighted-dates="highlightedDates2"></ion-datetime>
          </div>
        </div>
      </div>
<br>
<br>
      <div class="wrapper">
        <ion-title>datetime-button & modal</ion-title>
        <div class="ion-margin-vertical">
          <ion-datetime-button datetime="datetime"></ion-datetime-button>
        </div>
        <ion-modal :keep-contents-mounted="true">
          <ion-datetime id="datetime"></ion-datetime>
        </ion-modal>
      </div>
<br>
<br>
      <div class="wrapper">
        <ion-title>Inline Pickers</ion-title>
        <div class="ion-margin-vertical">
          <ion-button id="open-picker1">Open</ion-button>
          <ion-picker
            trigger="open-picker1"
            :columns="pickerColumns1"
            :buttons="pickerButtons1"
          ></ion-picker>
        </div>
        <ion-title>Using isOpen</ion-title>
        <div class="ion-margin-vertical">
          <ion-button @click="setOpen(true)">Open</ion-button>
          <ion-picker
            :is-open="isOpen"
            :columns="pickerColumns2"
            :buttons="pickerButtons2"
            @didDismiss="setOpen(false)"
          ></ion-picker>
        </div>
        <ion-title>Multiple Columns</ion-title>
        <div class="ion-margin-vertical">
          <ion-button id="open-picker3">Open</ion-button>
          <ion-picker
            trigger="open-picker3"
            :columns="pickerColumns3"
            :buttons="pickerButtons3"
          ></ion-picker>
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
  import { IonDatetime, IonDatetimeButton, IonModal, IonButton, IonPicker } from '@ionic/vue';
  import { ref } from 'vue';

  const isWeekday = (dateString: string) => {
    const date = new Date(dateString);
    const utcDay = date.getUTCDay();
    /**
      * Date will be enabled if it is not
      * Sunday or Saturday
      */
    return utcDay !== 0 && utcDay !== 6;
  }

  const datetime = ref();
  const reset = () => datetime.value.$el.reset();
  const cancel = () => datetime.value.$el.cancel();
  const confirm = () => datetime.value.$el.confirm();


  const highlightedDates1 = [
    {
      date: '2023-01-05',
      textColor: '#800080',
      backgroundColor: '#ffc0cb',
    },
    {
      date: '2023-01-10',
      textColor: '#09721b',
      backgroundColor: '#c8e5d0',
    },
    {
      date: '2023-01-20',
      textColor: 'var(--ion-color-secondary-contrast)',
      backgroundColor: 'var(--ion-color-secondary)',
    },
    {
      date: '2023-01-23',
      textColor: 'rgb(68, 10, 184)',
      backgroundColor: 'rgb(211, 200, 229)'
    }
  ];


  const highlightedDates2 = (isoString) => {
    const date = new Date(isoString);
    const utcDay = date.getUTCDate();

    if(utcDay % 5 === 0) {
      return {
        textColor: '#800080',
        backgroundColor: '#ffc0cb',
      };
    }

    if(utcDay % 3 === 0) {
      return {
        textColor: 'var(--ion-color-secondary-contrast)',
        backgroundColor: 'var(--ion-color-secondary)',
      };
    }

    return undefined;
  };



  const pickerColumns1 = [{
    name: 'languages',
    options: [
      {
        text: 'JavaScript',
        value: 'javascript'
      }, {
        text: 'TypeScript',
        value: 'typescript'
      }, {
        text: 'Rust',
        value: 'rust'
      }, {
        text: 'C#',
        value: 'c#'
      }
    ]
  }];

  const pickerButtons1 = [
    {
      text: 'Cancel',
      role: 'cancel'
    },
    {
      text: 'Confirm',
      handler: (value) => {
        window.alert(`You selected: ${value.languages.value}`);
      }
    }
  ];



  const isOpen = ref(false);

  const pickerColumns2 = [{
    name: 'languages',
    options: [
      {
        text: 'JavaScript',
        value: 'javascript'
      }, {
        text: 'TypeScript',
        value: 'typescript'
      }, {
        text: 'Rust',
        value: 'rust'
      }, {
        text: 'C#',
        value: 'c#'
      }
    ]
  }];

  const pickerButtons2 = [
    {
      text: 'Cancel',
      role: 'cancel'
    },
    {
      text: 'Confirm',
      handler: (value) => {
        window.alert(`You selected: ${value.languages.value}`);
      }
    }
  ];

  const setOpen = (state: boolean) => {
    isOpen.value = state;
  }




  const pickerColumns3 = [{
    name: 'meat',
    options: [
      {
        text: 'Pepperoni',
        value: 'pepperoni'
      }, {
        text: 'Smoked Ham',
        value: 'smoked-ham'
      }, {
        text: 'Crispy Bacon',
        value: 'bacon'
      }
    ]
  }, {
    name: 'veggies',
    options: [
      {
        text: 'Red onion',
        value: 'red-onion'
      }, {
        text: 'Peppers',
        value: 'peppers'
      }, {
        text: 'Black olives',
        value: 'black-olives'
      }
    ]
  }, {
    name: 'crust',
    options: [
      {
        text: 'Pan style',
        value: 'pan'
      }, {
        text: 'Hand tossed',
        value: 'hand-tossed'
      }, {
        text: 'Stuffed crust',
        value: 'stuffed-crust'
      }
    ]
  }];

  const pickerButtons3 = [
    {
      text: 'Cancel',
      role: 'cancel'
    },
    {
      text: 'Confirm',
      handler: (value) => {
        window.alert(`You selected a ${value.crust.text} pizza with ${value.meat.text} and ${value.veggies.text}`);
      }
    }
  ];


</script>

<style scoped>
</style>
