<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useContent } from '~/composables/useContent'

const menuOpen = ref(false)
const isMobile = ref(false)
const footer = ref<{ facebook: string; instagram: string } | null>(null)
const marquee = ref<{ text: string; active: boolean } | null>(null)
const isLoading = ref(true)
const loadingPercent = ref(0)

const checkIsMobile = () => {
  isMobile.value = window.innerWidth <= 860
}

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const resizeHandler = () => {
  checkIsMobile()
  menuOpen.value = false
}

// ✅ Composable de contenu partagé
const { content, fetchContent } = useContent()

onMounted(async () => {
  checkIsMobile()
  window.addEventListener('resize', resizeHandler)

  // Simule l'animation du pourcentage
  const interval = setInterval(() => {
    if (loadingPercent.value < 95) {
      loadingPercent.value += Math.floor(Math.random() * 5) + 1
    }
  }, 100)

  await fetchContent()
  footer.value = content.value?.footer || null
  marquee.value = content.value?.marquee || null

  // Termine le chargement
  loadingPercent.value = 100
  setTimeout(() => {
    isLoading.value = false
    clearInterval(interval)
  }, 700)
})

onUnmounted(() => {
  window.removeEventListener('resize', resizeHandler)
})
</script>



<template>
  <div>
    <transition name="fade-loading">
      <div v-if="isLoading" class="fixed inset-0 bg-[#D4338B] z-[9999] flex flex-col items-center justify-center">
        <img src="./public/images/logo-navbar.png" class="w-1/3 max-w-xs mb-6" alt="Logo" />
        <div class="relative w-2/3 max-w-sm h-2 bg-white/20 rounded-full overflow-hidden">
          <div class="absolute top-0 left-0 h-full bg-white transition-all duration-200"
            :style="{ width: `${loadingPercent}%` }"></div>
        </div>
        <p class="mt-4 text-white text-sm font-semibold">{{ loadingPercent }}%</p>
      </div>
    </transition>
    <!-- HEADER -->
    <header id="header" class="navbar">
      <!-- BOUTON MENU MOBILE -->
      <button v-if="isMobile" @click="toggleMenu" class="menu-button">
        <font-awesome :icon="['fas', 'bars']" size="lg" />
      </button>

      <!-- MENU MOBILE AVEC LOGO ET ANIMATION -->
      <transition name="fade-slide">
        <div v-if="menuOpen && isMobile"
          class="mobile-nav sticky top-[60px] bg-[#D4338B] z-40 w-full px-4 py-6 shadow-md transform transition-all duration-300">
          <!-- Logo mobile -->
          <div class="flex justify-center mb-4">
            <NuxtLink class="flex justify-center" to="#hero" @click="toggleMenu">
              <img src="./public/images/logo-navbar.png" class="w-1/2" alt="Logo" />
            </NuxtLink>
          </div>

          <!-- Liens -->
          <ul class="flex flex-col items-center space-y-4">
            <li>
              <NuxtLink class="text-white text-xs uppercase hover:underline navFont" to="#hero" @click="toggleMenu">
                Accueil</NuxtLink>
            </li>
            <li>
              <NuxtLink class="text-white text-xs uppercase hover:underline navFont" to="#about" @click="toggleMenu">Qui
                sommes-nous</NuxtLink>
            </li>
            <li>
              <NuxtLink class="text-white text-xs uppercase hover:underline navFont" to="#products" @click="toggleMenu">
                Nos produits</NuxtLink>
            </li>
            <li>
              <NuxtLink class="text-white text-xs uppercase hover:underline navFont" to="#contact" @click="toggleMenu">
                Contact</NuxtLink>
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
                <img id="logoNav" src="./public/images/logo-navbar.png" class="w-2/3 md:w-1/2 lg:w-1/2 2xl:w-1/4"
                  alt="Logo" />
              </NuxtLink>
            </li>
          </div>
          <div class="flex items-center w-3/5 justify-around lg:ps-52">
            <li class="text-white uppercase hover:underline">
              <NuxtLink class="no-underline text-lg navFont" to="#hero">Accueil</NuxtLink>
            </li>
            <li class="text-white uppercase hover:underline">
              <NuxtLink class="no-underline text-lg navFont" to="#about">Qui sommes-nous</NuxtLink>
            </li>
            <li class="text-white uppercase hover:underline">
              <NuxtLink class="no-underline text-lg navFont" to="#products">Nos produits</NuxtLink>
            </li>
            <li class="text-white uppercase hover:underline">
              <NuxtLink class="no-underline text-lg navFont" to="#contact">Contact</NuxtLink>
            </li>
          </div>
        </ul>
      </nav>
    </header>

    <div v-if="marquee?.active"
      class="info-marquee bg-white text-[#D4338B] text-sm sm:text-base py-2 overflow-hidden whitespace-nowrap lg:text-lg">
      <div class="marquee-text">
        {{ marquee.text }}
      </div>
    </div>

    <!-- SECTIONS -->
    <Hero />
    <About />
    <Partners />
    <!-- <Marche /> -->
    <!-- <Conservation /> -->
    <Products />
    <Contact />

    <!-- FOOTER -->
    <footer class="mt-10">
      <div class="flex flex-col items-center justify-center bg-[#D4338B] py-8 px-4 sm:px-8">
        <img src="./public/images/logo-footer.png" class="w-2/3 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
          alt="Logo Footer" />
        <div class="flex gap-6 mt-2 mb-4">
          <a v-if="footer?.instagram" :href="footer.instagram" target="_blank" rel="noopener noreferrer"
            class="transition-transform transform hover:scale-110 hover:text-pink-200">
            <font-awesome :icon="['fab', 'instagram']" class="fa-2x text-white" />
          </a>
          <a v-if="footer?.facebook" :href="footer.facebook" target="_blank" rel="noopener noreferrer"
            class="transition-transform transform hover:scale-110 hover:text-pink-200">
            <font-awesome :icon="['fab', 'square-facebook']" class="fa-2x text-white" />
          </a>
        </div>
        <p class="text-white text-xs text-center uppercase px-4">
          © Calvin Van der Ghinst – Conception et mise en page du site
        </p>
      </div>
    </footer>
  </div>
</template>



<style scoped>
.info-marquee {
  position: relative;
}

.marquee-text {
  display: inline-block;
  padding-left: 100%;
  animation: scroll-left 20s linear infinite;
}

@keyframes scroll-left {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-100%);
  }
}

.fade-loading-enter-active,
.fade-loading-leave-active {
  transition: opacity 0.4s ease;
}

.fade-loading-enter-from,
.fade-loading-leave-to {
  opacity: 0;
}

.fade-loading-enter-to,
.fade-loading-leave-from {
  opacity: 1;
}

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
  scroll-margin-top: 80px;
  /* Pour les ancres */
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
