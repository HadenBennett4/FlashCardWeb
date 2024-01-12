<script setup>
import { useDeckStore } from '../stores/deckStore.js'
const deckStore = useDeckStore()
function increase(){
  this.deckStore.incrementCard();
}
function decrease(){
  this.deckStore.decrementCard();
}
</script>

<template>
    <flash-card-main>
      <div class="flash-card">
        {{ deckStore.getCardById }}
      </div>
      <button-container>
        <next-back-button @click="decrease()">&lt; Back</next-back-button>
        <next-back-button @click="increase()">Next ></next-back-button>
  
      </button-container>

    </flash-card-main>
  </template>
  
  <style scoped>
  @media (min-width: 1024px) {
    flash-card-main{
      width: 100%;
      height: 600px;
      display: flex; 
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .flash-card{
      width: 22%;
      height: 50%;
      border-radius: 20px;
      background-color: var(--green);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 5%;
      font-size:50px;
    }
    next-back-button{
      width: 45%;
      height: 80%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color:var(--blue1);
      color: var(--white);
      border-radius: 10px;
      font-size:20px;
      font-weight:bold;
      transition: all .2s ease;
    }
    next-back-button:hover{
      transform: scale(1.01);
    }
    next-back-button:active{
      transform: scale(1.05);
      background-color: var(--blue3);
    } 
    button-container{
      width: 35%;
      height: 10%;  
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding-top: 2%;
    }

  }
  </style>
  