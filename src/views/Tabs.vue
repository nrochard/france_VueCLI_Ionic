<template>
  <ion-page>
    <ion-tabs>
      <ion-tab-bar>

        <ion-tab-button tab="home" href="/france/accueil">
          <ion-icon :icon="home" />
          <ion-label>Accueil</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="commune" href="/france/commune">
          <ion-icon :icon="locate" />
          <ion-label>Commune</ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="departement" href="/france/departement">
          <ion-icon :icon="navigate" />
          <ion-label>Département</ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="region" href="/france/region">
          <ion-icon :icon="map" />
          <ion-label>Région</ion-label>
        </ion-tab-button>

        

      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script>
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage } from '@ionic/vue';
import { ellipse, square, triangle, navigate, map, locate, home } from 'ionicons/icons';

export default {
  name: 'Tabs',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage },
  setup() {
    return {
      ellipse, 
      square, 
      triangle,
      navigate,
      map,
      locate,
      home
    }
  }
}
</script>

<style scoped>
.tab-selected{
  color: white !important;
}
</style>