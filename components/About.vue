<template>
  <section id="about" class="bg-[#D4338B]">
    <div class="flex flex-col-reverse lg:flex-row w-full items-center">
      <!-- Image Section -->
      <div id="aboutImg" class="flex-col w-full lg:w-1/2 h-full">
        <img src="../public/images/hero1.png" class="w-full" alt="About Image">
      </div>

      <!-- Text Section -->
      <div id="aboutText" class="flex-col w-full p-5 lg:w-1/2 px-6 xl:px-24 2xl:px-32 text-center lg:text-left">
        <h2 class="text-4xl sm:text-5xl md:text-6xl lg:text-6xl mb-6 lg:mb-10 text-white">Qui sommes-nous ?</h2>
        <p class="text-sm sm:text-base lg:text-lg mb-6 text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, similique eos. Ab facilis aspernatur, maiores
          recusandae excepturi, dolores sapiente voluptas quo inventore, delectus expedita aliquid animi repellendus.
          Dolore quae ut, magni illum est quibusdam praesentium amet ipsa? In blanditiis numquam iste voluptate,
          repellat eos veniam quidem optio quisquam, cumque maiores sit deleniti magni! Sit voluptate harum,
          necessitatibus adipisci nihil itaque explicabo iste, fugiat accusamus architecto, voluptatibus reprehenderit
          voluptates natus esse quidem nobis repellat doloribus.
        </p>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>

</script>

<style scoped>
@media screen and (min-width: 768px) and (max-width: 1024px) {
  #aboutText {
    padding: 30px;
  }
}
</style>
