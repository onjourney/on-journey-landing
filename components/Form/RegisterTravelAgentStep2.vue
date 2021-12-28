<template>
    <div>
        <div class="relative w-full mb-4">
            <label for="companyName" class="block text-sm mb-2">
                Company Name
            </label>
            <div class="border flex items-center rounded-lg focus-within:ring focus-within:ring-blue-50 focus-within:border-cs-cyan-main transition duration-200 overflow-hidden">
                <div class="px-3 py-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4.5 h-4.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                </div>
                <input class="px-3.5 py-2.5 border-l rounded-none focus:ring-0 focus:outline-none focus:shadow-none w-full border-0 placeholder-[#cacaca] text-2sm" type="text" name="companyName" id="companyName" v-model="formData.companyName" placeholder="company name" autofocus="autofocus">
            </div>
            <span v-if="errorMessage.companyName" class="inline-block text-red-400 font-medium text-2xs my-1">
                {{ errorMessage.companyName }}
            </span>
        </div>
        <div class="relative w-full mb-4">
            <label for="yearFounded" class="block text-sm mb-2">
                Year Founded
            </label>
            <div class="border flex items-center rounded-lg focus-within:ring focus-within:ring-blue-50 focus-within:border-cs-cyan-main transition duration-200 overflow-hidden">
                <div class="px-3 py-3 border-r">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4.5 h-4.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                </div>
                <date-picker class="w-full" type="year" v-model="formData.yearFounded" valueType="format" placeholder="select year founded"></date-picker>
            </div>
            <span v-if="errorMessage.yearFounded" class="inline-block text-red-400 font-medium text-2xs my-1">
                {{ errorMessage.yearFounded }}
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
            <span v-if="errorMessage.address" class="inline-block text-red-400 font-medium text-2xs my-1">
                {{ errorMessage.address }}
            </span>
        </div>
        <div class="relative w-full mb-4">
            <label for="numberOfVehicles" class="block text-sm mb-2">
                Number of Vehicles
            </label>
            <div class="border flex items-center rounded-lg focus-within:ring focus-within:ring-blue-50 focus-within:border-cs-cyan-main transition duration-200 overflow-hidden">
                <div class="px-3 py-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4.5 h-4.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                    </svg>
                </div>
                <input class="px-3.5 py-2.5 border-l rounded-none focus:ring-0 focus:outline-none focus:shadow-none w-full border-0 placeholder-[#cacaca] text-2sm" type="text" name="numberOfVehicles" id="numberOfVehicles" v-model="formData.numberOfVehicles" placeholder="number of vehicles" autofocus="autofocus">
            </div>
            <span v-if="errorMessage.numberOfVehicles" class="inline-block text-red-400 font-medium text-2xs my-1">
                {{ errorMessage.numberOfVehicles }}
            </span>
        </div>
        <div class="relative w-full mb-4">
            <label for="numberOfGuides" class="block text-sm mb-2">
                Number of Guides
            </label>
            <div class="border flex items-center rounded-lg focus-within:ring focus-within:ring-blue-50 focus-within:border-cs-cyan-main transition duration-200 overflow-hidden">
                <div class="px-3 py-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4.5 h-4.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                </div>
                <input class="px-3.5 py-2.5 border-l rounded-none focus:ring-0 focus:outline-none focus:shadow-none w-full border-0 placeholder-[#cacaca] text-2sm" type="text" name="numberOfGuides" id="numberOfGuides" v-model="formData.numberOfGuides" placeholder="number of guides" autofocus="autofocus">
            </div>
            <span v-if="errorMessage.numberOfGuides" class="inline-block text-red-400 font-medium text-2xs my-1">
                {{ errorMessage.numberOfGuides }}
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
                <textarea name="description" id="description" class="px-3.5 py-2.5 h-[100px] min-h-[100px] max-h-[150px] border-l rounded-none focus:ring-0 focus:outline-none focus:shadow-none w-full border-0 placeholder-[#cacaca] text-2sm" placeholder="your company description" v-model="formData.description"></textarea>
            </div>
            <span v-if="errorMessage.description" class="inline-block text-red-400 font-medium text-2xs my-1">
                {{ errorMessage.description }}
            </span>
            <p class="text-2xs mt-2">*We will contact you for follow-up registration.</p>
        </div>

        <div class="flex justify-end items-center gap-4 mt-7">
            <button v-if="!submitLoad" @click="previousStep()" type="button" class="py-2 px-4 border text-2sm  transition duration-300 focus:outline-none rounded-md">
                Previous
            </button>

            <div v-if="submitLoad" class="inline-block w-[18px] h-[18px] border-[3px] rounded-[50%] border-[rgb(192,192,192)] border-t-[rgb(219,234,254)] animate-spin -mr-1"></div>
            <button ref="submitBtn" @click="submit()" type="button" class="bg-cs-dark-blue py-2 px-4 text-white text-2sm border border-cs-dark-blue disabled:bg-[#858585] disabled:border-[rgb(133,133,133)] disabled:cursor-not-allowed border-csbg-cs-dark-blue transition duration-300 focus:outline-none rounded-md">
                Submit
            </button>
        </div>
    </div>
</template>

<script>
import DatePicker from 'vue2-datepicker';
export default {
    components: { DatePicker },
    data() {
        return {
            formData: {
                companyName: '',
                yearFounded: '',
                address: '',
                numberOfVehicles: '',
                numberOfGuides: '',
                description: ''
            },
            errorMessage: {},
            submitLoad: false
        }
    },
    mounted() {
        this.formData.companyName = this.$store.state.register.travelAgent.companyFormData.companyName;
        this.formData.yearFounded = this.$store.state.register.travelAgent.companyFormData.yearFounded;
        this.formData.address = this.$store.state.register.travelAgent.companyFormData.address;
        this.formData.numberOfVehicles = this.$store.state.register.travelAgent.companyFormData.numberOfVehicles;
        this.formData.numberOfGuides = this.$store.state.register.travelAgent.companyFormData.numberOfGuides;
        this.formData.description = this.$store.state.register.travelAgent.companyFormData.description;
    },
    methods: {
        async submit() {
            this.submitLoad = true;
            $(this.$refs.submitBtn).attr('disabled', true);
            
            this.validateRequest();

            if (Object.keys(this.errorMessage).length == 0) {
                this.$store.commit('register/travelAgent/setCompanyFormData', this.formData);
                
                await this.$emit('submit');
            } else {
                this.submitLoad = false;
                $(this.$refs.submitBtn).removeAttr('disabled');
            }
        },
        previousStep() {
            this.$store.commit('register/travelAgent/setCompanyFormData', this.formData);
            this.$parent.step = this.$parent.step-1;
        },
        validateRequest() {
            let message = ['company name', 'year founded', 'address', 'number of vehicles', 'number of guides', 'description'];

            let formData = this.formData;
            let errorMessage = {};
            Object.keys(this.formData).forEach(function(val, index) {
                if (!formData[val]) {
                    errorMessage[val] = `The ${message[index]} field is required`;
                }
            });
            this.errorMessage = errorMessage;
        },
    }
}
</script>

<style>

</style>