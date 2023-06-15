<script setup>
import { defineProps } from 'vue';
import { useUser } from '../../stores/user';

const props = defineProps({
    name: {
        type: String
    },
    username: {
        type: String
    },
    isDefault: {
        type: Boolean,
        default: true
    }
})
</script>

<template>
    <div class="flex flex-row m-2">
        <div :class="[isDefault ? 'flex-col' : 'flex-row']">
            <p class="font-bold">{{ name }}</p>
            <p class="font-light text-md text-gray-500">@{{ username }}</p>
        </div>
    </div>
</template>

<style scoped>
.flex-row {
    display: flex;
    flex-direction: row;
    align-items: start;
    gap: 0.5rem;
}

.flex-col {
    display: flex;
    flex-direction: column;
}
</style>