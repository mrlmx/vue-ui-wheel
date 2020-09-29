<template>
    <div>
        <Button @click="handleClick">按钮</Button>
    </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
export default {
    components: { Button },
    setup(){
        const handleClick = () => {
            console.log("hi");
        }
        return {
            handleClick
        }
    }
};
</script>

<style lang="scss" scoped>
</style>