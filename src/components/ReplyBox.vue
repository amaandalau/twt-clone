<script setup>
import { defineEmits } from 'vue';
import Avatar from './Shared/Avatar.vue';

import { PhotoIcon } from '@heroicons/vue/24/outline'
import GIFIcon from './icons/GIFIcon.vue';
import { FaceSmileIcon } from '@heroicons/vue/24/outline'
import { MapPinIcon } from '@heroicons/vue/24/outline'

const emits = defineEmits(['update:replyValue'])
</script>

<template>
        <div class="flex flex-row items-center justify-between my-4">
            <div class="flex flex-row items-center justify-start gap-4">
                <Avatar/>
                <input @input="$emit('update:replyValue', $event.target.value)" :value="replyValue" type="text" placeholder="Tweet your reply!" class="border-none appearance-none focus:outline-none">
            </div>

            <!-- <div class="flex flex-row justify-between">
                <div class="flex flex-row items-center gap-4 ml-16">
                    <PhotoIcon class="h-6 w-6 text-blue-500"/>
                    <GIFIcon class="h-6 w-6 text-blue-500"/>
                    <FaceSmileIcon class="h-6 w-6 text-blue-500"/>
                    <MapPinIcon class="h-6 w-6 text-blue-500"/>

                </div>
                <button class="bg-blue-500 rounded-full font-bold text-sm text-white py-2 px-4 mx-2">Reply</button>
            </div> -->
            <button class="bg-blue-500 rounded-full font-bold text-sm text-white py-2 px-4 mx-2">Reply</button>
        </div>
</template>