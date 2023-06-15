import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        redirect: '/home'
    }, 
    {
        path: '/home',
        name: 'Home',
        component: () => import('@/pages/Home.vue') 
    },
    {
        path: '/tweetpage/:tweetId',
        name: 'Tweet',
        component: () => import('@/pages/TweetPage.vue')
    }
]

const router = createRouter({
    routes: routes,
    history: createWebHistory()
})

export default router