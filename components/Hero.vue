<template>
  <section id="hero"
    class="w-full max-h-screen h-screen flex flex-col lg:flex-row items-center justify-center overflow-hidden">
    <!-- Texte -->
    <div v-if="bannerHero" class="w-full lg:w-1/2 pt-5 px-6 xl:px-24 2xl:px-32 mb-8 lg:mb-0 text-center lg:text-left">
      <h1 class="uppercase text-4xl sm:text-5xl md:text-6xl lg:text-6xl mb-6 text-[#D4338B]">
        <span v-html="bannerHero.title" />
      </h1>
      <p class="text-sm sm:text-base lg:text-lg mb-6 text-[#D4338B]">
        <span v-html="bannerHero.text" class="rich-content" />
      </p>
      <div class="flex flex-col lg:flex-row items-center justify-start mt-6 lg:mt-10">
        <NuxtLink
          class="rounded-4xl text-md uppercase py-4 px-10 no-underline flex justify-center mb-4 lg:mb-0 w-[200px] bg-[#D4338B] text-white border border-[#D4338B] transition-all duration-300 ease-in-out hover:bg-white hover:text-[#D4338B] hover:-translate-y-1 hover:shadow-lg"
          to="#products">
          Nos produits
        </NuxtLink>

        <NuxtLink
          class="rounded-4xl text-md uppercase py-4 px-10 no-underline flex justify-center lg:ms-10 w-[200px] border border-[#D4338B] text-[#D4338B] transition-all duration-300 ease-in-out hover:bg-[#D4338B] hover:text-white hover:-translate-y-1 hover:shadow-lg"
          to="#contact">
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
import { ref, watchEffect } from 'vue'
import { useContent } from '~/composables/useContent'

const { content } = useContent()

const bannerHero = ref<{ title: string; text: string; image: string } | null>(null)

// Dès que `content` est dispo, on récupère `banner_hero`
watchEffect(() => {
  if (content.value?.banner_hero) {
    bannerHero.value = content.value.banner_hero
  }
})
</script>

<style>
#hero .rich-content a {
  font-weight: bold;
  text-decoration: none; /* Pas de soulignement de base */
  transition: text-decoration 0.2s;
}

#hero .rich-content a:hover {
  text-decoration: underline;
}
</style>

