import addToIndexedDB from "../model/addToIndexedDB.mjs";
import renderFlat from "../view/renderFlat.mjs";

function addFlatToDBAndRender(flat) {
    return addToIndexedDB(flat).then(() => {
        renderFlat(flat);
        window.location.href = "allflats.html";
    }).catch(error => {
        console.error('Failed to add flat to IndexedDB', error);
        throw error;
    });
}

export default addFlatToDBAndRender;
