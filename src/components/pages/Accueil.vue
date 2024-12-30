<script setup>
    import { inject, reactive } from 'vue';
    import CarteLivreCollection from '../parts/CarteLivreCollection.vue';
import useCollectionLivres from '@/composables/useCollectionLivres';

    const { livres } = useCollectionLivres();

</script>

<template>
    <section>
        <div class="container mx-auto py-8 px-6 md:py-12">
            <h1 class="font-bold text-5xl mb-6 text-center">Votre collection</h1>

            <!-- Si aucun livre dans la collection -->
            <div v-if="livres.length===0" class="flex flex-col align-middle">
                <img class="max-w-[275px] mx-auto" src="../../assets/box.png" alt="Aucun livre dans la collection">
                <p class="text-center">- Aucun livre dans la collection -</p>
                <button class="btn"><router-link to="/ajout-livre">Ajouter un livre</router-link></button>
            </div>
            <div v-else>
                <ul class="grid grid-cols-12 gap-y-6">
                    <li class="col-span-12 md:col-span-6 lg:col-span-4" v-for="livre in livres" :key="livre.id">
                        <CarteLivreCollection :id="livre.id" :titre="livre.titre" :auteurs="livre.auteurs" :image="livre.image" :lu="livre.lu" />
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<style scoped>
</style>