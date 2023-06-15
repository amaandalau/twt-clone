<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    navigationTitle: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div class="flex flex-row gap-3 justify-start items-center py-3 pl-3 pr-6 h-auto hover:bg-slate-100 hover:rounded-full hover:cursor-pointer">
        <div class="flex items-center">
            <slot></slot>
        </div>

        <p class="text-xl">{{ navigationTitle }}</p>
    </div>
</template>