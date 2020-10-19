<template>
    <div class="xin-tabs">
        <div class="xin-tabs-nav">
            <div
                class="xin-tabs-nav-item"
                :class="{ 'xin-tabs-nav-active': active === tab.key }"
                v-for="(tab, i) of tabProps"
                :key="tab.key"
                @click="handleTabClick(tab.key)"
                :ref="
                    (el) => {
                        if (el) navItems[i] = el;
                    }
                "
            >
                {{ tab.title }}
            </div>
            <div class="xin-tabs-nav-line" ref="navLine" />
        </div>
        <div class="xin-tabs-content">
            <component :is="tabComponent" />
        </div>
    </div>
</template>

<script lang="ts">
import { computed, onMounted, ref } from "vue";
import Tab from "./Tab.vue";
export default {
    props: {
        active: String,
    },
    setup(props, context) {
        const navItems = ref<HTMLDivElement[]>([]);
        const navLine = ref<HTMLDivElement>(null);
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
        onMounted(() => {
            console.log(navItems);
            const activeNav = navItems.value.filter((nav) => {
                return nav.classList.contains("xin-tabs-nav-active");
            })[0];
            console.log(activeNav);
            const { width } = activeNav.getBoundingClientRect();
            navLine.value.style.width = width + "px";
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
            navItems,
            navLine,
        };
    },
};
</script>

<style lang="scss">
@import "./constant";

.#{$class-prefix}-tabs {
    &-nav {
        position: relative;
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

        &-line {
            height: 2px;
            position: absolute;
            background: #1890ff;
            bottom: -1px;
            left: 0px;
            width: 0px;
            border: none;
        }
    }
}
</style>