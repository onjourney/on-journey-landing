<template>
    <div>
        <div class="relative w-full mb-4">
            <label for="firstName" class="block text-sm mb-2">
                First Name
            </label>
            <div class="border flex items-center rounded-lg focus-within:ring focus-within:ring-blue-50 focus-within:border-cs-cyan-main transition duration-200 overflow-hidden">
                <div class="px-3 py-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4.5 h-4.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                </div>
                <input class="px-3.5 py-2.5 border-l rounded-none focus:ring-0 focus:outline-none focus:shadow-none w-full border-0 placeholder-[#cacaca] text-2sm" type="text" name="firstName" id="firstName" v-model="formData.firstName" placeholder="owner's first name" autofocus="autofocus">
            </div>
            <span v-if="errorMessage.firstName" class="inline-block text-red-400 font-medium text-sm my-1">
                {{ errorMessage.firstName }}
            </span>
        </div>
        <div class="relative w-full mb-4">
            <label for="lastName" class="block text-sm mb-2">
                Last Name
            </label>
            <div class="border flex items-center rounded-lg focus-within:ring focus-within:ring-blue-50 focus-within:border-cs-cyan-main transition duration-200 overflow-hidden">
                <div class="px-3 py-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4.5 h-4.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                </div>
                <input class="px-3.5 py-2.5 border-l rounded-none focus:ring-0 focus:outline-none focus:shadow-none w-full border-0 placeholder-[#cacaca] text-2sm" type="text" name="lastName" id="lastName" v-model="formData.lastName" placeholder="owner's last name" autofocus="autofocus">
            </div>
            <span v-if="errorMessage.lastName" class="inline-block text-red-400 font-medium text-sm my-1">
                {{ errorMessage.lastName }}
            </span>
        </div>
        <div class="relative w-full mb-4">
            <label for="address" class="block text-sm mb-2">
                Address
            </label>
            <div class="border flex items-center rounded-lg focus-within:ring focus-within:ring-blue-50 focus-within:border-cs-cyan-main transition duration-200 overflow-hidden">
                <div class="px-3 py-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4.5 h-4.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </div>
                <input class="px-3.5 py-2.5 border-l rounded-none focus:ring-0 focus:outline-none focus:shadow-none w-full border-0 placeholder-[#cacaca] text-2sm" type="text" name="address" id="address" v-model="formData.address" placeholder="company address" autofocus="autofocus">
            </div>
            <span v-if="errorMessage.address" class="inline-block text-red-400 font-medium text-sm my-1">
                {{ errorMessage.address }}
            </span>
        </div>
        <div class="relative w-full mb-4">
            <label for="email" class="block text-sm mb-2">
                Email
            </label>
            <div class="border flex items-center rounded-lg focus-within:ring focus-within:ring-blue-50 focus-within:border-cs-cyan-main transition duration-200 overflow-hidden">
                <div class="px-3 py-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4.5 h-4.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                </div>
                <input class="px-3.5 py-2.5 border-l rounded-none focus:ring-0 focus:outline-none focus:shadow-none w-full border-0 placeholder-[#cacaca] text-2sm" type="email" name="email" id="email" v-model="formData.email" placeholder="example@email.com" autofocus="autofocus">
            </div>
            <span v-if="errorMessage.email" class="inline-block text-red-400 font-medium text-sm my-1">
                {{ errorMessage.email }}
            </span>
        </div>
        <div class="relative w-full mb-4">
            <label for="phoneNumber" class="block text-sm mb-2">
                Phone Number
            </label>
            <vue-tel-input v-model="formData.phoneNumber" v-on:country-changed="countryChanged" mode="international" :validCharactersOnly="true" :defaultCountry="'ID'"></vue-tel-input>

            <span v-if="errorMessage.phoneNumber" class="inline-block text-red-400 font-medium text-2xs my-1">
                {{ errorMessage.phoneNumber }}
            </span>
        </div>
        <div class="relative w-full mb-4">
            <label for="password" class="block text-sm mb-2">
                Password
            </label>
            <div class="border flex items-center rounded-lg focus-within:ring focus-within:ring-blue-50 focus-within:border-cs-cyan-main transition duration-200 overflow-hidden">
                <div class="px-3 py-3">
                    <svg class="w-4.5 h-4.5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                    </svg>
                </div>
                <input class="px-3.5 py-2.5 border-l rounded-none focus:ring-0 focus:outline-none focus:shadow-none w-full border-0 placeholder-[#cacaca] text-2sm" type="password" name="password" id="password" v-model="formData.password" placeholder="enter password" autofocus="autofocus">
            </div>
            <span v-if="errorMessage.password" class="inline-block text-red-400 font-medium text-2xs my-1">
                {{ errorMessage.password }}
            </span>
        </div>
        <div class="relative w-full mb-4">
            <label for="confirmPassword" class="block text-sm mb-2">
                Confirm Password
            </label>
            <div class="border flex items-center rounded-lg focus-within:ring focus-within:ring-blue-50 focus-within:border-cs-cyan-main transition duration-200 overflow-hidden">
                <div class="px-3 py-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4.5 h-4.5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z" clip-rule="evenodd" />
                    </svg>
                </div>
                <input class="px-3.5 py-2.5 border-l rounded-none focus:ring-0 focus:outline-none focus:shadow-none w-full border-0 placeholder-[#cacaca] text-2sm" type="password" name="confirmPassword" id="confirmPassword" v-model="formData.confirmPassword" placeholder="confirm password" autofocus="autofocus">
            </div>
            <span v-if="errorMessage.confirmPassword" class="inline-block text-red-400 font-medium text-2xs my-1">
                {{ errorMessage.confirmPassword }}
            </span>
        </div>

        <div class="flex items-center justify-end gap-4 mt-7">
            <div v-if="submitLoad" class="inline-block w-[18px] h-[18px] border-[3px] rounded-[50%] border-[rgb(192,192,192)] border-t-[rgb(219,234,254)] animate-spin -mr-1"></div>
            <button ref="submitBtn" @click="submit()" type="button" class="bg-cs-dark-blue py-2 px-4 text-white text-2sm border border-cs-dark-blue disabled:bg-[#858585] disabled:border-[rgb(133,133,133)] disabled:cursor-not-allowed border-csbg-cs-dark-blue transition duration-300 focus:outline-none rounded-md">
                Submit
            </button>
        </div>
    </div>
