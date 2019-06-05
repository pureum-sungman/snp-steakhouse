import Vue from 'vue';
import Router from 'vue-router';
import {
    map as _map,
    capitalize as _capitalize
} from 'lodash';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: _map(
        ['home', 'about', 'gallery', 'map', 'menu', 'recipes', 'shop'],
        route => {
            const capitalized = _capitalize(route);
            return route === 'home'
                ? {
                    path: '/',
                    name: 'ViewHome',
                    component: () => import('@/views/Home.vue')
                }
                : {
                    path: `/${route}`,
                    name: `View${capitalized}`,
                    component: () => import(`@/views/${capitalized}.vue`)
                };
        }
    )
});
