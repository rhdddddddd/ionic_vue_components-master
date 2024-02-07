<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Reorder</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding" :fullscreen="true">
    <!-- <ion-content class="ion-padding" :fullscreen="true"  :scroll-y="false"> -->
      <div id="container">

        <div class="wrapper">
          <ion-toolbar class="ion-margin-vertical ion-padding ion-text-start">
            <b>#Referenced page</b>
            <br/><br/>
            <a href="https://ionicframework.com/docs/api/reorder" target="_blank">https://ionicframework.com/docs/api/reorder</a>
          </ion-toolbar>
        </div>

        <div class="wrapper">
          <ion-title>Basic Usage</ion-title>
          <div>
            <ion-list>
              <!-- The reorder gesture is disabled by default, enable it to drag and drop items -->
              <ion-reorder-group :disabled="false" @ionItemReorder="handleReorder1($event)">
                <ion-item>
                  <ion-label> Item 1 </ion-label>
                  <ion-reorder slot="end"></ion-reorder>
                </ion-item>
                <ion-item>
                  <ion-label> Item 2 </ion-label>
                  <ion-reorder slot="end"></ion-reorder>
                </ion-item>
                <ion-item>
                  <ion-label> Item 3 </ion-label>
                  <ion-reorder slot="end"></ion-reorder>
                </ion-item>
                <ion-item>
                  <ion-label> Item 4 </ion-label>
                  <ion-reorder slot="end"></ion-reorder>
                </ion-item>
                <ion-item>
                  <ion-label> Item 5 </ion-label>
                  <ion-reorder slot="end"></ion-reorder>
                </ion-item>
              </ion-reorder-group>
            </ion-list>
          </div>
        </div>

        <div class="wrapper">
          <ion-title>Toggling Reorder</ion-title>
          <div>
            <ion-list>
              <ion-reorder-group :disabled="isDisabled2" @ionItemReorder="handleReorder2($event)">
                <ion-item>
                  <ion-label> Item 1 </ion-label>
                  <ion-reorder slot="end"></ion-reorder>
                </ion-item>
                <ion-item>
                  <ion-label> Item 2 </ion-label>
                  <ion-reorder slot="end"></ion-reorder>
                </ion-item>
                <ion-item>
                  <ion-label> Item 3 </ion-label>
                  <ion-reorder slot="end"></ion-reorder>
                </ion-item>
                <ion-item>
                  <ion-label> Item 4 </ion-label>
                  <ion-reorder slot="end"></ion-reorder>
                </ion-item>
                <ion-item>
                  <ion-label> Item 5 </ion-label>
                  <ion-reorder slot="end"></ion-reorder>
                </ion-item>
              </ion-reorder-group>
            </ion-list>
            <!-- The reorder gesture is disabled by default, enable it to drag and drop items -->
            <p class="ion-margin-vartial wrapper">
              <ion-button @click="toggleReorder2()"> Toggle Reorder </ion-button>
            </p>
          </div>
        </div>

        <div class="wrapper">
          <ion-title>Custom Reorder Icon</ion-title>
          <div>
            <ion-list>
              <!-- The reorder gesture is disabled by default, enable it to drag and drop items -->
              <ion-reorder-group :disabled="false" @ionItemReorder="handleReorder3($event)">
                <ion-item>
                  <ion-label> Item 1 </ion-label>
                  <ion-reorder slot="end">
                    <ion-icon :icon="pizza"></ion-icon>
                  </ion-reorder>
                </ion-item>
                <ion-item>
                  <ion-label> Item 2 </ion-label>
                  <ion-reorder slot="end">
                    <ion-icon :icon="pizza"></ion-icon>
                  </ion-reorder>
                </ion-item>
                <ion-item>
                  <ion-label> Item 3 </ion-label>
                  <ion-reorder slot="end">
                    <ion-icon :icon="pizza"></ion-icon>
                  </ion-reorder>
                </ion-item>
                <ion-item>
                  <ion-label> Item 4 </ion-label>
                  <ion-reorder slot="end">
                    <ion-icon :icon="pizza"></ion-icon>
                  </ion-reorder>
                </ion-item>
                <ion-item>
                  <ion-label> Item 5 </ion-label>
                  <ion-reorder slot="end">
                    <ion-icon :icon="pizza"></ion-icon>
                  </ion-reorder>
                </ion-item>
              </ion-reorder-group>
            </ion-list>
          </div>
        </div>

        <div class="wrapper">
          <ion-title>Reorder Wrapper</ion-title>
          <div>
            <ion-list>
              <!-- The reorder gesture is disabled by default, enable it to drag and drop items -->
              <ion-reorder-group :disabled="false" @ionItemReorder="handleReorder4($event)">
                <ion-reorder>
                  <ion-item>
                    <ion-label> Item 1 </ion-label>
                  </ion-item>
                </ion-reorder>
                <ion-reorder>
                  <ion-item>
                    <ion-label> Item 2 </ion-label>
                  </ion-item>
                </ion-reorder>
                <ion-reorder>
                  <ion-item>
                    <ion-label> Item 3 </ion-label>
                  </ion-item>
                </ion-reorder>
                <ion-reorder>
                  <ion-item>
                    <ion-label> Item 4 </ion-label>
                  </ion-item>
                </ion-reorder>
                <ion-reorder>
                  <ion-item>
                    <ion-label> Item 5 </ion-label>
                  </ion-item>
                </ion-reorder>
              </ion-reorder-group>
            </ion-list>
            <p class="ion-margin-vartial wrapper">
              <ion-label>{{DraggedIndex}}</ion-label>
            </p>
          </div>
        </div>

        <div class="wrapper">
          <ion-title>Updating Data</ion-title>
          <div>
            <ion-list>
              <!-- The reorder gesture is disabled by default, enable it to drag and drop items -->
              <ion-reorder-group :disabled="false" @ionItemReorder="handleReorder5($event)">
                <ion-item v-for="item in items5">
                  <ion-label> Item {{ item }} </ion-label>
                  <ion-reorder slot="end"></ion-reorder>
                </ion-item>
              </ion-reorder-group>
            </ion-list>
            <p class="ion-margin-vartial ion-text-center">
              <ion-label>{{BeforeComplete}}</ion-label><br/>
              <ion-label>{{AfterComplete}}</ion-label>
            </p>
          </div>
        </div>

        <div class="wrapper">
          <ion-title>Usage with Virtual Scroll</ion-title>
          <p>Reorder requires a scroll container to work properly.</p>
          <div>
            <div class="ion-content-scroll-host VirtualScroll">
              <ion-list>
                <!-- The reorder gesture is disabled by default, enable it to drag and drop items -->
                <ion-reorder-group :disabled="false" @ionItemReorder="handleReorder6($event)">
                  <ion-item>
                    <ion-label> Item 1 </ion-label>
                    <ion-reorder slot="end"></ion-reorder>
                  </ion-item>
                  <ion-item>
                    <ion-label> Item 2 </ion-label>
                    <ion-reorder slot="end"></ion-reorder>
                  </ion-item>
                  <ion-item>
                    <ion-label> Item 3 </ion-label>
                    <ion-reorder slot="end"></ion-reorder>
                  </ion-item>
                  <ion-item>
                    <ion-label> Item 4 </ion-label>
                    <ion-reorder slot="end"></ion-reorder>
                  </ion-item>
                  <ion-item>
                    <ion-label> Item 5 </ion-label>
                    <ion-reorder slot="end"></ion-reorder>
                  </ion-item>
                </ion-reorder-group>
              </ion-list>
            </div>
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
import { IonItem, IonLabel, IonList, IonReorder, IonReorderGroup } from '@ionic/vue';
import { ref, onMounted } from 'vue';
import { pizza } from 'ionicons/icons';


