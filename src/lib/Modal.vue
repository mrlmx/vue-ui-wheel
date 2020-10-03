<template>
    <div>
        <div class="xin-modal-mask"></div>
        <div class="xin-modal-wrapper">
            <div class="xin-modal">
                <span class="xin-modal-close">X</span>
                <header class="xin-modal-header">标题</header>
                <body class="xin-modal-body">
                    <p>第一行内容</p>
                    <p>第二行内容</p>
                </body>
                <footer class="xin-modal-footer">
                    <Button>取消</Button>
                    <Button type="primary">确认</Button>
                </footer>
            </div>
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

<style lang="scss">
@import "./mixin";

$class-prefix: "xin";
$border-radius: 2px;

.#{$class-prefix}-modal {
    &-mask {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 1000;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.45);
    }

    &-wrapper {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        overflow: auto;
        outline: 0;
        z-index: 1000;
    }

    position: relative;
    width: 500px;
    background-color: #fff;
    margin: 0 auto;
    margin-top: 100px;

    &-close {
        position: absolute;
        top: 17px;
        right: 25px;
        color: rgba(0, 0, 0, 0.45);
        cursor: pointer;
    }

    &-header {
        padding: 16px 24px;
        color: rgba(0, 0, 0, 0.85);
        background: #fff;
        border-bottom: 1px solid #f0f0f0;
        border-radius: $border-radius $border-radius 0 0;
    }

    &-body {
        padding: 24px;
        font-size: 14px;
        line-height: 1.5715;
        word-wrap: break-word;
    }

    &-footer {
        padding: 10px 16px;
        text-align: right;
        background: transparent;
        border-top: 1px solid #f0f0f0;
        border-radius: 0 0 $border-radius $border-radius;

        > button {
            margin-left: 15px;
        }
    }
}
</style>