<template>
    <div>
        <!-- hero -->
        <div id="header" class="bg-cs-dark-blue">
            <div class="relative z-[1] pb-10 pt-10 px-5 sm:px-15 lg:px-32 lg:max-w-[1320px] xl:max-w-[1536px] mx-auto flex justify-center">
                <div class="w-full md:w-[700px] text-white py-10 pt-6">
                    <div class="text-3.5xl lg:text-4xl xl:text-4.5xl leading-12 xl:leading-14 text-center px-4 sm:px-0">
                        We already have many <span class="font-extrabold">potential partners</span> who will join
                    </div>
                    <div class="mt-2.5 text-2base text-center">
                        let's join and contribute to the tourism ecosystem
                    </div>
                    <div class="mt-8 flex items-center gap-3 justify-center">
                        <a href="" class="px-5.5 py-3 text-2sm rounded-full bg-white text-cs-dark-blue border-2 border-white font-bold whitespace-nowrap">
                            Explore More
                        </a>
                        <button @click="scrollToRegister()" class="px-5.5 py-3 text-2sm rounded-full text-white border-2 border-white hover:bg-white hover:text-cs-dark-blue transition-colors duration-500 font-bold whitespace-nowrap">
                            Register Now
                        </button>
                    </div>
                </div>

                <!-- dot -->
                <div class="absolute left-0 top-[30%]">
                    <img class="w-20" src="~/assets/img/illustrations/dot.png" alt="dot">
                </div>
            </div>
        </div>

        <!-- list partner -->
        <div class="px-5 sm:px-15 lg:px-32 lg:max-w-[1320px] xl:max-w-[1536px] py-20 mx-auto">
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-5 sm:gap-8">
                <div class="shadow-cs-10 group rounded-xl bg-white p-6">
                    <LazyLoadImage parentClass="h-20 grayscale group-hover:grayscale-0 transition duration-500" title="Bali Enjoy Tour" imageClass="w-full h-full object-contain" :src="require('~/assets/img/partners/bali_enjoy.png')" alt="Bali Enjoy Tour" />
                    <h1 class="mt-3 font-semibold text-sm text-center">Bali Enjoy Tour</h1>
                </div>
                <div class="shadow-cs-10 group rounded-xl bg-white p-6">
                    <LazyLoadImage parentClass="h-20 grayscale group-hover:grayscale-0 transition duration-500" title="Vijaya Tour" imageClass="w-full h-full object-contain" :src="require('~/assets/img/partners/vj.png')" alt="Vijaya Tour" />
                    <h1 class="mt-3 font-semibold text-sm text-center">Vijaya Tour</h1>
                </div>
                <div class="shadow-cs-10 group rounded-xl bg-white p-6">
                    <LazyLoadImage parentClass="h-20 grayscale group-hover:grayscale-0 transition duration-500" title="Golde Kris Tours" imageClass="w-full h-full object-contain" :src="require('~/assets/img/partners/gk.png')" alt="Golde Kris Tours" />
                    <h1 class="mt-3 font-semibold text-sm text-center">Golden Kris Tours</h1>
                </div>
                <div class="shadow-cs-10 group rounded-xl bg-white p-6">
                    <LazyLoadImage parentClass="h-20 grayscale group-hover:grayscale-0 transition duration-500" title="Bali Enjoy Tour" imageClass="w-full h-full object-contain" :src="require('~/assets/img/partners/bali_enjoy.png')" alt="Bali Enjoy Tour" />
                    <h1 class="mt-3 font-semibold text-sm text-center">Bali Enjoy Tour</h1>
                </div>
                <div class="shadow-cs-10 group rounded-xl bg-white p-6">
                    <LazyLoadImage parentClass="h-20 grayscale group-hover:grayscale-0 transition duration-500" title="Vijaya Tour" imageClass="w-full h-full object-contain" :src="require('~/assets/img/partners/vj.png')" alt="Vijaya Tour" />
                    <h1 class="mt-3 font-semibold text-sm text-center">Vijaya Tour</h1>
                </div>
                <div class="shadow-cs-10 group rounded-xl bg-white p-6">
                    <LazyLoadImage parentClass="h-20 grayscale group-hover:grayscale-0 transition duration-500" title="Golde Kris Tours" imageClass="w-full h-full object-contain" :src="require('~/assets/img/partners/gk.png')" alt="Golde Kris Tours" />
                    <h1 class="mt-3 font-semibold text-sm text-center">Golden Kris Tours</h1>
                </div>
                <div class="shadow-cs-10 group rounded-xl bg-white p-6">
                    <LazyLoadImage parentClass="h-20 grayscale group-hover:grayscale-0 transition duration-500" title="Bali Enjoy Tour" imageClass="w-full h-full object-contain" :src="require('~/assets/img/partners/bali_enjoy.png')" alt="Bali Enjoy Tour" />
                    <h1 class="mt-3 font-semibold text-sm text-center">Bali Enjoy Tour</h1>
                </div>
                <div class="shadow-cs-10 group rounded-xl bg-white p-6">
                    <LazyLoadImage parentClass="h-20 grayscale group-hover:grayscale-0 transition duration-500" title="Vijaya Tour" imageClass="w-full h-full object-contain" :src="require('~/assets/img/partners/vj.png')" alt="Vijaya Tour" />
                    <h1 class="mt-3 font-semibold text-sm text-center">Vijaya Tour</h1>
                </div>
                <div class="shadow-cs-10 group rounded-xl bg-white p-6">
                    <LazyLoadImage parentClass="h-20 grayscale group-hover:grayscale-0 transition duration-500" title="Golde Kris Tours" imageClass="w-full h-full object-contain" :src="require('~/assets/img/partners/gk.png')" alt="Golde Kris Tours" />
                    <h1 class="mt-3 font-semibold text-sm text-center">Golden Kris Tours</h1>
                </div>
                <div class="shadow-cs-10 group rounded-xl bg-white p-6">
                    <LazyLoadImage parentClass="h-20 grayscale group-hover:grayscale-0 transition duration-500" title="Bali Enjoy Tour" imageClass="w-full h-full object-contain" :src="require('~/assets/img/partners/bali_enjoy.png')" alt="Bali Enjoy Tour" />
                    <h1 class="mt-3 font-semibold text-sm text-center">Bali Enjoy Tour</h1>
                </div>
                <div class="shadow-cs-10 group rounded-xl bg-white p-6">
                    <LazyLoadImage parentClass="h-20 grayscale group-hover:grayscale-0 transition duration-500" title="Vijaya Tour" imageClass="w-full h-full object-contain" :src="require('~/assets/img/partners/vj.png')" alt="Vijaya Tour" />
                    <h1 class="mt-3 font-semibold text-sm text-center">Vijaya Tour</h1>
                </div>
                <div class="shadow-cs-10 group rounded-xl bg-white p-6">
                    <LazyLoadImage parentClass="h-20 grayscale group-hover:grayscale-0 transition duration-500" title="Golde Kris Tours" imageClass="w-full h-full object-contain" :src="require('~/assets/img/partners/gk.png')" alt="Golde Kris Tours" />
                    <h1 class="mt-3 font-semibold text-sm text-center">Golden Kris Tours</h1>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'PartnerPage',
        layout: 'main',
        head: {
            title: 'Partner - On Journey'
        },
        methods: {
            scrollToRegister() {
                this.$router.push({path: '/become-our-partner'});
                localStorage.setItem('scrollToRegister', true);
            }
        }
    }
</script>
