<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Grid</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding" :fullscreen="true">
      <div id="container">

        <div class="wrapper">
          <ion-toolbar class="ion-margin-vertical ion-padding ion-text-start">
            <b>#Referenced page</b>
            <br/><br/>
            <a href="https://ionicframework.com/docs/api/grid" target="_blank">https://ionicframework.com/docs/api/grid</a>
          </ion-toolbar>
        </div>

        <div class="wrapper">
          <p>Basic</p>
          <div class="ion-margin-vertical">
            <ion-grid>
              <ion-row>
                <ion-col>1</ion-col>
                <ion-col>2</ion-col>
                <ion-col>3</ion-col>
              </ion-row>
            </ion-grid>
          </div>
          <div class="ion-margin-vertical">
            <ion-grid>
              <ion-row>
                <ion-col>1</ion-col>
                <ion-col>2</ion-col>
                <ion-col>3</ion-col>
                <ion-col>4</ion-col>
                <ion-col>5</ion-col>
                <ion-col>6</ion-col>
              </ion-row>
            </ion-grid>
          </div>
          <div class="ion-margin-vertical">
            <ion-grid>
              <ion-row>
                <ion-col>1</ion-col>
                <ion-col>2</ion-col>
                <ion-col>3</ion-col>
                <ion-col>4</ion-col>
                <ion-col>5</ion-col>
                <ion-col>6</ion-col>
                <ion-col>7</ion-col>
                <ion-col>8</ion-col>
                <ion-col>9</ion-col>
                <ion-col>10</ion-col>
                <ion-col>11</ion-col>
                <ion-col>12</ion-col>
              </ion-row>
            </ion-grid>
          </div>
        </div>
<br>
<br>
        <div class="wrapper">
          <p>Content-based size</p>
          <b>Column 1 has <code>size</code> set to <code>"auto"</code></b>
          <div class="ion-margin-vertical">
            <ion-grid>
              <ion-row>
                <ion-col size="auto">1</ion-col>
                <ion-col>2</ion-col>
                <ion-col>3</ion-col>
              </ion-row>
            </ion-grid>
          </div>
          <b>Column 3 contains an input and has <code>size</code> set to <code>"auto"</code></b>
          <div class="ion-margin-vertical">
            <ion-grid>
              <ion-row>
                <ion-col>1</ion-col>
                <ion-col>2</ion-col>
                <ion-col size="auto">
                  <ion-input placeholder="3"></ion-input>
                </ion-col>
                <ion-col>4</ion-col>
                <ion-col>5</ion-col>
                <ion-col>6</ion-col>
              </ion-row>
            </ion-grid>
          </div>
          <b>Column 2 has <code>size</code> set to <code>"auto"</code> and a defined width</b>
          <div class="ion-margin-vertical">
            <ion-grid>
              <ion-row>
                <ion-col>1</ion-col>
                <ion-col size="auto">
                  <div style="width: 150px">2</div>
                </ion-col>
              </ion-row>
            </ion-grid>
          </div>
        </div>
<br>
<br>
        <div class="wrapper">
          <p>Specified size</p>
          <b>Column 2 has <code>size</code> set to <code>"8"</code></b>
          <div class="ion-margin-vertical">
            <ion-grid>
              <ion-row>
                <ion-col>1</ion-col>
                <ion-col size="8">2</ion-col>
                <ion-col>3</ion-col>
              </ion-row>
            </ion-grid>
          </div>
          <b>Columns 3 & 4 have <code>size</code> set to <code>"3"</code></b>
          <div class="ion-margin-vertical">
            <ion-grid>
              <ion-row>
                <ion-col>1</ion-col>
                <ion-col>2</ion-col>
                <ion-col size="3">3</ion-col>
                <ion-col size="3">4</ion-col>
                <ion-col>5</ion-col>
                <ion-col>6</ion-col>
              </ion-row>
            </ion-grid>
          </div>
          <b>Columns 1 & 2 have <code>size</code> set to <code>"4"</code></b>
          <div class="ion-margin-vertical">
            <ion-grid>
              <ion-row>
                <ion-col size="4">1</ion-col>
                <ion-col size="4">2</ion-col>
              </ion-row>
            </ion-grid>
          </div>
        </div>
