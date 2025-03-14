<template>
  <section id="contact" class="px-4">
    <div class="flex flex-col items-center">
      <h2 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center text-[#D4338B] my-5">
        Contactez-nous
      </h2>

      <form
        class="w-full max-w-3xl bg-[#D4338B] p-6 sm:p-10 rounded-3xl flex flex-col gap-6 text-white"
      >
        <div class="flex flex-col w-full">
          <label for="name" class="mb-2">Nom :</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            class="bg-white text-black px-4 py-3 rounded-xl focus:outline-none"
          />
        </div>

        <div class="flex flex-col w-full">
          <label for="subject" class="mb-2">Sujet :</label>
          <input
            id="subject"
            name="subject"
            type="text"
            required
            class="bg-white text-black px-4 py-3 rounded-xl focus:outline-none"
          />
        </div>

        <div class="flex flex-col w-full">
          <label for="email" class="mb-2">Email :</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            class="bg-white text-black px-4 py-3 rounded-xl focus:outline-none"
          />
        </div>

        <div class="flex flex-col w-full">
          <label for="message" class="mb-2">Message :</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            required
            class="bg-white text-black px-4 py-3 rounded-xl resize-none focus:outline-none"
          ></textarea>
        </div>

        <button
          type="submit"
          class="self-center w-[200px] py-3 px-6 rounded-xl border-4 border-white bg-white text-[#D4338B] font-semibold uppercase transition-all duration-300 hover:bg-[#D4338B] hover:text-white hover:border-white"
        >
          Envoyer
        </button>
      </form>
    </div>
  </section>
</template>

<script lang="ts" setup>
</script>
