const {createApp} = Vue;
import contacts from "../scripts/db.js"


createApp({
  data(){
    return contacts
    
  },
  methods: {
    displaySelectedChat(){

      console.log(this.counter);
    }
  }
}).mount("#app")