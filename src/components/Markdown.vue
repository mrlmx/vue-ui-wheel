<template>
    <article class="markdown-body" v-html="md"></article>
</template>

<script lang="ts">
import { ref } from "vue";
export default {
    props: {
        path: {
            type: String,
            required: true,
        },
    },
    setup(props) {
        const md = ref<string>(null);
        import(props.path).then((res) => {
            md.value = res.default;
        });
        return {
            md,
        };
    },
};
</script>

<style>
</style>