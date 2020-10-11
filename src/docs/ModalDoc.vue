<template>
    <div>
        <div class="demo-wrapper">
            <h2 class="title">基础用法</h2>
            <Button @click="handleToggle">打开 Modal</Button>
        </div>
        <Modal :visible="visible" />
    </div>
</template>

<script>
import Modal from "../lib/Modal.vue";
import Button from "../lib/Button.vue";
import { ref } from "vue";

export default {
    components: { Modal, Button },
    setup() {
        const visible = ref(false);
        const handleToggle = () => {
            visible.value = !visible.value;
        }
        return {
            visible,
            handleToggle,
        };
    },
};
</script>

<style lang="scss" scoped>
.demo-wrapper {
    .title {
        margin-bottom: 20px;
    }
    button {
        margin: 0 20px 20px 0;
    }
}
</style>