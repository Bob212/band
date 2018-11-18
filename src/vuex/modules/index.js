export default {
    gameInfo: {
        namespaced: true,
        state: {
            isLoading: false,
            isMainMenu: true,
            isHeroes: false,
            isMission: true
        },
        mutations: {
            incrementCarrot (state) {
                state.carrots++;
            }
        }
    },
};