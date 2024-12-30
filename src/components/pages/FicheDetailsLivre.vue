<script setup>
import imageParDefaut from "../../assets/livre-par-defaut.png";
import { useRoute } from "vue-router";
import useCollectionLivres from "@/composables/useCollectionLivres";

const route = useRoute();
const id = route.params.id;

const { livres } = useCollectionLivres();

const livre = livres.find((livre) => livre.id === id);

</script>

<template>
  <section>
    <div class="container mx-auto py-8 px-6 md:py-12">
        <h1 class="font-bold text-5xl mb-6 text-center">Fiche détaillée</h1>
      <div class="group relative flex flex-col md:flex-row gap-4 md:gap-12 items-center justify-center bg-slate-50 rounded-md p-7 sm:px-16 sm:py-10 h-full w-fit mx-auto">
        <img class="h-full md:min-w-[250px] max-w-[350px]" :src="livre.image ? livre.image : imageParDefaut" alt="Couverture du livre" />
        <div class="space-y-3">
            <p class="font-semibold py-3 mb-4 w-[100%] border-b-2 border-indigo-600">Livre #{{ livre.id }}</p>
            <p><span class="font-semibold">Titre:</span> {{ livre.titre }}</p>
            <p><span class="font-semibold">Date de publication:</span> {{ livre.datePublication }}</p>
            <p><span class="font-semibold">Description:</span> {{ livre.description }}</p>
            <ul>
                <span class="font-semibold">Auteur(s): </span>
                <span v-if="livre.auteurs.length === 0">Inconnu</span>
                <li class="inline" v-else>{{ livre.auteurs.join(", ") }}</li>
            </ul>
            <p><span class="font-semibold">ISBN:</span> {{ livre.ISBN }}</p>
            <p><span class="font-semibold">Nombre de pages:</span> {{ livre.nbPages }}</p>
            <p><span class="font-semibold">Lu:</span> {{ livre.lu ? 'Oui' : 'Non' }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
