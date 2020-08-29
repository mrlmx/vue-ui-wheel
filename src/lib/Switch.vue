<template>
    <button :class="{checked: value}" @click="toggle">
        <span />
    </button>
</template>

<script>
import { ref } from "vue";
export default {
    props:{
        value: Boolean
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

<style lang="scss" scoped>
button {
    height: 22px;
    width: 44px;
    border: none;
    background: #efefef;
    border-radius: 11px;
    position: relative;
    cursor: pointer;
    transition: background-color 0.5s;

    &:focus {
        outline: none;
    }
}

span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: 18px;
    width: 18px;
    border-radius: 50%;
    background: #aaa;
    transition: left 0.25s, background-color .5s;
}

.checked {
    background: #000;
    > span {
        background: #fff;
        left: calc(100% - 18px - 2px);
    }
}
</style>