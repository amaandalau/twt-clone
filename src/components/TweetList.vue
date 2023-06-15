<script setup>
import { computed } from 'vue';
import { useTweets } from '../stores/tweets';
import Tweet from './Tweet.vue';

const listOfTweets = computed(() => useTweets().tweets)
const twtID = computed(() => useTweets().tweets[0].id)
</script>

<template>
    <Tweet v-for="(tweet, index) in listOfTweets" :key="index" :tweet="tweet.tweet" class="hover:cursor-pointer"/>
</template>