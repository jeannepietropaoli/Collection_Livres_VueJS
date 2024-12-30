<script setup>
    import { inject } from 'vue';
    import imageParDefaut from '../../assets/livre-par-defaut.png';
import useCollectionLivres from '@/composables/useCollectionLivres';

    const props = defineProps({
        id: String,
        titre: String,
        auteurs: Array,
        image: String, 
        lu: Boolean
    })

    const { supprimerLivre, changerStatutLuLivre } = useCollectionLivres();

</script>

<template>
   <div class="group relative text-center flex flex-col items-center justify-center bg-slate-50 rounded-md w-11/12 py-6 px-4 sm:px-7 h-full">
    <img class="h-[180px]" :src="image ? image : imageParDefaut" alt="Couverture du livre">
    <p class="font-semibold py-3 mb-4 w-[100%] border-b-2 border-indigo-600">Livre #{{ id }}</p>
    <div class="flex-grow">
        <p><span class="font-semibold">Titre:</span> {{ titre }}</p>
        <ul><span class="font-semibold">Auteur(s):</span>
            <span v-if="auteurs.length === 0">Inconnu</span>
            <li class="inline" v-else>{{ auteurs.join(', ') }}</li>
            <div v-show="lu" class="absolute top-4 right-4 flex gap-1 items-center text-[0.68rem] font-bold text-white bg-indigo-600 rounded-md w-max py-[2px] px-2">
                <img class="h-3" src="../../assets/certifie-wh.png" alt="Lu">
                <span>Lu</span>
            </div>
        </ul>
    </div>
    <div class="group-hover:opacity-100 opacity-0 transition-all duration-300 absolute inset-0 border-2 border-indigo-600 bg-[#ffffffee] flex flex-col items-center justify-center rounded-md">
        <button @click="changerStatutLuLivre(id)" class="btn btn--filled cursor-pointer">Marquer comme {{ lu ? 'non-lu' : 'lu' }}</button>
        <button @click="supprimerLivre(id)" class="btn btn--filled cursor-pointer">Supprimer</button>
        <button class="btn btn--filled cursor-pointer"><router-link :to="{name: 'livre-details', params: {id:id}}">Détails</router-link>
        </button>
    </div>
   </div>
</template>

<style scoped>
</style>