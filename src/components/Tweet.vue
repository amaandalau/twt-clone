<script setup>
import { defineProps, computed } from 'vue';
import { useUser } from '../stores/user';
import Avatar from './Shared/Avatar.vue';
import Profile from './Shared/Profile.vue';

import { EllipsisHorizontalIcon } from '@heroicons/vue/24/outline'
import { ChatBubbleLeftIcon } from '@heroicons/vue/24/outline'
import { ArrowPathRoundedSquareIcon } from '@heroicons/vue/24/outline'
import { HeartIcon } from '@heroicons/vue/24/outline'
import { ArrowUpTrayIcon } from '@heroicons/vue/24/outline'
import { useTweets } from '../stores/tweets';

const props = defineProps({
    tweet: {
        type: String
    }
})

const name = computed(() => {
    return useUser().user[0].name
})

const username = computed(() => {
  return useUser().user[0].username
})

const likeTweet = computed(() => {
    useTweets().likeTweet()
})
</script>

<template>
    <div class="flex flex-row p-2 border border-gray-200">
        <div>
            <Avatar/>
        </div>

        <div class="flex flex-col items-start justify-center">
        <div class="flex flex-row items-center justify-between">
            <div class="flex flex-row items-center">
                <Profile :name="name" :username="username" :is-default="false"/>
                <p class="text-sm font-light text-gray-800">19 May</p>
            </div>

            <div>
                <EllipsisHorizontalIcon class="h-5 w-5"/>
            </div>
        </div>
        <div class="py-2 px-auto" @click="this.$router.push(`/tweetpage/${twtID}`)">
            <p class="ml-2">{{ useTweets().tweets[0].tweet }}</p>
        </div>

        <div class="flex flex-row gap-6 text-blue-500 my-4 ml-2">
            <ChatBubbleLeftIcon class="h-6 w-6"/>
            <ArrowPathRoundedSquareIcon class="h-6 w-6"/>
            <HeartIcon class="h-6 w-6" @click="likeTweet"/>
            <ArrowUpTrayIcon class="h-6 w-6"/>
        </div>
    </div>
    </div>
</template>