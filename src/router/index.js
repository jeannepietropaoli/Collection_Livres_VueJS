import { createRouter, createWebHistory } from 'vue-router';
import Accueil from '../components/pages/Accueil.vue';
import AjoutLivre from '../components/pages/AjoutLivre.vue';
import Erreur from '../components/pages/Erreur.vue';
import FicheDetailsLivre from '../components/pages/FicheDetailsLivre.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: { path: '/accueil' }  // Redirection vers /accueil
        },
        {
            path: '/accueil',
            name: 'accueil',
            component: Accueil
        },
        {
            path: '/ajout-livre',
            name: 'ajout-livre',
            component: AjoutLivre
        },
        {
            path: '/livre-details/:id',
            name: 'livre-details',
            component: FicheDetailsLivre,
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'erreur',
            component: Erreur
        }
            
    ]
})

export default router;