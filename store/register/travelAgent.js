
export const state = () => ({
    user: '',
    isUserExist: false,
    userFormData: {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        phoneNumberDetails: {},
        password: '',
        confirmPassword: '',
    },
    companyFormData: {
        companyName: '',
        yearFounded: '',
        address: '',
        numberOfVehicles: '',
        numberOfGuides: '',
        description: ''
    }
});

export const getters = {
    user: state => state.user,
    isUserExist: state => state.isUserExist,
}

export const actions = {
    async register({commit, dispatch, getters}, formData) {
        await this.$fire.auth.createUserWithEmailAndPassword(formData.email, formData.password);

        await this.$fire.firestore.collection('travelAgents').doc(formData.email).set({
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            phoneNumber: formData.phoneNumber,
            phoneNumberDetails: {
                dialCode: formData.phoneNumberDetails.dialCode,
                iso2: formData.phoneNumberDetails.iso2,
                name: formData.phoneNumberDetails.name
            },
            companyName: formData.companyName,
            yearFounded: formData.yearFounded,
            address: formData.address,
            numberOfVehicles: formData.numberOfVehicles,
            numberOfGuides: formData.numberOfGuides,
            description: formData.description,
        });
        
        commit('setUser', formData.email);
    },  
    async checkUser({commit}, email) {
        const userRef = this.$fire.firestore.collection('travelAgents').doc(email)
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
    setUserFormData: (state, val) => {
        state.userFormData = val;
    },
    setCompanyFormData: (state, val) => {
        state.companyFormData = val;
    }
}