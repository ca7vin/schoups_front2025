<script setup lang="ts">
const containerRef = ref(null)
const slides = ref(Array.from({ length: 3 }, (_, i) => i + 1)) // [1, 2, ..., 10]

const swiper = useSwiper(containerRef)

onMounted(() => {
  // You can do stuff here later if needed
})
</script>

<template>
  <div class="w-full flex justify-around pb-10">
    <button class="w-1/12" @click="swiper.prev()">
      Prev
    </button>

    <swiper-container class="w-10/12" ref="containerRef">
      <swiper-slide
        v-for="(slide, idx) in slides"
        :key="idx"
        style="background-color: #fff; color: #d3338b;"
      >
        <img
          :src="`/images/img${slide}.png`"
          :alt="`Slide ${slide}`"
          class="h-full object-cover"
        />
      </swiper-slide>
    </swiper-container>

    <button class="w-1/12" @click="swiper.next()">
      Next
    </button>
  </div>
</template>

<style lang="css">
swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  height: 40vh; /* augmenté pour les images */
  font-size: 4rem;
  overflow: hidden;
}
</style>