//
  const handleReorder1 = (event: CustomEvent) => {
    // The `from` and `to` properties contain the index of the item
    // when the drag started and ended, respectively
    console.log('Dragged from index', event.detail.from, 'to', event.detail.to);
    // Finish the reorder and position the item in the DOM based on
    // where the gesture ended. This method can also be called directly
    // by the reorder group
    event.detail.complete();
  };


//
  let isDisabled2 = ref(true);
  const handleReorder2 = (event: CustomEvent) => {
    // The `from` and `to` properties contain the index of the item
    // when the drag started and ended, respectively
    console.log('Dragged from index', event.detail.from, 'to', event.detail.to);
    // Finish the reorder and position the item in the DOM based on
    // where the gesture ended. This method can also be called directly
    // by the reorder group
    event.detail.complete();
  };
  const toggleReorder2 = () => {
    isDisabled2.value = !isDisabled2.value;
  };




//
  const handleReorder3 = (event: CustomEvent) => {
    // The `from` and `to` properties contain the index of the item
    // when the drag started and ended, respectively
    console.log('Dragged from index', event.detail.from, 'to', event.detail.to);

    // Finish the reorder and position the item in the DOM based on
    // where the gesture ended. This method can also be called directly
    // by the reorder group
    event.detail.complete();
  };




//
  let DraggedIndex = ref('Dragged Index');
  const handleReorder4 = (event: CustomEvent) => {
    // The `from` and `to` properties contain the index of the item
    // when the drag started and ended, respectively
    console.log('Dragged from index', event.detail.from, 'to', event.detail.to);
    DraggedIndex.value = 'Dragged from index ' + event.detail.from + ' to ' + event.detail.to;
    // Finish the reorder and position the item in the DOM based on
    // where the gesture ended. This method can also be called directly
    // by the reorder group
    event.detail.complete();
  };



//
  const items5 = ref([1, 2, 3, 4, 5, 6, 7]);
  let BeforeComplete = ref('Before complete');
  let AfterComplete = ref('After complete');
  const handleReorder5 = (event: CustomEvent) => {
    // Before complete is called with the items they will remain in the
    // order before the drag
    console.log('Before complete', items5.value);
    BeforeComplete.value = 'Before complete ' + items5.value;
    // Finish the reorder and position the item in the DOM based on
    // where the gesture ended. Update the items variable to the
    // new order of items
    items5.value = event.detail.complete(items5.value);
    // After complete is called the items will be in the new order
    console.log('After complete', items5.value);
    AfterComplete.value = 'After complete ' + items5.value;
  };



//
  const handleReorder6 = (event: CustomEvent) => {
    // The `from` and `to` properties contain the index of the item
    // when the drag started and ended, respectively
    console.log('Dragged from index', event.detail.from, 'to', event.detail.to);

    // Finish the reorder and position the item in the DOM based on
    // where the gesture ended. This method can also be called directly
    // by the reorder group
    event.detail.complete();
  };

</script>

<style scoped>
</style>

