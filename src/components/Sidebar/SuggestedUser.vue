<script setup>
import { defineProps } from 'vue';
import Avatar from '../Shared/Avatar.vue';
import Profile from '../Shared/Profile.vue';
import Button from '../Shared/Button.vue';

const props = defineProps({
    name: {
        type: String
    },
    username: {
        type: String
    }
})
</script>

<template>
    <div class="flex flex-row justify-between items-center hover:bg-slate-200 hover:cursor-pointer px-2">
        <div class="flex flex-row items-center justify-start">
            <Avatar/>
            <Profile :name="name" :username="username"/>
        </div>
        <Button btn-title="Follow" :is-default="false"/>
    </div>
</template>