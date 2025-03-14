<template>
  <section id="partners">
    <div class="w-full flex flex-col items-center">
      <h2 class="text-4xl sm:text-5xl md:text-6xl lg:text-6xl my-5" style="color: #D4338B;">Nos partenaires</h2>
      <div class="w-full flex justify-between pb-10 items-center flex-wrap">
        <!-- Left Button -->
        <button class="w-1/12 sm:w-1/6 md:w-1/12" @click="swiper.prev()">
          <font-awesome :style="{color: '#d3338b'}" icon="chevron-left" class="fa-4x" />
        </button>

        <!-- Swiper Container -->
        <swiper-container class="w-10/12 sm:w-10/12 md:w-10/12" ref="containerRef">
          <swiper-slide v-for="(slide, idx) in slides" :key="idx" style="background-color: #fff; color: #d3338b;">
            <img :src="`/images/logo-partner${slide}.png`" :alt="`Slide ${slide}`"
              class="object-cover w-2/3 sm:w-1/3 md:w-1/2 lg:w-1/2 xl:w-1/4 " />
          </swiper-slide>
        </swiper-container>

        <!-- Right Button -->
        <button class="w-1/12 sm:w-1/6 md:w-1/12" @click="swiper.next()">
          <font-awesome :style="{color: '#d3338b'}" icon="chevron-right" class="fa-4x" />
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const containerRef = ref(null)
const slides = ref(Array.from({ length: 3 }, (_, i) => i + 1)) // [1, 2, ..., 10]

const swiper = useSwiper(containerRef)

onMounted(() => {
  // You can do stuff here later if needed
})
</script>

<style scoped>
swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  height: 40vh;
  /* augmenté pour les images */
  font-size: 4rem;
  overflow: hidden;
}

/* Responsive design adjustments */
@media screen and (max-width: 767px) {
  /* #partners {
    padding: 20px;
  } */

  .fa-4x {
    display: none;
    /* Make the arrows smaller on mobile */
  }

  .swiper-slide img {
    width: 70%;
    /* Make images more responsive on small screens */
  }
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  #partners {
    padding: 30px;
  }

  .swiper-slide img {
    width: 50%;
    /* Make images a bit larger on tablet */
  }
}

@media screen and (min-width: 1025px) {
  .swiper-slide img {
    width: 25%;
    /* Normal size on larger screens */
  }
}
</style>
