<template>
  <section id="products">
    <div class="bg-[#D4338B]">
      <h2 class="uppercase text-4xl sm:text-5xl md:text-6xl lg:text-6xl text-center text-white py-6 md:py-8">
        Nos produits
      </h2>
      <div class="flex justify-center mb-10">
        <div class="flex flex-col sm:flex-row gap-4 items-center">
          <div class="relative w-[220px] h-[56px]">
            <select v-model="selectedCategory"
              class="appearance-none w-full h-full bg-white text-[#D4338B] px-6 py-4 rounded-xl text-md uppercase font-semibold shadow-sm transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D4338B]">
              <option value="all">Tout</option>
              <option value="glace">Glace</option>
              <option value="sorbet">Sorbet</option>
            </select>
            <div class="pointer-events-none absolute right-5 top-1/2 transform -translate-y-1/2 text-[#D4338B]">
              ▼
            </div>
          </div>
          <button @click="showModalComment = true"
            class="uppercase w-[220px] h-[56px] bg-white text-[#D4338B] px-6 py-4 rounded-xl font-semibold shadow-sm border border-white transition-all duration-300 ease-in-out hover:ring-2 hover:ring-[#D4338B] hover:bg-[#D4338B] hover:text-white hover:-translate-y-1 hover:shadow-lg">
            Comment servir ?
          </button>
        </div>
      </div>

      <!-- Modal commentaire -->
      <transition name="fade">
        <div v-if="showModalComment" class="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
          <div class="bg-[#D4338B] rounded-xl p-6 max-w-5xl w-full mx-4 overflow-y-auto max-h-[90vh] relative">
            <button class="absolute top-4 right-4 text-white text-2xl" @click="showModalComment = false">&times;</button>
            <h2 class="uppercase text-5xl text-white text-center mb-6">Comment servir nos produits ?</h2>
            <h2 class="text-3xl text-white text-center mb-6 underline">Température idéale : entre -16 et -18 degrés</h2>
            <div class="flex flex-col md:flex-row items-stretch gap-4">
              <div class="flex flex-col items-start w-full md:w-1/3 p-6 flex-1">
                <img src="../public/images/Step1-1-macaron.png" class="w-3/4 self-center" alt="">
                <ul class="list-decimal list-inside mt-4 space-y-1.5 leading-snug max-w-sm text-left text-white text-base md:text-lg lg:text-xl">
                  <li>Tenez la cuillère au bout</li>
                  <li>Puisez par couche</li>
                  <li>Évitez que la glace se gèle aux parois du récipient</li>
                </ul>
              </div>
              <div class="flex flex-col items-start w-full md:w-1/3 p-6 flex-1">
                <img src="../public/images/Step2-1-macaron.png" class="w-3/4 self-center" alt="">
                <ul class="list-decimal list-inside mt-4 space-y-1.5 leading-snug max-w-sm text-left text-white text-base md:text-lg lg:text-xl">
                  <li>Enlevez couche par couche jusqu’au fond du pot</li>
                  <li>La cuillère tranche chaque portion</li>
                  <li>Aucun risque d’abîmer la matière</li>
                </ul>
              </div>
              <div class="flex flex-col items-start w-full md:w-1/3 p-6 flex-1">
                <img src="../public/images/Step3-1-macaron.png" class="w-3/4 self-center" alt="">
                <ul class="list-decimal list-inside mt-4 space-y-1.5 leading-snug max-w-sm text-left text-white text-base md:text-lg lg:text-xl">
                  <li>La surface de la glace abaisse uniformément</li>
                  <li>Vous obtenez ainsi votre nombre de portions</li>
                  <li>Vous vous assurez de ne pas gaspiller en assurant la qualité</li>
                </ul>
              </div>
            </div>
            <div class="flex items-center justify-center mt-6">
              <button @click="showModalComment = false"
                class="uppercase bg-white text-[#D4338B] px-6 py-4 rounded-xl font-semibold shadow-sm border border-white transition-all duration-300 ease-in-out hover:ring-2 hover:ring-[#D4338B] hover:bg-[#D4338B] hover:text-white hover:-translate-y-1 hover:shadow-lg">
                Fermer
              </button>
            </div>
          </div>
        </div>
      </transition>

      <!-- Grille des produits -->
      <TransitionGroup name="fade-list" tag="div" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 md:px-8 lg:px-12 pb-10">
        <div v-for="(product, index) in visibleProducts" :key="product.id"
          class="relative group cursor-pointer overflow-hidden rounded-2xl fade-in-item"
          @mouseenter="hoveredIndex = index; resetHoverTimeout()"
          @mouseleave="clearHoverTimeout()"
          @click="handleProductClick(index)">
          <img :src="product.image" class="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105" :alt="product.gout" />
          <transition name="fade">
            <div v-if="hoveredIndex === index" class="absolute inset-0 bg-[#D4338B]/80 flex flex-col items-center justify-center rounded-2xl border-2 border-white">
              <span class="uppercase text-white text-4xl font-semibold">{{ product.gout }}</span>
              <span class="text-white text-2xl mt-5">+ d'infos</span>
            </div>
          </transition>
        </div>
      </TransitionGroup>

      <!-- Bouton "Plus de goûts" -->
      <div class="flex justify-center">
        <button v-if="hasMore" @click="loadMore"
          class="mb-8 uppercase w-[220px] h-[56px] bg-white text-[#D4338B] px-6 py-4 rounded-xl font-semibold shadow-sm border border-white transition-all duration-300 ease-in-out hover:ring-2 hover:ring-[#D4338B] hover:bg-[#D4338B] hover:text-white hover:-translate-y-1 hover:shadow-lg">
          Plus de goûts
        </button>
      </div>
    </div>

    <!-- Drawer -->
    <transition name="slide-right">
      <div v-if="selectedProduct" class="fixed inset-0 z-50 flex justify-end pointer-events-none">
        <div class="relative w-full sm:w-[400px] bg-white shadow-lg h-full p-6 overflow-y-auto pointer-events-auto">
          <button class="absolute top-4 right-4 text-gray-500 hover:text-[#D4338B] text-2xl font-bold" @click="closeDrawer">&times;</button>
          <h3 class="uppercase text-4xl font-bold mb-4 text-[#D4338B]">{{ selectedProduct.gout }} ({{ selectedProduct.categorie }})</h3>
          <img :src="selectedProduct.image" :alt="selectedProduct.gout" class="w-full h-auto rounded-lg mb-4" />
          <div class="mb-6">
            <h4 class="text-2xl font-semibold mb-2">Ingrédients / Ingrediënten</h4>
            <p class="md:text-lg">{{ selectedProduct.ingredients.join(', ') }}</p>
          </div>
          <div>
            <h4 class="text-2xl font-semibold mb-2">Valeurs nutritionnelles (pour 100g) <br> Voedingswaarden (per 100g)</h4>
            <div class="space-y-4">
              <p class="font-medium text-lg mb-1">
                Énergie / Brennwert : {{ selectedProduct.nutrition.energie.kj }} kJ - {{ selectedProduct.nutrition.energie.kcal }} kcal
              </p>
              <div v-for="(value, key) in barData" :key="key">
                <p class="text-lg font-medium mb-1">{{ labels[key] }} : {{ value }}{{ units[key] }}</p>
                <div class="w-full bg-gray-200 rounded-full h-2.5">
                  <div class="bg-[#D4338B] h-2.5 rounded-full bar-fill" :style="{ width: animateBars ? `${(value / maxValues[key]) * 100}%` : '0%' }"></div>
                </div>
              </div>
            </div>
          </div>
          <button @click="closeDrawer"
            class="mt-5 uppercase bg-[#D4338B] text-white px-6 py-4 rounded-xl font-semibold shadow-sm border border-[#D4338B] transition-all duration-300 ease-in-out hover:ring-2 hover:ring-white hover:bg-white hover:text-[#D4338B] hover:-translate-y-1 hover:shadow-lg">
            Fermer
          </button>
        </div>
      </div>
    </transition>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, nextTick, watchEffect, onMounted } from 'vue'
