import { defineStore } from "pinia";

let count = 1 

export const useTweets = defineStore({
    id: 'tweets',

    state: () => ({
        tweets: [
            {
                id: 1,
                tweet: 'This tweet is hardcoded in Pinia',
                createdOn: new Date(),
                retweets: 0,
                quotes: 0,
                likes: 0,
                isLiked: false,
                replies: ['This is a reply hardcoded in Pinia']
            }
        ]
    }),

    getters: {

    },

    actions: {
        createTweet(tweet) {
            if(tweet) {
                let twt = {
                    id: count++,
                    tweet: tweet,
                    createdOn: new Date(),
                    retweets: 0,
                    quotes: 0,
                    likes: 0,
                    isLiked: true,
                }
            }
            this.tweets.push(twt)
        },

        postTweet({content, user}) {
            this.tweets.push({
                id: count,
                user,
                content,
                createdAt: new Date()
            })
            count++
        },

        likeTweet(twtID) {
            // const likedTweet = this.tweet.findIndex((tweet) => tweet.id === twtID)
            // if (likedTweet) {
            //     likedTweet.isLiked = true
            // }
        },

        deleteTwt(twtID) {
            const index = this.tweets.findIndex(tweet => tweet.id == twtID)
            this.tweets.splice(index,1)
        },

        getTweetById(twtID) {
            return this.tweets.find(tweet => tweet.id == twtID)
        }
    }
})