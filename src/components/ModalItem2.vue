<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>Child2</ion-title>
      <ion-buttons slot="end">
        <ion-button @click="dismiss13()">Close</ion-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
  <ion-content>
    <ion-list>
      <ion-item>
        <ion-checkbox @ionChange="checkboxChanged">
          Override Dismiss<br />
          <ion-note class="ion-text-wrap"
            >Toggle the checkbox to allow immediately dismissing the modal without a prompt.</ion-note
          >
        </ion-checkbox>
      </ion-item>
    </ion-list>
  </ion-content>
</template>


<script setup lang="ts">
  import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonButton, IonItem, IonInput, modalController,
  } from '@ionic/vue';

  const props = defineProps(['modal13']);
  const emit = defineEmits(['dismissChange13']);

  const dismiss13 = () => {
    props.modal13.$el.dismiss();
  };

  const checkboxChanged = (ev) => {
    const checked = ev.detail.checked;
    emit('dismissChange13', checked);
  };

</script>
