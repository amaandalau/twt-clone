<script setup>
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline'
</script>

<template>
    <div class="flex flex-row items-center justify-start bg-gray-100 rounded-full p-2 m-2">
        <div class="px-2">
            <MagnifyingGlassIcon class="h-6 w-6 text-gray-500"/>
        </div>
        <input type="search" placeholder="Search Twitter" class="bg-transparent appearance-none focus:outline-none">
    </div>
</template>