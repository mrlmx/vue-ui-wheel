<template>
    <div class="top-nav">
        <div class="logo">
            <router-link to="/">LOGO</router-link>
        </div>
        <ul class="menu">
            <li>菜单1</li>
            <li>菜单2</li>
        </ul>
        <span class="toggle-aside" @click="toggleAside">三</span>
    </div>
</template>

<script lang="ts">
import { inject, Ref } from "vue";
export default {
    setup() {
        const asideVisible = inject<Ref<boolean>>("asideVisible");
        const toggleAside = () => {
            asideVisible.value = !asideVisible.value;
        };
        return {
            toggleAside,
        };
    },
};
</script>

<style lang="scss" scoped>
.top-nav {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 15px 20px;
    // background: #efefef;
    color: #FFF;

    .logo {
        font-size: 22px;
        cursor: pointer;
        user-select: none;
    }

    .toggle-aside {
        position: absolute;
        left: 20px;
        margin: auto 0px;
        cursor: pointer;
        display: none;
    }

    .menu {
        li {
            display: inline-block;
            margin-left: 20px;
        }
    }
}

@media (max-width: 500px) {
    .top-nav {
        justify-content: center;

        .toggle-aside {
            display: inline-block;
        }

        .menu {
            display: none;
        }
    }
}
</style>
