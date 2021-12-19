const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('/src/pages/home/home.vue')
    },
]


export default routes
