import { createRouter, createWebHistory } from 'vue-router'
import Main from '../components/main.vue';
import Article from '../components/article.vue';
import Category from '../components/category.vue';
import Product from '../components/produce.vue';
import Login from '../components/login.vue'
import Index from '../components/index.vue';
import Edit from '../components/edit.vue';
const routerHistory = createWebHistory();

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      redirect: '/main'
    },
    {
      path: '/main',
      name: 'main',
      component: Main,
      children: [
        {
          path: '/main/',
          redirect: '/main/index'
        },
        {
          path: '/main/index',
          name: 'index',
          component: Index,
        },
        {
          path: '/main/article',
          name: 'article',
          component: Article,
        },
        {
          path: '/main/category',
          name: 'category',
          component: Category,
        },
        {
          path: '/main/product',
          name: 'product',
          component: Product,
        },
        {
          path: '/main/edit',
          name: 'edit',
          component: Edit,
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    }
  ]
});

export default router;


