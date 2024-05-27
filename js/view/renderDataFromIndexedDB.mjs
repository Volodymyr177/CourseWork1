import fetchAllFlats from "../model/fetchAllFlats.mjs";
import renderFlat from "../view/renderFlat.mjs";

function renderDataFromIndexedDB() {
    fetchAllFlats(true, renderFlat)
        .then(() => {
            console.log('Data rendered successfully');
        })
        .catch(error => {
            console.error(error);
        });
}

export default renderDataFromIndexedDB;