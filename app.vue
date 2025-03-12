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
    <section id="hero">
      <div class="flex w-full items-center">
        <div class="flex-col w-1/2 px-32">
          <h1 class="text-7xl mb-10" style="color: #D4338B;">De vraies glaces <br> artisanales</h1>
          <p class="text-lg" style="color: #D4338B;">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi,
            est. Dolorum aliquid fugiat cum eum
            architecto quae velit nihil dolor? Aspernatur iusto quidem soluta quam perferendis architecto veritatis sunt
            laborum?</p>
          <div class="flex mt-10">
            <NuxtLink class="rounded-4xl text-xs uppercase py-4 px-10 no-underline flex justify-center"
              onmouseover="this.style.backgroundColor='#fff';this.style.color='#D4338B';"
              onmouseout="this.style.backgroundColor='#D4338B';this.style.color='#fff';"
              style="border: #D4338B solid 1px; width: 150px;; background-color: #D4338B; color: #fff;" to="">Nos
              produits</NuxtLink>
            <NuxtLink class="rounded-4xl text-xs uppercase py-4 px-10 no-underline flex justify-center ms-10"
              onmouseover="this.style.backgroundColor='#D4338B';this.style.color='#fff';"
              onmouseout="this.style.backgroundColor='#fff';this.style.color='#D4338B';"
              style="border: #D4338B solid 1px; width: 150px;; color: #D4338B;" to="">Contactez-nous</NuxtLink>
          </div>
        </div>
        <div class="flex-col w-1/2">
          <img src="./public/images/hero1.png" class="w-full" alt="">
        </div>
      </div>
    </section>
    <!-- SECT 1 - HERO END -->
    <!-- SECT 2 - ABOUT START -->
    <section id="about">
      <div class="flex w-full items-center" style="background-color: #D4338B;">
        <div class="flex-col w-1/2">
          <img src="./public/images/hero1.png" class="w-full" alt="">
        </div>
        <div class="flex-col w-1/2 px-32">
          <h2 class="text-7xl mb-10 text-center" style="color: #fff;">Qui sommes-nous ?</h2>
          <p class="text-lg text-center" style="color: #fff;">Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Sint,
            similique eos. Ab facilis aspernatur, maiores recusandae excepturi, dolores sapiente voluptas quo inventore,
            delectus expedita aliquid animi repellendus. Dolore quae ut, magni illum est quibusdam praesentium amet
            ipsa? In blanditiis numquam iste voluptate, repellat eos veniam quidem optio quisquam, cumque maiores sit
            deleniti magni! Sit voluptate harum, necessitatibus adipisci nihil itaque explicabo iste, fugiat accusamus
            architecto, voluptatibus reprehenderit voluptates natus esse quidem nobis repellat doloribus. Nulla incidunt
            excepturi voluptatum unde nesciunt rerum voluptas ullam quaerat ut dignissimos consectetur repellendus odit
            dolores molestiae molestias illum consequatur non porro, obcaecati dolorum maiores quasi. Fugit accusamus
            tenetur facilis, est quod tempora pariatur sed accusantium reprehenderit commodi officia hic rerum
            distinctio dolorum necessitatibus magnam dolores. Placeat iure tempora, ea quis dolores dolore modi odio
            molestiae veritatis beatae voluptate cum tenetur sequi, facilis ducimus rerum optio voluptatum eum
            provident, eos porro temporibus blanditiis. Eius, praesentium consequuntur!</p>
        </div>
      </div>
    </section>
    <!-- SECT 2 - ABOUT END -->
    <!-- SECT 3 - PARTNERS START -->
    <section id="partners">
      <div class="w-full flex flex-col items-center">
        <h2 class="text-7xl py-10" style="color: #D4338B;">Nos partenaires</h2>
        <SwiperCustom />
      </div>
    </section>
    <!-- SECT 3 - PARTNERS END -->
    <!-- SECT 4 - PRODUCTS START -->
    <section id="products">
      <div class="" style="background-color: #D4338B;">
        <h2 class="text-7xl mb-10 text-center py-10" style="color: #fff;">Nos produits</h2>
        <div class="flex justify-around mb-10">
          <div class="relative w-1/5 group cursor-pointer">
            <img src="https://placehold.co/70x50" class="rounded-2xl w-full" alt="">
            <div
              class="absolute inset-0 bg-[#D4338B]/80 opacity-0 group-hover:opacity-100 group-hover:ring-4 group-hover:ring-white flex items-center justify-center rounded-2xl transition-all duration-300">
              <span class="text-white text-2xl">Glace</span>
            </div>
          </div>
          <div class="relative w-1/5 group cursor-pointer">
            <img src="https://placehold.co/70x50" class="rounded-2xl w-full" alt="">
            <div
              class="absolute inset-0 bg-[#D4338B]/80 opacity-0 group-hover:opacity-100 group-hover:ring-4 group-hover:ring-white flex items-center justify-center rounded-2xl transition-all duration-300">
              <span class="text-white text-2xl">Glace</span>
            </div>
          </div>
          <div class="relative w-1/5 group cursor-pointer">
            <img src="https://placehold.co/70x50" class="rounded-2xl w-full" alt="">
            <div
              class="absolute inset-0 bg-[#D4338B]/80 opacity-0 group-hover:opacity-100 group-hover:ring-4 group-hover:ring-white flex items-center justify-center rounded-2xl transition-all duration-300">
              <span class="text-white text-2xl">Glace</span>
            </div>
          </div>
        </div>
        <div class="flex justify-around pb-10">
          <div class="relative w-1/5 group cursor-pointer">
            <img src="https://placehold.co/70x50" class="rounded-2xl w-full" alt="">
            <div
              class="absolute inset-0 bg-[#D4338B]/80 opacity-0 group-hover:opacity-100 group-hover:ring-4 group-hover:ring-white flex items-center justify-center rounded-2xl transition-all duration-300">
              <span class="text-white text-2xl">Glace</span>
            </div>
          </div>
          <div class="relative w-1/5 group cursor-pointer">
            <img src="https://placehold.co/70x50" class="rounded-2xl w-full" alt="">
            <div
              class="absolute inset-0 bg-[#D4338B]/80 opacity-0 group-hover:opacity-100 group-hover:ring-4 group-hover:ring-white flex items-center justify-center rounded-2xl transition-all duration-300">
              <span class="text-white text-2xl">Glace</span>
            </div>
          </div>
          <div class="relative w-1/5 group cursor-pointer">
            <img src="https://placehold.co/70x50" class="rounded-2xl w-full" alt="">
            <div
              class="absolute inset-0 bg-[#D4338B]/80 opacity-0 group-hover:opacity-100 group-hover:ring-4 group-hover:ring-white flex items-center justify-center rounded-2xl transition-all duration-300">
              <span class="text-white text-2xl">Glace</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- SECT 4 - PRODUCTS END -->
    <!-- FOOTER START -->
    <footer>
      <div class="flex flex-col items-center justify-center" style="background-color: #D4338B; height: 200px;">
        <img src="./public/images/logo-footer.png" class="w-1/6" alt="">
        <p class="text-white text-md uppercase pt-4">© Calvin Van der Ghinst - Conception et mise en page du site</p>
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