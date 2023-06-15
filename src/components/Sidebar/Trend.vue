<script setup>
import { defineProps } from 'vue';
import { EllipsisHorizontalIcon } from '@heroicons/vue/24/outline'

const props = defineProps({
    category: {
        type: String,
        default: ''
    },
    country: {
        type: String,
        default: ''
    },
    trend: {
        type: String,
        default: ''
    },
    tweetCount: {
        type: Number,
        default: 12345
    }
})
</script>

<template>
    <div class="flex flex-col hover:bg-slate-200 p-4">
        <div class="flex flex-row justify-between items-center">
            <div class="flex flex-row items-center font-light text-xs">
                <p v-if="category !== ''">{{ category }}・</p>
                <p v-if="country == ''">Trending</p>
                <p v-if="country !== ''">Trending in {{ country }}</p>
            </div>

            <div>
                <EllipsisHorizontalIcon class="h-6 w-6"/>
            </div>
        </div>
        <p class="font-bold flex-grow">{{ trend }}</p>
        <p class="font-light text-xs">{{ tweetCount }} Tweets</p>
    </div>
</template>