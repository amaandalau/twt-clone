<script setup>
import { defineProps, defineEmits } from 'vue';
import { useTweets } from '../stores/tweets';
import { useUser } from '../stores/user';
import Avatar from '../components/Shared/Avatar.vue';
import Header from '../components/Shared/Header.vue';
import Profile from '../components/Shared/Profile.vue';

import {EllipsisHorizontalIcon} from '@heroicons/vue/24/outline'
import { ChatBubbleLeftIcon } from '@heroicons/vue/24/outline'
import { ArrowPathRoundedSquareIcon } from '@heroicons/vue/24/outline'
import { HeartIcon } from '@heroicons/vue/24/outline'
import { BookmarkIcon } from '@heroicons/vue/24/outline'
import { ArrowUpTrayIcon } from '@heroicons/vue/24/outline'
import ReplyBox from '../components/ReplyBox.vue';

const props = defineProps({
    retweetsCount: {
        type: Number,
        
    },
    quotesCount: {
        type: Number,
        
    },
    likesCount: {
        type: Number
    },
})

const emits = defineEmits(['update:replyValue'])

</script>

<template>
    <Header header-title="Tweet" @click="this.$router.push('/home')" class="hover:cursor-pointer"/>

    <div class="px-4 border-b border-gray-200">
        <div class="flex flex-row justify-between items-start my-2">
            <div class="flex flex-row items-center justify-start gap-1">
                <Avatar/>
                <Profile :name="useUser().user[0].name" :username="useUser().user[0].username" :is-default="true"/>
            </div>
            <EllipsisHorizontalIcon class="h-5 w-5"/>
        </div>

        <div>
            <p>{{ useTweets().tweets[0].tweet }}</p>
        </div>

        <div class="flex flex-row items-center my-2">
            <p class="text-sm font-light text-gray-600">3:08 PM</p>
            <p class="text-sm font-light text-gray-600">・</p>
            <p class="text-sm font-light text-gray-600">May 19, 2023</p>
        </div>

        <hr class="bg-gray-200">
        
        <div class="flex flex-row justify-start my-2 gap-4" 
        v-if="retweetsCount > 0 || quotesCount > 0 || likesCount > 0">
            
            <div class="flex flex-row gap-1" v-if="retweetsCount > 0">
                <!-- Retweets -->
                <p class="font-bold">{{retweetsCount}}</p>
                <p>Retweets</p>
            </div>

            <div class="flex flex-row gap-1" v-if="quotesCount > 0">
                <!-- Quotes -->
                <p class="font-bold">{{ quotesCount }}</p>
                <p>Quotes</p>
            </div>

            <div class="flex flex-row gap-1" v-if="likesCount > 0">
                <!-- Likes -->
                <p class="font-bold">{{ likesCount }}</p>
                <p>Likes</p>
            </div>
        </div>

        <div class="flex flex-row items-center justify-between mx-12 my-4 text-gray-500">
            <ChatBubbleLeftIcon class="h-6 w-6"/>
            <ArrowPathRoundedSquareIcon class="h-6 w-6"/>
            <HeartIcon class="h-6 w-6 fill-pink-400" v-if="useTweets().tweets[0].isLiked == true"/>
            <BookmarkIcon class="h-6 w-6"/>
            <ArrowUpTrayIcon class="h-6 w-6"/>
        </div>

        <hr class="bg-gray-200">

        <!-- <div class="flex flex-row items-center justify-between my-4">
            <div class="flex flex-row items-center justify-start gap-4">
                <Avatar/>
                <input @input="$emit('update:replyValue', $event.target.value)" :value="replyValue" type="text" placeholder="Tweet your reply!" class="border-none appearance-none focus:outline-none">
            </div>

            <button class="bg-blue-500 rounded-full font-bold text-sm text-white py-2 px-4 mx-2">Reply</button>
        </div> -->
        <ReplyBox/>
    </div>
</template>