<template>
  <section id="partners">
    <div class="w-full flex flex-col items-center">
      <h2
        class="uppercase text-4xl sm:text-5xl md:text-6xl lg:text-6xl py-6 md:py-8"
        style="color: #D4338B;"
      >
        Nos partenaires
      </h2>
      <div class="w-full flex justify-between pb-10 items-center flex-wrap">
        <!-- Left Button -->
        <button class="w-1/12 sm:w-1/6 md:w-1/12" @click="slidePrev">
          <font-awesome
            :style="{ color: '#d3338b' }"
            icon="chevron-left"
            class="fa-4x"
          />
        </button>

        <!-- Swiper Container -->
        <Swiper
          class="w-10/12 sm:w-10/12 md:w-10/12"
          :autoplay="{ delay: 3000, disableOnInteraction: false }"
          :loop="true"
          @swiper="onSwiper"
          @mouseenter="stopAutoplay"
          @mouseleave="startAutoplay"
        >
          <SwiperSlide
            v-for="(partner, idx) in partners"
            :key="idx"
            style="background-color: #fff; color: #d3338b;"
          >
            <img
              :src="partner.image"
              :alt="`image ${partner.nom}`"
              class="object-cover w-2/3 sm:w-1/3 md:w-1/2 lg:w-1/2 xl:w-1/4"
            />
          </SwiperSlide>
        </Swiper>

        <!-- Right Button -->
        <button class="w-1/12 sm:w-1/6 md:w-1/12" @click="slideNext">
          <font-awesome
            :style="{ color: '#d3338b' }"
            icon="chevron-right"
            class="fa-4x"
          />
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import SwiperCore, { Autoplay } from 'swiper'
import { useContent } from '~/composables/useContent'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import 'swiper/css/autoplay'

SwiperCore.use([Autoplay])

const { content } = useContent()

const partners = computed(() => {
  if (!Array.isArray(content.value?.partners)) return []
  return content.value.partners.map((partner: any) => ({
    nom: partner.nom,
    image: partner.image,
  }))
})

const swiper = ref<SwiperType | null>(null)

function onSwiper(swiperInstance: SwiperType) {
  swiper.value = swiperInstance
}

function slidePrev() {
  swiper.value?.slidePrev()
}
function slideNext() {
  swiper.value?.slideNext()
}

function stopAutoplay() {
  swiper.value?.autoplay?.stop()
}
function startAutoplay() {
  swiper.value?.autoplay?.start()
}
</script>

<style scoped>
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  height: 40vh;
  font-size: 4rem;
  overflow: hidden;
}

/* Responsive design adjustments */
@media screen and (max-width: 767px) {
  .fa-4x {
    display: none;
  }

  .swiper-slide img {
    width: 70%;
  }
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  #partners {
    padding: 30px;
  }

  .swiper-slide img {
    width: 50%;
  }
}

@media screen and (min-width: 1025px) {
  .swiper-slide img {
    width: 25%;
  }
}
</style>
