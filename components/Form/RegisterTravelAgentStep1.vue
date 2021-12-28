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
            <span v-if="errorMessage.firstName" class="inline-block text-red-400 font-medium text-2xs my-1">
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
            <span v-if="errorMessage.lastName" class="inline-block text-red-400 font-medium text-2xs my-1">
                {{ errorMessage.lastName }}
            </span>
        </div>
        <div class="relative w-full mb-4">
            <label for="phoneNumber" class="block text-sm mb-2">
                Phone Number
            </label>
            <div class="border flex items-center rounded-lg focus-within:ring focus-within:ring-blue-50 focus-within:border-cs-cyan-main transition duration-200 overflow-hidden">
                <div class="px-3 py-3">
                    <svg class="w-4.5 h-4.5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                </div>
                <input class="rounded-none border-l focus:ring-0 focus:outline-none px-3.5 py-2.5 focus:shadow-none w-full border-0 placeholder-[#cacaca] text-2sm" type="tel" name="phoneNumber" id="phoneNumber" v-model="formData.phoneNumber" placeholder="+628XX-XXXX-XXXX" autofocus="autofocus">
            </div>
            <span v-if="errorMessage.phoneNumber" class="inline-block text-red-400 font-medium text-2xs my-1">
                {{ errorMessage.phoneNumber }}
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
            <span v-if="errorMessage.email" class="inline-block text-red-400 font-medium text-2xs my-1">
                {{ errorMessage.email }}
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
                <input class="px-3.5 py-2.5 border-l rounded-none focus:ring-0 focus:outline-none focus:shadow-none w-full border-0 placeholder-[#cacaca] text-2sm" type="password" name="password" id="password" v-model="formData.password" placeholder="password" autofocus="autofocus">
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

        <div class="flex justify-end items-center gap-4 mt-7">
            <div v-if="nextLoad" class="inline-block w-[18px] h-[18px] border-[3px] rounded-[50%] border-[rgb(192,192,192)] border-t-[rgb(219,234,254)] animate-spin -mr-1"></div>
            <button ref="nextBtn" @click="nextStep()" type="button" class="bg-cs-dark-blue py-2 px-4 text-white text-2sm border border-cs-dark-blue disabled:bg-[#858585] disabled:border-[rgb(133,133,133)] disabled:cursor-not-allowed border-csbg-cs-dark-blue transition duration-300 focus:outline-none rounded-md">
                Next
            </button>
        </div>
    </div>
</template>

<script>
import Swal from 'sweetalert2/dist/sweetalert2'

export default {
    data() {
        return {
            formData: {
                firstName: '',
                lastName: '',
                email: '',
                phoneNumber: '',
                password: '',
                confirmPassword: '',
            },
            errorMessage: {},
            nextLoad: false
        }
    },
    mounted() {
        this.formData.firstName = this.$store.state.register.travelAgent.userFormData.firstName;
        this.formData.lastName = this.$store.state.register.travelAgent.userFormData.lastName;
        this.formData.email = this.$store.state.register.travelAgent.userFormData.email;
        this.formData.phoneNumber = this.$store.state.register.travelAgent.userFormData.phoneNumber;
        this.formData.password = this.$store.state.register.travelAgent.userFormData.password;
        this.formData.confirmPassword = this.$store.state.register.travelAgent.userFormData.confirmPassword;
    },
    methods: {
        async nextStep() {
            this.nextLoad = true;
            $(this.$refs.nextBtn).attr('disabled', true);

            this.validateRequest();

            if (Object.keys(this.errorMessage).length == 0 && this.$parent.step < this.$parent.stepLength) {
                try {
                    await this.$store.dispatch('register/travelAgent/checkUser', this.formData.email);
                } catch (error) {
                    Swal.fire({
                        title: 'Error!',
                        text: 'Oops, something went wrong, please try again later',
                        icon: 'error',
                        confirmButtonText: 'Okay'
                    });
                    return false;
                }

                if (!this.$store.state.register.travelAgent.isUserExist) {
                    this.$store.commit('register/travelAgent/setUserFormData', this.formData);

                    this.$parent.step = this.$parent.step+1;
                } else {
                    this.errorMessage['email'] = 'The user with email has already been registered';
                }
            }

            $(this.$refs.nextBtn).removeAttr('disabled');
            this.nextLoad = false;
        },
        validateRequest() {
            let message = ['first name', 'last name', 'email', 'phone number', 'password', 'confirm password'];

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
            if (!this.errorMessage['confirmPassword']) {
                console.log('ok');
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
        validatePassword() {
            if (this.formData.password != this.formData.confirmPassword) {
                console.log('ok');
                this.errorMessage['confirmPassword'] = 'Password confirmation does not match';
            }
        }
    }
}
</script>

<style>

</style>