<br>
<br>
        <div class="wrapper">
          <p>Responsive size</p>
          <b>Stacked for xs breakpoint, equal width for sm and up</b>
          <div class="ion-margin-vertical">
            <ion-grid>
              <ion-row>
                <ion-col size="12" size-sm="3">1</ion-col>
                <ion-col size="12" size-sm="3">2</ion-col>
                <ion-col size="12" size-sm="3">3</ion-col>
                <ion-col size="12" size-sm="3">4</ion-col>
              </ion-row>
            </ion-grid>
          </div>
          <b>Equal width until md breakpoint, last column takes full width for md and up</b>
          <div class="ion-margin-vertical">
            <ion-grid>
              <ion-row>
                <ion-col size-md="6">1</ion-col>
                <ion-col size-md="6">2</ion-col>
                <ion-col size-md="12">3</ion-col>
              </ion-row>
            </ion-grid>
          </div>
          <b>2 per row until md breakpoint, 3 per row for md, equal width for lg and up</b>
          <div class="ion-margin-vertical">
            <ion-grid>
              <ion-row>
                <ion-col size="6" size-md="4" size-lg="2">1</ion-col>
                <ion-col size="6" size-md="4" size-lg="2">2</ion-col>
                <ion-col size="6" size-md="4" size-lg="2">3</ion-col>
                <ion-col size="6" size-md="4" size-lg="2">4</ion-col>
                <ion-col size="6" size-md="4" size-lg="2">5</ion-col>
                <ion-col size="6" size-md="4" size-lg="2">6</ion-col>
              </ion-row>
            </ion-grid>
          </div>
        </div>
<br>
<br>
        <div class="wrapper">
          <p>Specified offset</p>
          <b>Column 2 has <code>offset</code> set to <code>"3"</code></b>
          <div class="ion-margin-vertical">
            <ion-grid>
              <ion-row>
                <ion-col>1</ion-col>
                <ion-col offset="3">2</ion-col>
                <ion-col>3</ion-col>
              </ion-row>
            </ion-grid>
          </div>
          <b>Column 5 has <code>offset</code> set to <code>"2"</code></b>
          <div class="ion-margin-vertical">
            <ion-grid>
              <ion-row>
                <ion-col>1</ion-col>
                <ion-col>2</ion-col>
                <ion-col>3</ion-col>
                <ion-col>4</ion-col>
                <ion-col offset="2">5</ion-col>
              </ion-row>
            </ion-grid>
          </div>
          <b>Column 1 has <code>offset</code> set to <code>"4"</code></b>
          <div class="ion-margin-vertical">
            <ion-grid>
              <ion-row>
                <ion-col size="2" offset="4">1</ion-col>
                <ion-col size="2">2</ion-col>
              </ion-row>
            </ion-grid>
          </div>
        </div>
<br>
<br>
        <div class="wrapper">
          <p>Responsive offset</p>
          <b>No offset for xs breakpoint, offset 1st column for sm and up</b>
          <div class="ion-margin-vertical">
            <ion-grid>
              <ion-row>
                <ion-col offset-sm="2">1</ion-col>
                <ion-col>2</ion-col>
                <ion-col>3</ion-col>
                <ion-col>4</ion-col>
                <ion-col>5</ion-col>
              </ion-row>
            </ion-grid>
          </div>
          <b>No offset for xs breakpoint, offset last 3 columns for md and up</b>
          <div class="ion-margin-vertical">
            <ion-grid>
              <ion-row>
                <ion-col>1</ion-col>
                <ion-col offset-md="2">2</ion-col>
                <ion-col offset-md="2">3</ion-col>
                <ion-col offset-md="2">4</ion-col>
              </ion-row>
            </ion-grid>
          </div>
          <b>Offset all columns by 6 for xs breakpoint, offset by 4 for md, offset by 2 for lg and up</b>
          <div class="ion-margin-vertical">
            <ion-grid>
              <ion-row>
                <ion-col offset="6" offset-md="4" offset-lg="2">1</ion-col>
                <ion-col offset="6" offset-md="4" offset-lg="2">2</ion-col>
              </ion-row>
            </ion-grid>
          </div>
        </div>
