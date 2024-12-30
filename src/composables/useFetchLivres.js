import { reactive, ref } from "vue"

export default function useFetchLivres(){
    const resultatsLivres = ref([]);

    const formaterTitre = (titre) => {
        // formatte le titre pour remplacer les espaces par des + pour la recherche
        return titre.replace(/ /g, "+" );
    }

    const rechercher = (titre)=>{
        if(titre !== "") {
            const titreFormate = formaterTitre(titre);

            fetch("https://www.googleapis.com/books/v1/volumes?q=" + titreFormate)
                .then(response=>{
                    return response.json()
                })
                .then(data => {
                    data = data.items;
                    resultatsLivres.value = data.map(livre => {
                        return ({
                            id: livre.id,
                            titre: livre.volumeInfo.title,
                            auteurs: livre.volumeInfo.authors || [],
                            image: livre.volumeInfo.imageLinks?.thumbnail || '',
                            description: livre.volumeInfo.description || 'Pas de description disponible',
                            datePublication: livre.volumeInfo.publishedDate || 'Pas de date de publication disponible',
                            ISBN: livre.volumeInfo.industryIdentifiers ? livre.volumeInfo.industryIdentifiers[0].identifier : 'Pas d\'ISBN disponible',
                            nbPages: livre.volumeInfo.pageCount || 'Pas de nombre de pages disponible',
                            lu: false
                        })
                    })
                })
        }
        else { // si le nom est vide, on remet le tableau à 0
            resultatsLivres.value = []
        }
    }

    return {
        resultatsLivres,
        rechercher
    }
}