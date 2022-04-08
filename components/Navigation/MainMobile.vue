<template>
    <!-- mobile -->
    <nav class="fixed z-[150] inset-0 flex items-center justify-center flex-col gap-6 bg-white text-cs-text-primary transition-opacity duration-300">
        <div>
            <img class="w-28 sm:w-32" src="~/assets/img/logo.png" alt="logo">
        </div>
        <ul class="flex flex-col gap-3 justify-center text-center">
            <li>
                <nuxt-link to="/" custom exact v-slot="{ href, navigate, isActive }" @click.native="closeNavMobile();">
                    <a :href="href" @click="navigate" :class="[ isActive ? 'font-extrabold' : '' ]" class="inline-block text-2sm">Home</a>
                </nuxt-link>
            </li>
            <li>
                <nuxt-link to="/partner" custom exact v-slot="{ href, navigate, isActive }" @click.native="closeNavMobile();">
                    <a :href="href" @click="navigate" :class="[ isActive ? 'font-extrabold' : '' ]" class="inline-block text-2sm">Partner</a>
                </nuxt-link>
            </li>
            <li>
                <nuxt-link to="/become-our-partner" custom exact v-slot="{ href, navigate, isActive }" @click.native="closeNavMobile();">
                    <a :href="href" @click="navigate" :class="[ isActive ? 'font-extrabold' : '' ]" class="inline-block text-2sm">Become Our Partner</a>
                </nuxt-link>
            </li>
        </ul>

        <!-- close btn -->
        <button @click="$parent.isNavMobileActive = false" class="absolute top-[20px] right-[20px]">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
        </button>
    </nav>
</template>

<script>
export default {
    methods: {
        closeNavMobile() {
            this.$parent.isNavMobileActive = false;
        }
    },
}
</script>