<br>
<br>
        <div class="wrapper">
          <p>Specified push & pull</p>
          <b>Column 1 has <code>push</code> set to <code>"4"</code> and column 2 has <code>pull</code> set to <code>"4"</code></b>
          <div class="ion-margin-vertical">
            <ion-grid>
              <ion-row>
                <ion-col push="4">1</ion-col>
                <ion-col pull="4">2</ion-col>
                <ion-col>3</ion-col>
              </ion-row>
            </ion-grid>
          </div>
          <b>Column 2 has <code>push</code> set to <code>"4"</code> and column 3 & 4 have <code>pull</code> set to <code>"2"</code></b>
          <div class="ion-margin-vertical">
            <ion-grid>
              <ion-row>
                <ion-col>1</ion-col>
                <ion-col push="4">2</ion-col>
                <ion-col pull="2">3</ion-col>
                <ion-col pull="2">4</ion-col>
                <ion-col>5</ion-col>
                <ion-col>6</ion-col>
              </ion-row>
            </ion-grid>
          </div>
          <b>Column 1 has <code>push</code> set to <code>"3"</code> and column 2 has <code>pull</code> set to <code>"9"</code></b>
          <div class="ion-margin-vertical">
            <ion-grid>
              <ion-row>
                <ion-col size="9" push="3">1</ion-col>
                <ion-col size="3" pull="9">2</ion-col>
              </ion-row>
            </ion-grid>
          </div>
        </div>
<br>
<br>
        <div class="wrapper">
          <p>Responsive push & pull</p>
          <b>No change for xs breakpoint, push 1st column & pull 2nd column for sm and up</b>
          <div class="ion-margin-vertical">
            <ion-grid>
              <ion-row>
                <ion-col push-sm="6">1</ion-col>
                <ion-col pull-sm="6">2</ion-col>
              </ion-row>
            </ion-grid>
          </div>
          <b>No change for xs breakpoint, push middle columns & pull last column for md and up</b>
          <div class="ion-margin-vertical">
            <ion-grid>
              <ion-row>
                <ion-col>1</ion-col>
                <ion-col push-md="3">2</ion-col>
                <ion-col push-md="3">3</ion-col>
                <ion-col pull-md="6">4</ion-col>
              </ion-row>
            </ion-grid>
          </div>
          <b>Switch first and last 3 columns for xs breakpoints, reverse columns for lg and up</b>
          <div class="ion-margin-vertical">
            <ion-grid>
              <ion-row>
                <ion-col push="6" push-lg="10">1</ion-col>
                <ion-col push="6" push-lg="6">2</ion-col>
                <ion-col push="6" push-lg="2">3</ion-col>
                <ion-col pull="6" pull-lg="2">4</ion-col>
                <ion-col pull="6" pull-lg="6">5</ion-col>
                <ion-col pull="6" pull-lg="10">6</ion-col>
              </ion-row>
            </ion-grid>
          </div>
        </div>
<br>
<br>
        <div class="wrapper">
          <p>Vertical Alignment</p>
          <b>Columns aligned at the top</b>
          <div class="ion-margin-vertical">
            <ion-grid>
              <ion-row class="ion-align-items-start">
                <ion-col>
                  1
                </ion-col>
                <ion-col>
                  2
                </ion-col>
                <ion-col>
                  3
                </ion-col>
                <ion-col>
                  4 <br />
                  # <br />
                  # <br />
                  # <br />
                </ion-col>
              </ion-row>
            </ion-grid>
          </div>
          <b>Columns aligned at the center</b>
          <div class="ion-margin-vertical">
            <ion-grid>
              <ion-row class="ion-align-items-center">
                <ion-col>
                  1
                </ion-col>
                <ion-col>
                  2
                </ion-col>
                <ion-col>
                  3
                </ion-col>
                <ion-col>
                  4 <br />
                  # <br />
                  # <br />
                  # <br />
                </ion-col>
              </ion-row>
            </ion-grid>
          </div>
          <b>Columns aligned at the bottom</b>
          <div class="ion-margin-vertical">
            <ion-grid>
              <ion-row class="ion-align-items-end">
                <ion-col>
                  1
                </ion-col>
                <ion-col>
                  2
                </ion-col>
                <ion-col>
                  3
                </ion-col>
                <ion-col>
                  4 <br />
                  # <br />
                  # <br />
                  # <br />
                </ion-col>
              </ion-row>
            </ion-grid>
          </div>
        </div>
