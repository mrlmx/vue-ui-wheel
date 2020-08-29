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
.banner {
    text-align: center;
    padding: 50px 0;

    >h1 {
        margin-bottom: 50px;
    }

    >.action {
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
