<template>
  <div
    class="mt-22 mb-5 px-5 sm:px-15 lg:px-32 lg:max-w-[1320px] xl:max-w-[1536px] mx-auto text-cs-text-primary"
  >
    <h1 class="text-1.5xl sm:text-3xl font-extrabold text-center">
      Enter your email and start to <br />
      collaborate a team with On-Journey
    </h1>

    <div class="flex justify-center">
      <p class="text-sm mt-4 text-center w-[500px]">
        Subscribe to our newsletter to get the latest news, updates and amazing
        offers delivered directly in your inbox.
      </p>
    </div>

    <form
      @submit.prevent="emailSubscriptionEmail()"
      class="flex gap-3 sm:gap-5 justify-center mt-8"
    >
      <input
        type="email"
        class="px-4 py-3.5 rounded-lg bg-gray-100 flex-1 sm:flex-none w-auto sm:w-[270px] text-2sm focus:outline-none"
        placeholder="example@email.com"
      />
      <button
        type="submit"
        class="text-2sm whitespace-nowrap px-6 py-3.5 rounded-lg bg-cs-dark-blue hover:bg-[#006ca3] transition-colors duration-300 text-white"
      >
        Subscribe
      </button>
    </form>
    <div
      v-if="this.errorMessages.subscription"
      class="flex items-center justify-center mt-3.5 text-red-500 text-2sm"
    >
      {{ this.errorMessages.subscription }}
    </div>
  </div>
</template>

<script>
export default {
  name: "email-subscription",
  data() {
    return {
      errorMessages: {
        subscription: "",
      },
    };
  },
  methods: {
    emailSubscriptionEmail() {
      if (!!!this.errorMessages.subscription) {
        this.errorMessages.subscription =
          "Ops, sorry this feature is not implemented yet.";
        setTimeout(() => {
          this.errorMessages.subscription = "";
        }, 5000);
      }
    },
  },
};
</script>

<style></style>
