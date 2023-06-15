<script setup>
import { useUser } from './stores/user';
import { computed } from 'vue';
import { RouterView } from 'vue-router';
import Sidebar from './components/Sidebar/Sidebar.vue';
import TwitterLogo from './components/icons/TwitterLogo.vue';
import Navbar from './components/Navbar/Navbar.vue'
import Avatar from './components/Shared/Avatar.vue';
import Profile from './components/Shared/Profile.vue';
import Button from './components/Shared/Button.vue';
import { EllipsisHorizontalIcon } from '@heroicons/vue/24/outline'

const username = computed(() => {
  return useUser().user[0].username
})

const name = computed(() => {
  return useUser().user[0].name
})

</script>

<template>
  <div class="flex flex-row min-h-screen max-h-screen min-w-screen max-w-screen">
        <div class="flex flex-col justify-between m-5 ml-24 w-1/5">
          <div class="flex flex-col">
            <div class="my-4">
              <router-link to="/home">
                <TwitterLogo/>
              </router-link>
              <Navbar />
            </div>
              <Button btn-title="Tweet" :is-default="true"/>
          </div>

            <div class="flex flex-row items-center justify-between mx-4">
              <div class="flex flex-row items-center justify-start">
                <Avatar/>
                <Profile :name="name" :username="username" :is-default="true"/>
              </div>
              <EllipsisHorizontalIcon class="h-6 w-6 hover:cursor-pointer"/>
            </div>

        </div>

        <div class="flex-grow border border-gray-200 overflow-y-auto w-2/4">
            <!-- Tweet box & Tweet List -->
            <RouterView></RouterView>
        </div>

        <div class="w-1/4 pl-2 pr-4 py-2 overflow-auto">
            <!-- Sidebar -->
            <Sidebar/>
        </div>
    </div>
</template>