<template>
    <div>
        <!-- hero -->
        <div ref="header" class="bg-cs-dark-blue">
            <div class="relative z-[1] pb-10 px-5 sm:px-15 lg:px-32 flex flex-col-reverse md:flex-row items-center justify-between lg:max-w-[1320px] xl:max-w-[1536px] mx-auto">
                <div class="w-full md:w-[500px] text-white py-10 pt-6">
                    <div class="text-3.5xl lg:text-4xl xl:text-4.5xl leading-12 xl:leading-14 text-center md:text-left">
                        Connecting <span class="font-extrabold">Traveller</span> with <span class="font-extrabold">Travel Agent</span> to <span class="font-extrabold">Explore Hidden Gem Destinations</span>
                    </div>
                    <div class="mt-2.5 text-2base text-center md:text-left">
                        and contribute to the tourism ecosystem
                    </div>
                    <div class="mt-8 flex items-center gap-3 justify-center md:justify-start">
                        <a href="" class="px-5.5 py-3 text-2sm rounded-full bg-white text-cs-dark-blue border-2 border-white font-bold whitespace-nowrap">
                            Explore More
                        </a>
                        <button @click="scrollToRegister()" class="px-5.5 py-3 text-2sm rounded-full text-white border-2 border-white hover:bg-white hover:text-cs-dark-blue transition-colors duration-500 font-bold whitespace-nowrap">
                            Register Now
                        </button>
                    </div>
                </div>
                
                <!-- hero img -->
                <div class="p-10 pt-6">
                    <img class="w-[450px] 2xl:w-[500px] xl:min-h-[491px]" src="~/assets/img/illustrations/hero-header.png" alt="hero">
                </div>

                <!-- dot -->
                <div class="absolute left-0 top-[30%]">
                    <img class="w-20" src="~/assets/img/illustrations/dot.png" alt="dot">
                </div>
            </div>
        </div>
        
        <!-- strength -->
        <div class="bg-cs-dark-blue relative text-cs-text-primary">
            <ul class="relative z-[1] grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 px-5 sm:px-15 lg:px-32 lg:max-w-[1320px] xl:max-w-[1536px] mx-auto">
                <li class="bg-[#f1f5f5] shadow-lg rounded-2xl p-8 sm:p-6 xl:p-8 flex flex-col items-center">
                    <div>
                        <img class="max-w-full w-23" src="~/assets/img/illustrations/choices.svg">
                    </div>
                    <h1 class="text-center text-2base font-bold mb-3 mt-6">
                        A Lot of Agency Choices
                    </h1>
                    <p class="text-center text-2sm">
                        Book and Order Travel Agent with many different travel package services experience
                    </p>
                </li>

                <li class="bg-[#f1f5f5] shadow-lg rounded-2xl p-8 sm:p-6 xl:p-8 flex flex-col items-center">
                    <div>
                        <img class="max-w-full w-23" src="~/assets/img/illustrations/pagoda.svg">
                    </div>
                    <h1 class="text-center text-2base font-bold mb-3 mt-6">
                        Rich Travel Destination
                    </h1>
                    <p class="text-center text-2sm">
                        Exposing uncommon hidden gem destination and enjoy new anti-mainstream experience
                    </p>
                </li>

                <li class="bg-[#f1f5f5] shadow-lg rounded-2xl p-8 sm:p-6 xl:p-8 flex flex-col items-center">
                    <div>
                        <img class="max-w-full w-23" src="~/assets/img/illustrations/tourism.svg">
                    </div>
                    <h1 class="text-center text-2base font-bold mb-3 mt-6">
                        Customize Your Destination
                    </h1>
                    <p class="text-center text-2sm">
                        Just search and select to make your own custom multiple destination with good price and easy payment
                    </p>
                </li>

                <li class="bg-[#f1f5f5] shadow-lg rounded-2xl p-8 sm:p-6 xl:p-8 flex flex-col items-center">
                    <div>
                        <img class="max-w-full w-23" src="~/assets/img/illustrations/car.svg">
                    </div>
                    <h1 class="text-center text-2base font-bold mb-3 mt-6">
                        Your Tour Transport Solution
                    </h1>
                    <p class="text-center text-2sm">
                        Penetrate the "unreachable" destination location with on-journey local taxi & on-journey rental
                    </p>
                </li>
            </ul>

            <!-- wave -->
            <svg class="absolute w-full bottom-0 lg:bottom-[-25px] xl:bottom-[-50px] max-w-[1800px] mx-auto left-50% transform translate-x-[-50%]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path class="fill-[#fff]" fill-opacity="1" d="M0,256L1440,64L1440,320L0,320Z"></path>
            </svg>

            <!-- dot -->
            <div class="absolute right-0 top-[-20%]">
                <img class="w-20" src="~/assets/img/illustrations/dot.png" alt="dot">
            </div>
        </div>

        <!-- partners -->
        <div class="pt-20 relative text-cs-text-primary">
            <div class="relative z-[1] px-5 sm:px-15 lg:px-32 lg:max-w-[1320px] xl:max-w-[1536px] mx-auto flex flex-col-reverse lg:flex-row gap-12 lg:gap-8">
                <!-- left -->
                <div class="w-full">
                    <h1 class="font-extrabold text-xl mb-6">Travel Agent Partner</h1>
                    <div class="grid grid-cols-2 w-full gap-5 sm:gap-8">
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
                        <nuxt-link to="/partner" custom exact v-slot="{ href, navigate }">
                            <a :href="href" @click="navigate" class="shadow-cs-10 hover:bg-[#006ca3] hover:transform hover:translate-y-[-2%] transition-all duration-500 rounded-xl text-white p-6 flex items-center justify-center text-center font-semibold bg-cs-dark-blue">
                                See all our travel agent partner
                            </a>
                        </nuxt-link>
                    </div>
                </div>

                <!-- right -->
                <div class="w-full lg:pl-5 text-cs-text-primary">
                    <h1 class="font-extrabold text-xl mb-5">What is On Journey?</h1>

                    <p class="leading-7">On-Journey adalah startup teknologi yang bergerak dalam dunia pariwisata bertujuan untuk memudahkan traveler dalam memesan layanan travel agent, sekaligus memperkuat ekosistem pariwisata dengan membantu memberdayakan dan menambah kemampuan travel agen konvensional dalam bersaing secara digital, serta menghidupkan destinasi wisata yang tidak terekpos.</p>

                    <a href="" class="inline-block mt-6 px-6 py-3 rounded-full  font-semibold bg-cs-dark-blue hover:bg-[#006ca3] text-white hover:transform hover:translate-y-[-6%] transition-all duration-500 border-csbg-cs-dark-blue text-sm hover:shadow-lg">
                        Read More
                    </a>
                </div>
            </div>

            <!-- bg illustration -->
            <div class="absolute inset-0 max-w-[1800px] mx-auto h-full">
                <div class="absolute top-[50%] transform translate-y-[-50%] right-0">
                    <img class="h-[600px]" src="~/assets/img/illustrations/bg.png">
                </div>
            </div>
        </div>

        <svg class="max-w-[1800px] mx-auto lg:-mt-15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#f6faff" fill-opacity="1" d="M0,160L1440,256L1440,320L0,320Z"></path>
        </svg>
        <div class="relative lg:-mt-5 text-cs-text-primary bg-[#f6faff] pt-5 md:pt-0 pb-25">
            <div class="relative z-[1] px-5 sm:px-15 lg:px-32 lg:max-w-[1320px] xl:max-w-[1536px] mx-auto">
                <div class="w-full xl:w-4/5 mx-auto flex flex-col gap-15 md:gap-8">
                    <div class="flex items-center flex-col md:flex-row">
                        <LazyLoadImage parentClass="min-w-[220px] min-h-[220px]" imageClass="h-[220px] w-full" :src="require('~/assets/img/illustrations/calendar.svg')" />
                        <div class="md:pl-20 flex-1">
                            <h1 class="text-center md:text-left font-extrabold mb-4 text-xl mt-10 md:mt-0">Proses Booking Mudah</h1>
                            <p class="text-center md:text-left">On-Journey menjadikan reservasi/booking travel agen yang konvensional menjadi lebih mudah langsung dari tangan anda.</p>
                        </div>
                    </div>
                    <div class="flex items-center flex-col-reverse md:flex-row">
                        <div class="md:pr-20 flex-1">
                            <h1 class="text-center md:text-left font-extrabold mb-4 text-xl mt-10 md:mt-0">Jelajahi Semua Destinasi</h1>
                            <p class="text-center md:text-left">Dengan banyaknya destinasi yang tersedia, anda tidak perlu ragu dalam memilih destinasi, anda dapat melihat foto, penjelasan & rating destinasi, anda juga dapat langsung memasukkannya dalam list perjalanan.</p>
                        </div>
                        <LazyLoadImage parentClass="min-w-[220px] min-h-[220px]" imageClass="h-[220px] w-full" :src="require('~/assets/img/illustrations/destination.svg')" />
                    </div>
                    <div class="flex items-center flex-col md:flex-row">
                        <LazyLoadImage parentClass="min-w-[220px] min-h-[220px]" imageClass="h-[220px] w-full" :src="require('~/assets/img/illustrations/search.svg')" />
                        <div class="md:pl-20 flex-1">
                            <h1 class="text-center md:text-left font-extrabold mb-4 text-xl mt-10 md:mt-0">Lebih Mudah dengan Filter</h1>
                            <p class="text-center md:text-left">Gunakan fitur filter untuk menampilkan harga, layanan, paket, kategori dan hal lain yang lebih relevan untuk anda.</p>
                        </div>
                    </div>
                    <div class="flex items-center flex-col-reverse md:flex-row">
                        <div class="md:pr-20 flex-1">
                            <h1 class="text-center md:text-left font-extrabold mb-4 text-xl mt-10 md:mt-0">Kustomisasi Paket Destinasi</h1>
                            <p class="text-center md:text-left">Anda dapat memodifikasi rute destinasi berantai, tipe kendaraan, penggunaan & bahasa guide dan lain sebagainya sekaligus mengendalikan harganya bagaikan memberikan topping pada makanan kesukaan anda!</p>
                        </div>
                        <LazyLoadImage parentClass="min-w-[220px] min-h-[220px]" imageClass="h-[220px] w-full" :src="require('~/assets/img/illustrations/map.svg')" />
                    </div>
                    <div class="flex items-center flex-col md:flex-row">
                        <LazyLoadImage parentClass="min-w-[220px] min-h-[220px]" imageClass="h-[220px] w-full" :src="require('~/assets/img/illustrations/driver.svg')" />
                        <div class="md:pl-20 flex-1">
                            <h1 class="text-center md:text-left font-extrabold mb-4 text-xl mt-10 md:mt-0">Sewa Kendaraan</h1>
                            <p class="text-center md:text-left">Anda sulit mencari kendaraan di daerah wisata? apabila begitu gunakanlah mitra local transportation kami yang ada di setiap lokasi wisata untuk berpergian, atau sewa saja kendaraanya sendiri lewat fitur rent.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- subscription -->
        <div class="mt-22 mb-5 px-5 sm:px-15 lg:px-32 lg:max-w-[1320px] xl:max-w-[1536px] mx-auto text-cs-text-primary">
            <h1 class="text-1.5xl sm:text-3xl font-extrabold text-center">
                Enter your email and start to <br> 
                collaborate a team with On-Journey
            </h1>

            <div class="flex justify-center">
                <p class="text-sm mt-4 text-center w-[500px]">Subscribe to our newsletter to get the latest news, updates and amazing offers delivered directly in your inbox.</p>
            </div>

            <div class="flex gap-3 sm:gap-5 justify-center mt-8">
                <input type="email" class="px-4 py-3.5 rounded-lg bg-gray-100 flex-1 sm:flex-none w-auto sm:w-[270px] text-2sm focus:outline-none" placeholder="example@email.com">
                <button type="submit" class="text-2sm whitespace-nowrap px-6 py-3.5 rounded-lg bg-cs-dark-blue hover:bg-[#006ca3] transition-colors duration-300 text-white">Subscribe</button>
            </div>
        </div>

        <!-- download -->
        <div class="py-20 relative">
            <div class="px-5 sm:px-15 lg:px-32 lg:max-w-[1320px] xl:max-w-[1536px] mx-auto">
                <div class="flex gap-10 bg-cs-cyan text-white rounded-[25px]">
                    <!-- left -->
                    <div class="w-full pr-10 py-10 pl-10 md:pr-0 md:py-15 md:pl-15">
                        <div>
                            <h1 class="text-3xl font-extrabold leading-10">
                                Use the On-Journey app 
                            </h1>
                            <h1 class="text-3xl font-extrabold leading-10">
                                for free on your phone
                            </h1>
                        </div>
                        <p class="text-sm mt-5 mb-10">The first step to start your journey takes less than a minute.</p>

                        <div class="relative z-[1] flex items-center gap-5">
                            <a href="" class="inline-block w-37 sm:w-40">
                                <img class="h-full" src="~/assets/img/illustrations/google-play.png">
                            </a>
                            <a href="" class="inline-block w-37 sm:w-40">
                                <img class="h-full" src="~/assets/img/illustrations/app-store.png">
                            </a>
                        </div>
                    </div>

                    <!-- right -->
                    <div class="hidden md:block w-full pr-15 pt-15">
                        <img class="w-full h-72 object-cover object-right-top" src="~/assets/img/illustrations/mobile.svg">
                    </div>
                </div>
            </div>

            <!-- dot -->
            <div class="absolute inset-0 max-w-[1800px] mx-auto h-full">
                <div class="absolute left-0 top-0">
                    <img class="w-20" src="~/assets/img/illustrations/dot.png" alt="dot">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HomePage',
        head: {
            title: 'Home - On Journey'
        },
        layout: 'main',
        methods: {
            scrollToRegister() {
                this.$router.push({path: '/become-our-partner'});
                localStorage.setItem('scrollToRegister', true);
            }
        }
    }
</script>
