<template>
    <button class="xin-button" :class="classs" :disabled="disabled">
        <slot></slot>
    </button>
</template>

<script>
import { computed } from "vue";
export default {
    inheritAttrs: false,
    props: {
        // type: {
        //     type: String,
        //     default: "default",
        // },
        type: String,
        size: String,
        disabled: Boolean,
    },
    setup(props, ctx) {
        const { type, size, disabled } = props;
        const classs = computed(() => {
            return {
                [`xin-button-${type}`]: type,
                [`xin-button-${size}`]: size,
            };
        });
        return {
            classs,
            disabled,
        };
    },
};
</script>

<style lang="scss">
$class-prefix: "xin";
$color: #1890ff;
$tint-color: #40a9ff;
$height: 32px;
$border-radius: 2px;

@mixin disabled {
    color: rgba(0, 0, 0, 0.25);
    background: #f5f5f5;
    border-color: #d9d9d9;
    text-shadow: none;
    box-shadow: none;
    cursor: not-allowed;
}

.#{$class-prefix}-button {
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

    &[disabled] {
        @include disabled;
    }

    // type begin
    &-primary {
        background-color: $color;
        border-color: $color;
        color: #fff;

        &:focus,
        &:hover {
            background-color: $tint-color;
            border-color: $tint-color;
            color: #fff;
        }

        &[disabled] {
            @include disabled;
        }
    }

    &-dashed {
        border: 1px dashed #d9d9d9;
    }

    &-link {
        border: none;
        color: $color;

        &[disabled] {
            background-color: transparent;
        }
    }
    // type end

    // size begin
    &-large {
        height: $height + 8;
        font-size: 16px;
        padding: 6.4px 15px;
    }

    &-small {
        height: $height - 8;
        padding: 0 7px;
        font-size: 14px;
    }
    // size end
}
</style>