<script setup>
import SearchInput from '../SearchInput.vue';
import FollowList from './FollowList.vue';
import TrendList from './TrendList.vue';
</script>

<template>
    <div class="flex flex-col gap-4">
        <SearchInput />

        <TrendList/>

        <FollowList/>
    </div>

</template>