import { createRouter, createWebHistory } from "vue-router"
import Home from "../views/HomeView.vue"
import About from "../views/AboutView.vue"
import Projects from "../views/ProjectsView.vue"



const routes = [
  { path: '/', component: Home, name:"home" },
  { path: '/about', component: About, name:"about" },
  { path: '/projects', component: Projects, name:"projects"}
]

const router = createRouter({
  history: createWebHistory(),
  routes 
})
export default router;

