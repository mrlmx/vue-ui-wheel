<template>
    <div class="xin-tabs">
        <div v-for="(title, index) of tabTitle" :key="index">{{ title }}</div>
        <component v-for="(tab, index) of defaultSlot" :is="tab" :key="index" />
    </div>
</template>

<script lang="ts">
import Tab from "./Tab.vue"
export default {
    setup(props, context) {
        const defaultSlot = context.slots.default();
        const tabTitle = defaultSlot.map(({ type, props }) => {
            if(type !== Tab){
                throw new Error("Tabs 子标签必须是 Tab");
            }
            return props.title;
        });
        return {
            defaultSlot,
            tabTitle,
        };
    },
};
</script>

<style>
</style>