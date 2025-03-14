<template>
    <section id="hero">
      <div class="flex w-full items-center">
        <div class="flex-col w-1/2 px-32">
          <h1 class="text-7xl mb-10" style="color: #D4338B;">De vraies glaces <br> artisanales</h1>
          <p class="text-lg" style="color: #D4338B;">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi,
            est. Dolorum aliquid fugiat cum eum
            architecto quae velit nihil dolor? Aspernatur iusto quidem soluta quam perferendis architecto veritatis sunt
            laborum?</p>
          <div class="flex mt-10">
            <NuxtLink class="rounded-4xl text-md uppercase py-4 px-10 no-underline flex justify-center"
              onmouseover="this.style.backgroundColor='#fff'; this.style.color='#D4338B';"
              onmouseout="this.style.backgroundColor='#D4338B'; this.style.color='#fff';"
              style="border: #D4338B solid 1px; width: 200px; background-color: #D4338B; color: #fff; transition: all 0.3s ease;"
              to="">
              Nos produits
            </NuxtLink>

            <NuxtLink class="rounded-4xl text-md uppercase py-4 px-10 no-underline flex justify-center ms-10"
              onmouseover="this.style.backgroundColor='#D4338B'; this.style.color='#fff';"
              onmouseout="this.style.backgroundColor='#fff'; this.style.color='#D4338B';"
              style="border: #D4338B solid 1px; width: 200px; color: #D4338B; transition: all 0.3s ease;" to="">
              Contactez-nous
            </NuxtLink>

          </div>
        </div>
        <div class="flex-col w-1/2">
          <img src="../public/images/Hero1.png" class="w-full" alt="">
        </div>
      </div>
    </section>
</template>

<script lang="ts" setup>

</script>

<style>

</style>