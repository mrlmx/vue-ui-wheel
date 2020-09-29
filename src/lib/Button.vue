<template>
    <button class="xin-button" :class="{ [`xin-button-${type}`]: type }">
        <slot></slot>
    </button>
</template>

<script>
export default {
    inheritAttrs: false,
    props: {
        // type: {
        //     type: String,
        //     default: "default",
        // },
        type: String,
    },
    setup(props, ctx) {
        const { size, ...rest } = ctx.attrs;
        return {
            size,
            rest,
        };
    },
};
</script>

<style lang="scss">
$color: #40a9ff;
$height: 32px;
$border-radius: 2px;

.xin-button {
    display: inline-block;
    font-weight: 400;
    white-space: nowrap;
    text-align: center;
    background-image: none;
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    user-select: none;
    touch-action: manipulation;
    height: $height;
    padding: 4px 15px;
    font-size: 14px;
    border-radius: $border-radius;
    color: rgba(0, 0, 0, 0.85);
    background: #fff;
    border: 1px solid #d9d9d9;

    &:active,
    &:focus {
        outline: 0;
    }

    &:focus,
    &:hover {
        color: $color;
        background: #fff;
        border-color: $color;
    }
}
</style>