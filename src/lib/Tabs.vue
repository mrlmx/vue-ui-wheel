<template>
    <div class="xin-tabs">
        <div class="xin-tabs-nav">
            <div
                class="xin-tabs-nav-item"
                :class="{ 'xin-tabs-nav-active': active === tab.key }"
                v-for="tab of tabProps"
                :key="tab.key"
                @click="handleTabClick(tab.key)"
            >
                {{ tab.title }}
            </div>
        </div>
        <div class="xin-tabs-content">
            <component :is="tabComponent" />
        </div>
    </div>
</template>

<script lang="ts">
import { computed, ref } from "vue";
import Tab from "./Tab.vue";
export default {
    props: {
        active: String,
    },
    setup(props, context) {
        // const activeTab = ref<number>(0);
        const defaultSlot = context.slots.default();
        const tabProps = defaultSlot.map(({ type, props }) => {
            if (type !== Tab) {
                throw new Error("Tabs 子标签必须是 Tab");
            }
            return props;
        });
        const tabComponent = computed(() => {
            return defaultSlot.filter(
                (tab) => tab.props.key === props.active
            )[0];
        });
        const handleTabClick = (key) => {
            console.log(key);
            context.emit("update:active", key);
            // activeTab.value = index;
        };
        return {
            defaultSlot,
            tabProps,
            // activeTab,
            handleTabClick,
            tabComponent,
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