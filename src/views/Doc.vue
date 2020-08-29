<template>
    <div>
        <Topnav />
        <div class="content">
            <aside class="aside" v-show="asideVisible">
                <h2>组件列表</h2>
                <ol>
                    <li>
                        <router-link to="/doc/switch">Switch 组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/button">Button 组件</router-link>
                    </li>
                    <li>
                        <router-link to="dialog">Dialog 组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/tabs">Tabs 组件</router-link>
                    </li>
                </ol>
            </aside>
            <main class="main">main</main>
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
        border-right: 1px solid #666;

        h2 {
            margin-bottom: 15px;
        }

        li {
            margin: 10px 0;
        }
    }

    .main {
        flex-grow: 1;
        padding: 20px;
    }
}
</style>
