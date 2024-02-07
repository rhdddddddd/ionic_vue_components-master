<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>CssUtilities</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding" :fullscreen="true">
      <div id="container">

        <div class="wrapper">
          <ion-toolbar class="ion-margin-vertical ion-padding ion-text-start">
            <b>#Referenced page</b>
            <br/><br/>
            <a href="https://ionicframework.com/docs/api/text" target="_blank">https://ionicframework.com/docs/api/text</a>
            <br/><br/>
            <a href="https://ionicframework.com/docs/layout/css-utilities" target="_blank">https://ionicframework.com/docs/layout/css-utilities</a>
          </ion-toolbar>
        </div>

        <div class="wrapper">
          <ion-title>Text Modification</ion-title>
          <p>Text Alignment</p>
          <div>
            <ion-grid>
              <ion-row>
                <div class="ion-text-start">
                  <h3>text-start</h3>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
                </div>
              </ion-row>
              <ion-row>
                <div class="ion-text-end">
                  <h3>text-end</h3>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
                </div>
              </ion-row>
              <ion-row>
                <div class="ion-text-center">
                  <h3>text-center</h3>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
                </div>
              </ion-row>
              <ion-row>
                <div class="ion-text-justify">
                  <h3>text-justify</h3>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
                </div>
              </ion-row>
              <ion-row>
                <div class="ion-text-wrap">
                  <h3>text-wrap</h3>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
                </div>
              </ion-row>
              <ion-row>
                <div class="ion-text-nowrap">
                  <h3>text-nowrap</h3>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
              </ion-row>
            </ion-grid>
          </div>
        </div>

        <div class="wrapper">
          <ion-title>Text Modification</ion-title>
          <div>
            <ion-grid>
              <ion-row>
                <div class="ion-text-uppercase">
                  <h3>text-uppercase</h3>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
                </div>
              </ion-row>
              <ion-row>
                <div class="ion-text-lowercase">
                  <h3>text-lowercase</h3>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
                </div>
              </ion-row>
              <ion-row>
                <div class="ion-text-capitalize">
                  <h3>text-capitalize</h3>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
                </div>
              </ion-row>
            </ion-grid>
          </div>
        </div>

        <div class="wrapper">
          <ion-title>ion-text</ion-title>
          <p>Basic Usage</p>
          <div>
            <ion-text color="primary">
              <h1>H1: The quick brown fox jumps over the lazy dog</h1>
            </ion-text>
            <ion-text color="secondary">
              <h2>H2: The quick brown fox jumps over the lazy dog</h2>
            </ion-text>
            <ion-text color="tertiary">
              <h3>H3: The quick brown fox jumps over the lazy dog</h3>
            </ion-text>
            <p>
              <ion-text color="warning"><ion-icon :icon="warning"></ion-icon></ion-text>
              I saw a werewolf with a Chinese menu in his hand. Walking through the
              <ion-text color="success"><sub>streets</sub></ion-text> of Soho in the rain. He
              <ion-text color="medium"><i>was</i></ion-text> looking for a place called Lee Ho Fook's. Gonna get a
              <ion-text color="danger">big dish of beef chow mein.</ion-text>
            </p>
          </div>
        </div>



        <div class="wrapper">
          <ion-title>Element Placement</ion-title>
          <p class="">Float Elements</p>
          <div>
            <ion-grid>
              <ion-row>
               <div>
                <h3>no float</h3>
                <img
                  alt="Silhouette of a person's head"
                  src="https://ionicframework.com/docs/img/demos/avatar.svg"
                  height="50px"
                />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
               </div>
              </ion-row>
              <ion-row>
                <div>
                  <h3>float-left</h3>
                  <img
                    alt="Silhouette of a person's head"
                    src="https://ionicframework.com/docs/img/demos/avatar.svg"
                    height="50px"
                    class="ion-float-left"
                  />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
                </div>
              </ion-row>
              <ion-row>
                <div>
                  <h3>float-right</h3>
                  <img
                    alt="Silhouette of a person's head"
                    src="https://ionicframework.com/docs/img/demos/avatar.svg"
                    height="50px"
                    class="ion-float-right"
                  />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
                  </div>
              </ion-row>
            </ion-grid>
          </div>
        </div>

        <div class="wrapper">
          <ion-title>Element Display</ion-title>
          <div>
            <ion-grid>
              <ion-row>
                <ion-col class="ion-hide">
                  <div>
                    <h3>hidden</h3>
                    You can't see me.
                  </div>
                </ion-col>
              </ion-row>
              <ion-row>
                <ion-col>
                  <div>
                    <h3>not-hidden</h3>
                    You can see me!
                  </div>
                </ion-col>
              </ion-row>
            </ion-grid>
          </div>
        </div>

        <div class="wrapper">
          <ion-title>Content Space</ion-title>
          <p>Element Padding</p>
          <div>
          <ion-grid class="paddingStyle">
            <ion-row>
              <ion-col size="3" class="ion-padding">
                <div>padding</div>
              </ion-col>
              <ion-col size="3" class="ion-padding-top">
                <div>padding-top</div>
              </ion-col>
              <ion-col size="3" class="ion-padding-start">
                <div>padding-start</div>
              </ion-col>
              <ion-col size="3" class="ion-padding-end">
                <div>padding-end</div>
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col size="3" class="ion-padding-bottom">
                <div>padding-bottom</div>
              </ion-col>
              <ion-col size="3" class="ion-padding-vertical">
                <div>padding-vertical</div>
              </ion-col>
              <ion-col size="3" class="ion-padding-horizontal">
                <div>padding-horizontal</div>
              </ion-col>
              <ion-col size="3" class="ion-no-padding">
                <div>no-padding</div>
              </ion-col>
            </ion-row>
          </ion-grid>
          </div>

          <p>Element Margin</p>
          <div>
          <ion-grid class="marginStyle">
            <ion-row>
              <ion-col class="ion-margin">
                <div>margin</div>
              </ion-col>
              <ion-col class="ion-margin-top">
                <div>margin-top</div>
              </ion-col>
              <ion-col class="ion-margin-start">
                <div>margin-start</div>
              </ion-col>
              <ion-col class="ion-margin-end">
                <div>margin-end</div>
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col class="ion-margin-bottom">
                <div>margin-bottom</div>
              </ion-col>
              <ion-col class="ion-margin-vertical">
                <div>margin-vertical</div>
              </ion-col>
              <ion-col class="ion-margin-horizontal">
                <div>margin-horizontal</div>
              </ion-col>
              <ion-col class="ion-no-margin">
                <div>no-margin</div>
              </ion-col>
            </ion-row>
          </ion-grid>
          </div>
        </div>

        <div class="wrapper">
          <ion-title>Flex Properties</ion-title>
          <p>Flex Container Properties</p>
          <div>
            <ion-grid class="flexStyle">
              <ion-row class="ion-justify-content-start">
                <ion-col size="3">
                  <div>1 of 2</div>
                </ion-col>
                <ion-col size="3">
                  <div>2 of 2</div>
                </ion-col>
              </ion-row>
              <ion-row class="ion-justify-content-center">
                <ion-col size="3">
                  <div>1 of 2</div>
                </ion-col>
                <ion-col size="3">
                  <div>2 of 2</div>
                </ion-col>
              </ion-row>
              <ion-row class="ion-justify-content-end">
                <ion-col size="3">
                  <div>1 of 2</div>
                </ion-col>
                <ion-col size="3">
                  <div>2 of 2</div>
                </ion-col>
              </ion-row>
              <ion-row class="ion-justify-content-around">
                <ion-col size="3">
                  <div>1 of 2</div>
                </ion-col>
                <ion-col size="3">
                  <div>2 of 2</div>
                </ion-col>
              </ion-row>
              <ion-row class="ion-justify-content-between">
                <ion-col size="3">
                  <div>1 of 2</div>
                </ion-col>
                <ion-col size="3">
                  <div>2 of 2</div>
                </ion-col>
              </ion-row>
              <ion-row class="ion-justify-content-evenly">
                <ion-col size="3">
                  <div>1 of 2</div>
                </ion-col>
                <ion-col size="3">
                  <div>2 of 2</div>
                </ion-col>
              </ion-row>
            </ion-grid>
            <ion-grid class="flexStyle">
              <ion-row class="ion-align-items-start">
                <ion-col>
                  <div>1 of 4</div>
                </ion-col>
                <ion-col>
                  <div>2 of 4</div>
                </ion-col>
                <ion-col>
                  <div>3 of 4</div>
                </ion-col>
                <ion-col>
                  <div>4 of 4 # # #</div>
                </ion-col>
              </ion-row>
              <ion-row class="ion-align-items-end">
                <ion-col>
                  <div>1 of 4</div>
                </ion-col>
                <ion-col>
                  <div>2 of 4</div>
                </ion-col>
                <ion-col>
                  <div>3 of 4</div>
                </ion-col>
                <ion-col>
                  <div>4 of 4 # # #</div>
                </ion-col>
              </ion-row>
              <ion-row class="ion-align-items-center">
                <ion-col>
                  <div>1 of 4</div>
                </ion-col>
                <ion-col>
                  <div>2 of 4</div>
                </ion-col>
                <ion-col>
                  <div>3 of 4</div>
                </ion-col>
                <ion-col>
                  <div>4 of 4 # # #</div>
                </ion-col>
              </ion-row>
              <ion-row class="ion-align-items-baseline">
                <ion-col>
                  <div>1 of 4</div>
                </ion-col>
                <ion-col>
                  <div>2 of 4</div>
                </ion-col>
                <ion-col>
                  <div>3 of 4</div>
                </ion-col>
                <ion-col>
                  <div>4 of 4 # # #</div>
                </ion-col>
              </ion-row>
              <ion-row class="ion-align-items-stretch">
                <ion-col>
                  <div>1 of 4</div>
                </ion-col>
                <ion-col>
                  <div>2 of 4</div>
                </ion-col>
                <ion-col>
                  <div>3 of 4</div>
                </ion-col>
                <ion-col>
                  <div>4 of 4 # # #</div>
                </ion-col>
              </ion-row>
            </ion-grid>
          </div>

          <p>Flex Item Properties</p>
          <div>
            <ion-grid class="flex2Style">
              <ion-row>
                <ion-col class="ion-align-self-start">
                  <div>1 of 4</div>
                </ion-col>
                <ion-col class="ion-align-self-center">
                  <div>2 of 4</div>
                </ion-col>
                <ion-col class="ion-align-self-end">
                  <div>3 of 4</div>
                </ion-col>
                <ion-col>
                  <div>4 of 4 # # #</div>
                </ion-col>
              </ion-row>
            </ion-grid>
          </div>
        </div>

        <div class="wrapper">
          <ion-title>Border Display</ion-title>
          <div>
            <div class="ion-margin-vertical">
              <ion-toolbar class="ion-no-border">
                <ion-title>Header - No Border</ion-title>
              </ion-toolbar>
            </div>
            <div class="ion-margin-vertical">
              <ion-toolbar class="ion-no-border">
                <ion-title>Footer - No Border</ion-title>
              </ion-toolbar>
            </div>
          </div>
        </div>

        <div class="wrapper">
          <ion-title>Ionic Breakpoints</ion-title>
          <div>
            <table>
              <thead>
                <tr>
                  <th>Breakpoint Name</th>
                  <th>Width</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>xs</code></td>
                  <td><code>0</code></td>
                </tr>
                <tr>
                  <td><code>sm</code></td>
                  <td><code>576px</code></td>
                </tr>
                <tr>
                  <td><code>md</code></td>
                  <td><code>768px</code></td>
                </tr>
                <tr>
                  <td><code>lg</code></td>
                  <td><code>992px</code></td>
                </tr>
                <tr>
                  <td><code>xl</code></td>
                  <td><code>1200px</code></td>
                </tr>
              </tbody>
            </table>
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
  import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonList, IonIcon, IonText } from '@ionic/vue';
  import { ref, onMounted } from 'vue';
  import { warning } from 'ionicons/icons';

</script>

<style scoped>
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


/*  */



  /*  */
  .wrapper ion-row img {
    width: 50px;
    height: 50px;
    margin: 10px;
  }

  .paddingStyle ion-col {
    background-color: #79b0e4;
    border: 5px solid #fff;
  }
  .marginStyle ion-col {
    background-color: #2db8a7;
    border: 5px solid #fff;
  }
  .flexStyle ion-col {
    background-color: #e66ddb;
    border: 5px solid #fff;
  }
  .flex2Style ion-col {
    background-color: #e66d9b;
    border: 5px solid #fff;
  }
  .wrapper table {
  margin: 10px auto;
  }
  .wrapper table th, .wrapper table td {
  padding: 5px;
    border: 1px solid #333;
  }
</style>

