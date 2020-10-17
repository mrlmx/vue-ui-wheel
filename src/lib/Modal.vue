<template>
    <template v-if="visible">
        <Teleport to="body">
            <div class="xin-modal-wrapper">
                <div class="xin-modal-mask" @click="handleMaskClick"></div>
                <div class="xin-modal">
                    <span class="xin-modal-close" @click="close">X</span>
                    <header class="xin-modal-header">
                        <template v-if="title">
                            {{ title }}
                        </template>
                        <template v-else>
                            <slot name="title" />
                        </template>
                    </header>
                    <body class="xin-modal-body">
                        <slot />
                    </body>
                    <footer class="xin-modal-footer">
                        <Button @click="handleCancle">取消</Button>
                        <Button @click="handleOk" type="primary">确认</Button>
                    </footer>
                </div>
            </div>
        </Teleport>
    </template>
</template>

<script lang="ts">
import Button from "./Button.vue";

export default {
    components: {
        Button,
    },
    emits: ["update:visible", "ok", "cancle"],
    props: {
        visible: {
            type: Boolean,
            default: false,
        },
        maskClosable: {
            type: Boolean,
            default: true,
        },
        title: String,
        // onOk: {
        //     type: Function,
        // },
        // onCancle: {
        //     type: Function,
        // },
    },
    setup(props, context) {
        const { maskClosable } = props;

        const close = () => {
            context.emit("update:visible", false);
        };

        const handleMaskClick = () => {
            if (maskClosable) {
                close();
            }
        };

        const handleOk = (e) => {
            context.emit("ok", e);
        };

        const handleCancle = (e) => {
            context.emit("cancle", e);
        };

        return { close, handleMaskClick, handleOk, handleCancle };
    },
};
</script>

<style lang="scss">
@import "./mixin";

$class-prefix: "xin";
$border-radius: 2px;
$z-index: 1000;

.#{$class-prefix}-modal {
    &-mask {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: $z-index;
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
        z-index: $z-index;
    }

    position: relative;
    width: 500px;
    background-color: #fff;
    margin: 0 auto;
    margin-top: 100px;
    z-index: $z-index;

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

@media (max-width: 500px) {
    .#{$class-prefix}-modal {
        width: 300px;
    }
}
</style>