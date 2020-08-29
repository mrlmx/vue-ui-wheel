<template>
    <div class="top-nav">
        <div class="logo" @click="toggleAside">LOGO</div>
        <ul class="menu">
            <li>菜单1</li>
            <li>菜单2</li>
        </ul>
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
    background: #efefef;

    .logo {
        font-size: 22px;
        cursor: pointer;
        user-select: none;
    }

    .menu {
        li {
            display: inline-block;
            margin-left: 20px;
        }
    }
}
</style>
