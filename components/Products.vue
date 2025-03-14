<template>
  <section id="products">
    <div class="bg-[#D4338B]">
      <h2 class="text-4xl sm:text-5xl md:text-6xl lg:text-6xl text-center text-white py-6 xl:mb-10">
        Nos produits
      </h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 pb-10">
        <div
          v-for="(product, index) in products"
          :key="index"
          class="relative group cursor-pointer overflow-hidden rounded-2xl"
          @click="toggleOverlay(index)"
        >
          <img
            src="https://placehold.co/600x400"
            class="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
            alt="Produit"
          />
          <div
            class="absolute inset-0 bg-[#D4338B]/80 flex items-center justify-center rounded-2xl transition-opacity duration-300"
            :class="{
              'opacity-100': hoveredIndex === index,
              'opacity-0 group-hover:opacity-100': hoveredIndex !== index
            }"
          >
            <span class="text-white text-2xl font-semibold">Glace</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const hoveredIndex = ref<number | null>(null)

const toggleOverlay = (index: number) => {
  hoveredIndex.value = hoveredIndex.value === index ? null : index
}

// Démo de données statiques
const products = Array.from({ length: 6 }, (_, i) => i)
</script>
