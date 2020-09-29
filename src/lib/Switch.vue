<template>
    <button :class="{checked: value}" @click="toggle">
        <span />
    </button>
</template>

<script>
import { ref } from "vue";
export default {
    props: {
        value: Boolean,
    },
    setup(props, context) {
        const toggle = () => {
            context.emit("update:value", !props.value);
        };
        return {
            toggle,
        };
    },
};
</script>

<style lang="scss">
$height: 22px;
$width: $height * 2;
$round-width: $height - 4;
$round-gap: 2px;

button {
    height: $height;
    width: $width;
    border: none;
    background: #efefef;
    border-radius: $height / 2;
    position: relative;
    transition: background-color 0.5s;
    cursor: pointer;

    &:focus {
        outline: none;
    }

    > span {
        position: absolute;
        top: $round-gap;
        left: $round-gap;
        height: $round-width;
        width: $round-width;
        border-radius: 50%;
        background: #aaa;
        transition: left 0.25s, background-color 0.5s;
    }

    &.checked {
        background: #111;
        > span {
            background: #fff;
            left: calc(100% - #{$round-width} - #{$round-gap});
        }
    }
}
</style>