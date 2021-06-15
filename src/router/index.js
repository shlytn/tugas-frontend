import { createWebHistory, createRouter } from "vue-router"
import Auth from '../components/Auth.vue'
import User from '../components/User.vue'
import Todo from '../components/Todo.vue'

const routes = [
  { path: '/', component: Auth },
  { path: '/user', component: User },
  { path: '/todo', component: Todo }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router