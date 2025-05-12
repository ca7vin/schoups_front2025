<template>
  <section id="marche">
    <div class="w-full flex flex-col items-start px-6 xl:px-24 xl:py-30 2xl:px-32" id="marchebg">
      <div class="w-1/2">
        <h2 class="uppercase text-4xl sm:text-5xl md:text-6xl lg:text-6xl py-6 md:py-8" style="color: #fff;">Marché des producteurs d'Henripont</h2>
        <p class="text-sm sm:text-base lg:text-lg mb-6 text-white">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque recusandae similique repellendus nostrum.
          Laudantium obcaecati consectetur quaerat? Sunt delectus, animi earum suscipit, vitae repudiandae inventore
          dolor, doloribus atque blanditiis quaerat.
        </p>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>

</script>

<style>
#marchebg {
  background:
    linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url('/images/marche.jpg');
  background-blend-mode: multiply;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>