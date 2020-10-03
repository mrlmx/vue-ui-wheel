<template>
    <div>
        <div class="btn-wrapper">
            <h2 class="title">Type 属性</h2>
            <Button>默认</Button>
            <Button type="primary">主按钮</Button>
            <Button type="dashed">虚线按钮</Button>
            <Button type="link">Link 按钮</Button>
        </div>
        <div class="btn-wrapper">
            <h2 class="title">Size 属性</h2>
            <Button>默认</Button>
            <Button size="large">大按钮</Button>
            <Button size="small">小按钮</Button>
        </div>
        <div class="btn-wrapper">
            <h2 class="title">Disable 属性</h2>
            <Button disabled>默认</Button>
            <Button type="primary" disabled>主按钮</Button>
            <Button type="dashed" disabled>虚线按钮</Button>
            <Button type="link" disabled>Link 按钮</Button>
        </div>
        <div class="btn-wrapper">
            <h2 class="title">Danger 属性</h2>
            <Button danger>默认</Button>
            <Button type="primary" danger>主按钮</Button>
            <Button type="dashed" danger>虚线按钮</Button>
            <Button type="link" danger>Link 按钮</Button>
        </div>
        <div class="btn-wrapper">
            <h2 class="title">Loading 属性</h2>
            <Button loading>默认</Button>
            <Button type="primary" loading>主按钮</Button>
            <Button type="dashed" loading>虚线按钮</Button>
            <Button type="link" loading>Link 按钮</Button>
        </div>
    </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
export default {
    components: { Button },
    setup() {
        const handleClick = () => {
            console.log("hi");
        };
        return {
            handleClick,
        };
    },
};
</script>

<style lang="scss" scoped>
.btn-wrapper {
    .title {
        margin-bottom: 20px;
    }
    button {
        margin: 0 20px 20px 0;
    }
}
</style>