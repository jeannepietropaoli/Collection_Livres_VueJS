<script setup>
    import { inject } from 'vue';
    import imageParDefaut from '../../assets/livre-par-defaut.png';
import { useRouter } from 'vue-router';
import useCollectionLivres from '@/composables/useCollectionLivres';

    const router = useRouter();

    const props = defineProps({
        livre: Object
    })

    const { id, titre, auteurs, image } = props.livre;

    const { ajouterLivre } = useCollectionLivres();

    const gestionAjoutLivre = () => {
        ajouterLivre(props.livre);
        router.push('/accueil');
    }

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
        </ul>
    </div>
    <div class="group-hover:opacity-100 opacity-0 transition-all duration-300 absolute inset-0 border-2 border-indigo-600 bg-[#ffffffee] flex items-center justify-center rounded-md">
        <button @click="gestionAjoutLivre" class="btn btn--filled cursor-pointer">+ Ajouter</button>
    </div>
   </div>
</template>

<style scoped>
</style>