<template>
  <div
    class="px-5 sm:px-15 lg:px-32 lg:max-w-[1320px] xl:max-w-[1536px] mx-auto border-t border-cs-border"
  >
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-9 pt-15 gap-14 text-cs-text-primary"
    >
      <div class="col-span-1 lg:col-span-3 lg:pr-10">
        <h1 class="font-extrabold text-2xl">On-Journey</h1>
        <p class="mb-5 mt-3 inline-block text-2sm leading-7">
          Ayo bergabung bersama kami. Kami telah bekerja sama dengan banyak
          pihak. Jika kamu tertarik menjadi partner kami, segera daftarkan
          usahamu sekarang juga.
        </p>
        <button
          type="button"
          @click="scrollToRegister"
          class="inline-block px-4.5 py-3 text-2sm font-semibold rounded-full bg-cs-dark-blue hover:transform hover:translate-y-[-6%] transition-all duration-500 hover:bg-[#006ca3] text-white hover:shadow-lg focus:outline-none focus:ring"
        >
          Join with us
        </button>
      </div>
      <div class="col-span-1 lg:col-span-2">
        <h1 class="font-bold text-lg">Contact Us</h1>
        <ul class="mt-5 text-2sm">
          <li class="mt-4">
            <div>
              <span class="font-medium">[Office]</span> Jl. Kenyeri No.82,
              Sumerta Kaja, Kecamatan. Denpasar Timur., Kota Denpasar, Bali
              80236
            </div>
            <div class="mt-1">
              <span class="font-medium whitespace-nowrap"
                >[Community Representative]</span
              >
              Jl. Setia Budi No.24A, Kuta, Kec. Kuta, Kabupaten Badung, Bali
              80361
            </div>
          </li>
          <li class="mt-4">
            <a href="mailto:info@onjourney.id" class="block"
              >info@onjourney.id</a
            >
            <a href="mailto:indra@onjourney.id" class="block mt-1"
              >indra@onjourney.id</a
            >
          </li>
          <li class="mt-4">
            <a href="tel:+62 853 3300 9777" class="block"
              >+62 853 3300 9777 (Indra)</a
            >
            <a href="tel:+62 851 0701 3166" class="block mt-1"
              >+62 851 0701 3166 (Adhi)</a
            >
          </li>
        </ul>
      </div>
      <div class="col-span-1 lg:col-span-2">
        <h1 class="font-bold text-lg">Learn More</h1>
        <ul class="flex flex-col mt-5 text-2sm">
          <li>
            <nuxt-link to="/" custom exact v-slot="{ href, navigate }">
              <a :href="href" @click="navigate">About Us</a>
            </nuxt-link>
          </li>
          <li class="mt-3">
            <nuxt-link to="/partner" custom exact v-slot="{ href, navigate }">
              <a :href="href" @click="navigate">Partner</a>
            </nuxt-link>
          </li>
          <li class="mt-3">
            <nuxt-link
              to="/travel-agent/register"
              custom
              exact
              v-slot="{ href, navigate }"
            >
              <a :href="href" @click="navigate">Travel Agent</a>
            </nuxt-link>
          </li>
          <li class="mt-3">
            <nuxt-link
              to="/local-transport/register"
              custom
              exact
              v-slot="{ href, navigate }"
            >
              <a :href="href" @click="navigate">Local Transport</a>
            </nuxt-link>
          </li>
          <li class="mt-3">
            <a href="#">Explore</a>
          </li>
        </ul>
      </div>
      <div class="col-span-1 lg:col-span-2">
        <h1 class="font-bold text-lg">Social</h1>
        <ul class="mt-5 text-2sm">
          <li class="mt-4">
            <span>
              Have a question for us? <br />
              We'll answer your problem here!
            </span>
          </li>
          <li class="mt-5 flex items-center">
            <!-- twitter -->
            <a href="#" target="blank">
              <svg
                class="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"
                ></path>
              </svg>
            </a>

            <!-- facebook -->
            <a href="#" target="blank" class="ml-4">
              <svg
                class="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z"
                ></path>
              </svg>
            </a>

            <!-- youtube -->
            <a href="#" target="blank" class="ml-4">
              <svg
                class="w-5.5 h-5.5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24
                            "
                fill="currentColor"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022zM10 15.5l6-3.5-6-3.5v7z"
                ></path>
              </svg>
            </a>

            <!-- instagram -->
            <a
              href="https://www.instagram.com/onjourney.id/"
              target="blank"
              class="ml-4"
            >
              <svg
                class="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0-2a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm6.5-.25a1.25 1.25 0 0 1-2.5 0 1.25 1.25 0 0 1 2.5 0zM12 4c-2.474 0-2.878.007-4.029.058-.784.037-1.31.142-1.798.332-.434.168-.747.369-1.08.703a2.89 2.89 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.006 9.075 4 9.461 4 12c0 2.474.007 2.878.058 4.029.037.783.142 1.31.331 1.797.17.435.37.748.702 1.08.337.336.65.537 1.08.703.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.474 0 2.878-.007 4.029-.058.782-.037 1.309-.142 1.797-.331.433-.169.748-.37 1.08-.702.337-.337.538-.65.704-1.08.19-.493.296-1.02.332-1.8.052-1.104.058-1.49.058-4.029 0-2.474-.007-2.878-.058-4.029-.037-.782-.142-1.31-.332-1.798a2.911 2.911 0 0 0-.703-1.08 2.884 2.884 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.925 4.006 14.539 4 12 4zm0-2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2z"
                ></path>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div
      class="flex flex-col md:flex-row items-center justify-between w-full mt-15 py-10 border-t border-cs-border"
    >
      <div class="text-sm">
        © 2021 On-Journey | PT. Stargazer Teknologi Indonesia. All rights
        reserved.
      </div>

      <div>
        <a href="" class="text-sm hover:underline">Terms and Conditions</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    scrollToRegister() {
      if (this.$route.path != "/become-our-partner") {
        this.$router.push({ path: "/become-our-partner" });
        localStorage.setItem("scrollToRegister", true);
      } else {
        if ($("#registerTab")[0]) {
          $("#registerTab")[0].scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "center",
          });
        }
      }
    },
  },
};
</script>

<style></style>
