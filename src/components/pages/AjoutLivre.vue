<script setup>

import { computed, ref } from 'vue';
import CarteLivreAjout from '../parts/CarteLivreAjout.vue';
import useFetchLivres from '@/composables/useFetchLivres';

    const inputTitreLivre = ref('');

    const { resultatsLivres, rechercher } = useFetchLivres();

    const soumettreRechercheLivre = (event) => {
        event.preventDefault();
        rechercher(inputTitreLivre.value);
    }

</script>

<template>
  <section>
        <div class="container mx-auto py-8 px-6 md:py-12">
            <h1 class="font-bold text-5xl mb-6 text-center">Trouvez un livre</h1>

            <!-- Input de recherche par titre de livre -->
            <form method="get" @submit="soumettreRechercheLivre">
                <div class="border border-slate-200 rounded-sm flex align-middle max-w-[600px] mx-auto">
                    <label class="hidden" for="inputTitreLivre">Titre</label>
                    <input class="p-2 rounded-sm flex-grow focus:outline-slate-200 focus:outline-1" type="text" id="inputTitreLivre" v-model="inputTitreLivre">
                    <!-- v-model fait reference à la variable qui contiendra la valeur de l'input -->
                    <button class="bg-indigo-600 group" type="submit" aria-label="rechercher">
                        <img class="h-8 m-2 group-hover:scale-[0.8] transition-all duration-200" src="../../assets/loupe-detaillee.png" alt="Rechercher">
                    </button>
                </div>
            </form>

            <!-- Résultats de la recherche -->
            <ul class="grid grid-cols-12 gap-y-6 mt-10">
                <li class="col-span-12 md:col-span-6 lg:col-span-4" v-for="livre in resultatsLivres" v-bind:key="livre.id">
                    <CarteLivreAjout :livre="livre" />
                </li>
            </ul>
        </div>
    </section>
</template>

<style scoped>
</style>