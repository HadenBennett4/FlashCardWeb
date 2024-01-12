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
                        Answer:"Test Answer",
                    },
                    {
                        id:2,
                        Description:"Test Description",
                        Answer:"Test Answer",
                    },
                ]
            },
            {
                id:2,
                name:"Deck 2",
                cards:[
                    {
                        id:1,
                        Description:"Test Description",
                        Answer:"Test Answer",
                    },
                    {
                        id:2,
                        Description:"Test Description",
                        Answer:"Test Answer",
                    },
                ]
            }
        ],
        currentDeckId:1,
        currentCardId:1,
    }),
    getters:{
        getDeckById(){
            return this.decks.find(item => item.id === this.currentDeckId)
        },
    },
    getCardById(){
        currentDeck = this.getDeckById
        return currentDeck.cards.find(obj =>  obj.id === this.currentCardId)
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
            if(this.currentCardId != this.getDeckById.cards.length){
                this.currentCardId++;
            }
        },
        decrementCard(){
            if(this.currentCardID >0){
                this.currentCardId--;
            }
        }

    }
})