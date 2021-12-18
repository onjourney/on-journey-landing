<template>
<nav :class="[isActiveNav ? 'bg-white shadow-cs-50' : 'bg-cs-dark-blue']" class="sticky top-0 z-[100] transition-colors duration-300 min-h-[78px]">
    <div class="lg:max-w-[1320px] xl:max-w-[1536px] mx-auto flex justify-between py-4 px-5 sm:px-15 lg:px-32">
        <a href="" class="inline-block relative transition-all duration-300" :class="[isActiveNav ? 'bottom-0' : 'md:bottom-[-16px]']">
            <img class="w-28 sm:w-32" src="~/assets/img/logo.png" alt="logo">
        </a>

        <div class="md:hidden flex gap-3 items-center">
            <button class="inline-flex text-2sm font-bold items-center gap-0.5" :class="[isActiveNav ? 'text-cs-text-primary' : 'text-white']">
                ID
                <svg class="w-3 h-3 -mt-0.5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 16l-6-6h12z"/></svg>
            </button>
            <button class="inline-block px-2 py-1.5 rounded-md transition-colors duration-300" :class="[isActiveNav ? 'text-cs-text-primary bg-black bg-opacity-[0.05]' : 'text-white bg-white bg-opacity-20']">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button>
        </div>

        <ul class="hidden md:flex items-center gap-4.5 -mt-0.5 transition-colors duration-300" :class="[isActiveNav ? 'text-cs-text-primary' : 'text-white']">
            <li>
                <button class="inline-flex text-2sm font-bold items-center gap-0.5">
                    ID
                    <svg class="w-3 h-3 -mt-0.5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 16l-6-6h12z"/></svg>
                </button>
            </li>
            <li>
                <nuxt-link to="/" custom exact v-slot="{ href, navigate, isActive }">
                    <a :href="href" @click="navigate" :class="[ isActive ? 'font-extrabold' : '' ]" class="inline-block text-2sm">Home</a>
                </nuxt-link>
            </li>
            <li>
                <a href="#" class="inline-block text-2sm">Partner</a>
            </li>
            <li>
                <nuxt-link to="/become-our-partner" custom exact v-slot="{ href, navigate, isActive }">
                    <a :href="href" @click="navigate" :class="[ isActive ? 'font-extrabold' : '' ]" class="inline-block text-2sm">Become Our Partner</a>
                </nuxt-link>
            </li>
        </ul>
    </div>
</nav>
</template>

<script>
export default {
    data() {
        return {
            isActiveNav: false
        }
    },
    mounted() {
        
    },
    created() {
        window.addEventListener("scroll", this.handleScroll);
    },
    destroyed() {
        window.removeEventListener("scroll", this.handleScroll);
    },
    methods: {
        handleScroll () {
            this.$store.dispatch("page/setCurrentScrollY", window.scrollY);
        }
    },
    computed: {
        currentScrollY() {
            return this.$store.getters["page/currentScrollY"];
        },
        currentOffset() {
            return this.$store.getters["page/currentOffset"];
        }
    },
    watch: {
        currentScrollY(scrollY) {
            if (scrollY > $(this.$el).height()) {
                this.isActiveNav = true;
            } else {
                this.isActiveNav = false;
            }
        },
    }
}
</script>