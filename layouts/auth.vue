<template>
    <div class="bg-white min-h-screen">
        <div class="flex md:py-20 md:px-25 justify-center items-center lg:items-stretch lg:justify-start text-cs-text-primary font-roboto max-w-[1420px] mx-auto">
            <!-- left -->
            <div class="flex-1 hidden lg:flex flex-col pr-15">
                <div>
                    <div class="w-24">
                        <nuxt-link to="/become-our-partner" custom exact v-slot="{ href, navigate, isActive }">
                            <a :href="href" @click="navigate" :class="[ isActive ? 'font-extrabold' : '' ]" class="inline-block text-2sm">
                                <img class="w-full h-full object-cover object-center" src="~/assets/img/logo.png" alt="">
                            </a>
                        </nuxt-link>
                    </div>

                    <div class="font-manrope mt-10 font-black leading-13 text-4.5xl">
                        Sign Up to <br>
                        Start <span class="text-[#00BADD]">Your Journey</span>.
                    </div>
                    <div class="mt-7">
                        If you need help <br>
                        You can <a href="https://landing.onjourney.id/help" target="blank" class="font-bold text-[#003E6A]">Contact On-Journey</a>.
                    </div>
                </div>

                <div class="justify-end hidden xl:flex mt-17 max-w-full">
                    <SVGRegisterTravelAgent v-if="$route.path == '/travel-agent/register'" />
                    <SVGRegisterLocalTransport v-if="$route.path == '/local-transport/register'" />
                </div>
            </div>

            <!-- right -->
            <div class="w-full md:w-[500px]">
                <div class="bg-white rounded-xl overflow-hidden md:border border-cs-border md:shadow-cs-50">
                    <nuxt />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        auth: 'guest',

    }
</script>

<style>

</style>