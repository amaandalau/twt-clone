<script setup>
import { defineProps } from 'vue';
import { SparklesIcon } from '@heroicons/vue/24/outline'
import { ArrowLeftIcon } from '@heroicons/vue/24/outline'

const props = defineProps({
    headerTitle: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div class="m-4 flex flex-row justify-between">
        <div class="flex flex-row justify-start items-center">
           
            <ArrowLeftIcon class="h-6 w-6 mr-2" v-if="headerTitle == 'Tweet'"/>
            <p class="font-extrabold text-xl">{{ headerTitle }}</p>
        </div>

        
        <SparklesIcon class="h-8 w-8" v-if="headerTitle=='Home'"/>
        
    </div>
</template>