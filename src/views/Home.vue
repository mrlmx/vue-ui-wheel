<template>
    <div class="home">
        <Topnav />
        <div class="banner">
            <img src="../assets/logo.png" />
            <h1>Xin UI Vue</h1>
            <h2>
                a vue ui component project for practicing and it's just a toy
            </h2>
            <p class="action">
                <a href="https://github.com/mrlmx/xin-ui-vue" target="__blank"
                    >GitHub</a
                >
                <router-link to="/doc">Start</router-link>
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
.home {
    height: 100vh;
    position: relative;
    background: url("/src/assets/bg.jpg");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    width: 100%;
    filter: grayscale(100%);
}
.banner {
    text-align: center;
    padding: 50px 0;
    color: #fff;

    > h1 {
        margin-bottom: 50px;
    }

    > h2 {
        font-weight: normal;
    }

    > .action {
        margin: 50px 0;

        a {
            border: 1px solid #666;
            border-radius: 20px;
            padding: 5px 10px;
            background: #efefef;
            margin: 10px;
            font-size: 16px;
        }
    }
}
</style>
