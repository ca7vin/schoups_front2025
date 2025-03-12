<template>
  <div>
    <!-- HEADER WITH NAVIGATION -->
    <header class="xyz-in navbar" xyz="fade up big">
      <button @click="toggleMenu" class="menu-button" v-if="isMobile">
        <Icon name="heroicons:bars-3-20-solid" color="white" font-size="20px" padding="0" margin="0" />
      </button>
      <!-- NAVIGATION START -->
      <nav :class="{ 'menu-open': menuOpen, 'menu': !menuOpen }" style="">
        <ul class="flex items-center px-5" style="background-color: #D4338B; height: 80px;">
          <!-- LOGO -->
          <div class="flex flex-col lg:flex items-center w-2/5">
            <li class="uppercase text-white font-bold text-xl ps-10">
              <NuxtLink class="no-underline" to="/">
                <img src="./public/images/logo-navbar.png" class="w-1/3" alt="">
              </NuxtLink>
            </li>
          </div>
          <div class="flex items-center ps-52 w-3/5 justify-around">
            <li class="text-white text-xs uppercase hover:underline">
              <NuxtLink class="no-underline navFont" to="/">Accueil</NuxtLink>
            </li>
            <li class="text-white text-xs uppercase hover:underline">
              <NuxtLink class="no-underline navFont" to="/">Qui sommes-nous</NuxtLink>
            </li>
            <li class="text-white text-xs uppercase hover:underline">
              <NuxtLink class="no-underline navFont" to="/">Nos produits</NuxtLink>
            </li>
            <li class="text-white text-xs uppercase hover:underline">
              <NuxtLink class="no-underline navFont" to="/">Contact</NuxtLink>
            </li>
          </div>
        </ul>
      </nav>
      <!-- NAVIGATION END -->
    </header>
    <!-- SECT 1 - HERO START -->
    <section>
      <div class="flex w-full items-center">
        <div class="flex-col w-1/2 px-32">
          <h1 class="text-8xl mb-10" style="color: #D4338B;">De vraies glaces artisanales</h1>
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
          <img src="https://placehold.co/600x600" class="w-full" alt="">
        </div>
      </div>
    </section>
    <!-- SECT 1 - HERO END -->
    <!-- SECT 2 - ABOUT START -->
    <section>
      <div class="flex w-full items-center" style="background-color: #D4338B;">
        <div class="flex-col w-1/2">
          <img src="https://placehold.co/600x600" class="w-full" alt="">
        </div>
        <div class="flex-col w-1/2 px-32">
          <h1 class="text-8xl mb-10 text-center" style="color: #fff;">Qui sommes-nous ?</h1>
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
    <section>
      <div class="w-full flex flex-col items-center">
        <h2 class="text-6xl py-10">Nos partenaires</h2>
        <SwiperCustom />
      </div>
    </section>
    <!-- SECT 3 - PARTNERS END -->
    <!-- FOOTER START -->
    <footer>
      <div class="flex flex-col items-center justify-center" style="background-color: #D4338B; height: 200px;">
        <p class="text-white text-lg uppercase">Schoups - 2025</p>
        <p class="text-white text-md uppercase pt-4">© Calvin Van der Ghinst - Conception et mise en page du site</p>
      </div>
    </footer>
    <!-- FOOTER END -->
  </div>
</template>
