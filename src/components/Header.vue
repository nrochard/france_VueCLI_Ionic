<template>
    
    <ion-header collapse="condense">
        <ion-toolbar class="new-background-color">
          <ion-img :src="'./assets/img/index.png'" class="img_header"></ion-img>
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
    --background: white;
    border-bottom-left-radius: 20px 20px;
    border-bottom-right-radius: 20px 20px;
    padding: 10px 0;
}

@media(min-width:900px){
  .img_header{
    max-width: 30%;
    margin: 0 auto;
  }
}


</style>