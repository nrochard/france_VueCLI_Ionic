<template>
  <ion-page>
    <ion-content :fullscreen="true">
        <Header />
      
      <ExploreContainer name="Departement" />
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import Header from '@/components/Header';

export default  {
  name: 'Departement',
  components: { ExploreContainer, IonContent, IonPage, Header }
}
</script>

