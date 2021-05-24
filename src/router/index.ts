import { createRouter, createWebHistory } from 'vue-router'
import Article from '../components/article.vue';
import Category from '../components/category.vue';
import Product from '../components/produce.vue';
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
      component: Article,
    },
    {
      path: '/category',
      name: 'category',
      component: Category,
    },
    {
      path: '/product',
      name: 'product',
      component: Product,
    }
  ]
});

export default router;


