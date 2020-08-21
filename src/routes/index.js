import Vue from 'vue';
import Home from '@/views/Home';
import Kanban from '@/views/kanban/Kanban';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// Criando primeira rota
const routes = [
    {
        name: 'Home',
        path: '/',
        component: Home,
    },
    {
        name: 'Kanban',
        path: '/kanban',
        component: Kanban,
    }
];

const router = new VueRouter({routes})
export default router;