<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <Header />
      
      <div id="container">
        <ion-card class="card">
          <ion-card-header>
            <ion-card-subtitle style="color:white">Recherche</ion-card-subtitle>
            <ion-card-title>Les régions</ion-card-title>
          </ion-card-header>
          <ion-card-content style="color:white">
          Tu peux rechercher les communes d'un département français grâce à son code. 
          </ion-card-content>
        </ion-card>

        <ion-searchbar placeholder="Rechercher"  @search.prevent="getDepartments($event.target.value)"></ion-searchbar>
  
      <div v-if="skeleton">
        <div class="ion-padding custom-skeleton">
          <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>
          <ion-skeleton-text animated></ion-skeleton-text>
          <ion-skeleton-text animated style="width: 88%"></ion-skeleton-text>
          <ion-skeleton-text animated style="width: 70%"></ion-skeleton-text>
          <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>
        </div>
      </div>

      <ion-card v-for="result in results" :key="result">
          <ion-card-header>
            <ion-card-subtitle>Département</ion-card-subtitle>
            <ion-card-title>{{ result.nom }} </ion-card-title>
          </ion-card-header>
          <ion-card-content>
            Code département : {{ result.code}}<br>
            Code région : {{ result.codeRegion}}<br>
          </ion-card-content>
      </ion-card>
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
      codeRegion: "",
      results : "",
      skeleton : false,
    }
  },
  name: 'Region',
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
    getDepartments(name){
      this.results = ""
      this.skeleton = true;
      this.codeRegion = name;

      if(!this.codeRegion){
        this.displayError("Merci de rentrer le code d'une région.");
        this.skeleton = false;
        return;
      }

        axios
        .get("https://geo.api.gouv.fr/regions/" + this.codeRegion +"/departements")
        .then((response) =>{
            this.skeleton = false;
            this.results = response.data;
            if(response.data.length == 0){
              this.displayError("Aucun résultat, veuillez vérifier votre saisie")
            }

        })
        .catch((error) => {
          console.log(error);
            this.skeleton = false;
            this.displayError("Une erreur est apparue, veuillez vérifier votre saisie ou réessayer plus tard. ");
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

a{
  text-decoration: none;
  color: rgb(133, 133, 133);
  font-weight: bold;
}

a:hover{
  color: rgb(124, 124, 124);
}
</style>