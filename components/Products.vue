<template>
  <section id="products">
    <div class="bg-[#D4338B]">
      <h2 class="text-4xl sm:text-5xl md:text-6xl lg:text-6xl text-center text-white py-6 md:py-8 xl:mb-10">
        Nos produits
      </h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 md:px-8 lg:px-12 pb-10">
        <div v-for="(product, index) in products" :key="index"
          class="relative group cursor-pointer overflow-hidden rounded-2xl" @click="handleProductClick(index)">
          <img :src="product.image"
            class="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
            :alt="product.gout" />

          <transition name="fade">
            <div v-if="hoveredIndex === index"
              class="absolute inset-0 w-full min-w-full bg-[#D4338B]/80 flex flex-col items-center justify-center rounded-2xl border-2 border-white">
              <span class="text-white text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-semibold">{{ product.gout }}</span>
              <span class="text-white text-2xl mt-5">+ d'infos</span>
            </div>
          </transition>
        </div>
      </div>
    </div>

    <!-- Drawer -->
    <transition name="slide-right">
      <div v-if="selectedProduct" class="fixed inset-0 z-50 flex justify-end pointer-events-none">
        <div
          class="relative w-full sm:w-[400px] max-w-full bg-white shadow-lg h-full p-6 overflow-y-auto pointer-events-auto">
          <button class="absolute top-4 right-4 text-gray-500 hover:text-[#D4338B] text-2xl font-bold"
            @click="closeDrawer" aria-label="Fermer">
            &times;
          </button>

          <h3 class="text-4xl font-bold mb-4 text-[#D4338B]">
            {{ selectedProduct.gout }}
          </h3>

          <img :src="selectedProduct.image" :alt="selectedProduct.gout" class="w-full h-auto rounded-lg mb-4" />

          <div class="mb-6">
            <h4 class="text-2xl font-semibold mb-2">Ingrédients</h4>
            <p>{{ selectedProduct.ingredients.join(', ') }}</p>
          </div>

          <div>
            <h4 class="text-2xl font-semibold mb-2">Valeurs nutritionnelles (pour 100g)</h4>
            <div class="space-y-4">
              <div>
                <p class="font-medium text-lg mb-1">
                  Énergie : {{ selectedProduct.nutrition.energie.kj }} kJ - {{ selectedProduct.nutrition.energie.kcal }}
                  kcal
                </p>
              </div>

              <div v-for="(value, key) in barData" :key="key">
                <p class="text-lg font-medium mb-1">{{ labels[key] }} : {{ value }}{{ units[key] }}</p>
                <div class="w-full bg-gray-200 rounded-full h-2.5">
                  <div class="bg-[#D4338B] h-2.5 rounded-full"
                    :style="{ width: `${(value / maxValues[key]) * 100}%` }" />
                </div>
              </div>
            </div>
          </div>

          <button @click="closeDrawer" class="mt-6 px-4 py-2 bg-[#D4338B] text-white rounded-xl">
            Fermer
          </button>
        </div>
      </div>
    </transition>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

const hoveredIndex = ref<number | null>(null)
const hoverTimeout = ref<number | null>(null)
const isDesktop = ref(false)

onMounted(() => {
  const updateDeviceType = () => {
    isDesktop.value = window.innerWidth >= 1024
  }
  updateDeviceType()
  window.addEventListener('resize', updateDeviceType)
})

onUnmounted(() => {
  clearHoverTimeout()
})

const handleProductClick = (index: number) => {

    if (hoveredIndex.value === index) {
      openDrawer(index)
      clearHoverTimeout()
    } else {
      hoveredIndex.value = index
      resetHoverTimeout()
    }

}


const resetHoverTimeout = () => {
  clearHoverTimeout()
  hoverTimeout.value = window.setTimeout(() => {
    hoveredIndex.value = null
  }, 2000)
}

const clearHoverTimeout = () => {
  if (hoverTimeout.value !== null) {
    clearTimeout(hoverTimeout.value)
    hoverTimeout.value = null
  }
}

const selectedProduct = ref<Product | null>(null)

const openDrawer = (index: number) => {
  selectedProduct.value = products.value[index]
}

const closeDrawer = () => {
  selectedProduct.value = null
  resetHoverTimeout()
}

