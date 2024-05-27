import getFlatById from "../model/getFlatById.mjs";
import updateFlat from "../model/updateFlat.mjs";

function addToFavorites(flatId) {
    getFlatById(flatId)
        .then(flat => {
            flat.isFavorite = !flat.isFavorite;
            return updateFlat(flat);
        })
        .then(message => {
            console.log(message);
        })
        .catch(error => {
            console.error(error);
        });
}

export default addToFavorites;