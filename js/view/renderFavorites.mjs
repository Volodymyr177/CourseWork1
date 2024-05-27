import loadFromIndexedDB from "../model/loadFromIndexedDB.mjs";
import renderFavorites from "./renderFavoritesFunction.mjs";

loadFromIndexedDB().then(() => {
    renderFavorites();
}).catch((error) => {
    console.error('Failed to load IndexedDB', error);
});