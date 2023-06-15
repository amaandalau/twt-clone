<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    count: {
        type: Number
    }
})
</script>

<template>
    <div>
        <slot></slot>
        <p>{{ count }}</p>
    </div>
</template>