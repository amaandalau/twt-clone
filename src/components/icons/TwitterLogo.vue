<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  class: {
    type: String,
    default: 'h-10 w-10'
  }
})
</script>

<template>
  <img src="@/assets/twitter-icon.png" alt="Twitter Icon" :class="class">
</template>