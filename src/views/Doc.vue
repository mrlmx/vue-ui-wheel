<template>
    <div>
        <Topnav />
        <div class="content">
            <aside class="aside" v-show="asideVisible">
                <h2 class="title">组件列表</h2>
                <ol>
                    <li>
                        <router-link to="/doc/switch">Switch 组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/button">Button 组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/modal">Modal 组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/tabs">Tabs 组件</router-link>
                    </li>
                </ol>
            </aside>
            <main class="main">
                <router-view />
            </main>
        </div>
    </div>
</template>

<script lang="ts">
import Topnav from "../components/Topnav.vue";
import { inject, Ref } from "vue";
export default {
    components: {
        Topnav,
    },
    setup() {
        const asideVisible = inject<Ref<boolean>>("asideVisible");
        return {
            asideVisible,
        };
    },
};
</script>

<style lang="scss" scoped>
.content {
    display: flex;
    height: calc(100vh - 56px);

    .aside {
        width: 150px;
        flex-shrink: 0;
        padding: 20px;
        border-right: 1px solid #eaecef;

        .title {
            color: #2c3e50;
            font-size: 16px;
            margin-bottom: 15px;
        }

        li {
            margin: 10px 0;
            padding-left: 10px;
        }

        .router-link-active{
            color: #3eaf7c;
        }
    }

    .main {
        flex-grow: 1;
        padding-top: 20px;
        padding-left: 20px;
        overflow: auto;
    }
}
</style>
