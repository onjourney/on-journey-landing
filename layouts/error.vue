<template>
    <div class="fixed top-0 left-0 w-full h-full" style="font-family: sans-serif;">
        <div class="flex items-center h-full bg-cs-dark-secondary">
            <div class="m-auto flex flex-col justify-center items-center">
                <div class="mb-5 w-28">
                    <img class="h-full w-full object-contain object-center" src="~/assets/img/logo.png" alt="logo">
                </div>
                <h1 v-if="error.statusCode === 404" class="text-xl font-medium text-center my-1 text-cs-text-main">Page Not Found</h1>
                <p v-if="error.statusCode === 404" class="font-medium text-center my-1 text-cs-text-secondary">Sorry, the page you're looking for doesn't exist. <br> Please check back later. </p>

                <h1 v-if="error.statusCode === 503" class="text-xl font-medium text-center my-1.5 text-cs-text-main">{{ error.message }}</h1>
                <p v-if="error.statusCode === 503 && error.description" class="font-medium text-center my-1 text-cs-text-secondary">{{ error.description }}</p>
                <p v-if="error.statusCode === 503" class="font-medium text-center my-1 text-cs-text-secondary">Please check back later.</p>

                <h1 v-if="error.statusCode === 500" class="text-xl font-medium text-center my-1.5 text-cs-text-main">An error occurred</h1>
                <!-- <p v-if="error.statusCode === 500" class="font-medium text-center my-1 text-cs-text-secondary">Sorry, something went wrong there. <br> Please check back later.</p> -->
                <p v-if="error.statusCode === 500" class="font-medium text-center my-1 text-cs-text-secondary">{{ error.message }}</p>

                <nuxt-link v-if="error.statusCode !== 503" to="/" custom exact v-slot="{ href, navigate }">
                    <a :href="href" @click="navigate" class="bg-cs-dark-blue rounded-full mt-4 text-sm cursor-pointer px-5 py-3 text-white hover:bg-[#006ca3] transition-colors duration-300">Home Page</a>
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'

    export default {
        props: ['error'],
        layout: 'error', // you can set a custom layout for the error page
        mounted() {
            this.checkTheme();
        },
        methods: {
            ...mapActions({
                checkTheme: 'theme/checkTheme'
            }),
        }
    }
</script>