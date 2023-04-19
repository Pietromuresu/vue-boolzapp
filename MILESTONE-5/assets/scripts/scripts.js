const {createApp} = Vue;
const dt = luxon.DateTime
import contacts from "./db.js"


createApp({
  data(){
    return contacts
    
  },
  methods: {
    
    answer(contact){  
      const reply = {
        date:dt.now().setLocale('it').toLocaleString(dt.TIME_WITH_SECONDS),
        message:"ciao a te",
        status: "received"
      }

      contact.messages.push(reply)
    },

    addNewMessage(contact){
      const newMsg = {
        date: dt.now().setLocale('it').toLocaleString(dt.TIME_WITH_SECONDS),
        message: this.newText,
        status: "sent"
      }

      this.newText=""
      contact.messages.push(newMsg)

      setTimeout(() =>{
      this.answer(contact)
      }, 2000) 
    }

  },
  
  computed:{
    findSearchedName(){
         return this.contacts.filter(contact =>{
          return contact.name.toUpperCase().match(this.searchedName.toUpperCase())
         })
    },

  }





}).mount("#app")