import { useContent } from '~/composables/useContent'

const { content } = useContent()

const showModalComment = ref(false)
const products = ref<Product[]>([])
const hoveredIndex = ref<number | null>(null)
const hoverTimeout = ref<number | null>(null)
const animateBars = ref(false)
const selectedProduct = ref<Product | null>(null)
const selectedCategory = ref('all')
const itemsToShow = ref(6)

watchEffect(() => {
  if (Array.isArray(content.value?.glaces)) {
    products.value = content.value.glaces
  }
})

const filteredProducts = computed(() =>
  selectedCategory.value === 'all'
    ? products.value
    : products.value.filter(p => p.categorie.toLowerCase() === selectedCategory.value)
)

const visibleProducts = computed(() =>
  filteredProducts.value.slice(0, itemsToShow.value)
)

const hasMore = computed(() =>
  filteredProducts.value.length > itemsToShow.value
)

function loadMore() {
  itemsToShow.value += 6
  hoveredIndex.value = null
}

const barData = computed(() => {
  if (!selectedProduct.value) return {}
  const n = selectedProduct.value.nutrition
  return {
    matieresGrasses: n.matieresGrasses,
    acidesGrasSatures: n.acidesGrasSatures,
    glucides: n.glucides,
    sucres: n.sucres,
    proteines: n.proteines,
    fibres: n.fibres,
    sel: n.sel,
  }
})

