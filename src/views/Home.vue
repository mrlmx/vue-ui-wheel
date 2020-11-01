<template>
    <div class="home">
        <div class="home-bg"></div>
        <div class="home-body">
            <Topnav />
            <div class="banner">
                <img class="logo" src="../assets/logo.png" />
                <h1>Xin UI Vue</h1>
                <h2>一个用于学习和练手的 Vue UI 库</h2>
                <div class="action">
                    <a
                        href="https://github.com/mrlmx/xin-ui-vue"
                        target="__blank"
                        >GitHub</a
                    >
                    <router-link to="/doc">Start</router-link>
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
    position: relative;
    height: 100vh;

    &-bg {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        background: url("/src/assets/bg.jpg");
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        height: 100vh;
        width: 100%;
        filter: grayscale(100%);
        z-index: 1;
    }

    &-body {
        position: relative;
        z-index: 2;
        height: 100%;
    }
}

.banner {
    text-align: center;
    padding: 50px 0;
    color: #fff;

    > h1 {
        // color: #38363b;
        margin-bottom: 50px;
    }

    > h2 {
        // color: #444247;
        font-weight: normal;
    }
}

.logo {
    width: 80px;
    margin-bottom: 50px;
}

.action {
    margin: 50px 0;

    a {
        border: 1px solid #666;
        border-radius: 20px;
        padding: 8px 15px;
        background: #efefef;
        margin: 10px;
        font-size: 16px;
    }
}

.content {
    display: flex;
    justify-content: space-around;
    align-items: center;
    

    &-item {
        position: relative;
        padding: 20px;
        min-height: 150px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        border-radius: 5px;
        overflow: hidden;

        &-glass {
            &::before{
                background: url("/src/assets/bg.jpg") 0 / cover fixed;
                // background-color: #FFF;
                filter: grayscale(100%);
                // opacity: 0.3;
            }

            &::before {
                content: "";
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                width: 100%;
                height: 100%;
                filter: grayscale(100%) blur(2px);
                background-color: #FFF;
                z-index: -1;
            }
        }

        &-title {
            font-size: 20px;
            opacity: 1;
            font-weight: bold;
        }

        &-detail {
            opacity: 1;
        }
    }
}
</style>
