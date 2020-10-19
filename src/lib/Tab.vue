<template>
    <div class="xin-tab">
        <slot />
    </div>
</template>

<script lang="ts">
export default {};
</script>

<style lang="scss">
@import "./constant";

.#{$class-prefix}-tab {
    padding: 15px 0;
    line-height: 18px;
}
</style>