function handleProductClick(index: number) {
  const product = visibleProducts.value[index]
  if (!product) return
  const realIndex = products.value.findIndex(p => p.id === product.id)
  if (hoveredIndex.value === index) {
    openDrawer(realIndex)
    clearHoverTimeout()
  } else {
    hoveredIndex.value = index
    resetHoverTimeout()
    window.location.hash = `#product-${product.id}`
  }
}

function resetHoverTimeout() {
  clearHoverTimeout()
  hoverTimeout.value = window.setTimeout(() => {
    hoveredIndex.value = null
  }, 2000)
}

function clearHoverTimeout() {
  if (hoverTimeout.value !== null) {
    clearTimeout(hoverTimeout.value)
    hoverTimeout.value = null
  }
}

async function openDrawer(index: number) {
  selectedProduct.value = products.value[index]
  animateBars.value = false
  await nextTick()
  setTimeout(() => {
    animateBars.value = true
  }, 50)
}

async function closeDrawer() {
  const hashWasProduct = window.location.hash.startsWith('#product-')
  selectedProduct.value = null
  window.location.hash = ''
  await nextTick()
  if (hashWasProduct) {
    const el = document.getElementById('products')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }
}

onMounted(() => {
  const stop = watchEffect(async (onInvalidate) => {
    if (products.value.length === 0) return
    await nextTick()
    const match = window.location.hash.match(/^#product-(\d+)$/)
    if (match) {
      const id = parseInt(match[1])
      const idx = products.value.findIndex(p => p.id === id)
      if (idx !== -1) openDrawer(idx)
    }
    stop()
  })
})

type Nutrition = { energie: { kj: number; kcal: number }; matieresGrasses: number; acidesGrasSatures: number; glucides: number; sucres: number; proteines: number; fibres: number; sel: number }
type Product = { id: number; categorie: string; gout: string; image: string; ingredients: string[]; nutrition: Nutrition }

const labels = {
  matieresGrasses: 'Matières grasses / Vetten',
  acidesGrasSatures: 'Dont acides gras saturés / Waarvan verzadigde vetzuren',
  glucides: 'Glucides / Koolhydraten',
  sucres: 'Dont sucres / Waarvan suikers',
  proteines: 'Protéines / Ewitten',
  fibres: 'Fibres / Vezels',
  sel: 'Sel / Zout'
}
const units = { matieresGrasses: 'g', acidesGrasSatures: 'g', glucides: 'g', sucres: 'g', proteines: 'g', fibres: 'g', sel: 'g' }
const maxValues = { matieresGrasses: 100, acidesGrasSatures: 100, glucides: 100, sucres: 100, proteines: 100, fibres: 100, sel: 100 }
</script>

<style scoped>
@keyframes fade-in {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
.fade-in-item { animation: fade-in 0.4s ease forwards; }
.bar-fill { transition: width 1s ease-in-out; }
.slide-right-enter-active, .slide-right-leave-active { transition: transform 0.3s ease, opacity 0.3s ease; }
.slide-right-enter-from { transform: translateX(100%); opacity: 0; }
.slide-right-enter-to { transform: translateX(0%); opacity: 1; }
.slide-right-leave-to { transform: translateX(100%); opacity: 0; }
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
.fade-enter-to, .fade-leave-from { opacity: 1; }
.fade-list-enter-active, .fade-list-leave-active { transition: all 0.4s ease; }
.fade-list-enter-from, .fade-list-leave-to { opacity: 0; transform: scale(0.95); }
.fade-list-enter-to, .fade-list-leave-from { opacity: 1; transform: scale(1); }
</style>
