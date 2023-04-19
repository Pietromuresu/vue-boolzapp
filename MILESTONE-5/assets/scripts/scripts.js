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
    },

    removeMsg(text, index, messages){
      if(text.delete){
        messages.splice(index, 1)
      }
    },

    getLastMsg(contact){
      if(contact.messages[contact.messages.length - 1].status == 'received'){
        return `${contact.name}: ${contact.messages[contact.messages.length - 1].message}` 

      }else {
        return `Tu: ${contact.messages[contact.messages.length - 1].message}` 
      }

  },

    getLastMsgHour(contact){
  
      return contact.messages[contact.messages.length - 1].date

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