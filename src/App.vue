<template>
    <div>
        导航
        |
        <router-link to="/">Page One</router-link>|
        <router-link to="two">Page Two</router-link>
    </div>
    <hr />
    <router-view />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
    name: "App",
    components: {
        HelloWorld,
    },
};
</script>
