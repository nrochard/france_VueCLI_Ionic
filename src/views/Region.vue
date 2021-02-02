<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <Header />
      <ExploreContainer name="Region" />
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import Header from '@/components/Header';

export default  {
  name: 'Region',
  components: { ExploreContainer, Header, IonContent, IonPage }
}
</script>