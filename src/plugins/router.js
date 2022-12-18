import {createRouter, createWebHistory} from "vue-router";
import InfoPage from "@/pluss/InfoPage";

const routes = [
    {
        path: '/',
        component: InfoPage
    },
    {
        path: '/login',
        component: () => import('../pluss/LogIn')
    },
    {
        path: '/signin',
        component: () => import('../pluss/SignIn')
    },
    {
        path: '/contact',
        component: () => import('../components/ContactRow.vue')
    },
    {
        path: '/uzb',
        component: () => import('../pluss/UzbRow.vue')
    },
    {
        path: '/world',
        component: () => import('../pluss/WorldRow')
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})