export const state = () => ({
    user: [],
    company: []
});

export const getters = {
    user: state => state.user,
    company: state => state.company
}

export const actions = {
    getUser({commit}) {
        commit('getUserData');
    }
}

export const mutations = {
    getUserData(state) {
        
    }
}