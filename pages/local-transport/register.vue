<template>
    <div>
        <div class="p-10">
            <nuxt-link to="/become-our-partner" custom exact v-slot="{ href, navigate }">
                <a :href="href" @click="navigate" class="w-24 mb-4 block lg:hidden">
                    <img class="w-full h-full object-cover object-center" src="~/assets/img/logo.png" alt="">
                </a>
            </nuxt-link>
            <div v-if="step != stepLength">
                <h1 class="text-2xl mb-4">
                    <span class="font-extrabold"> Register </span> Travel Agent
                </h1>

                <h4 class="text-md mb-6 text-gray-500">Let's get you all set up so you can verify your "travel agent" account and begin setting up your profile.</h4>
            </div>

            <div :class="[step != stepLength ? 'mt-5' : 'mt-7 md:mt-0 mb-6 md:mb-0']" class="flex items-center mb-5 gap-2">
                <div class="flex-1 bg-gray-100 rounded-full">
                    <div class="progress-bar rounded-full bg-cs-cyan text-xs leading-none h-2 text-center text-white transition-all duration-500" :style="'width: '+ parseInt(step / stepLength * 100) +'%'"></div>
                </div>
                <div class="text-xs w-10 text-gray-600" v-text="parseInt(step / stepLength * 100) +'%'"></div>
            </div>

            <div>
                <div v-if="step == 1">
                    <div class="relative w-full mb-4">
                        <label for="first_name" class="block text-sm mb-2">
                            First Name
                        </label>
                        <div class="border flex items-center rounded-lg focus-within:ring focus-within:ring-blue-50 focus-within:border-cs-cyan-main transition duration-200 overflow-hidden">
                            <div class="px-3 py-3">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-4.5 h-4.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                            <input class="px-3.5 py-2.5 border-l rounded-none focus:ring-0 focus:outline-none focus:shadow-none w-full border-0 placeholder-[#cacaca] text-2sm" type="text" name="first_name" id="first_name" v-model="formData.first_name" placeholder="owner's first name" autofocus="autofocus">
                        </div>
                        <span v-if="errorMessage.first_name" class="inline-block text-red-400 font-medium text-sm my-1">
                            {{ errorMessage.first_name[0] }}
                        </span>
                    </div>
                    <div class="relative w-full mb-4">
                        <label for="last_name" class="block text-sm mb-2">
                            Last Name
                        </label>
                        <div class="border flex items-center rounded-lg focus-within:ring focus-within:ring-blue-50 focus-within:border-cs-cyan-main transition duration-200 overflow-hidden">
                            <div class="px-3 py-3">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-4.5 h-4.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                            <input class="px-3.5 py-2.5 border-l rounded-none focus:ring-0 focus:outline-none focus:shadow-none w-full border-0 placeholder-[#cacaca] text-2sm" type="text" name="last_name" id="last_name" v-model="formData.last_name" placeholder="owner's last name" autofocus="autofocus">
                        </div>
                        <span v-if="errorMessage.last_name" class="inline-block text-red-400 font-medium text-sm my-1">
                            {{ errorMessage.last_name[0] }}
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
                            {{ errorMessage.email[0] }}
                        </span>
                    </div>
                    <div class="relative w-full mb-4">
                        <label for="phone_number" class="block text-sm mb-2">
                            Phone Number
                        </label>
                        <div class="border flex items-center rounded-lg focus-within:ring focus-within:ring-blue-50 focus-within:border-cs-cyan-main transition duration-200 overflow-hidden">
                            <div class="px-3 py-3">
                                <svg class="w-4.5 h-4.5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <input class="rounded-none border-l focus:ring-0 focus:outline-none px-3.5 py-2.5 focus:shadow-none w-full border-0 placeholder-[#cacaca] text-2sm" type="tel" name="phone_number" id="phone_number" v-model="formData.phone_number" placeholder="+628XX-XXXX-XXXX" autofocus="autofocus">
                        </div>
                        <span v-if="errorMessage.phone_number" class="inline-block text-red-400 font-medium text-sm my-1">
                            {{ errorMessage.phone_number[0] }}
                        </span>
                    </div>
                </div>
                <div v-if="step == 2">
                    <div class="relative w-full mb-4">
                        <label for="company_name" class="block text-sm mb-2">
                            Company Name
                        </label>
                        <div class="border flex items-center rounded-lg focus-within:ring focus-within:ring-blue-50 focus-within:border-cs-cyan-main transition duration-200 overflow-hidden">
                            <div class="px-3 py-3">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-4.5 h-4.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            </div>
                            <input class="px-3.5 py-2.5 border-l rounded-none focus:ring-0 focus:outline-none focus:shadow-none w-full border-0 placeholder-[#cacaca] text-2sm" type="text" name="company_name" id="company_name" v-model="formData.company_name" placeholder="company name" autofocus="autofocus">
                        </div>
                        <span v-if="errorMessage.company_name" class="inline-block text-red-400 font-medium text-sm my-1">
                            {{ errorMessage.company_name[0] }}
                        </span>
                    </div>
                    <div class="relative w-full mb-4">
                        <label for="year_founded" class="block text-sm mb-2">
                            Year Founded
                        </label>
                        <div class="border flex items-center rounded-lg focus-within:ring focus-within:ring-blue-50 focus-within:border-cs-cyan-main transition duration-200 overflow-hidden">
                            <div class="px-3 py-3 border-r">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-4.5 h-4.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <date-picker class="w-full" type="year" v-model="formData.year_founded" valueType="format" placeholder="select year founded"></date-picker>
                        </div>
                        <span v-if="errorMessage.year_founded" class="inline-block text-red-400 font-medium text-sm my-1">
                            {{ errorMessage.year_founded[0] }}
                        </span>
                    </div>
                    <div class="relative w-full mb-4">
                        <label for="address" class="block text-sm mb-2">
                            Company Address
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
                            {{ errorMessage.address[0] }}
                        </span>
                    </div>
                    <div class="relative w-full mb-4">
                        <label for="number_of_vehicles" class="block text-sm mb-2">
                            Number of Vehicles
                        </label>
                        <div class="border flex items-center rounded-lg focus-within:ring focus-within:ring-blue-50 focus-within:border-cs-cyan-main transition duration-200 overflow-hidden">
                            <div class="px-3 py-3">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-4.5 h-4.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                                </svg>
                            </div>
                            <input class="px-3.5 py-2.5 border-l rounded-none focus:ring-0 focus:outline-none focus:shadow-none w-full border-0 placeholder-[#cacaca] text-2sm" type="text" name="number_of_vehicles" id="number_of_vehicles" v-model="formData.number_of_vehicles" placeholder="number of vehicles" autofocus="autofocus">
                        </div>
                        <span v-if="errorMessage.number_of_vehicles" class="inline-block text-red-400 font-medium text-sm my-1">
                            {{ errorMessage.number_of_vehicles[0] }}
                        </span>
                    </div>
                    <div class="relative w-full mb-4">
                        <label for="number_of_guides" class="block text-sm mb-2">
                            Number of Guides
                        </label>
                        <div class="border flex items-center rounded-lg focus-within:ring focus-within:ring-blue-50 focus-within:border-cs-cyan-main transition duration-200 overflow-hidden">
                            <div class="px-3 py-3">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-4.5 h-4.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <input class="px-3.5 py-2.5 border-l rounded-none focus:ring-0 focus:outline-none focus:shadow-none w-full border-0 placeholder-[#cacaca] text-2sm" type="text" name="number_of_guides" id="number_of_guides" v-model="formData.number_of_guides" placeholder="number of guides" autofocus="autofocus">
                        </div>
                        <span v-if="errorMessage.number_of_guides" class="inline-block text-red-400 font-medium text-sm my-1">
                            {{ errorMessage.number_of_guides[0] }}
                        </span>
                    </div>
                    <div class="relative w-full mb-4">
                        <label for="description" class="block text-sm mb-2">
                            Company Description
                        </label>
                        <div class="border flex items-center rounded-lg focus-within:ring focus-within:ring-blue-50 focus-within:border-cs-cyan-main transition duration-200 overflow-hidden">
                            <div class="px-3 py-3">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-4.5 h-4.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            </div>
                            <textarea name="" class="px-3.5 py-2.5 h-[100px] min-h-[100px] max-h-[150px] border-l rounded-none focus:ring-0 focus:outline-none focus:shadow-none w-full border-0 placeholder-[#cacaca] text-2sm" placeholder="your company description" v-model="formData.description"></textarea>
                        </div>
                        <p class="text-2xs mt-2">*We will contact you for follow-up registration.</p>
                        <span v-if="errorMessage.description" class="inline-block text-red-400 font-medium text-sm my-1">
                            {{ errorMessage.description[0] }}
                        </span>
                    </div>
                </div>
                <div v-if="step == stepLength" class="mt-10 flex flex-col items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-30 h-30 text-green-400" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                    </svg>
                    <h1 class="text-lg font-extrabold mt-4">Submission Complete!</h1>
                    <p class="text-center mt-1">Successfully registered your account. We'll apply everything we can in the next step.</p>
                    
                    <button type="button" @click="resetFormData()" class="py-2 px-4.5 mt-5 border text-2sm  transition duration-300 focus:outline-none rounded-lg">
                        Back to register
                    </button>
                </div>

                <div v-if="step != stepLength" class="flex justify-end gap-4 mt-7">
                    <button v-if="step > 1" @click="previousStep()" type="button" class="py-2 px-4.5 border text-2sm  transition duration-300 focus:outline-none rounded-md">
                        Previous
                    </button>

                    <button v-if="step < stepLength-1" @click="nextStep()" type="button" class="bg-cs-dark-blue py-2 px-4.5 text-white text-2sm border border-cs-dark-blue border-csbg-cs-dark-blue transition duration-300 focus:outline-none rounded-md">
                        Next
                    </button>

                    <button v-if="step == stepLength-1" @click="submit()" class="bg-cs-dark-blue py-2 px-4.5 text-white text-2sm border border-cs-dark-blue border-csbg-cs-dark-blue transition duration-300 focus:outline-none rounded-md">
                        Submit
                    </button>
                </div>
            </div>
        </div>
        <div class="px-10 py-5 md:border-t md:border-cs-border text-2xs md:bg-gray-50 text-center md:text-left">
            By clicking the button above, you agree to our <a href="" class="font-semibold text-[#003e6a]">term of use</a> and <a href="" class="font-semibold text-[#003e6a]">privacy policies</a>
        </div>
    </div>
</template>

<script>
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';

export default {
    layout: 'auth',
    head({ $seo }) {
        return $seo({
            title: 'Register Travel Agent - On Journey',
            description: `Let's join and contribute to the tourism ecosystem`,
            openGraph: {
                url: 'https://landing.onjourney.id'+require('~/assets/img/seo-img.jpg'),
            },
            twitter: {
                title: 'Register Travel Agent - On Journey', 
                description: `Let's join and contribute to the tourism ecosystem`,
            }
        })
    },
    components: { DatePicker },
    data() {
        return {
            formData: {
                first_name: '',
                last_name: '',
                company_name: '',
                year_founded: '',
                phone_number: '',
                email: '',
                address: '',
                number_of_vehicles: '',
                number_of_guides: '',
                description: ''
            },
            errorMessage: [],
            step: 1,
            stepLength: 3
        }
    },
    mounted() {
        
    },
    methods: {
        limitInput(el) {
            var value = el.target.value;
            if (value && value.length >= 1) {
                $(el.target).val(value.substr(0, 1));
            }
        },
        async submit() {
            this.step = this.step+1;
            console.log(this.$fire.firestore);

            // create user
            await this.$fire.auth.createUserWithEmailAndPassword('dikaptrw@gmail.com','Qwert123')
            .then(async (userCredential) => {
                const user = userCredential.user;
                console.log(user);
                await this.addUser(user);

                let getUser = await this.getUser()
                console.log(getUser.data());

                // this.sendEmailVerification();
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
        },
        async addUser(user) {
            const userData = {
                'firstName': 'Dika',
                'lastName': 'Putra',
                'bio': `I'm a web developer`,
            }
            const userRef = this.$fire.firestore.collection('users').doc(user.uid);
            const userDoc = await userRef.set(userData);
            return userDoc;
        },
        async getUser() {
            console.log(this.$fire.auth.currentUser.uid);
            const userRef = this.$fire.firestore.collection('users').doc(this.$fire.auth.currentUser.uid)
            const userDoc = await userRef.get();
            return userDoc;
        },
        async sendEmailVerification() {
            return await this.$fire.auth.currentUser.sendEmailVerification();
        },
        nextStep() {
            if (this.step < this.stepLength) {
                this.step = this.step+1;
            }
            console.log(this.formData);
        },
        previousStep() {
            if (this.step > 1) {
                this.step = this.step-1;
            }
        },
        resetFormData() {
            this.formData = {
                owner_name: '',
                company_name: '',
                year_founded: '',
                phone_number: '',
                email: '',
                address: '',
                number_of_vehicles: '',
                number_of_guides: '',
                description: ''
            };
            this.step = 1;
        }
    }
}
</script>

<style>
    html body .mx-datepicker,
    html body .mx-datepicker .mx-input-wrapper {
        width: 100%;
    }
    html body .mx-datepicker .mx-input-wrapper input {
        border: none;
        box-shadow: none;
        width: 100%;
    }
    html body .mx-datepicker .mx-input-wrapper input::placeholder {
        color: #cacaca;
    }
    html body .mx-datepicker .mx-icon-calendar {
        display: none;
    }


    .progress-bar {
        position: relative;
    }
    .progress-bar::after {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        content: '';
        background-size: 100%;
        background-image: linear-gradient(45deg, #fff 25%, 
                        rgba(0,0,0,0) 25%,
                        rgba(0,0,0,0) 50%,
                        #fff 50%,
                        #fff 75%,
                        rgba(0,0,0,0) 75%,
                        rgba(0,0,0,0));
        background-size: 25px 25px;
        opacity: 0.3;
        animation: progress-bar 2s linear infinite;
    }

    @keyframes progress-bar{
        0% {
            background-position: 0 100%;
        }
        100% {
            background-position: 25px 100%;
        }
    }

    input[type="number"]::-webkit-outer-spin-button, 
    input[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    input[type="number"] {
        -moz-appearance: textfield;
    }
</style>