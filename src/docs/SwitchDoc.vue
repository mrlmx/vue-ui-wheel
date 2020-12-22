<template>
    <div>
        <div class="switch-wrapper">
            <h2 class="title">基本使用</h2>
            <Switch v-model:value="val"/>
        </div>
    </div>
</template>

<script lang="ts">
import Switch from "../lib/Switch.vue";
import { ref } from 'vue';
export default {
    components: { Switch },
    setup(){
        const val = ref(false);
        return {
            val
        }
    }

};
</script>

<style lang="scss" scoped>
.switch-wrapper {
    .title {
        margin-bottom: 20px;
    }
}
</style>