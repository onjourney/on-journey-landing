<template>
    <div class="bg-[rgba(85,85,85,0.4)] fixed top-0 left-0 h-full w-full z-[100] overflow-y-auto">
        <div class="fade-effect w-full h-full flex" @click="onclickCloseModal($event)">
            <div class="mx-auto sm:my-auto w-full sm:w-90vw md:w-169">
                <div class="bg-white sm:my-15 sm:rounded-xl min-h-screen sm:min-h-0">
                    <div class="border-b border-cs-border py-5.5 px-8 flex items-center justify-between">
                        <div class="font-semibold text-lg">
                            <span class="text-2xs font-bold text-cs-text-primary">
                                On Journey
                            </span>
                            <h1>Verification Steps</h1>
                        </div>
                        <button type="buttom" class="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-full duration-300 transition-colors" @click.prevent="closeModal">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                            </svg>
                        </button>
                    </div>
                    <div class="p-8">
                        <!-- step 1 -->
                        <div class="flex">
                            <div class="flex flex-col items-center w-[50px] sm:w-[100px] relative before:absolute before:left-[50%] before:transform before:translate-x-[-50%] before:top-12 before:-bottom-10 before:w-[3px] before:bg-gray-200">
                                <div class="w-12 h-12 rounded-full bg-cs-text-primary text-white flex items-center justify-center text-2lg font-extrabold">1</div>
                            </div>

                            <div class="flex-1 pl-8 sm:pr-8 -mt-1 text-2sm">
                                <h1 class="font-bold text-cs-text-primary mb-1.5">Register Account</h1>
                                <p>
                                    Kunjungi halaman <a href="https://landing.onjourney.id/become-our-partner" class="underline text-cs-cyan" target="_blank">Landing On-Journey</a> lalu klik register travel agent atau local transport. Berikan informasi atau data kalian secara lengkap dan tepat pada form yang disediakan. Lanjutkan hingga proses selesai.
                                </p>
                            </div>
                        </div>
                        <!-- step 2 -->
                        <div class="flex mt-10">
                            <div class="flex flex-col items-center w-[50px] sm:w-[100px] relative before:absolute before:left-[50%] before:transform before:translate-x-[-50%] before:top-12 before:-bottom-10 before:w-[3px] before:bg-gray-200">
                                <div class="w-12 h-12 rounded-full bg-cs-text-primary text-white flex items-center justify-center text-2lg font-extrabold">2</div>
                            </div>

                            <div class="flex-1 pl-8 sm:pr-8 -mt-1 text-2sm">
                                <h1 class="font-bold text-cs-text-primary mb-1.5">Verify Account</h1>
                                <p>
                                    Verifikasi pendaftaran anda secara offline maupun online dengan melakukan scanning beberapa dokumen diantaranya:
                                </p>
                                <ul v-if="registration == 'travel-agent'" class="list-disc mt-3 pl-5">
                                    <li>KTP Pemilik / Ketua</li>
                                    <li>NPWP Pemilik / Ketua </li>
                                    <li>Legal Perusahaan (Opsional)</li>
                                    <li>Rekening Usaha</li>
                                    <li>Mengisi Dokumen Kesepakantan & Kerjasama On-Journey (<a href="https://landing.onjourney.id/become-our-partner" class="underline text-cs-cyan" target="_blank">download</a>)</li>
                                    <li>Melampirkan Scan KTP & SIM 3 Orang Guide</li>
                                </ul>
                                <ul v-if="registration == 'local-transport'" class="list-disc mt-3 pl-5">
                                    <li>KTP</li>
                                    <li>SIM</li>
                                    <li>Mengisi Dokumen Kesepakantan & Kerjasama On-Journey (<a href="https://landing.onjourney.id/become-our-partner" class="underline text-cs-cyan" target="_blank">download</a>)</li>
                                </ul>

                                <div class="mt-3">Bantuan:</div>
                                <ul>
                                    <li>Indra <a href="tel:085333009777" class="underline text-cs-cyan">085333009777</a></li>
                                    <li>Adhi <a href="tel:085333009777" class="underline text-cs-cyan">085107013166</a></li>
                                </ul>
                            </div>
                        </div>
                        <!-- step 3 -->
                        <div class="flex mt-10">
                            <div class="flex flex-col items-center w-[50px] sm:w-[100px] relative before:absolute before:left-[50%] before:transform before:translate-x-[-50%] before:top-12 before:-bottom-10 before:w-[3px] before:bg-gray-200">
                                <div class="w-12 h-12 rounded-full bg-cs-text-primary text-white flex items-center justify-center text-2lg font-extrabold">3</div>
                            </div>

                            <div class="flex-1 pl-8 sm:pr-8 -mt-1 text-2sm">
                                <h1 class="font-bold text-cs-text-primary mb-1.5">Review Process</h1>
                                <p>
                                    Kami akan mereview dokumen anda dalam masa maksimal 3 x 24 jam dan akan menghubungi anda secepatnya.
                                </p>
                            </div>
                        </div>
                        <!-- step 3 -->
                        <div class="flex mt-10">
                            <div class="flex flex-col items-center w-[50px] sm:w-[100px]">
                                <div class="w-12 h-12 rounded-full bg-cs-cyan text-white flex items-center justify-center text-2lg font-extrabold">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                            </div>

                            <div class="flex-1 pl-8 sm:pr-8 -mt-1 text-2sm">
                                <h1 class="font-bold text-cs-text-primary mb-1.5">Complete</h1>
                                <p>
                                    Kami akan mengirimkan Akun beserta kode aksesnya ke e-mail dan memberikan notifikasi ke nomor yang telah didaftarkan. Anda dapat mereset password yang diterima dengan menu lupa password, atau langsung login ke dashboard dengan akun tersebut.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="text-2xs px-8 py-5 border-t text-center">
                        <svg class="w-4.5 h-4.5 inline-block mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"/>
                            <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-5h2v2h-2v-2zm0-8h2v6h-2V7z"/>
                        </svg>
                        Information and contact support <a href="mailto:info@onjourney.id" class="font-semibold text-[#003e6a]">info@onjourney.id</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['registration'],
    data() {
        return {
            outsideClick: true,
        }
    },
    methods: {
        onclickCloseModal(e) {
            if($(e.target).hasClass('fade-effect') || $(e.target).parent().hasClass('fade-effect')) {
                if (!window.getSelection().toString() && this.outsideClick) {
                    this.$store.dispatch("page/closeModal");
                    this.$parent.isModalActive = false;
                }
            }
        },
        closeModal() {
            if(this.outsideClick) {
                this.$store.dispatch("page/closeModal");
                this.$parent.isModalActive = false;
            }
        }
    },
}
</script>