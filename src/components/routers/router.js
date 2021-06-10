import { createWebHistory, createRouter } from "vue-router"
import Auth from '../Auth'
import User from '../User'
import Todo from '../Todo'

const routes = [
  { path: '/auth', component: Auth },
  { path: '/users', component: User },
  { path: '/todos', component: Todo }
]
  
const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App).use(router).mount('#app')