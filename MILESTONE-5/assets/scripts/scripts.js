const {createApp} = Vue;
const dt = luxon.DateTime
import contacts from "./db.js";



createApp({
  data(){
    return contacts
    
  },
  methods: {

    getAnswer(max, min){

      const randomAnswer = this.ansewrs[Math.floor(Math.random() * (max - min + 1) - 1)]
      return randomAnswer
    },
    
    answer(contact){  
      const reply = {
        date:dt.now().setLocale('it').toLocaleString(dt.TIME_WITH_SECONDS),
        message:this.getAnswer(this.ansewrs.length - 1, 0),
        status: "received"
      }
      
      contact.messages.push(reply)
      
      const audio = new Audio(this.sound.receivedMsg);
      audio.play(audio);
      
    },

    addNewMessage(contact){
      const newMsg = {
        date: dt.now().setLocale('it').toLocaleString(dt.TIME_WITH_SECONDS),
        message: this.newText,
        status: "sent"
      }

      this.newText=""
      contact.messages.push(newMsg)
      const audio = new Audio(this.sound.sentMsg);
      audio.play(audio);

      setTimeout(() =>{
      this.answer(contact)
      }, 2000) 
    },

    removeMsg(text, index, messages){
     const deleteMsgSound = new Audio(this.sound.deleteMsgSound) 
     if(text.delete){
       deleteMsgSound.play(deleteMsgSound)
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