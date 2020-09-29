<template>
    <div>
        <div class="btn-wrapper">
            <Button>按钮</Button>
            <Button type="primary">按钮</Button>
            <Button type="ghost">按钮</Button>
            <Button type="dashed">按钮</Button>
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
    button {
        margin: 0 20px 20px 0;
    }
}
</style>