<template>
  <section id="hero"
    class="w-full max-h-screen h-screen flex flex-col lg:flex-row items-center justify-center overflow-hidden">
    <!-- Texte -->
    <div v-if="bannerHero" class="w-full lg:w-1/2 pt-5 px-6 xl:px-24 2xl:px-32 mb-8 lg:mb-0 text-center lg:text-left">
      <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-6xl mb-6 text-[#D4338B]">
        <span v-html="bannerHero.title" />
      </h1>
      <p class="text-sm sm:text-base lg:text-lg mb-6 text-[#D4338B]">
        <span v-html="bannerHero.text" />
      </p>
      <div class="flex flex-col lg:flex-row items-center justify-start mt-6 lg:mt-10">
        <NuxtLink class="rounded-4xl text-md uppercase py-4 px-10 no-underline flex justify-center mb-4 lg:mb-0"
          style="border: #D4338B solid 1px; width: 200px; background-color: #D4338B; color: #fff; transition: all 0.3s ease;"
          to="#products">
          Nos produits
        </NuxtLink>

        <NuxtLink class="rounded-4xl text-md uppercase py-4 px-10 no-underline flex justify-center lg:ms-10"
          style="border: #D4338B solid 1px; width: 200px; color: #D4338B; transition: all 0.3s ease;" to="#contact">
          Contactez-nous
        </NuxtLink>
      </div>
    </div>

    <!-- Image en background -->
    <div class="w-full lg:w-1/2 h-full bg-no-repeat bg-center bg-cover"
      :style="bannerHero?.image ? `background-image: url('${bannerHero.image}')` : ''"></div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

// Refs pour le contenu dynamique
const bannerHero = ref<{ title: string; text: string; image: string } | null>(null)

onMounted(async () => {
  try {
    const response = await fetch('https://schoups25back-production.up.railway.app/api/onepagecontent')
    const data = await response.json()
    bannerHero.value = data.banner_hero
  } catch (error) {
    console.error('Erreur lors de la récupération des données hero:', error)
  }
})
</script>
