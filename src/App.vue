<template>
    <router-view />
</template>

<script>
import { ref, provide } from "vue";

export default {
    name: "App",
    setup() {
        const { clientWidth } = document.documentElement;
        const asideVisible = ref(clientWidth >= 500);
        provide("asideVisible", asideVisible);
    },
};
</script>
