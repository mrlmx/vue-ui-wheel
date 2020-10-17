<template>
    <div class="xin-tabs">
        <div class="xin-tabs-nav">
            <div
                class="xin-tabs-nav-item"
                :class="{ 'xin-tabs-nav-active': activeTab === index }"
                v-for="(title, index) of tabTitle"
                @click="handleTabClick(index)"
                :key="index"
            >
                {{ title }}
            </div>
        </div>
        <div class="xin-tabs-content">
            <component
                v-for="(tab, index) of defaultSlot"
                :is="tab"
                :key="index"
            />
        </div>
    </div>
</template>

<script lang="ts">
import { ref } from "vue";
import Tab from "./Tab.vue";
export default {
    setup(props, context) {
        const activeTab = ref<number>(0);
        const defaultSlot = context.slots.default();
        const tabTitle = defaultSlot.map(({ type, props }) => {
            if (type !== Tab) {
                throw new Error("Tabs 子标签必须是 Tab");
            }
            return props.title;
        });
        const handleTabClick = (index) => {
            console.log(index);
            activeTab.value = index;
        }
        return {
            defaultSlot,
            tabTitle,
            activeTab,
            handleTabClick
        };
    },
};
</script>

<style lang="scss">
@import "./constant";

.#{$class-prefix}-tabs {
    &-nav {
        display: flex;
        border-bottom: 1px solid #f0f0f0;

        &-active {
            color: $primary-color;
        }

        &-item {
            padding: 10px 0;
            margin-right: 20px;
            cursor: pointer;

            &:hover {
                color: $primary-color-secondary;
            }
        }
    }
}
</style>