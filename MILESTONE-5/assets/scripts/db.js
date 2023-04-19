

export default {
  
     contacts: [
    {
        name: 'Michele',
        avatar: 'assets/img/avatar_1.jpg',
        visible: false,
        index: 0,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Hai portato a spasso il cane?',
                status: 'sent',
                delete: false
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Ricordati di stendere i panni',
                status: 'sent',
                delete: false
            },
            {
                date: '10/01/2020 16:15:22',
                message: 'Tutto fatto!',
                status: 'received',
                delete: false
            }
        ],
    },
    {
        name: 'Fabio',
        avatar: 'assets/img/avatar_2.jpg',
        visible: false,
        index: 1,
        messages: [
            {
                date: '20/03/2020 16:30:00',
                message: 'Ciao come stai?',
                status: 'sent',
                delete: false
            },
            {
                date: '20/03/2020 16:30:55',
                message: 'Bene grazie! Stasera ci vediamo?',
                status: 'received',
                delete: false
            },
            {
                date: '20/03/2020 16:35:00',
                message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                status: 'sent',
                delete: false
            }
        ],
    },
    {
        name: 'Samuele',
        avatar: 'assets/img/avatar_3.jpg',
        visible: true,
        index: 2,
        messages: [
            {
                date: '28/03/2020 10:10:40',
                message: 'La Marianna va in campagna',
                status: 'received',
                delete: false
            },
            {
                date: '28/03/2020 10:20:10',
                message: 'Sicuro di non aver sbagliato chat?',
                status: 'sent',
                delete: false
            },
            {
                date: '28/03/2020 16:15:22',
                message: 'Ah scusa!',
                status: 'received',
                delete: false
            }
        ],
    },
    {
        name: 'Alessandro B.',
        avatar: 'assets/img/avatar_4.jpg',
        visible: true,
        index: 3,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Lo sai che ha aperto una nuova pizzeria?',
                status: 'sent',
                delete: false
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Si, ma preferirei andare al cinema',
                status: 'received',
                delete: false
            }
        ],
    },
    {
        name: 'Alessandro L.',
        avatar: 'assets/img/avatar_5.jpg',
        visible: true,
        index: 4,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Ricordati di chiamare la nonna',
                status: 'sent',
                delete: false
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Va bene, stasera la sento',
                status: 'received',
                delete: false
            }
        ],
    },
    {
        name: 'Claudia',
        avatar: 'assets/img/avatar_6.jpg',
        visible: true,
        index: 5,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Ciao Claudia, hai novità?',
                status: 'sent',
                delete: false
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Non ancora',
                status: 'received',
                delete: false
            },
            {
                date: '10/01/2020 15:51:00',
                message: 'Nessuna nuova, buona nuova',
                status: 'sent',
                delete: false
            }
        ],
    },
    {
        name: 'Federico',
        avatar: 'assets/img/avatar_7.jpg',
        visible: true,
        index: 6,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Fai gli auguri a Martina che è il suo compleanno!',
                status: 'sent',
                delete: false
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Grazie per avermelo ricordato, le scrivo subito!',
                status: 'received',
                delete: false
            }
        ],
    },
    {
        name: 'Davide',
        avatar: 'assets/img/avatar_8.jpg',
        visible: true,
        index: 7,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Ciao, andiamo a mangiare la pizza stasera?',
                status: 'received',
                delete: false
            },
            {
                date: '10/01/2020 15:50:00',
                message:" No, l'ho già mangiata ieri, ordiniamo sushi!",
                status: 'sent',
                delete: false
            },
            {
                date: '10/01/2020 15:51:00',
                message: 'OK!!',
                status: 'received',
                delete: false
            }
        ],
    }
],
counter: 0,
newText: '',
searchedName: '',
ansewrs: [
    'ciao a te',
    'come stai?',
    "non c'è male e tu?",
    'perfetto allora ci sentiamo più tardi',
    'oggi sono stanca',
    'non volevo disturbare',
    'non ho voglia di parlare',
    'domani andiamo a prendere un gelato?',
    'oggi non sono proprio in vena',
    'quando andiamo a Livorno?',
    'Ciao! Senti, ma quella questione è sistemata?',
    "E' un film bellissimo dobbiamo vederlo",
    'Oggi ho studiato tantissimo',
    'Come mai non riusciamo a vederci domani?',
    'ok perfetto',
    'Va bene',
    
],
sound: { soundurl : 'assets/Sound/WhatsApp-Message-Received-Sound.mp3'} 

  }


