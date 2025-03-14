<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import About from './components/About.vue';

const menuOpen = ref(false);
const isMobile = computed(() => window.innerWidth <= 768 || (window.innerWidth <= 820 && window.innerWidth > 768));

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const resizeHandler = () => {
  menuOpen.value = false; // Pour fermer le menu si l'écran est redimensionné
};

onMounted(() => {
  window.addEventListener('resize', resizeHandler);
});

onUnmounted(() => {
  window.removeEventListener('resize', resizeHandler);
});
</script>

<template>
  <div>
    <!-- HEADER WITH NAVIGATION -->
    <header id="header" class="xyz-in navbar" xyz="fade up big">
      <button id="navButton" @click="toggleMenu" class="menu-button" v-if="isMobile">
        <font-awesome :icon="['fas', 'bars']" size="lg" />
      </button>
      <!-- NAVIGATION START -->
      <nav id="navbar" :class="{ 'menu-open': menuOpen, 'menu': !menuOpen }">
        <ul class="flex items-center px-5" style="background-color: #D4338B; height: 80px;">
          <!-- LOGO -->
          <div class="flex flex-col items-center lg:w-2/5">
            <li class="lg:uppercase text-white font-bold text-xl ps-10">
              <NuxtLink id="logoContainer" class="no-underline">
                <img id="logoNav" src="./public/images/logo-navbar.png" class="w-1/2 lg:w-1/3" alt="Logo" />
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
      <!-- NAVIGATION END -->
    </header>

    <!-- SECT 1 - HERO START -->
    <Hero />
    <!-- SECT 1 - HERO END -->
    <!-- SECT 2 - ABOUT START -->
    <About />
    <!-- SECT 2 - ABOUT END -->
    <!-- SECT 3 - PARTNERS START -->
    <Partners />
    <!-- SECT 3 - PARTNERS END -->
    <!-- SECT 4 - PRODUCTS START -->
    <Products />
    <!-- SECT 4 - PRODUCTS END -->
    <!-- SECT 5 - CONTACT START -->
    <Contact />
    <!-- SECT 5 - CONTACT END -->
    <!-- FOOTER START -->
    <footer>
      <div class="flex flex-col items-center justify-center" style="background-color: #D4338B; height: 200px;">
        <img src="./public/images/logo-footer.png" class="w-1/8" alt="Logo Footer" />
        <div class="flex justify-between w-1/12 px-10">
          <font-awesome :style="{color: '#fff'}" :icon="['fab', 'instagram']" class="fa-2x" />
          <font-awesome :style="{color: '#fff'}" :icon="['fab', 'square-facebook']" class="fa-2x" />
        </div>
        <p class="text-white text-xs uppercase pt-4">© Calvin Van der Ghinst - Conception et mise en page du site</p>
      </div>
    </footer>
    <!-- FOOTER END -->
  </div>
</template>

<style scoped>
#header {
  position: sticky;
  top: 0;
  z-index: 50;
}

section {
  scroll-margin-top: 80px;
  /* même hauteur que ta navbar */
}

/* Responsive Menu Styles */
.menu-button {
  display: none;
}

.navbar {
  position: relative;
  z-index: 9999;
}

@media screen and (max-width: 820px) {
  #header {
    margin-bottom: 20px;
    position: relative;
    z-index: 1;
  }

  .menu {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease-out;
  }

  .menu-open {
    max-height: 500px;
    transition: max-height 0.3s ease-in;
  }

  .menu-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: #D4338B;
    color: white;
    height: 60px;
  }

  nav ul {
    display: none;
  }

  .menu-open nav ul {
    display: flex;
    flex-direction: column;
    transition: height 3s ease;
  }

  .menu-open {
    display: block !important;
  }

  nav ul {
    height: 400px !important;
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    justify-content: center !important;
  }

  nav ul div {
    width: 100% !important;
    display: flex !important;
    flex-direction: column !important;
    justify-content: center !important;
    align-items: center !important;
  }

  nav ul div li {
    margin: 10px 0 !important;
    padding: 0 !important;
  }

  #logoContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
  }
}

@media screen and (max-width: 768px) {
  nav ul {
    height: 400px !important;
  }
}
</style>
