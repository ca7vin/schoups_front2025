<template>
  <section
    id="hero"
    class="w-full max-h-screen h-screen flex flex-col lg:flex-row items-center justify-center overflow-hidden"
  >
    <!-- Texte -->
    <div class="w-full lg:w-1/2 pt-5 px-6 xl:px-24 2xl:px-32 mb-8 lg:mb-0 text-center lg:text-left">
      <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-6xl mb-6 text-[#D4338B]">
        De vraies glaces <br /> artisanales
      </h1>
      <p class="text-sm sm:text-base lg:text-lg mb-6 text-[#D4338B]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit expedita, enim aspernatur voluptatibus pariatur atque. Voluptatum explicabo possimus repellat necessitatibus.
      </p>
      <div class="flex flex-col lg:flex-row items-center justify-start mt-6 lg:mt-10">
        <NuxtLink
          class="rounded-4xl text-md uppercase py-4 px-10 no-underline flex justify-center mb-4 lg:mb-0"
          style="border: #D4338B solid 1px; width: 200px; background-color: #D4338B; color: #fff; transition: all 0.3s ease;"
          to="#products"
        >
          Nos produits
        </NuxtLink>

        <NuxtLink
          class="rounded-4xl text-md uppercase py-4 px-10 no-underline flex justify-center lg:ms-10"
          style="border: #D4338B solid 1px; width: 200px; color: #D4338B; transition: all 0.3s ease;"
          to="#contact"
        >
          Contactez-nous
        </NuxtLink>
      </div>
    </div>

    <!-- Image en background -->
    <div
      class="w-full lg:w-1/2 h-full bg-no-repeat bg-center bg-cover"
      style="background-image: url('/images/Hero1.png');"
    ></div>
  </section>
</template>

<script setup lang="ts"></script>
