import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
    state: () => ({
        userId: null,
    }),
    actions: {
        setUserId(userId) {
            this.userId = userId;
        },
        clearUserId() {
            this.userId = null;
        },
    },
    getters: {
        getUserId: (state) => state.userId,
    },
});