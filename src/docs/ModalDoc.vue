<template>
    <div>
        <div class="demo-wrapper">
            <h2 class="title">基础用法</h2>
            <Button @click="handleToggle">打开 Modal</Button>
        </div>
        <!-- 等价于 v-modal 写法 -->
        <!-- <Modal :visible="visible" @update:visible="visible = $event" /> -->
        <Modal
            title="基础用法"
            v-model:visible="visible"
            :mask-closable="false"
            @ok="handleOk"
            @cancle="handleCancle"
        >
            <p>第一行内容</p>
            <p>第二行内容</p>
        </Modal>
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
        };

        const handleOk = (e) => {
            console.log("ok", e);
            visible.value = false;
        };

        const handleCancle = (e) => {
            console.log("cancle", e);
            visible.value = false;
        };

        return {
            visible,
            handleToggle,
            handleOk,
            handleCancle,
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