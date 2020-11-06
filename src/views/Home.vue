<template>
    <div class="home">
        <Topnav />
        <div class="banner">
            <img class="logo" src="../assets/logo.png" />
            <h1>Xin UI Vue</h1>
            <h2>一个用于学习和练手的 Vue UI 库</h2>
            <div class="action">
                <router-link to="/doc" class="action-btn">快速上手 →</router-link>
            </div>
            <div class="content">
                <div class="content-item">
                    <div class="content-item-glass"></div>
                    <div class="content-item-title">使用 Vue 3</div>
                    <div class="content-item-detail">
                        使用最新 Vue 3 Composition API 语法
                    </div>
                </div>
                <div class="content-item">
                    <div class="content-item-glass"></div>
                    <div class="content-item-title">配合 TypeScript</div>
                    <div class="content-item-detail">
                        源码配合 TypeScript 进行类型检查
                    </div>
                </div>
                <div class="content-item">
                    <div class="content-item-glass"></div>
                    <div class="content-item-title">简单 Demo</div>
                    <div class="content-item-detail">
                        项目案例 Demo 写法简单便于理解
                    </div>
                </div>
            </div>
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
}

.banner {
    text-align: center;
    padding: 50px 0;

    > h1 {
        color: #2c3e50;
        font-size: 36px;
        margin-bottom: 50px;
    }

    > h2 {
        color: #6a8bad;
        font-weight: normal;
    }
}

.logo {
    width: 100px;
    margin-top: 30px;
    margin-bottom: 50px;
}

.action {
    margin: 50px 0;

    &-btn {
        border-radius: 10px;
        padding: 13px 25px;
        margin: 10px;
        font-size: 22px;
        background-color: #232931;
        color: #fff;
    }
}

.content {
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-top: 1px solid #eaecef;

    &-item {
        position: relative;
        padding: 20px;
        min-height: 150px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;

        &-title {
            font-size: 20px;
            opacity: 1;
            font-weight: bold;
            color: #3a5169;
        }

        &-detail {
            color: #4e6e8e;
        }
    }
}


@media (max-width: 600px) {
    .content{
        flex-direction: column;
    }
}

</style>
