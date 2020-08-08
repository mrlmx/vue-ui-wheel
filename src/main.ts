import { createApp } from 'vue'
import App from './App.vue'
import One from "./components/One.vue"
import Two from "./components/Two.vue"
import './index.css'
import {createWebHashHistory, createRouter } from "vue-router"

const history = createWebHashHistory();
const router = createRouter({
    history,
    routes: [
        {
            path: "/", component: One
        },
        {
            path: "/two", component: Two
        }
    ]
});

const app = createApp(App)
app.use(router);
app.mount('#app')
