<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    src: {
        type: String,
        default: '/src/assets/cat-pfp.jpeg'
    },
    alt: {
        type: String,
        default: 'avatar'
    }
})
</script>

<template>
    <img :src="src" :alt="alt" class="rounded-full h-12 w-12">
</template>