<template>
    
    <ion-header collapse="condense">
        <ion-toolbar class="new-background-color">
          <ion-img :src="'./assets/img/index2.png'" class="img_header"></ion-img>
        </ion-toolbar>
      </ion-header>
</template>

<script>

import { IonHeader, IonToolbar, IonImg } from '@ionic/vue';


export default  {
  name: 'Header',
  components:{
    IonHeader,
    IonToolbar,
    IonImg
  }
}
</script>

<style scoped>
.new-background-color{
    --background: rgb(15, 15, 15);
    border-bottom-left-radius: 20px 20px;
    border-bottom-right-radius: 20px 20px;
    padding: 10px 0;

}

.header-ios ion-toolbar:last-of-type{
    --border-width: 0px
}

@media(min-width:900px){
  .img_header{
    max-width: 30%;
    margin: 0 auto;
  }
}


</style>