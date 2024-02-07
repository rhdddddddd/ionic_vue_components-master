<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Input</ion-title>
      </ion-toolbar>
    </ion-header>
-
    <ion-content class="ion-padding" :fullscreen="true">
      <div id="container">

        <div class="wrapper">
          <ion-toolbar class="ion-margin-vertical ion-padding ion-text-start">
            <b>#Referenced page</b>
            <br/><br/>
            <a href="https://ionicframework.com/docs/api/input" target="_blank">https://ionicframework.com/docs/api/input</a>
            <br/><br/>
            <a href="https://ionicframework.com/docs/api/textarea" target="_blank">https://ionicframework.com/docs/api/textarea</a>
          </ion-toolbar>
        </div>

        <div class="wrapper">
          <ion-title>Input</ion-title>
          <p>Basic</p>
          <div class="ion-margin-vertical">
            <ion-list>
              <ion-item>
                <ion-input label="Default input"></ion-input>
              </ion-item>
              <ion-item>
                <ion-input label="Input with placeholder" placeholder="Enter company name"></ion-input>
              </ion-item>
              <ion-item>
                <ion-input label="Input with value" value="121 S Pinckney St #300"></ion-input>
              </ion-item>
              <ion-item>
                <ion-input label="Readonly input" value="Madison" :readonly="true"></ion-input>
              </ion-item>
              <ion-item>
                <ion-input label="Disabled input" value="53703" :disabled="true"></ion-input>
              </ion-item>
            </ion-list>
          </div>
        </div>

        <div class="wrapper">
          <p>Types</p>
          <div class="ion-margin-vertical">
            <ion-list>
              <ion-item>
                <ion-input label="Text input" placeholder="Enter text"></ion-input>
              </ion-item>
              <ion-item>
                <ion-input label="Number input" type="number" placeholder="000"></ion-input>
              </ion-item>
              <ion-item>
                <ion-input label="Password input" type="password" value="password"></ion-input>
              </ion-item>
              <ion-item>
                <ion-input label="Email input" type="email" placeholder="email@domain.com"></ion-input>
              </ion-item>
              <ion-item>
                <ion-input label="Telephone input" type="tel" placeholder="888-888-8888"></ion-input>
              </ion-item>
            </ion-list>
          </div>
        </div>

        <div class="wrapper">
          <p>Label Placement</p>
          <div class="ion-margin-vertical">
            <ion-list>
              <ion-item>
                <ion-input label="Default label" placeholder="Enter text"></ion-input>
              </ion-item>
              <ion-item>
                <ion-input label="Fixed label" label-placement="fixed" placeholder="Enter text"></ion-input>
              </ion-item>
              <ion-item>
                <ion-input label="Stacked label" label-placement="stacked" placeholder="Enter text"></ion-input>
              </ion-item>
              <ion-item>
                <ion-input label="Floating label" label-placement="floating" placeholder="Enter text"></ion-input>
              </ion-item>
            </ion-list>
          </div>
        </div>

        <div class="wrapper">
          <p>Label Slot (experimental)</p>
          <div class="ion-margin-vertical">
            <ion-list>
              <ion-item>
                <ion-input label-placement="floating" value="hi@ionic.io">
                  <div slot="label">Email <ion-text color="danger">(Required)</ion-text></div>
                </ion-input>
              </ion-item>
            </ion-list>
          </div>
        </div>

        <div class="wrapper">
          <p>No Visible Label</p>
          <div class="ion-margin-vertical">
            <ion-list>
              <ion-item>
                <ion-input aria-label="Email" value="hi@ionic.io"></ion-input>
              </ion-item>
            </ion-list>
          </div>
        </div>

        <div class="wrapper">
          <p>Clear Options​</p>
          <div class="ion-margin-vertical">
            <ion-list>
              <ion-item>
                <ion-input
                  label="Input with clear button"
                  label-placement="stacked"
                  :clear-input="true"
                  placeholder="Enter text to see clear button"
                  value="Default value"
                >
                </ion-input>
              </ion-item>
              <ion-item>
                <ion-input
                  label="Input with clear on edit"
                  label-placement="stacked"
                  :clear-on-edit="true"
                  placeholder="Enter text, leave the input, come back and type to clear"
                >
                </ion-input>
              </ion-item>
              <ion-item>
                <ion-input
                  label="Password input"
                  label-placement="stacked"
                  type="password"
                  placeholder="Enter text, leave the input, come back and type to clear"
                >
                </ion-input>
              </ion-item>
            </ion-list>
          </div>
        </div>

        <div class="wrapper">
          <p>Filled Inputs (Unavailable for iOS)​</p>
          <div class="ion-margin-vertical">
            <ion-input label="Solid input" label-placement="floating" fill="solid" placeholder="Enter text"></ion-input>
            <br />
            <ion-input label="Outline input" label-placement="floating" fill="outline" placeholder="Enter text"></ion-input>
          </div>
        </div>

        <div class="wrapper">
          <p>Helper & Error Text​</p>
          <div class="ion-margin-vertical">
            <ion-input
              ref="validateItem1"
              type="email"
              fill="solid"
              label="Email"
              label-placement="floating"
              helper-text="Enter a valid email"
              error-text="Invalid email"
              @ionInput="validate"
              @ionBlur="markTouched"
            ></ion-input>
          </div>
        </div>

        <div class="wrapper">
          <p>Input Counter​</p>
          <div class="ion-margin-vertical">
            <ion-input label="Default counter" label-placement="floating" :counter="true" maxlength="20"></ion-input>
            <ion-input
              id="custom-input"
              label="Custom Counter Format"
              label-placement="floating"
              :counter="true"
              maxlength="20"
              :counter-formatter="customFormatter"
            ></ion-input>
          </div>
        </div>

        <div class="wrapper">
          <p>Filtering User Input​</p>
          <div class="ion-margin-vertical">
            <ion-list>
              <ion-item>
                <ion-input
                  label="Alphanumeric Characters"
                  :value="inputModel"
                  @ionInput="onInput($event)"
                  ref="ionInputEl"
                ></ion-input>
              </ion-item>
            </ion-list>
          </div>
        </div>

        <div class="wrapper">
          <p>Input Masking​</p>
          <div class="ion-margin-vertical">
            <ion-list>
              <ion-item>
                <ion-input label="Card number" placeholder="0000 0000 0000 0000" v-maskito="cardOptions"></ion-input>
              </ion-item>
              <ion-item>
                <ion-input label="US phone number" placeholder="+1 (xxx) xxx-xxxx" v-maskito="phoneOptions"></ion-input>
              </ion-item>
            </ion-list>
          </div>
        </div>

        <div class="wrapper">
          <p>Start and End Slots (experimental)​</p>
          <div class="ion-margin-vertical">
            <ion-list>
              <ion-item>
                <ion-input label-placement="stacked" label="Email" placeholder="email@domain.com">
                  <ion-icon slot="start" :icon="lockClosed" aria-hidden="true"></ion-icon>
                  <ion-button fill="clear" slot="end" aria-label="Show/hide">
                    <ion-icon slot="icon-only" :icon="eye" aria-hidden="true"></ion-icon>
                  </ion-button>
                </ion-input>
              </ion-item>
            </ion-list>
          </div>
        </div>

        <div class="wrapper">
          <p>Theming​</p>
          <div class="ion-margin-vertical">
            <ion-input aria-label="Primary input" color="primary" placeholder="Primary input"></ion-input>
            <ion-input aria-label="Secondary input" color="secondary" placeholder="Secondary input"></ion-input>
            <ion-input aria-label="Tertiary input" color="tertiary" placeholder="Tertiary input"></ion-input>
            <ion-input aria-label="Success input" color="success" placeholder="Success input"></ion-input>
            <ion-input aria-label="Warning input" color="warning" placeholder="Warning input"></ion-input>
            <ion-input aria-label="Danger input" color="danger" placeholder="Danger input"></ion-input>
            <ion-input aria-label="Light input" color="light" placeholder="Light input"></ion-input>
            <ion-input aria-label="Medium input" color="medium" placeholder="Medium input"></ion-input>
            <ion-input aria-label="Dark input" color="dark" placeholder="Dark input"></ion-input>
          </div>
        </div>

        <div class="wrapper">
          <p>CSS Custom Properties​</p>
          <div class="ion-margin-vertical">
            <ion-input
              aria-label="Custom input"
              placeholder="Custom input"
              class="custom"
              helper-text="Helper text"
              :counter="true"
              :maxlength="20"
            ></ion-input>
          </div>
        </div>

        <div class="wrapper">
          <p>Using the Modern Syntax​</p>
          <div class="ion-margin-vertical">
            <!-- Label and Label Position -->
            <!-- Before -->
            <ion-item class="ion-margin-vertical">
              <ion-label position="floating">Email:</ion-label>
              <ion-input></ion-input>
            </ion-item>
            <!-- After -->
            <ion-item class="ion-margin-vertical">
              <ion-input label="Email:" label-placement="floating"></ion-input>
            </ion-item>
            <!-- Fill -->
            <!-- Before -->
            <ion-item class="ion-margin-vertical" fill="outline" shape="round">
              <ion-label position="floating">Email:</ion-label>
              <ion-input></ion-input>
            </ion-item>
            <!-- After -->
            <!-- Inputs using `fill` should not be placed in ion-item -->
            <ion-input fill="outline" shape="round" label="Email:" label-placement="floating"></ion-input>
            <!-- Input-specific features on ion-item -->
            <!-- Before -->
            <ion-item class="ion-margin-vertical" :counter="true">
              <ion-label position="floating">Email:</ion-label>
              <ion-input maxlength="100"></ion-input>
              <div slot="helper">Enter an email</div>
              <div slot="error">Please enter a valid email</div>
            </ion-item>
            <!-- After -->
            <!--
              Metadata such as counters and helper text should not
              be used when an input is in an item/list. If you need to
              provide more context on a input, consider using an ion-note
              underneath the ion-list.
            -->
            <ion-input
              label="Email:"
              :counter="true"
              maxlength="100"
              helper-text="Enter an email"
              error-text="Please enter a valid email"
            ></ion-input>
          </div>
        </div>

