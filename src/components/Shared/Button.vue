<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    btnTitle: {
        type: String
    },
    isDefault: {
        type: Boolean
    }
})
</script>

<template>
    <button :class="[isDefault ? 'default' : 'custom']">
        {{ btnTitle }}
    </button>
</template>

<style scoped>
.default {
    background: cornflowerblue;
    border-radius: 9999px;
    color: white;
    font-weight: bold;
    padding: 0.75rem 1rem;
    margin: 0.5rem;
}

.custom {
    background: black;
    border-radius: 9999px;
    color: white;
    font-weight: bold;
    padding: 0.5rem 1rem;
    margin: 0.5rem;
    font-size: small;
}
</style>