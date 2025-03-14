<script setup lang="ts">
import About from './components/About.vue';

</script>

<template>
  <div>
    <!-- HEADER WITH NAVIGATION -->
    <header id="header" class="xyz-in navbar" xyz="fade up big">
      <button @click="toggleMenu" class="menu-button" v-if="isMobile">
        <Icon name="heroicons:bars-3-20-solid" color="white" font-size="20px" padding="0" margin="0" />
      </button>
      <!-- NAVIGATION START -->
      <nav id="navbar" :class="{ 'menu-open': menuOpen, 'menu': !menuOpen }">
        <ul class="flex items-center px-5" style="background-color: #D4338B; height: 80px;">
          <!-- LOGO -->
          <div class="flex flex-col lg:flex items-center w-2/5">
            <li class="uppercase text-white font-bold text-xl ps-10">
              <NuxtLink class="no-underline">
                <img src="./public/images/logo-navbar.png" class="w-1/3" alt="">
              </NuxtLink>
            </li>
          </div>
          <div class="flex items-center ps-52 w-3/5 justify-around">
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
        <img src="./public/images/logo-footer.png" class="w-1/8" alt="">
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
<style>
html {
  scroll-behavior: smooth;
}

#header {
  position: sticky;
  top: 0;
  z-index: 50;
}

section {
  scroll-margin-top: 80px;
  /* même hauteur que ta navbar */
}
</style>