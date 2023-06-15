import { defineStore } from "pinia";

export const useUser = defineStore({
    id:'user',

    state: () => ({
        user: [
            {
                email: 'want2sleep@example.com',
                name: 'caffeine',
                username: 'caffeinateorcode',
                imgSrc: '/src/assets/picture.jpeg'
            }
        ]
    })
})