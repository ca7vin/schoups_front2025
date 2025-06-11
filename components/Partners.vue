<script setup lang="ts">
import { ref, computed } from 'vue'
import { useContent } from '~/composables/useContent'

const { content } = useContent()

const partners = computed(() => {
  // Simule 3+ slides si jamais partners est trop court (pour test)
  if (!Array.isArray(content.value?.partners)) return []
  const arr = content.value.partners.map((partner: any) => ({
    nom: partner.nom,
    image: partner.image,
  }))
  // Option de fallback pour tester facilement si tu veux
  // while (arr.length < 4) arr.push({ nom: 'Fake', image: 'https://via.placeholder.com/150' })
  return arr
})

// ref DOM pour swiper-container (web component)
const containerRef = ref<any>(null)

// Le mode loop n'est activé que si 3 slides ou plus
const loopEnabled = computed(() => partners.value.length > 2)

function slidePrev() {
  if (containerRef.value) {
    containerRef.value.dispatchEvent(new CustomEvent('swiperPrev'))
  }
}
function slideNext() {
  if (containerRef.value) {
    containerRef.value.dispatchEvent(new CustomEvent('swiperNext'))
  }
}
</script>

<template>
  <section id="partners">
    <div class="w-full flex flex-col items-center">
      <h2
        class="uppercase text-4xl sm:text-5xl md:text-6xl lg:text-6xl py-6 md:py-8"
        style="color: #D4338B;"
      >
        Nos partenaires
      </h2>
      <div class="w-full flex justify-center pb-10 items-center flex-wrap">

        <!-- Swiper Container -->
        <ClientOnly>
          <swiper-container
            :key="partners.length"
            ref="containerRef"
            class="w-10/12 sm:w-10/12 md:w-10/12"
            :loop="loopEnabled"
            slides-per-view="1"
            :autoplay="{ delay: 3000, disableOnInteraction: false }"
            style="--swiper-navigation-color: #d4338b;"
          >
            <swiper-slide
              v-for="(partner, idx) in partners"
              :key="idx"
              style="background-color: #fff; color: #d3338b;"
            >
              <img
                :src="partner.image"
                :alt="`image ${partner.nom}`"
                class="object-cover w-2/3 sm:w-1/3 md:w-1/2 lg:w-1/2 xl:w-1/4"
              />
            </swiper-slide>
          </swiper-container>
        </ClientOnly>

      </div>
    </div>
  </section>
</template>

<style scoped>
swiper-slide {
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
