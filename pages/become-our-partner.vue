<template>
    <div class="mx-auto">
        <!-- navigation -->
        <NavigationMain />

        <!-- hero -->
        <div class="bg-cs-dark-blue">
            <div class="relative z-[1] pb-10 pt-5 px-5 sm:px-15 lg:px-32 flex flex-col-reverse md:flex-row items-center justify-between lg:max-w-[1320px] xl:max-w-[1536px] mx-auto">
                <!-- hero img -->
                <div class="p-10 pt-6">
                    <img class="w-[450px] 2xl:w-[500px]" src="~/assets/img/illustrations/agreement.png" alt="hero">
                </div>

                <div class="w-full md:w-[500px] text-white py-10 pt-6">
                    <div class="text-3.5xl lg:text-4xl leading-12 lg:leading-14 text-center md:text-left">
                        Do you have a <span class="font-extrabold">Travel Agency</span> or <span class="font-extrabold">Transportation Renter business</span> ? Come join us as an <span class="font-extrabold">On-Journey Partner!</span>
                    </div>
                    <div class="mt-2.5 text-2base text-center md:text-left">
                        being the first would be much better
                    </div>
                    <div class="mt-8 flex items-center gap-3 justify-center md:justify-start">
                        <a href="" class="px-5.5 py-3 text-2sm rounded-full bg-white text-cs-dark-blue border-2 border-white font-bold whitespace-nowrap">
                            Explore More
                        </a>
                        <a href="" class="px-5.5 py-3 text-2sm rounded-full text-white border-2 border-white hover:bg-white hover:text-cs-dark-blue transition-colors duration-500 font-bold whitespace-nowrap">
                            Register Now
                        </a>
                    </div>
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
                        <img class="max-w-full w-23" src="~/assets/img/illustrations/digital.svg">
                    </div>
                    <h1 class="text-center text-2base font-bold mb-3 mt-6">
                        Digitize Your Business
                    </h1>
                    <p class="text-center text-2sm">
                        Make the products/services of your travel/rental business accessible, ordered, modified & transacted online anywhere.
                    </p>
                </li>

                <li class="bg-[#f1f5f5] shadow-lg rounded-2xl p-8 sm:p-6 xl:p-8 flex flex-col items-center">
                    <div>
                        <img class="max-w-full w-23" src="~/assets/img/illustrations/bullhorn.svg">
                    </div>
                    <h1 class="text-center text-2base font-bold mb-3 mt-6">
                        Digital Promotion Media of Your Business
                    </h1>
                    <p class="text-center text-2sm">
                        On-Journey will promote your business services and products for free with direct access to your business.
                    </p>
                </li>

                <li class="bg-[#f1f5f5] shadow-lg rounded-2xl p-8 sm:p-6 xl:p-8 flex flex-col items-center">
                    <div>
                        <img class="max-w-full w-23" src="~/assets/img/illustrations/cloud.svg">
                    </div>
                    <h1 class="text-center text-2base font-bold mb-3 mt-6">
                        Digital Transaction Infrastructure of Your Business
                    </h1>
                    <p class="text-center text-2sm">
                        On-Journey will simplify your business transactions with a cashless online payment line automatically directly to your account.
                    </p>
                </li>

                <li class="bg-[#f1f5f5] shadow-lg rounded-2xl p-8 sm:p-6 xl:p-8 flex flex-col items-center">
                    <div>
                        <img class="max-w-full w-23" src="~/assets/img/illustrations/administrative.svg">
                    </div>
                    <h1 class="text-center text-2base font-bold mb-3 mt-6">
                        Your Business Assistant
                    </h1>
                    <p class="text-center text-2sm">
                        On-Journey will display the transaction performance of your business and help you in making business decisions.
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

        <!-- why us -->
        <div class="pt-20 relative text-cs-text-primary">
            <div class="relative z-[1] px-5 sm:px-15 lg:px-32 lg:max-w-[1320px] xl:max-w-[1536px] mx-auto flex flex-col-reverse lg:flex-row gap-12 lg:gap-15">
                <!-- left -->
                <div class="w-full lg:pl-5 text-cs-text-primary">
                    <h1 class="font-extrabold text-xl mb-5">What is On Journey?</h1>

                    <p class="leading-7">Salah satu tujuan kami dalam mendirikan startup ini adalah membantu travel agen konvensional dan moda transportasi lokal yang telah tergerus eksistensinya oleh kemajuan dan kemandirian traveler dalam berwisata agar dapat bersaing kembali dengan lebih maksimal. Bagi kami travel agent merupakan garda terdepan untuk dapat meningkatkan kepuasan dan experience traveller terhadap destinasi wisata dan juga sebagai pemberi informasi serta pengawas traveller. Selain itu, dengan menggunakan jasa travel agen maka pendapatan orang-orang yang ada disektiar destinasi maupun pendapatan daerah tempat destinasi tersebut berada akan lebih maksimal karena perputaran uang yang lebih luas...</p>

                    <a href="" class="inline-block mt-6 px-6 py-3 rounded-full  font-semibold bg-cs-dark-blue hover:bg-[#006ca3] text-white hover:transform hover:translate-y-[-6%] transition-all duration-500 border-csbg-cs-dark-blue text-sm hover:shadow-lg">
                        Read More
                    </a>
                </div>

                <!-- right -->
                <div class="w-full flex items-center justify-center">
                    <img class="w-full -mt-5" src="~/assets/img/illustrations/why-us.svg">
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
                        <img class="h-[220px]" src="~/assets/img/illustrations/digital-access.svg" alt="">
                        <div class="md:pl-20">
                            <h1 class="text-center md:text-left font-extrabold mb-4 text-xl mt-10 md:mt-0">Akses Secara Digital</h1>
                            <p class="text-center md:text-left">Membuat layanan travel anda dapat diakses dan dipesan secara digital sehingga dapat mempermudah traveler domestik maupun internasional untuk menemukan & menggunakan layanan anda.</p>
                        </div>
                    </div>
                    <div class="flex items-center flex-col-reverse md:flex-row">
                        <div class="md:pr-20">
                            <h1 class="text-center md:text-left font-extrabold mb-4 text-xl mt-10 md:mt-0">Manajemen Yang Lengkap</h1>
                            <p class="text-center md:text-left">Anda dapat dengan mudah memanajemen layanan travel anda, mulai dari manajemen paket, harga/destinasi, jenis kendaraan, detil layanan yang ditawarkan, pesanan, jenis mobil, harga mobil, dsb, dan mengupdate layanan anda langsung pada dashboard aplikasi untuk mitra on-journey.</p>
                        </div>
                        <img class="h-[220px]" src="~/assets/img/illustrations/management.svg" alt="">
                    </div>
                    <div class="flex items-center flex-col md:flex-row">
                        <img class="h-[220px]" src="~/assets/img/illustrations/share.svg" alt="">
                        <div class="md:pl-20">
                            <h1 class="text-center md:text-left font-extrabold mb-4 text-xl mt-10 md:mt-0">Mempermudah Marketing</h1>
                            <p class="text-center md:text-left">Mitra On-Journey dapat lebih mudah dalam memarketingkan usahanya, mitra dapat membagikan barcode travel agen yang kami berikan dimanapun ia inginkan untuk memasarkan produknya untuk dapat langsung menuju dan memesan produk mitra, selain itu kamipun akan memasarkan usaha anda secara gratis.</p>
                        </div>
                    </div>
                    <div class="flex items-center flex-col-reverse md:flex-row">
                        <div class="md:pr-20">
                            <h1 class="text-center md:text-left font-extrabold mb-4 text-xl mt-10 md:mt-0">Fitur Premium</h1>
                            <p class="text-center md:text-left">Nikmati fitur premium ERP (Enterprise Resource Planning) kami, sistem yang membantu anda sebagai pemilik bisnis travel untuk memanajemen bisnisnya secara menyeluruh seperti transaksi, keuangan, pegawai/driver, planning, resource, dsb, dan bahkan dapat merangkumnya dalam statistik portofolio bisnis untuk keperluan evaluasi maupun kerjasama & investasi anda kedepan.</p>
                        </div>
                        <img class="h-[220px]" src="~/assets/img/illustrations/features.svg" alt="">
                    </div>
                    <div class="flex items-center flex-col md:flex-row">
                        <img class="h-[220px]" src="~/assets/img/illustrations/develope.svg" alt="">
                        <div class="md:pl-20">
                            <h1 class="text-center md:text-left font-extrabold mb-4 text-xl mt-10 md:mt-0">Pengembangan Fitur dan Akses</h1>
                            <p class="text-center md:text-left">Masih kurang? Banyak benefit lain seperti kredit poin, upaya kerjasama untuk pembukaan akses, serta beberapa fitur dalam pengembangan layanan On-Journey dengan upaya memaksimalkan kinerja sistem dan layanan untuk mengkoneksikan traveler dan travel agen, transportasi wisata lokal dan rental serta memperkuat ekosistem wisata.</p>
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
                <input type="text" class="px-4 py-3.5 rounded-lg bg-gray-100 flex-1 sm:flex-none w-auto sm:w-[270px] text-sm focus:outline-none" placeholder="example@email.com">
                <button type="submit" class="text-sm whitespace-nowrap px-6 py-3.5 rounded-lg bg-cs-dark-blue hover:bg-[#006ca3] transition-colors duration-300 text-white">Subscribe</button>
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
                                Ready for your journey?
                            </h1>
                            <h1 class="text-3xl font-extrabold leading-10">
                                Register your company now.
                            </h1>
                        </div>
                        <p class="text-sm mt-5 mb-10">Take advantage of our features and leap up your business.</p>

                        <div class="relative z-[1] flex items-center gap-3">
                            <button class="p-5 py-3 rounded-full bg-cs-dark-blue text-white text-2sm font-bold hover:bg-[#006ca3] transition-colors duration-300 flex items-center gap-2">
                                <svg class="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path fill="none" d="M0 0h24v24H0z"/><path d="M7 5V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4zM4 16v3h16v-3H4zm0-2h16V7H4v7zM9 3v2h6V3H9zm2 8h2v2h-2v-2z"/>
                                </svg>
                                Travel Agent
                            </button>
                            <button class="p-5 py-3 rounded-full bg-cs-dark-blue text-white text-2sm font-bold hover:bg-[#006ca3] transition-colors duration-300 flex items-center gap-2">
                                <svg class="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path fill="none" d="M0 0L24 0 24 24 0 24z"/><path d="M14.172 3c.53 0 1.039.21 1.414.586l4.828 4.828c.375.375.586.884.586 1.414V17h2v2h-8.126c-.445 1.726-2.01 3-3.874 3-1.864 0-3.43-1.274-3.874-3H3c-.552 0-1-.448-1-1V5c0-1.105.895-2 2-2h10.172zM11 16c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2zm3.172-11H4v12h3.126c.444-1.725 2.01-3 3.874-3 1.864 0 3.43 1.275 3.874 3H19V9.828L14.172 5zM14 7v6H6V7h8zm-2 2H8v2h4V9z"/>
                                </svg>
                                Local Transport
                            </button>
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

        <!-- footer -->
        <FooterMain />
    </div>
</template>

<script>
    export default {
        name: 'HomePage',
        head: {
            title: 'On Journey - Home'
        },
    }
</script>
