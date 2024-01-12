<script setup>
import { useDeckStore } from '../stores/deckStore.js'
const deckStore = useDeckStore()
</script>

<template>
    <library>
        <library-container>
            <RouterLink to="/flashcard" class="deck" v-for="deck in deckStore.decks">
                {{ deck.name }}
            </RouterLink>
            <add-deck-button>ADD A DECK <br> + </add-deck-button>
        </library-container>
    </library>
</template>
  
<style scoped>
@media (min-width: 1024px) {
    library {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 700px; 
    }

    library-container {
        display: flex;
        flex-direction: row;
        align-content: space-evenly;
        justify-content:left;
        justify-items: start;
        flex-wrap: wrap;
        width: 90%;
        height: 100%;
    }
    RouterLink{
        width: 100%;
        height: 100%;
    }
    .deck {
        background-color: var(--green);
        color:var(--white)
    }
    add-deck-button{
        border:2px solid var(--green);
        color:var(--green);
    }
    .deck, add-deck-button{
        width: 23%;
        height: 30%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        font-size:40px;
        margin-right:2%;
        text-align: center;
        transition:all .3s ease;
        text-decoration: none;
    }
    .deck:hover, add-deck-button:hover{
        transform: scale(1.01);
        box-shadow: 2px 2px 5px rgb(0,0,0,.5);
    }
    .deck:active, add-deck-button:active{
        transform: scale(1.05);
        box-shadow: none;
    }
}
</style>
  