<br>
<br>
        <div class="wrapper">
          <p>Horizontal Alignment</p>
          <b>Columns aligned at the start</b>
          <div class="ion-margin-vertical">
            <ion-grid>
              <ion-row class="ion-justify-content-start">
                <ion-col size="3">
                  1
                </ion-col>
                <ion-col size="3">
                  2
                </ion-col>
              </ion-row>
            </ion-grid>
          </div>
          <b>Columns aligned at the center</b>
          <div class="ion-margin-vertical">
            <ion-grid>
              <ion-row class="ion-justify-content-center">
                <ion-col size="3">
                  1
                </ion-col>
                <ion-col size="3">
                  2
                </ion-col>
              </ion-row>
            </ion-grid>
          </div>
          <b>Columns aligned at the end</b>
          <div class="ion-margin-vertical">
            <ion-grid>
              <ion-row class="ion-justify-content-end">
                <ion-col size="3">
                  1
                </ion-col>
                <ion-col size="3">
                  2
                </ion-col>
              </ion-row>
            </ion-grid>
          </div>
          <b>Columns aligned with space around</b>
          <div class="ion-margin-vertical">
            <ion-grid>
              <ion-row class="ion-justify-content-around">
                <ion-col size="3">
                  1
                </ion-col>
                <ion-col size="3">
                  2
                </ion-col>
              </ion-row>
            </ion-grid>
          </div>
          <b>Columns aligned with space between</b>
          <div class="ion-margin-vertical">
            <ion-grid>
              <ion-row class="ion-justify-content-between">
                <ion-col size="3">
                  1
                </ion-col>
                <ion-col size="3">
                  2
                </ion-col>
              </ion-row>
            </ion-grid>
          </div>
        </div>
<br>
<br>
        <div class="wrapper">
          <p>Fixed Width</p>
          <div class="ion-margin-vertical">
            <ion-grid :fixed="true" class="fixedItem">
              <ion-row>
                <ion-col>1</ion-col>
                <ion-col>2</ion-col>
                <ion-col>3</ion-col>
              </ion-row>
            </ion-grid>
          </div>
        </div>
<br>
<br>
        <div class="wrapper">
          <p>Number of Columns</p>
          <b>Total number of columns is set to <code>6</code>, column <code>size</code> is set to <code>1</code></b>
          <div class="ion-margin-vertical">
            <ion-grid class="numberItem">
              <ion-row>
                <ion-col size="1">1</ion-col>
                <ion-col size="1">2</ion-col>
                <ion-col size="1">3</ion-col>
                <ion-col size="1">4</ion-col>
              </ion-row>
            </ion-grid>
          </div>
        </div>
<br>
<br>
        <div class="wrapper">
          <p>Padding</p>
          <div class="ion-margin-vertical">
            <ion-grid class="paddingItem">
              <ion-row>
                <ion-col>1</ion-col>
                <ion-col>2</ion-col>
                <ion-col>3</ion-col>
              </ion-row>
            </ion-grid>
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
  import { IonCol, IonGrid, IonRow } from '@ionic/vue';



</script>

<style scoped>


ion-grid {
  width: 100%;
}
ion-grid ion-col {
  background-color: #135d54;
  border: solid 1px #fff;
  color: #fff;
  text-align: center;
}

  ion-grid.fixedItem {
    /* width: auto; */
    --ion-grid-width: 50%;

    --ion-grid-width-xs: 50%;
    --ion-grid-width-sm: 288px;
    --ion-grid-width-md: 384px;
    --ion-grid-width-lg: 480px;
    --ion-grid-width-xl: 570px;
  }
  ion-grid.fixedItem ion-col {
    background-color: #135d54;
    border: solid 1px #fff;
    color: #fff;
    text-align: center;
  }

  ion-grid.numberItem {
    --ion-grid-columns: 6;
  }

  ion-grid.paddingItem {
    --ion-grid-padding: 20px;
    --ion-grid-padding-xs: 20px;
    --ion-grid-padding-sm: 20px;
    --ion-grid-padding-md: 20px;
    --ion-grid-padding-lg: 20px;
    --ion-grid-padding-xl: 20px;
    --ion-grid-column-padding: 30px;
    --ion-grid-column-padding-xs: 30px;
    --ion-grid-column-padding-sm: 30px;
    --ion-grid-column-padding-md: 30px;
    --ion-grid-column-padding-lg: 30px;
    --ion-grid-column-padding-xl: 30px;
  }

</style>
