<template>
  <section id="hero">
    <div class="flex flex-col lg:flex-row w-full items-center justify-center">
      <div class="flex-col w-full lg:w-1/2 px-6 xl:px-24 2xl:px-32 mb-8 lg:mb-0 text-center lg:text-left">
        <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-6xl mb-6" style="color: #D4338B;">De vraies glaces <br> artisanales</h1>
        <p class="text-sm sm:text-base lg:text-lg mb-6" style="color: #D4338B;">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi,
          est. Dolorum aliquid fugiat cum eum architecto quae velit nihil dolor?
          Aspernatur iusto quidem soluta quam perferendis architecto veritatis sunt laborum?
        </p>
        <div class="flex flex-col lg:flex-row items-center justify-start mt-6 lg:mt-10">
          <NuxtLink
            class="rounded-4xl text-md uppercase py-4 px-10 no-underline flex justify-center mb-4 lg:mb-0"
            onmouseover="this.style.backgroundColor='#fff'; this.style.color='#D4338B';"
            onmouseout="this.style.backgroundColor='#D4338B'; this.style.color='#fff';"
            style="border: #D4338B solid 1px; width: 200px; background-color: #D4338B; color: #fff; transition: all 0.3s ease;"
            to="#products">
            Nos produits
          </NuxtLink>

          <NuxtLink
            class="rounded-4xl text-md uppercase py-4 px-10 no-underline flex justify-center lg:ms-10"
            onmouseover="this.style.backgroundColor='#D4338B'; this.style.color='#fff';"
            onmouseout="this.style.backgroundColor='#fff'; this.style.color='#D4338B';"
            style="border: #D4338B solid 1px; width: 200px; color: #D4338B; transition: all 0.3s ease;" to="#contact">
            Contactez-nous
          </NuxtLink>
        </div>
      </div>
      <div class="flex-col w-full lg:w-1/2 flex items-center justify-center">
        <img src="../public/images/Hero1.png" class="w-full" alt="Hero Image">
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>

</script>

<style>

</style>
