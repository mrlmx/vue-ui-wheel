<template>
    <button :class="{checked}" @click="toggle">
        <span />
    </button>
</template>

<script>
import { ref } from "vue";
export default {
    setup() {
        const checked = ref(false);
        const toggle = () => {
            checked.value = !checked.value;
        };
        return {
            checked,
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
}

span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: 18px;
    width: 18px;
    border-radius: 50%;
    background: #aaa;
}

.checked {
    background: #000;
    > span {
        left: calc(100% - 18px - 2px);
    }
}
</style>