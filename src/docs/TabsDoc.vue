<template>
    <div>
        <p>Tabs Doc Page</p>
        <Tabs v-model:active="activeKey">
            <Tab key="tab1" title="Tab1 标题">Tab1 内容</Tab>
            <Tab key="tab2" title="Tab2 Title">Tab2 Content</Tab>
            <Tab key="tab3" title="超长的 Tab 名称">Tab3 Content</Tab>
        </Tabs>
    </div>
</template>

<script lang="ts">
import Tabs from "../lib/Tabs.vue";
import Tab from "../lib/Tab.vue";
import { ref } from 'vue';

export default {
    components: {
        Tabs,
        Tab,
    },
    setup(){
        const activeKey = ref<string>("tab1");
        return {
            activeKey
        }
    }
};
</script>

<style lang="scss" scoped>
</style>