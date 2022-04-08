<template>
    <button @click="scrollToTop()" class="flex z-[50] fixed bg-white right-[30px] bottom-[30px] w-11 h-11 rounded-full border items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
    </button>
</template>

<script>
export default {
    mounted() {
        if (scrollY > $('#header').height()) {
                $(this.$el).show();
            } else {
                $(this.$el).hide();
            }
    },
    created() {
        if (process.browser) {
            window.addEventListener("scroll", this.handleScroll);
        }
    },
    destroyed() {
        window.removeEventListener("scroll", this.handleScroll);
    },
    methods: {
        scrollToTop() {
            $("html, body").animate({scrollTop: 0}, 800);
        },
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
            if (scrollY > $('#header').height()) {
                $(this.$el).fadeIn(500);
            } else {
                $(this.$el).hide();
            }
        },
    }
}
</script>

<style>

</style>