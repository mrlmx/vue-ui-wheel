<template>
    <div>
        <div class="btn-wrapper">
            <h2 class="title">Type 属性</h2>
            <Button>默认</Button>
            <Button type="primary">主按钮</Button>
            <Button type="dashed">虚线按钮</Button>
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