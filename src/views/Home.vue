<template>
<div>
    <div class="top-nav">
        <div class="logo">LOGO</div>
        <ul class="menu">
            <li>菜单1</li>
            <li>菜单2</li>
        </ul>
    </div>
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

<style lang="scss" scoped>
.top-nav {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 15px 20px;
    background: #EFEFEF;

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
