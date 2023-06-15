<script setup>
import { defineEmits } from 'vue';
import { useTweets } from '../stores/tweets';

import Avatar from './Shared/Avatar.vue';
import Button from './Shared/Button.vue';
import GIFIcon from './icons/GIFIcon.vue';
import { CameraIcon, ChartBarIcon, FaceSmileIcon, CalendarIcon, MapPinIcon } from '@heroicons/vue/24/outline'


const postTweet = () => {
    let tweet = {
        id: useTweets().tweets.id,
        tweet: this.tweetValue
    }
    useTweets().createTweet(tweet)

    // this.tweetValue = ''

    console.log('tweeted~')
}

// const emits = defineEmits(['update:tweetValue'])
const emit = defineEmits(['postTweet']) 
</script>

<template>
    <div class="flex flex-col m-2">
        <div class="flex flex-row gap-4 items-center justify-start">
            <!-- avatar & input -->
            <Avatar/>
            <input @input="$emit('update:tweetValue', $event.target.value)" v-model="tweetValue" type="text" placeholder="What is happening?!"
                class="appearance-none border-none w-80 focus:outline-none">
        </div>

        <div class="flex flex-row justify-between items-center">
            <div class="flex flex-row justify-between items-center gap-4 mx-16">
                <CameraIcon class="h-6 w-6 text-blue-500"/>
                <GIFIcon class="h-6 w-6 text-blue-500"/>
                <ChartBarIcon class="h-6 w-6 text-blue-500"/>
                <FaceSmileIcon class="h-6 w-6 text-blue-500"/>
                <CalendarIcon class="h-6 w-6 text-blue-500"/>
                <MapPinIcon class="h-6 w-6 text-blue-500"/>
            </div>
            <button @click="emit('postTweet', {tweetContent: tweetValue})" class="bg-blue-500 rounded-full font-bold text-sm text-white py-2 px-4 mx-2">Tweet</button>
        </div>
    </div>
</template>