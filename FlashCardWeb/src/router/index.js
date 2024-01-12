import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LibraryView from '../views/LibraryView.vue'
import FlashCardView from '../views/FlashCardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/library',
      name:'library',
      component:LibraryView,
    },
    {
      path:'/flashcard',
      name:'flashcard',
      component:FlashCardView,
    }
  ]
})

export default router
