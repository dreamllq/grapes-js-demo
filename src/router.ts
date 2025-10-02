import { createWebHistory, createRouter } from 'vue-router'



const routes = [
  { path: '/', redirect:'/view' },
  { path: '/view', component: ()=>import('./components/view/index.vue') },
  { path: '/editor', component:  ()=>import('./components/editor/index.vue') },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})