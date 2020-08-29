<template>
<div>
    <Topnav />
    <div class="banner">
        <h1>Vue UI Wheel</h1>
        <h2>a vue ui component project for practicing and it's just a toy</h2>
        <p class="action">
            <a>GitHub</a>
            <a>Start</a>
        </p>
    </div>
</div>
</template>

<script lang="ts">
import Topnav from "../components/Topnav.vue";
export default {
    components: {
        Topnav,
    },
};
</script>

<style lang="scss" scoped>
</style>
