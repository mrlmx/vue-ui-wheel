<template>
    <div>
        <div class="xin-modal-mask"></div>
        <div class="xin-modal-wrapper">
            <header>标题</header>
            <body>
                内容
            </body>
            <footer>
                <Button>取消</Button>
                <Button type="primary">确认</Button>
            </footer>
        </div>
    </div>
</template>

<script lang="ts">
import Button from "./Button.vue";

export default {
    components: {
        Button,
    },
};
</script>

<style>
</style>