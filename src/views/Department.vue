<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <Header />
      
      <div id="container">
        <ion-card class="card">
          <ion-card-header>
            <ion-card-subtitle style="color:white">Recherche</ion-card-subtitle>
            <ion-card-title>Les départements</ion-card-title>
          </ion-card-header>
          <ion-card-content style="color:white">
          Tu peux rechercher les communes d'un département français grâce à son code. Tu peux les rechercher <a target="_blank" href="https://fr.wikipedia.org/wiki/Num%C3%A9rotation_des_d%C3%A9partements_fran%C3%A7ais">ici</a>
          </ion-card-content>
        </ion-card>

        <ion-searchbar placeholder="Rechercher"  @search.prevent="getCities($event.target.value)"></ion-searchbar>
  
      <div v-if="skeleton">
        <div class="ion-padding custom-skeleton">
          <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>
          <ion-skeleton-text animated></ion-skeleton-text>
          <ion-skeleton-text animated style="width: 88%"></ion-skeleton-text>
          <ion-skeleton-text animated style="width: 70%"></ion-skeleton-text>
          <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>
        </div>
      </div>

      <!-- <ion-card v-for="result in results" :key="result">
          <ion-card-header>
            <ion-card-subtitle>Commune</ion-card-subtitle>
            <ion-card-title>{{ result.nom }} </ion-card-title>
          </ion-card-header>
          <ion-card-content>
            Nombre d'habitants : {{ result.population}}<br>
            Département : {{ result.departement.nom}}<br/>
            Région : {{ result.region.nom}}<br/><br/>
            <div v-if="result.codesPostaux.length == 1" ><ion-card-subtitle v-for="codePostal in result.codesPostaux" :key="codePostal"> Code postal :  {{ codePostal }}</ion-card-subtitle> </div>
            <div  v-if="result.codesPostaux.length > 1">
              <ion-card-subtitle>Codes postaux :</ion-card-subtitle>
              <ion-card-subtitle v-for="codePostal in result.codesPostaux" :key="codePostal"> {{ codePostal }}</ion-card-subtitle> </div>
          </ion-card-content>
      </ion-card> -->
    </div>
    </ion-content>
  </ion-page>
</template>
<script>
import { IonPage, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonSearchbar, IonSkeletonText } from '@ionic/vue';
import Header from '@/components/Header';
import axios from "axios";

export default  {
  data(){
    return{
      nameDepartment: "",
      results : "",
      skeleton : false,
    }
  },
  name: 'Departement',
  components: {   IonContent, IonPage, Header, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonSearchbar, IonSkeletonText}, 
    methods:{
    displayError(message){
      const toast = document.createElement('ion-toast');
      toast.message = message;
      toast.duration = 2000;
      toast.color = "danger";
      document.body.appendChild(toast);
      return toast.present();
    },
    getCities(name){
      this.results = ""
      this.skeleton = true;
      this.nameDepartment = name;

      if(!this.nameDepartment){
        this.displayError("Merci de rentrer le code d'un département.");
        this.skeleton = false;
        return;
      }

        axios
        .get("https://geo.api.gouv.fr/departements/" + this.nameDepartment +"/communes")
        .then((response) =>{
            console.log(response.data)
            this.skeleton = false;
            if(response.data.length == 0){
              this.displayError("Aucun résultat")
            }
            this.results = response.data;
            this.results.forEach(element => {
              element.population = new Intl.NumberFormat().format(element.population)
            });

        })
    }
  }
}
</script>


<style scoped>
.native-input{
  background-color: antiquewhite;
    margin: 0 20px;
}

.card{
  background-color: #023189;
  /* color: white; */
}
</style>