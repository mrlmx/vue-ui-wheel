<template>
<div class="top-nav">
    <div class="logo">LOGO</div>
    <ul class="menu">
        <li>菜单1</li>
        <li>菜单2</li>
    </ul>
</div>
</template>

<script lang="ts">
export default {

}
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
    }

    .menu {
        li {
            display: inline-block;
            margin-left: 20px;
        }
    }
}
</style>
