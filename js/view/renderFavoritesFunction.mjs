import fetchAllFlats from "../model/fetchAllFlats.mjs";
import { containerLiked } from "./elements.mjs";
import loadAndRenderFlats from "../model/loadAndRenderFlats.mjs";

function renderFavorites() {
    fetchAllFlats()
        .then(flats => {
            const favoriteFlats = flats.filter(flat => flat.isFavorite === true);
            if (containerLiked) {
                loadAndRenderFlats(favoriteFlats, containerLiked);
            } else {
                console.error('Container element not found');
            }
        })
        .catch(error => {
            console.error('Failed to get favorite flats from IndexedDB:', error);
        });
}

export default renderFavorites;