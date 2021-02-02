<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <Header />
    <div id="container">
    <ion-card>
    <ion-card-header>
      <ion-card-subtitle>Application non-officielle</ion-card-subtitle>
      <ion-card-title>Bienvenue !</ion-card-title>
    </ion-card-header>

    <ion-card-content>
      Tu peux rechercher grâce à cette application des informations concernant les communes, les départements et les régions françaises !
    </ion-card-content>
  </ion-card>
    </div>

      <!-- <ExploreContainer name="Home" /> -->
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent } from '@ionic/vue';
// import ExploreContainer from '@/components/ExploreContainer.vue';
import Header from '@/components/Header'

export default  {
  name: 'Home',
  components: {   IonContent, IonPage, Header }
}
</script>


<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}
</style>