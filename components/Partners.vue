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
          <swiper-slide v-for="(partner, idx) in partners" :key="idx" style="background-color: #fff; color: #d3338b;">
            <img :src="partner.image" :alt="`image ${partner.nom}`"
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
import { ref, onMounted } from 'vue';

const containerRef = ref(null);
const partners = ref<Array<{ nom: string, image: string }>>([]);

// Récupérer les partenaires depuis l'API
onMounted(async () => {
  try {
    const response = await fetch('https://schoupsfront2025-production.up.railway.app/api/onepagecontent');
    const data = await response.json();

    // Vérifier que la réponse contient un tableau de partenaires
    if (Array.isArray(data.partners)) {
      partners.value = data.partners.map((partner: any) => ({
        nom: partner.nom,
        image: partner.image, // Assurez-vous que le champ est correct dans votre API
      }));
    } else {
      console.error("Le champ 'partners' est manquant ou n'est pas un tableau.");
    }
  } catch (error) {
    console.error('Erreur lors du chargement des partenaires:', error);
  }
});

const swiper = useSwiper(containerRef);

</script>

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
