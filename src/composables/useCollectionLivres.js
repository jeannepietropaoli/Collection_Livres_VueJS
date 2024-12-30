import { reactive } from "vue";

const livres = reactive([]);
// initialisation de la variable livres en dehors de la fonction useLivres
// permet de faire en sorte que plusieurs composants qui appelleront ce même composable modifient la MEME variable réactive

export default function useCollectionLivres(){
    const ajouterLivre = (nouveauLivre) => {
        if(livres.find(livre => livre.id === nouveauLivre.id)) {
          alert('Livre déjà dans la collection');
          return;
        } else {
          nouveauLivre.lu = false;
          livres.push(nouveauLivre);
          console.log('Livre ajouté');
        }
      }
    
      const supprimerLivre = (livreId) => {
        const index = livres.findIndex(livre => livre.id === livreId);
        if(confirm('Voulez-vous vraiment supprimer ce livre ?')) {
          livres.splice(index, 1);
          console.log('Livre supprimé');
        }
      }
    
      const changerStatutLuLivre = (livreId) => {
        const livre = livres.find(livre => livre.id === livreId);
        livre.lu = !livre.lu;
        console.log('Statut lu du livre changé');
      }

      return {
        livres,
        ajouterLivre,
        supprimerLivre,
        changerStatutLuLivre
      }
};