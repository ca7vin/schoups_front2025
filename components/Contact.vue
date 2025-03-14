<template>
    <section id="contact">
      <div class="flex flex-col justify-center items-center">
        <h2 class="text-7xl mb-10 text-center pt-10" style="color: #D4338B;">Contactez-nous</h2>
        <div style="background-color: #D4338B;"
          class="flex flex-col items-center justify-center w-8/12 p-10 rounded-4xl mb-10">
          <div class="mb-4 flex flex-col w-full fieldCol">
            <label for="name" class="text-white mb-2">Nom :</label>
            <input style="background-color: #fff; border: none;" type="text" id="name" name="name"
              class="px-3 py-2 border rounded-xl" required>
          </div>
          <div class="mb-4 flex flex-col w-full fieldCol">
            <label for="name" class="text-white mb-2">Sujet :</label>
            <input style="background-color: #fff; border: none;" type="text" id="name" name="name"
              class="px-3 py-2 border rounded-xl" required>
          </div>
          <div class="mb-4 flex flex-col w-full fieldCol">
            <label for="name" class="text-white mb-2">Email :</label>
            <input style="background-color: #fff; border: none;" type="text" id="name" name="name"
              class="px-3 py-2 border rounded-xl" required>
          </div>
          <div class="mb-4 flex flex-col w-full fieldCol">
            <label for="name" class="text-white mb-2">Message :</label>
            <textarea style="background-color: #fff; border: none;" type="text" id="name" name="name"
              class="px-3 py-2 border rounded-xl" required></textarea>
          </div>
          <button class="rounded-xl text-md uppercase py-4 px-10 no-underline flex justify-center ms-10 mt-4"
            onmouseover="this.style.backgroundColor='#D4338B';this.style.color='#fff';this.style.border='3px solid #fff';"
            onmouseout="this.style.backgroundColor='#fff';this.style.color='#D4338B';this.style.border='3px solid #D4338B';"
            style="border: 3px solid #D4338B; width: 200px; color: #D4338B; background-color: #fff; transition: all 0.3s ease;"
            to="">
            Envoyer
          </button>
        </div>
      </div>
    </section>
</template>

<script lang="ts" setup>

</script>

<style>

</style>