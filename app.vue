<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import About from './components/About.vue';

const menuOpen = ref(false);
const isMobile = ref(false);

const checkIsMobile = () => {
  isMobile.value = window.innerWidth <= 860;
};

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const resizeHandler = () => {
  checkIsMobile();
  menuOpen.value = false; // Ferme le menu en cas de resize
};

onMounted(() => {
  checkIsMobile();
  window.addEventListener('resize', resizeHandler);
});

onUnmounted(() => {
  window.removeEventListener('resize', resizeHandler);
});
</script>


<template>
  <div>
    <!-- HEADER -->
    <header id="header" class="navbar">
      <!-- BOUTON MENU MOBILE -->
      <button v-if="isMobile" @click="toggleMenu" class="menu-button">
        <font-awesome :icon="['fas', 'bars']" size="lg" />
      </button>

      <!-- MENU MOBILE AVEC LOGO ET ANIMATION -->
      <transition name="fade-slide">
        <div
          v-if="menuOpen && isMobile"
          class="mobile-nav sticky top-[60px] bg-[#D4338B] z-40 w-full px-4 py-6 shadow-md transform transition-all duration-300"
        >
          <!-- Logo mobile -->
          <div class="flex justify-center mb-4">
            <NuxtLink class="flex justify-center" to="#hero" @click="toggleMenu">
              <img src="./public/images/logo-navbar.png" class="w-1/2" alt="Logo" />
            </NuxtLink>
          </div>

          <!-- Liens -->
          <ul class="flex flex-col items-center space-y-4">
            <li>
              <NuxtLink class="text-white text-xs uppercase hover:underline navFont" to="#hero" @click="toggleMenu">Accueil</NuxtLink>
            </li>
            <li>
              <NuxtLink class="text-white text-xs uppercase hover:underline navFont" to="#about" @click="toggleMenu">Qui sommes-nous</NuxtLink>
            </li>
            <li>
              <NuxtLink class="text-white text-xs uppercase hover:underline navFont" to="#products" @click="toggleMenu">Nos produits</NuxtLink>
            </li>
            <li>
              <NuxtLink class="text-white text-xs uppercase hover:underline navFont" to="#contact" @click="toggleMenu">Contact</NuxtLink>
            </li>
          </ul>
        </div>
      </transition>

      <!-- MENU DESKTOP -->
      <nav v-if="!isMobile" id="navbar" class="w-full">
        <ul class="flex items-center px-5" style="background-color: #D4338B; height: 80px;">
          <div class="flex flex-col items-center lg:w-2/5">
            <li class="lg:uppercase text-white font-bold text-xl ps-10">
              <NuxtLink id="logoContainer" class="no-underline">
                <img id="logoNav" src="./public/images/logo-navbar.png" class="w-2/3 md:w-1/2 lg:w-1/2 2xl:w-1/4" alt="Logo" />
              </NuxtLink>
            </li>
          </div>
          <div class="flex items-center w-3/5 justify-around lg:ps-52">
            <li class="text-white text-xs uppercase hover:underline">
              <NuxtLink class="no-underline navFont" to="#hero">Accueil</NuxtLink>
            </li>
            <li class="text-white text-xs uppercase hover:underline">
              <NuxtLink class="no-underline navFont" to="#about">Qui sommes-nous</NuxtLink>
            </li>
            <li class="text-white text-xs uppercase hover:underline">
              <NuxtLink class="no-underline navFont" to="#products">Nos produits</NuxtLink>
            </li>
            <li class="text-white text-xs uppercase hover:underline">
              <NuxtLink class="no-underline navFont" to="#contact">Contact</NuxtLink>
            </li>
          </div>
        </ul>
      </nav>
    </header>

    <!-- SECTIONS -->
    <Hero />
    <About />
    <Partners />
    <Products />
    <Contact />

    <!-- FOOTER -->
    <footer class="mt-10">
      <div class="flex flex-col items-center justify-center bg-[#D4338B] py-8 px-4 sm:px-8">
        <img src="./public/images/logo-footer.png" class="w-2/3 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5" alt="Logo Footer" />
        <div class="flex gap-6 mt-2 mb-4">
          <font-awesome :style="{ color: '#fff' }" :icon="['fab', 'instagram']" class="fa-2x" />
          <font-awesome :style="{ color: '#fff' }" :icon="['fab', 'square-facebook']" class="fa-2x" />
        </div>
        <p class="text-white text-xs text-center uppercase px-4">
          © Calvin Van der Ghinst – Conception et mise en page du site
        </p>
      </div>
    </footer>
  </div>
</template>



<style scoped>
#header {
  position: sticky;
  top: 0;
  z-index: 50;
}

/* Mobile Menu Button */
.menu-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #D4338B;
  color: white;
  height: 60px;
}

/* Sticky mobile nav */
.mobile-nav {
  z-index: 40;
}

section {
  scroll-margin-top: 80px; /* Pour les ancres */
}

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
.fade-slide-enter-to,
.fade-slide-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>