// TYPES
type Nutrition = {
  energie: { kj: number; kcal: number };
  matieresGrasses: number;
  acidesGrasSatures: number;
  glucides: number;
  sucres: number;
  proteines: number;
  fibres: number;
  sel: number;
}

type Product = {
  gout: string;
  image: string;
  ingredients: string[];
  nutrition: Nutrition;
}

const products = ref<Product[]>([
  {
    gout: 'Fraise',
    image: 'https://placehold.co/600x400',
    ingredients: ['Lait', 'Sucre', 'Fraise', 'Crème'],
    nutrition: {
      energie: { kj: 894, kcal: 212 },
      matieresGrasses: 9.34,
      acidesGrasSatures: 5.38,
      glucides: 27.85,
      sucres: 25.79,
      proteines: 4.31,
      fibres: 0,
      sel: 0.16
    }
  },
  {
    gout: 'Fraise',
    image: 'https://placehold.co/600x400',
    ingredients: ['Lait', 'Sucre', 'Fraise', 'Crème'],
    nutrition: {
      energie: { kj: 894, kcal: 212 },
      matieresGrasses: 9.34,
      acidesGrasSatures: 5.38,
      glucides: 27.85,
      sucres: 25.79,
      proteines: 4.31,
      fibres: 0,
      sel: 0.16
    }
  },
  {
    gout: 'Fraise',
    image: 'https://placehold.co/600x400',
    ingredients: ['Lait', 'Sucre', 'Fraise', 'Crème'],
    nutrition: {
      energie: { kj: 894, kcal: 212 },
      matieresGrasses: 9.34,
      acidesGrasSatures: 5.38,
      glucides: 27.85,
      sucres: 25.79,
      proteines: 4.31,
      fibres: 0,
      sel: 0.16
    }
  },
  {
    gout: 'Fraise',
    image: 'https://placehold.co/600x400',
    ingredients: ['Lait', 'Sucre', 'Fraise', 'Crème'],
    nutrition: {
      energie: { kj: 894, kcal: 212 },
      matieresGrasses: 9.34,
      acidesGrasSatures: 5.38,
      glucides: 27.85,
      sucres: 25.79,
      proteines: 4.31,
      fibres: 0,
      sel: 0.16
    }
  },
  {
    gout: 'Fraise',
    image: 'https://placehold.co/600x400',
    ingredients: ['Lait', 'Sucre', 'Fraise', 'Crème'],
    nutrition: {
      energie: { kj: 894, kcal: 212 },
      matieresGrasses: 9.34,
      acidesGrasSatures: 5.38,
      glucides: 27.85,
      sucres: 25.79,
      proteines: 4.31,
      fibres: 0,
      sel: 0.16
    }
  },
  {
    gout: 'Fraise',
    image: 'https://placehold.co/600x400',
    ingredients: ['Lait', 'Sucre', 'Fraise', 'Crème'],
    nutrition: {
      energie: { kj: 894, kcal: 212 },
      matieresGrasses: 9.34,
      acidesGrasSatures: 5.38,
      glucides: 27.85,
      sucres: 25.79,
      proteines: 4.31,
      fibres: 0,
      sel: 0.16
    }
  },
  // Ajoute d'autres produits ici
])

const labels: Record<string, string> = {
  matieresGrasses: 'Matières grasses',
  acidesGrasSatures: 'Acides gras saturés',
  glucides: 'Glucides',
  sucres: 'Dont sucres',
  proteines: 'Protéines',
  fibres: 'Fibres',
  sel: 'Sel'
}

const units: Record<string, string> = {
  matieresGrasses: 'g',
  acidesGrasSatures: 'g',
  glucides: 'g',
  sucres: 'g',
  proteines: 'g',
  fibres: 'g',
  sel: 'g'
}

const maxValues: Record<string, number> = {
  matieresGrasses: 30,
  acidesGrasSatures: 20,
  glucides: 50,
  sucres: 50,
  proteines: 20,
  fibres: 10,
  sel: 2
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
    sel: n.sel
  }
})
</script>

<style scoped>
.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.slide-right-enter-from {
  transform: translateX(100%);
  opacity: 0;
}

.slide-right-enter-to {
  transform: translateX(0%);
  opacity: 1;
}

.slide-right-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
