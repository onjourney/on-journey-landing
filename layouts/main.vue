<template>
    <Nuxt />
</template>

<script>
export default {
    watch: {
        $route(val) {
            console.log(val);
        },
    }
}
</script>