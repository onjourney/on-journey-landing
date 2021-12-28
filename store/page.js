export const state = () => ({
    currentScrollY: 0,
    offset: 0,
});

export const getters = {
    currentScrollY: state => state.currentScrollY,
    currentOffset: state => state.offset,
    currentDropdown: state => state.dropdown
};

export const actions = {
    setCurrentScrollY ({ commit }, val) {
        commit('setCurrentScrollY', {val});
    },
    setCurrentOffset ({ commit }, val) {
        commit('setCurrentOffset', val);
    },
    setDropdownActive({ commit }, val) {
        commit('setDropdownActive', val);
    },
    timeout({ commit }, val) {
        return new Promise(resolve => setTimeout(resolve, val));
    }
};

export const mutations = {
    setCurrentScrollY (state, {val}) {
        state.currentScrollY = val;
    },
    setCurrentOffset (state, val) {
        state.currentOffset = val;
    }
};
