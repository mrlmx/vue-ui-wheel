<template>
    <div>
        <Switch v-model:value="val"/>
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
</style>