<hr>

        <div class="wrapper">
          <ion-title>Textarea</ion-title>
          <p>Basic Usage​</p>
          <div class="ion-margin-vertical">
            <ion-list>
              <ion-item>
                <ion-textarea label="Regular textarea" placeholder="Type something here"></ion-textarea>
              </ion-item>
              <ion-item>
                <ion-textarea :readonly="true" label="Readonly textarea" placeholder="Can't edit this"></ion-textarea>
              </ion-item>
              <ion-item>
                <ion-textarea :disabled="true" label="Disabled textarea" placeholder="Can't type here"></ion-textarea>
              </ion-item>
            </ion-list>
          </div>
        </div>

        <div class="wrapper">
          <p>Label Placement​</p>
          <div class="ion-margin-vertical">
            <ion-list>
              <ion-item>
                <ion-textarea label="Default label" placeholder="Enter text"></ion-textarea>
              </ion-item>
              <ion-item>
                <ion-textarea label="Fixed label" label-placement="fixed" placeholder="Enter text"></ion-textarea>
              </ion-item>
              <ion-item>
                <ion-textarea label="Stacked label" label-placement="stacked" placeholder="Enter text"></ion-textarea>
              </ion-item>
              <ion-item>
                <ion-textarea label="Floating label" label-placement="floating" placeholder="Enter text"></ion-textarea>
              </ion-item>
            </ion-list>
          </div>
        </div>

        <div class="wrapper">
          <p>Label Slot (experimental)</p>
          <div class="ion-margin-vertical">
            <ion-list>
              <ion-item>
                <ion-textarea label-placement="floating" value="Lorem Ipsum">
                  <div slot="label">Comments <ion-text color="danger">(Required)</ion-text></div>
                </ion-textarea>
              </ion-item>
            </ion-list>
          </div>
        </div>

        <div class="wrapper">
          <p>No Visible Label</p>
          <div class="ion-margin-vertical">
            <ion-list>
              <ion-item>
                <ion-textarea aria-label="Comments" value="Lorem Ipsum"></ion-textarea>
              </ion-item>
            </ion-list>
          </div>
        </div>

        <div class="wrapper">
          <p>Filled Textareas​ (Unavailable for iOS)</p>
          <div class="ion-margin-vertical">
            <ion-textarea label="Solid textarea" label-placement="floating" fill="solid" placeholder="Enter text"></ion-textarea>
            <br />
            <ion-textarea
              label="Outline textarea"
              label-placement="floating"
              fill="outline"
              placeholder="Enter text"
            ></ion-textarea>
          </div>
        </div>

        <div class="wrapper">
          <p>Helper & Error Text​</p>
            <p style="text-align: center;">- same grammar with ion-input -​</p>
          <div class="ion-margin-vertical">
            <ion-textarea
              ref="validateItem2"
              fill="solid"
              label="Email"
              label-placement="floating"
              helper-text="Enter a valid email"
              error-text="Invalid email"
              @ionInput="validate"
              @ionBlur="markTouched"
            ></ion-textarea>
          </div>
        </div>

        <div class="wrapper">
          <p>Textarea Counter​</p>
          <div class="ion-margin-vertical">
            <ion-textarea label="Default counter" label-placement="floating" :counter="true" maxlength="20"></ion-textarea>
            <ion-textarea
              label="Custom Counter Format"
              label-placement="floating"
              :counter="true"
              maxlength="20"
              :counter-formatter="customFormatter"
            ></ion-textarea>
          </div>
        </div>

        <div class="wrapper">
          <p>Autogrow​</p>
          <div class="ion-margin-vertical">
            <ion-item>
              <ion-textarea
                placeholder="Type something here"
                :auto-grow="true"
                value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus sem, auctor accumsan egestas sed, venenatis at ex. Nam consequat ex odio, suscipit rhoncus orci dictum eget. Aenean sit amet ligula varius felis facilisis lacinia nec volutpat nulla. Duis ullamcorper sit amet turpis sed blandit. Integer pretium massa eu faucibus interdum."
              >
              </ion-textarea>
            </ion-item>
          </div>
        </div>

        <div class="wrapper">
          <p>Clear on Edit​</p>
          <div class="ion-margin-vertical">
            <ion-textarea
              placeholder="Enter text, leave the textarea, come back, and type to clear"
              :clear-on-edit="true"
            ></ion-textarea>
          </div>
        </div>

        <div class="wrapper">
          <p>Start and End Slots (experimental)​</p>
          <div class="ion-margin-vertical">
            <ion-list>
              <ion-item>
                <ion-textarea label-placement="stacked" label="Comments" placeholder="Enter your comments">
                  <ion-icon slot="start" :icon="lockClosed" aria-hidden="true"></ion-icon>
                  <ion-button fill="clear" slot="end" aria-label="Show/hide">
                    <ion-icon slot="icon-only" :icon="eye" aria-hidden="true"></ion-icon>
                  </ion-button>
                </ion-textarea>
              </ion-item>
            </ion-list>
          </div>
        </div>

        <div class="wrapper">
          <p>Using the Modern Syntax​</p>
          <div class="ion-margin-vertical">
            <!-- Label and Label Position -->
            <!-- Before -->
            <ion-item class="ion-margin-vertical">
              <ion-label position="floating">Label:</ion-label>
              <ion-textarea></ion-textarea>
            </ion-item>
            <!-- After -->
            <ion-item class="ion-margin-vertical">
              <ion-textarea label="Label:" label-placement="floating"></ion-textarea>
            </ion-item>
            <!-- Fill -->
            <!-- Before -->
            <ion-item fill="outline" shape="round" class="ion-margin-vertical">
              <ion-label position="floating">Label:</ion-label>
              <ion-textarea></ion-textarea>
            </ion-item>
            <!-- After -->
            <!-- Textareas using `fill` should not be placed in ion-item -->
            <ion-textarea fill="outline" shape="round" label="Label:" label-placement="floating" class="ion-margin-vertical"></ion-textarea>
            <!-- Textarea-specific features on ion-item -->
            <!-- Before -->
            <ion-item :counter="true" class="ion-margin-vertical">
              <ion-label position="floating">Label:</ion-label>
              <ion-textarea maxlength="100"></ion-textarea>
              <div slot="helper">Enter text</div>
              <div slot="error">Please enter text</div>
            </ion-item>
            <!-- After -->
            <!--
              Metadata such as counters and helper text should not
              be used when a textarea is in an item/list. If you need to
              provide more context on a textarea, consider using an ion-note
              underneath the ion-list.
            -->
            <ion-textarea
              label="Label:"
              :counter="true"
              maxlength="100"
              helper-text="Enter text"
              error-text="Please enter text"
              class="ion-margin-vertical"
            ></ion-textarea>
          </div>
        </div>

        <div class="wrapper">
          <p>Theming​</p>
          <div class="ion-margin-vertical">
            <ion-textarea
              aria-label="Custom textarea"
              placeholder="Type something here"
              class="custom"
              helper-text="Helper text"
              :counter="true"
              :maxlength="100"
            ></ion-textarea>
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
  import { IonInput, IonItem, IonList, IonTextarea } from '@ionic/vue';
  import { ref } from 'vue';
  import { maskito as vMaskito } from '@maskito/vue';
  import { eye, lockClosed } from 'ionicons/icons';


