<template>
  <div>
    <!-- hero -->
    <div id="header" class="bg-cs-dark-blue">
      <div
        class="pb-30 pt-10 px-5 sm:px-15 lg:px-32 lg:max-w-[1320px] xl:max-w-[1536px] mx-auto flex justify-center"
      >
        <div class="w-full md:w-[700px] text-white py-10 pt-6">
          <div
            class="text-3.5xl lg:text-4xl xl:text-4.5xl leading-12 xl:leading-14 text-center px-4 sm:px-0"
          >
            Get In Touch
          </div>
          <div class="mt-2.5 text-2base text-center">
            We're here to help and answer any question you might have. <br />
            We look forward to hearing from you.
          </div>
        </div>

        <!-- dot -->
        <div class="absolute left-0 top-[30%]">
          <img
            class="w-20"
            src="~/assets/img/illustrations/dot.png"
            alt="dot"
          />
        </div>
      </div>
    </div>

    <div
      class="relative z-[1] px-5 sm:px-15 lg:px-32 pb-20 lg:max-w-[1320px] xl:max-w-[1536px] mx-auto -mt-25"
    >
      <div class="grid lg:grid-cols-3 gap-6">
        <div
          class="flex flex-col items-center gap-4 text-center p-8 rounded-xl shadow-cs-50 border border-cs-border bg-white"
        >
          <div
            class="w-18 h-18 rounded-full bg-cs-dark-blue/5 flex justify-center items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="w-8 h-8 text-cs-dark-blue"
              fill="currentColor"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                d="M9.366 10.682a10.556 10.556 0 0 0 3.952 3.952l.884-1.238a1 1 0 0 1 1.294-.296 11.422 11.422 0 0 0 4.583 1.364 1 1 0 0 1 .921.997v4.462a1 1 0 0 1-.898.995c-.53.055-1.064.082-1.602.082C9.94 21 3 14.06 3 5.5c0-.538.027-1.072.082-1.602A1 1 0 0 1 4.077 3h4.462a1 1 0 0 1 .997.921A11.422 11.422 0 0 0 10.9 8.504a1 1 0 0 1-.296 1.294l-1.238.884zm-2.522-.657l1.9-1.357A13.41 13.41 0 0 1 7.647 5H5.01c-.006.166-.009.333-.009.5C5 12.956 11.044 19 18.5 19c.167 0 .334-.003.5-.01v-2.637a13.41 13.41 0 0 1-3.668-1.097l-1.357 1.9a12.442 12.442 0 0 1-1.588-.75l-.058-.033a12.556 12.556 0 0 1-4.702-4.702l-.033-.058a12.442 12.442 0 0 1-.75-1.588z"
              />
            </svg>
          </div>

          <div class="font-bold text-xl">Phone</div>

          <a
            href="https://api.whatsapp.com/send?phone=6285333009777"
            target="_blank"
            class="underline"
            >+62 853 3300 9777 (Indra)</a
          >
          <a
            href="https://api.whatsapp.com/send?phone=6285107013166"
            target="_blank"
            class="inline-block underline"
            >+62 851 0701 3166 (Adhi)</a
          >

          <a
            href="https://api.whatsapp.com/send?phone=6285333009777"
            target="_blank"
            class="px-5.5 py-3 text-2sm mt-2 rounded-full border-2 border-cs-dark-blue bg-cs-dark-blue hover:bg-cs-dark-blue/90 text-white transition-colors duration-500 font-bold whitespace-nowrap"
          >
            Contact Now
          </a>
        </div>
        <div
          class="flex flex-col items-center gap-4 text-center p-8 rounded-xl shadow-cs-50 border border-cs-border bg-white"
        >
          <div
            class="w-18 h-18 rounded-full bg-cs-dark-blue/5 flex justify-center items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="w-8 h-8 text-cs-dark-blue"
              fill="currentColor"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                d="M2 5l7-3 6 3 6.303-2.701a.5.5 0 0 1 .697.46V19l-7 3-6-3-6.303 2.701a.5.5 0 0 1-.697-.46V5zm14 14.395l4-1.714V5.033l-4 1.714v12.648zm-2-.131V6.736l-4-2v12.528l4 2zm-6-2.011V4.605L4 6.319v12.648l4-1.714z"
              />
            </svg>
          </div>

          <div class="font-bold text-xl">Address</div>

          <div>
            [Office] Jl. Kenyeri No.82, Sumerta Kaja, Kecamatan. Denpasar
            Timur., Kota Denpasar, Bali 80236
          </div>

          <div>
            [Community Representative] Jl. Setia Budi No.24A, Kuta, Kec. Kuta,
            Kabupaten Badung, Bali 80361
          </div>
        </div>
        <div
          class="flex flex-col items-center gap-4 text-center p-8 rounded-xl shadow-cs-50 border border-cs-border bg-white"
        >
          <div
            class="w-18 h-18 rounded-full bg-cs-dark-blue/5 flex justify-center items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="w-8 h-8 text-cs-dark-blue"
              fill="currentColor"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm17 4.238l-7.928 7.1L4 7.216V19h16V7.238zM4.511 5l7.55 6.662L19.502 5H4.511z"
              />
            </svg>
          </div>

          <div class="font-bold text-xl">Email</div>

          <a href="mailto:info@onjourney.id" class="underline"
            >info@onjourney.id</a
          >
          <a
            href="mailto:indra@onjourney.id"
            class="inline-block mt-1 underline"
            >indra@onjourney.id</a
          >

          <a
            href="mailto:info@onjourney.id"
            class="px-5.5 py-3 text-2sm mt-2 rounded-full border-2 border-cs-dark-blue bg-cs-dark-blue hover:bg-cs-dark-blue/90 text-white transition-colors duration-500 font-bold whitespace-nowrap"
          >
            Email Now
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import getSiteMeta from "~/utils/getSiteMeta";

export default {
  name: "GetInTouchPage",
  layout: "main",
  head() {
    return {
      title: "Get In Touch - On Journey",
      meta: [...this.meta],
      link: [
        {
          hid: "canonical",
          rel: "canonical",
          href: `${process.env.baseUrl}${this.$route.path}`,
        },
      ],
    };
  },
  computed: {
    meta() {
      const metaData = {
        url: `${process.env.baseUrl}${this.$route.path}`,
        title: "Get In Touch - On Journey",
        description: `We already have many potential partners who will join! let's join and contribute to the tourism ecosystem`,
        mainImage:
          `${process.env.baseUrl}` + require("~/assets/img/seo-img.jpg"),
      };
      return getSiteMeta(metaData);
    },
  },
  methods: {},
};
</script>
