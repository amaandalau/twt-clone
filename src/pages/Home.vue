<script setup>
import Header from '../components/Shared/Header.vue';
import TweetBox from '../components/TweetBox.vue';
import Tweet from '../components/Tweet.vue';
import TweetList from '../components/TweetList.vue';
</script>

<template>
    <div class="flex flex-col">
        <div class="sticky top-0">
            <Header header-title="Home" class="hover: cursor-default"/>
        </div>
        
        <TweetBox/>

        <TweetList/>
    </div>
</template>