</template>

<script>
import { VueTelInput } from 'vue-tel-input'
import 'vue-tel-input/dist/vue-tel-input.css'

export default {
    components: { VueTelInput },
    data() {
        return {
            formData: {
                firstName: '',
                lastName: '',
                address: '',
                email: '',
                phoneNumber: '',
                phoneNumberDetails: {},
                password: '',
                confirmPassword: '',
            },
            errorMessage: {},
            submitLoad: false,
        }
    },
    mounted() {
        this.formData.firstName = this.$store.state.register.localTransport.formData.firstName;
        this.formData.lastName = this.$store.state.register.localTransport.formData.lastName;
        this.formData.address = this.$store.state.register.localTransport.formData.address;
        this.formData.email = this.$store.state.register.localTransport.formData.email;
        this.formData.phoneNumber = this.$store.state.register.localTransport.formData.phoneNumber;
        this.formData.phoneNumberDetails = this.$store.state.register.localTransport.formData.phoneNumberDetails;
        this.formData.password = this.$store.state.register.localTransport.formData.password;
    },
    methods: {
        async submit() {
            this.submitLoad = true;
            $(this.$refs.submitBtn).attr('disabled', true);
            
            // this.errorMessage = {},
            this.validateRequest();

            if (Object.keys(this.errorMessage).length == 0 && this.$parent.step < this.$parent.stepLength) {
                try {
                    await this.$store.dispatch('register/localTransport/checkUser', this.formData.email);
                } catch (error) {
                    Swal.fire({
                        title: 'Error!',
                        text: 'Oops, something went wrong, please try again later',
                        icon: 'error',
                        confirmButtonText: 'Okay'
                    });
                    return false;
                }

                if (!this.$store.state.register.localTransport.isUserExist) {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    await this.$store.commit('register/localTransport/setFormData', this.formData);

                    await this.$emit('submit');
                } else {
                    this.errorMessage['email'] = 'The user with email has already been registered';
                }
            }

            $(this.$refs.submitBtn).removeAttr('disabled');
            this.submitLoad = false;
        },
        validateRequest() {
            let message = ['first name', 'last name', 'address', 'email', 'phone number'];

            let formData = this.formData;
            let errorMessage = {};
            Object.keys(this.formData).forEach(function(val, index) {
                if (!formData[val]) {
                    errorMessage[val] = `The ${message[index]} field is required`;
                }
            });
            this.errorMessage = errorMessage;
            if (!this.errorMessage['email']) {
                this.validateEmail();
            }
            if (!this.errorMessage['phoneNumber']) {
                this.validatePhoneNumber();
            }
            if (!this.errorMessage['confirmPassword']) {
                this.validatePassword();
            }
        },
        validateEmail() {
            if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/.test(this.formData.email) || this.formData.email.length == 0) {
                delete this.errorMessage['email'];
            } else {
                this.errorMessage['email'] = 'Please enter a valid email address';
            }
        },
        validatePhoneNumber() {
            if(/[a-zA-Z]/g.test(this.formData.phoneNumber)){
                this.errorMessage['phoneNumber'] = 'Please enter a valid phone number';
            } else {
                delete this.errorMessage['phoneNumber'];
            }
        },
        validatePassword() {
            if (this.formData.password != this.formData.confirmPassword) {
                this.errorMessage['confirmPassword'] = 'Password confirmation does not match';
            }
        },
        countryChanged(country) {
            this.formData.phoneNumberDetails = country;
        },
    }
}
</script>

<style>

</style>