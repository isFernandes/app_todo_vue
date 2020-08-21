import Vue from 'vue';
import Home from '@/views/Home'
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// Criando primeira rota
const routes = [
    {
        name: 'Home',
        path: '/',
        component: Home,
    }
];

const router = new VueRouter({routes})
export default router;