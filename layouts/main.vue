<template>
    <div class="mx-auto">
        <!-- navigation -->
        <NavigationMain />
        <NavigationMainMobile :isNavMobileActive="isNavMobileActive" />
        
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