<script setup>
const decks = ref([
    {
        name: "Deck1",
        cards: [
            {
                description: "Test Name",
                answer: "Test Answer",
            },
            {
                description: "Test Name2",
                answer: "Test Answer2",
            }
        ]
    },
    {
        name: "Deck2",
        cards: [
            {
                description: "Test Name",
                answer: "Test Answer",
            },
            {
                description: "Test Name2",
                answer: "Test Answer2",
            }
        ]
    },
])
</script>

<template>
    <library>
        <library-container>
        </library-container>
    </library>
</template>
  
<style>
@media (min-width: 1024px) {
    library {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 1000px;
    }

    library-container {
        display: flex;
        flex-direction: row;
        align-content: space-evenly;
        justify-content: space-evenly;
        width: 90%;
        height: 100%;;
        background-color: red;
    }

    deck {
        width: 30%;
        height: 30%;
        background-color: aquamarine;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
}
</style>
  