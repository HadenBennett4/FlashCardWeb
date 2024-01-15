import { defineStore } from 'pinia'
 
export const useDeckStore = defineStore('deckStore',{
    state: () => ({
        decks:[
            {
                id:1,
                name:"Deck 1",
                cards:[
                    {
                        id:1,
                        Description:"Test Description",
                        Answer:"Test Answer1",
                    },
                    {
                        id:2,
                        Description:"Test Description",
                        Answer:"Test Answer2",
                    },
                ]
            },
            {
                id:2,
                name:"Deck 2",
                cards:[
                    {
                        id:1,
                        Description:"Test Descriptiona",
                        Answer:"Test Answer",
                    },
                    {
                        id:2,
                        Description:"Test Descriptiona2",
                        Answer:"Test Answer",
                    },
                ]
            }
        ],
        currentDeckId:1,
        currentCardId:0,
    }),
    getters:{
        getDeckById(){
            return this.decks[this.currentDeckId]
        },
        getCardById(){
            return this.decks[this.currentDeckId].cards[this.currentCardId]
        },
    },

    actions:{
        incrementDeck() {
            if(this.currentDeckId != this.decks.length){
                this.currentDeckId++;
            }
        },
        decrementDeck(){
            if(this.currentDeckId >0){
                this.currentDeckId--;
            }
        },
        incrementCard(){
            if(this.currentCardId != this.decks[this.currentDeckId].cards.length){
                this.currentCardId++;
            }
        },
        decrementCard(){
            if(this.currentCardId > 0){
                this.currentCardId--;
            }
        }

    }
})