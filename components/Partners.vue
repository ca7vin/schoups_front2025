<template>
  <section id="partners">
    <div class="w-full flex flex-col items-center">
      <h2 class="uppercase text-4xl sm:text-5xl md:text-6xl lg:text-6xl py-6 md:py-8" style="color: #D4338B;">Nos partenaires</h2>
      <div class="w-full flex justify-between pb-10 items-center flex-wrap">
        <!-- Left Button -->
        <button class="w-1/12 sm:w-1/6 md:w-1/12"
                @click="slidePrev"
                type="button">
          <font-awesome :style="{ color: '#d3338b' }" icon="chevron-left" class="fa-4x" />
        </button>
        <!-- Swiper Container -->
        <div class="w-10/12 sm:w-10/12 md:w-10/12">
          <Swiper
            :autoplay="{ delay: 3000, disableOnInteraction: false }"
            :loop="true"
            :modules="modules"
            ref="swiperRef"
            @mouseenter="stopAutoplay"
            @mouseleave="startAutoplay"
          >
            <SwiperSlide v-for="(partner, idx) in partners" :key="idx">
              <div class="flex justify-center items-center bg-white" style="color: #d3338b;">
                <img :src="partner.image"
                     :alt="`image ${partner.nom}`"
                     class="object-cover w-2/3 sm:w-1/3 md:w-1/2 lg:w-1/2 xl:w-1/4" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <!-- Right Button -->
        <button class="w-1/12 sm:w-1/6 md:w-1/12"
                @click="slideNext"
                type="button">
          <font-awesome :style="{ color: '#d3338b' }" icon="chevron-right" class="fa-4x" />
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useContent } from '~/composables/useContent'
// On importe les modules de Swiper pour l'autoplay et la navigation manuelle
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/nuxt'

const modules = [Autoplay]

const { content } = useContent()
const partners = computed(() => {
  if (!Array.isArray(content.value?.partners)) return []
  return content.value.partners.map((partner: any) => ({
    nom: partner.nom,
    image: partner.image,
  }))
})

const swiperRef = ref<any>(null)

function slidePrev() {
  swiperRef.value?.swiper?.slidePrev()
}
function slideNext() {
  swiperRef.value?.swiper?.slideNext()
}
function stopAutoplay() {
  swiperRef.value?.swiper?.autoplay?.stop?.()
}
function startAutoplay() {
  swiperRef.value?.swiper?.autoplay?.start?.()
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
