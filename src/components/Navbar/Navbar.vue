<script setup>
import { ref } from 'vue';
import NavbarItem from '../Navbar/NavigationItem.vue'

import { HomeIcon, HashtagIcon, BellIcon, EnvelopeIcon, ClipboardDocumentListIcon, BookmarkIcon, UserIcon, EllipsisHorizontalCircleIcon } from '@heroicons/vue/24/outline'

const activeItem = ref('home')

const icons = ref({
    home: {
        title: 'Home',
        icon: HomeIcon,
    },
    explore: {
        title: 'Explore',
        icon: HashtagIcon,
    },
    notifications: {
        title: 'Notifications',
        icon: BellIcon,
    },
    messages: {
        title: 'Messages',
        icon: EnvelopeIcon,
    },
    lists: {
        title: 'Lists',
        icon: ClipboardDocumentListIcon,
    },
    bookmarks: {
        title: 'Bookmarks',
        icon: BookmarkIcon,
    },
    profile: {
        title: 'Profile',
        icon: UserIcon,
    },
    more: {
        title: 'More',
        icon: EllipsisHorizontalCircleIcon,
    }
})

const defaultClass = 'h-6 w-6'

</script>

<template>
    <div>
        <NavbarItem v-for="(icon, key) in icons" 
        :key="key" 
        :active-item="activeItem"
        :navigation-title="icon.title"
        @click="activeItem = key">
            <component :is="icon.icon" :class="defaultClass"></component>
        </NavbarItem>
    </div>

</template>