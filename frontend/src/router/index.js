import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import UsersList from '../views/UsersList.vue'
import PublicationsView from '../views/PublicationsView'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'Login-View',
    component: LoginView

  },
  {
    path: '/users',
    name: 'Users-List',
    component: UsersList

  },
  {
    path: '/publications',
    name: 'Publications-View',
    component: PublicationsView

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