// validateItems
  const validateItem1 = ref();
  const validateItem2 = ref();


  const validateEmail = (email:string) => {
    return email.match(
      /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    );
  }
  const validate = (ev:any) => {
    const val = ev.target.value;
    ev.target.classList.remove('ion-valid');
    ev.target.classList.remove('ion-invalid');
    if (val === '') return;
    validateEmail(val)
      ? ev.target.classList.add('ion-valid')
      : ev.target.classList.add('ion-invalid');
  }
  const markTouched = (ev:any) => {
    const val = ev.target.value;
    ev.target.classList.add('ion-touched');
  }



  const customFormatter = (inputLength:any, maxLength:any) => {
    return `${maxLength - inputLength} characters remaining`;
  }



  const ionInputEl = ref();
  const inputModel = ref();
  const onInput = (ev:any) => {
    const value = ev.target!.value;
    // Removes non alphanumeric characters
    const filteredValue = value.replace(/[^a-zA-Z0-9]+/g, '');
    /**
      * Update both the state variable and
      * the component to keep them in sync.
      */
    inputModel.value = filteredValue;
    const inputCmp = ionInputEl.value;
    if (inputCmp !== undefined) {
      inputCmp.$el.value = filteredValue;
    }
  };



    const cardOptions = {
    mask: [
      ...Array(4).fill(/\d/),
      ' ',
      ...Array(4).fill(/\d/),
      ' ',
      ...Array(4).fill(/\d/),
      ' ',
      ...Array(4).fill(/\d/),
      ' ',
      ...Array(3).fill(/\d/),
    ],
    elementPredicate: (el: HTMLIonInputElement) => {
      return new Promise((resolve) => {
        requestAnimationFrame(async () => {
          const input = await el.getInputElement();
          resolve(input);
        });
      });
    },
  };
  const phoneOptions = {
    mask: ['+', '1', ' ', '(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
    elementPredicate: (el: HTMLIonInputElement) => {
      return new Promise((resolve) => {
        requestAnimationFrame(async () => {
          const input = await el.getInputElement();
          resolve(input);
        });
      });
    },
  };




</script>

<style scoped>
  ion-input.custom {
    --background: #373737;
    --color: #fff;
    --placeholder-color: #ddd;
    --placeholder-opacity: 0.8;

    --padding-bottom: 10px;
    --padding-end: 10px;
    --padding-start: 10px;
    --padding-top: 10px;
  }
  ion-input.custom .helper-text,
  ion-input.custom .counter {
    color: var(--ion-color-step-700, #373737);
  }


  ion-textarea.custom {
    --background: #373737;
    --color: #fff;
    --padding-end: 10px;
    --padding-start: 10px;
    --placeholder-color: #ddd;
    --placeholder-opacity: 0.8;
  }

  ion-textarea.custom .helper-text,
  ion-textarea.custom .counter {
    color: #373737;
  }
</style>

