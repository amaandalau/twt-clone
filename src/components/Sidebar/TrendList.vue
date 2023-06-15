<script setup>
import { ref } from 'vue';
import Trend from './Trend.vue';

const trends = ref({
    trend1: {
        category: 'Music',
        country: '',
        trend: 'GTA',
        tweetCount: Number(950701)
    },
    trend2: {
        category: '',
        country: 'Kuala Lumpur',
        trend: 'Midvalley',
        tweetCount: Number(2765)
    },
    trend3: {
        category: '',
        country: '',
        trend: 'Sleep',
        tweetCount: Number(9999)
    },

    trend4: {
        category: 'Politics',
        country: '',
        trend: '#ThaiElection33',
        tweetCount: Number(86789)
    }

})
</script>

<template>
    <div class="bg-slate-100 rounded-3xl flex flex-col">
        <p class="font-bold text-lg pt-4 px-4">Trends for you</p>

        <div>
            <div>
                <Trend v-for="(trend, key) in trends" :key="key" :category="trend.category" :country="trend.country" :trend="trend.trend" :tweet-count="trend.tweetCount"/>
            </div>
            <p class="text-sm text-blue-500 pb-4 px-4 hover:cursor-pointer mt-2">Show more</p>
        </div>
    </div>
</template>
