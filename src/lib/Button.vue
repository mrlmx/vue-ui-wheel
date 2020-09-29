<template>
    <div>
        <button v-bind="rest">
            <slot></slot>
        </button>
    </div>
</template>

<script>
export default {
    inheritAttrs: false,
    setup(props, ctx){
        const {size, ...rest} = ctx.attrs;
        return {
            size,
            rest
        }
    }
};
</script>

<style lang="scss" scoped>

</style>