<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <Header />
      
      <div id="container">
        <ion-card class="card">
          <ion-card-header>
            <ion-card-subtitle style="color:white">Recherche</ion-card-subtitle>
            <ion-card-title>Les communes</ion-card-title>
          </ion-card-header>
          <ion-card-content style="color:white">
          Tu peux rechercher les communes français grâce à leur noms ou grâce à leurs codes postaux.
          </ion-card-content>
        </ion-card>

        <ion-searchbar placeholder="Rechercher"  @search.prevent="getCity($event.target.value)"></ion-searchbar>
  
      <div v-if="skeleton">
        <div class="ion-padding custom-skeleton">
          <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>
          <ion-skeleton-text animated></ion-skeleton-text>
          <ion-skeleton-text animated style="width: 88%"></ion-skeleton-text>
          <ion-skeleton-text animated style="width: 70%"></ion-skeleton-text>
          <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>
        </div>
      </div>

      <ion-text v-if="results">
        <p v-if="results.length > 1">{{ results.length }} résultats</p>
        <p v-if="results.length <= 1">{{ results.length }} résultat</p>
      </ion-text>

      <ion-card v-for="result in results" :key="result">
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
          
      </ion-card>
    </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonSearchbar, IonSkeletonText, IonText } from '@ionic/vue';
import Header from '@/components/Header'
import axios from "axios";

export default  {
  data(){
    return{
      nameCity: "",
      results : "",
      skeleton : false,
    }
  },
  name: 'City',
  components: {   IonContent, IonPage, Header, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonSearchbar, IonSkeletonText, IonText}, 
  methods:{
    displayError(message){
      const toast = document.createElement('ion-toast');
      toast.message = message;
      toast.duration = 2000;
      toast.color = "danger";
      document.body.appendChild(toast);
      return toast.present();
    },
    getCity(name){
      this.results = ""
      this.skeleton = true;
      this.nameCity = name;

      if(!this.nameCity){
        this.displayError("Merci de rentrer un nom ou un code postal.");
        this.skeleton = false;
        return;
      }

      if (!isNaN(this.nameCity)){
        axios
        .get("https://geo.api.gouv.fr/communes?codePostal=" + this.nameCity + "&boost=population&fields=nom,code,codesPostaux,codeDepartement,departement,region,population")
        .then((response) =>{
            this.skeleton = false;
            if(response.data.length == 0){
              this.displayError("Aucun résultat, veuillez vérifier votre saisie.")
            }
            this.results = response.data;
            this.results.forEach(element => {
              element.population = new Intl.NumberFormat().format(element.population)
            });
        })
        .catch((error) => {
          console.log(error);
            this.skeleton = false;
            this.displayError("Une erreur est apparue, veuillez vérifier votre saisie ou réessayer plus tard. ");
        })
      }

      else{
        axios
        .get("https://geo.api.gouv.fr/communes?nom=" + this.nameCity + "&boost=population&fields=nom,code,codesPostaux,codeDepartement,departement,region,population")
        .then((response) =>{
            this.skeleton = false;
            if(response.data.length == 0){
              this.displayError("Aucun résultat,  veuillez vérifier votre saisie.")
            }
            this.results = response.data;
            this.results.forEach(element => {
              element.population = new Intl.NumberFormat().format(element.population)
            });
        })
        .catch(() => {
            this.skeleton = false;
            this.displayError("Une erreur est apparue, veuillez vérifier votre saisie ou réessayer plus tard. ");
        })
      }
    }
  }
}


</script>

<style scoped>
.card{
  background-color: #023189;
}

p{
  text-align: center;
}
</style>