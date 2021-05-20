import { createRouter, createWebHistory } from 'vue-router'
import Aritcle from '../components/article.vue';
import Category from '../components/category.vue';
const routerHistory = createWebHistory();

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      redirect: '/article'
    },
    {
      path: '/article',
      name: 'article',
      component: Aritcle
    },
    {
      path: '/category',
      name: 'category',
      component: Category
    }
  ]
});

export default router;


