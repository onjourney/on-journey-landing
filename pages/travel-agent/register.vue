<template>
    <div>
        <div class="p-10">
            <nuxt-link to="/become-our-partner" custom exact v-slot="{ href, navigate }">
                <a :href="href" @click="navigate" class="w-24 mb-3 block lg:hidden">
                    <img class="w-full h-full object-cover object-center" src="~/assets/img/logo.png" alt="">
                </a>
            </nuxt-link>
            <div v-if="step != stepLength">
                <h1 class="text-2xl mb-4">
                    <span class="font-extrabold"> Register </span> Travel Agent
                </h1>

                <h4 class="text-md mb-6 text-gray-500">Let's get you all set up so you can verify your "travel agent" account and begin setting up your profile.</h4>
            </div>

            <div class="block lg:hidden mt-7 mb-6">
                If you need help <br>
                You can <a href="https://landing.onjourney.id/help" target="blank" class="font-bold text-[#003E6A]">Contact On-Journey</a>.
            </div>
            
            <div :class="[step != stepLength ? 'mt-5' : 'mt-7 md:mt-0 mb-10']" class="flex items-center mb-5 gap-2">
                <div class="flex-1 bg-gray-100 rounded-full">
                    <div class="progress-bar rounded-full bg-cs-cyan text-xs leading-none h-2 text-center text-white transition-all duration-500" :style="'width: '+ parseInt(step / stepLength * 100) +'%'"></div>
                </div>
                <div class="text-xs w-10 text-gray-600" v-text="parseInt(step / stepLength * 100) +'%'"></div>
            </div>

            <div>
                <div v-if="step == 1">
                    <FormRegisterTravelAgentStep1 ref="formStep1" />
                </div>
                <div v-if="step == 2">
                    <FormRegisterTravelAgentStep2 ref="formStep2" @submit="submit" />
                </div>
                <div v-if="step == stepLength" class="flex flex-col items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-30 h-30 text-green-400" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                    </svg>
                    <h1 class="text-lg font-extrabold mt-4">Submission Complete!</h1>
                    <p class="text-center mt-1">Successfully registered your account. We'll apply everything we can in the next step.</p>
                    
                    <nuxt-link to="/" custom exact v-slot="{ href, navigate }">
                        <a :href="href" @click="navigate" class="py-2 px-4.5 mt-6 border text-2sm  transition duration-300 focus:outline-none rounded-lg">Back to Home</a>
                    </nuxt-link>
                </div>
            </div>
        </div>
        <div v-if="step != stepLength" class="px-10 py-5 md:border-t md:border-cs-border text-2xs md:bg-gray-50 text-center md:text-left">
            By clicking the button above, you agree to our <a href="" class="font-semibold text-[#003e6a]">term of use</a> and <a href="" class="font-semibold text-[#003e6a]">privacy policies</a>
        </div>
    </div>
</template>

<script>
import 'vue2-datepicker/index.css';
import 'sweetalert2/dist/sweetalert2.min.css'
import Swal from 'sweetalert2/dist/sweetalert2'
import Cookies from 'js-cookie'
import getSiteMeta from "~/utils/getSiteMeta"

export default {
    layout: 'auth',
    head() {
        return {
            meta: [
                ...this.meta
            ]
        }
    },
    computed: {
        meta() {
            const metaData = {
                url: `${process.env.baseUrl}${this.$route.path}`,
                title: 'Register Travel Agent - On Journey',
                mainImage: `${process.env.baseUrl}`+require('~/assets/img/seo-img.jpg'),
            };
            return getSiteMeta(metaData);
        }
    },
    data() {
        return {
            formData: {},
            step: 1,
            stepLength: 3
        }
    },
    async mounted() {
        if (Cookies.get('isUserSubmit')) {
            this.step = this.stepLength;
        }
    },
    methods: {
        async submit() {
            let userFormData = this.$store.state.register.travelAgent.userFormData;
            let companyFormData = this.$store.state.register.travelAgent.companyFormData;
            
            this.formData = {...userFormData, ...companyFormData }

            try {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                await this.$store.dispatch("register/travelAgent/register", this.formData);
            } catch (error) {
                Swal.fire({
                    title: 'Error!',
                    text: 'Oops, something went wrong, please try again later',
                    icon: 'error',
                    confirmButtonText: 'Okay'
                });
                return false;
            }

            this.step = this.step+1;
            $(this.$refs.formStep2.$refs.submitBtn).removeAttr('disabled');
            this.$refs.formStep2.submitLoad = false;

            Cookies.set('isUserSubmit', true, { expires: 1, path: '' });
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