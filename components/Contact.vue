<template>
  <section id="contact" class="px-4">
    <div class="flex flex-col items-center">
      <h2 class="uppercase text-4xl sm:text-5xl md:text-6xl lg:text-6xl py-6 md:py-8 xl:mb-5" style="color: #D4338B;">Contactez-nous</h2>

      <form class="w-full max-w-3xl bg-[#D4338B] p-6 sm:p-10 rounded-3xl flex flex-col gap-6 text-white"
        @submit.prevent="submitContactForm">
        <div class="flex flex-col w-full">
          <label for="name" class="mb-2">Nom :</label>
          <input id="name" name="name" type="text" v-model="contactForm.name" required
            class="bg-white text-black px-4 py-3 rounded-xl focus:outline-none" />
        </div>

        <div class="flex flex-col w-full">
          <label for="subject" class="mb-2">Sujet :</label>
          <input id="subject" name="subject" type="text" v-model="contactForm.subject" required
            class="bg-white text-black px-4 py-3 rounded-xl focus:outline-none" />
        </div>

        <div class="flex flex-col w-full">
          <label for="email" class="mb-2">Email :</label>
          <input id="email" name="email" type="email" v-model="contactForm.email" required
            class="bg-white text-black px-4 py-3 rounded-xl focus:outline-none" />
        </div>

        <div class="flex flex-col w-full">
          <label for="message" class="mb-2">Message :</label>
          <textarea id="message" name="message" rows="5" v-model="contactForm.message" required
            class="bg-white text-black px-4 py-3 rounded-xl resize-none focus:outline-none"></textarea>
        </div>

        <button type="submit"
          class="self-center w-[200px] py-4 px-10 rounded-4xl border border-white bg-white text-[#D4338B] font-semibold uppercase transition-all duration-300 ease-in-out hover:bg-[#D4338B] hover:text-white hover:-translate-y-1 hover:shadow-lg">
          Envoyer
        </button>

        <!-- Message de succès stylisé -->
        <transition name="fade">
          <div v-if="showSuccessAlert"
            class="mt-6 w-full max-w-xl mx-auto flex items-center justify-between gap-4 bg-white text-[#D4338B] border border-[#28a745] px-5 py-4 rounded-xl shadow-lg">
            <div class="flex items-center gap-2">
              <svg class="w-6 h-6 text-[#D4338B]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"
                stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 13l4 4L19 7" />
              </svg>
              <span class="font-medium">{{ successMessage }}</span>
            </div>
            <button @click="showSuccessAlert = false" class="text-sm text-[#D4338B] hover:text-[#D4338B] transition">
              ✕
            </button>
          </div>
        </transition>
      </form>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const contactForm = ref({
  name: '',
  subject: '',
  email: '',
  message: '',
});

const showSuccessAlert = ref(false);
const successMessage = ref("Votre demande a bien été soumise !");

const submitContactForm = async () => {
  try {
    const response = await fetch('https://schoups25back-production.up.railway.app/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contactForm.value),
    });

    if (response.ok) {
      showSuccessAlert.value = true;

      // Réinitialiser le formulaire
      contactForm.value = {
        name: '',
        subject: '',
        email: '',
        message: '',
      };

      // Masquer automatiquement l'alerte après 5s
      setTimeout(() => {
        showSuccessAlert.value = false;
      }, 5000);
    } else {
      console.error('Échec de la soumission du formulaire de contact');
    }
  } catch (error) {
    console.error('Erreur lors de la soumission du formulaire de contact:', error);
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
