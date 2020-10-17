<template>
    <div>
        <p>Tabs Doc Page</p>
        <Tabs>
            <Tab title="Tab1 标题">Tab1 内容</Tab>
            <Tab title="Tab2 Title">Tab2 Content</Tab>
        </Tabs>
    </div>
</template>

<script lang="ts">
import Tabs from "../lib/Tabs.vue";
import Tab from "../lib/Tab.vue";

export default {
    components: {
        Tabs,
        Tab,
    },
};
</script>

<style lang="scss" scoped>
</style>