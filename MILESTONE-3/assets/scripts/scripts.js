const {createApp} = Vue;
import contacts from "../scripts/db.js"


createApp({
  data(){
    return contacts
    
  },
  methods: {
    displaySelectedChat(){

      console.log(this.counter);
    },
    
    answer(contact){
      const reply = {
        date:"19/07/23",
        message:"ciao a te",
        status: "received"
      }

      contact.messages.push(reply)
    },

    addNewMessage(contact){
      const newMsg = {
        date:"19/07/23",
        message: this.newText,
        status: "sent"
      }

      this.newText=""
      contact.messages.push(newMsg)

      setTimeout(() =>{
      this.answer(contact)
      }, 2000)

    }
  }

}).mount("#app")