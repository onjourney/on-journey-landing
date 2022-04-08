<template>
    <div class="mx-auto">
        <!-- navigation -->
        <NavigationMain />
        <transition name="fade" mode="out-in">
            <NavigationMainMobile v-if="isNavMobileActive" />
        </transition>
        
        <Nuxt />

        <!-- footer -->
        <FooterMain />

        <!-- btn to top -->
        <ButtonToTop />
    </div>
</template>

<script>
export default {
    data() {
        return {
            isNavMobileActive: false
        }
    }
}
</script>