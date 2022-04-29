
export const state = () => ({
    user: '',
    isUserExist: false,
    formData: {
        firstName: '',
        lastName: '',
        address: '',
        email: '',
        phoneNumber: '',
        phoneNumberDetails: {},
        password: '',
        confirmPassword: '',
    }
});

export const getters = {
    user: state => state.user,
    isUserExist: state => state.isUserExist,
}

export const actions = {
    async register({commit, dispatch, getters}, formData) {
        await this.$fire.auth.createUserWithEmailAndPassword(formData.email, formData.password);

        await this.$fire.firestore.collection('localTransports').doc(formData.email).set({
            firstName: formData.firstName,
            lastName: formData.lastName,
            address: formData.address,
            email: formData.email,
            phoneNumber: formData.phoneNumber,
            phoneNumberDetails: {
                dialCode: formData.phoneNumberDetails.dialCode,
                iso2: formData.phoneNumberDetails.iso2,
                name: formData.phoneNumberDetails.name
            },
        });
        
        commit('setUser', formData.email);
    },  
    async checkUser({commit}, email) {
        const userRef = this.$fire.firestore.collection('localTransports').doc(email)
        const userDoc = await userRef.get();

        if(userDoc.exists) {
            commit('setUserExist', true);
        }
        else {
            commit('setUserExist', false);
        }
    },
}

export const mutations = {
    setUser: (state, val) => {
        state.user = val;
    },
    setUserExist: (state, val) => {
        state.isUserExist = val;
    },
    setFormData: (state, val) => {
        state.formData = val;
    },
}