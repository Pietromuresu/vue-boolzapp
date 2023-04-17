const {createApp} = Vue;
import contacts from "../scripts/db.js"


createApp({
  data(){
    return contacts
    
  }

}).mount("#app")