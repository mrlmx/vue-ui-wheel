<template>
    <router-view />
</template>

<script>
import { ref, provide } from "vue";
import router from './router';

export default {
    name: "App",
    setup() {
        const { clientWidth } = document.documentElement;
        const asideVisible = ref(clientWidth >= 500);
        router.afterEach((to) => {
            if(clientWidth < 500 && /^\/doc/.test(to.path)){
                asideVisible.value = false;
            }
        });
        provide("asideVisible", asideVisible);
    },
};
</script>
