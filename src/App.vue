<template>
<div>
  <v-app>
    <v-main>
    <Calendar></Calendar>
    </v-main>
  </v-app>
  </div>
</template>

<script>
import Calendar from '@/components/Calendar.vue';
import db from "./firebase/firebaseinit"
import { collection, getDocs } from "firebase/firestore";
export default{ 
  name:'App',
  components:{
    Calendar
  },
  data:()=>({

  }),
  created(){
    // this.getEvents();
  },
  methods:{
    // async getEvents(){
    //   const querySnapshot = await getDocs(collection(db, "calEvent"));
    //     querySnapshot.forEach((doc) => {
    //       console.log(doc.id, " => ", doc.data());
    //     });
    // },
  }
}
</script>
