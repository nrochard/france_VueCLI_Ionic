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
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/vue';
import Header from '@/components/Header'

export default  {
  name: 'Home',
  components: {   IonContent, IonPage, Header, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle }
}
</script>


