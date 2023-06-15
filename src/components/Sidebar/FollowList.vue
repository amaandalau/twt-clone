<script setup>
import { ref } from 'vue';
import SuggestedUser from './SuggestedUser.vue';

const suggested = ref({
    user1: {
        name: 'Elons Rival',
        username: 'iwanttobeatelon'
    },
    user2: {
        name: 'Makan',
        username: 'maumakan'
    },
    user3: {
        name: 'Sleep',
        username: 'mautido'
    },
    user4: {
        name: 'tehcpeng',
        username: 'eatorsleep'
    },
})
</script>

<template>
    <div class="bg-slate-100 rounded-3xl flex flex-col my-4">
        <p class="font-bold text-lg pt-4 px-4">Who to follow</p>

        <div class="py-2">
            <SuggestedUser v-for="(user, key) in suggested" :key="key" :name="user.name" :username="user.username"/>
        </div>

        <p class="text-sm text-blue-500 pb-4 px-4 hover:cursor-pointer mt-2">Show more</p>
    </div>
</template>