<template>
    <div :class="parentClass" ref="lazyWrapper" class="lazy-effect">
        <img :class="imageClass" ref="lazyImage" class="lazy" :data-src="src" :alt="alt" @error="setDefaultImage">
    </div>
</template>

<script>
export default {
    name: 'lazy-image',
    props: [
        'src',
        'parentClass',
        'imageClass',
        'alt',
        'defaultImage'
    ],
    watch: {
        async src () {
            await this.$refs.lazyWrapper.classList.add('lazy-effect')
            await this.$refs.lazyImage.classList.add('lazy')
            this.handleFunction();
        }
    },
    created() {
        if (process.client) {
            this.handleFunction();
        }
    },
    mounted() {
        this.handleFunction();
    },
    methods: {
        setDefaultImage(e) {
            if (this.defaultImage == 'user') {
                e.target.src = require('~/assets/img/no_profile.png')
            } else {
                e.target.src = require('~/assets/img/no_image.png')
            }
        },
        handleFunction() {
            var lazyloadImages;    
            if ("IntersectionObserver" in window) {
                lazyloadImages = document.querySelectorAll(".lazy");
                var imageObserver = new IntersectionObserver(function(entries, observer) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        var image = entry.target;
                        image.src = image.dataset.src;
                        image.onload = function() {
                            image.classList.remove('lazy');
                            image.removeAttribute('data-src');
                            image.parentElement.classList.remove('lazy-effect');
                        };
                        imageObserver.unobserve(image);
                    }
                });
                });

                lazyloadImages.forEach(function(image) {
                    imageObserver.observe(image);
                });
            } else {  
                this.lazyLoadFunction();
            }
        },
        lazyLoadFunction() {
            var lazyloadThrottleTimeout;
            lazyloadImages = document.querySelectorAll(".lazy");
            
            function lazyload () {
                if(lazyloadThrottleTimeout) {
                    clearTimeout(lazyloadThrottleTimeout);
                }    
                lazyloadThrottleTimeout = setTimeout(function() {
                    lazyloadImages = document.querySelectorAll(".lazy"); //new
                    var scrollTop = window.pageYOffset;
                    lazyloadImages.forEach(function(img) {
                        if(img.offsetTop < (window.innerHeight + scrollTop)) {
                            img.src = img.dataset.src;
                            img.onload = function() {
                                img.classList.remove('lazy');
                                img.removeAttribute('data-src');
                                img.parentElement.classList.remove('lazy-effect');
                            };
                        }
                    });
                    if(lazyloadImages.length == 0) { 
                        document.removeEventListener("scroll", lazyload);
                        window.removeEventListener("resize", lazyload);
                        window.removeEventListener("orientationChange", lazyload);
                    }
                }, 20);
            }

            $(document).on("scroll", lazyload);
            $(window).on("resize", lazyload);
            $(window).on("orientationChange", lazyload);
        }
    },
    data() {
        return {

        }
    }
}
</script>