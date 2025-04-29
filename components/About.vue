<template>
  <section v-if="bannerAbout" id="about" class="bg-[#D4338B] max-h-screen overflow-hidden">
    <div class="flex flex-col-reverse lg:flex-row w-full h-screen items-center">
      <!-- Image en background -->
      <div class="w-full lg:w-1/2 h-full bg-no-repeat bg-center bg-cover"
        :style="bannerAbout.image ? `background-image: url('${bannerAbout.image}')` : ''"></div>

      <!-- Texte -->
      <div id="aboutText" class="w-full p-5 lg:w-1/2 px-6 xl:px-24 2xl:px-32 text-center lg:text-left">
        <h2 class="text-4xl sm:text-5xl md:text-6xl lg:text-6xl mb-6 lg:mb-10 text-white">
          <span v-html="bannerAbout.title" />
        </h2>
        <p class="text-sm sm:text-base lg:text-lg mb-6 text-white">
          <span v-html="bannerAbout.text" />
        </p>
        <div class="flex flex-col lg:flex-row items-center justify-start mt-6 lg:mt-10">
          <NuxtLink v-if="footer?.facebook" :href="footer.facebook" target="_blank" rel="noopener noreferrer"
            class="rounded-4xl text-md uppercase py-4 px-10 no-underline flex justify-center mb-4 lg:mb-0 w-[200px] bg-white text-[#D4338B] border border-white transition-all duration-300 ease-in-out hover:bg-[#D4338B] hover:text-white hover:-translate-y-1 hover:shadow-lg">
            Facebook
          </NuxtLink>
          <NuxtLink v-if="footer?.instagram" :href="footer.instagram" target="_blank" rel="noopener noreferrer"
            class="rounded-4xl text-md uppercase py-4 px-10 no-underline flex justify-center lg:ms-10 w-[200px] text-white border border-white transition-all duration-300 ease-in-out hover:bg-white hover:text-[#D4338B] hover:-translate-y-1 hover:shadow-lg">
            Instagram
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

// Refs pour le contenu dynamique
const bannerAbout = ref<{ title: string; text: string; image: string } | null>(null)
const footer = ref<{ facebook: string; instagram: string;} | null>(null)

onMounted(async () => {
  try {
    const response = await fetch('https://schoups25back-production.up.railway.app/api/onepagecontent')
    const data = await response.json()
    bannerAbout.value = data.banner_about
    footer.value = data.footer;
  } catch (error) {
    console.error('Erreur lors de la récupération des données hero:', error)
  }
})
</script>
