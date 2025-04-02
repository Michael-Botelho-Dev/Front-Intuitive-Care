import Vue from 'vue'
import Router from 'vue-router'
import HomeView from './views/HomeView.vue'
import DetalhesOperadora from './views/DetalhesOperadora.vue'
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/operadora/:id',
        name: 'detalhes',
        component: DetalhesOperadora,
        props: true
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
