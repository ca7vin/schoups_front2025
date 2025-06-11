<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useContent } from '~/composables/useContent'

const { content } = useContent()
const partners = computed(() => {
  if (!Array.isArray(content.value?.partners)) return []
  return content.value.partners.map((partner: any) => ({
    nom: partner.nom,
    image: partner.image,
  }))
})

const containerRef = ref<any>(null)

// Navigation
function slidePrev() {
  containerRef.value?.slidePrev()
}
function slideNext() {
  containerRef.value?.slideNext()
}

// (Optionnel : parfois nécessaire pour l'autoplay en SSR)
onMounted(() => {
  setTimeout(() => {
    containerRef.value?.autoplay?.start?.()
  }, 300)
})
</script>

<template>
  <section id="partners">
    <div class="w-full flex flex-col items-center">
      <h2 class="uppercase text-4xl ...">Nos partenaires</h2>
      <div class="w-full flex justify-between pb-10 items-center flex-wrap">
        <!-- Left Button -->
        <button class="..." @click="slidePrev">
          <font-awesome ... icon="chevron-left" class="fa-4x" />
        </button>
        <!-- Swiper Container -->
        <swiper-container
          class="w-10/12 ..."
          ref="containerRef"
          :autoplay="{ delay: 3000, disableOnInteraction: false }"
          :loop="true"
        >
          <swiper-slide v-for="(partner, idx) in partners" :key="idx" ...>
            <img :src="partner.image" :alt="`image ${partner.nom}`" ... />
          </swiper-slide>
        </swiper-container>
        <!-- Right Button -->
        <button class="..." @click="slideNext">
          <font-awesome ... icon="chevron-right" class="fa-4x" />
        </button>
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
