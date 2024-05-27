import { db } from "./loadFromIndexedDB.mjs";
import renderFlat from "../view/renderFlat.mjs";

function updateFlat(flat, shouldRender = true) {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(['flats'], 'readwrite');
        const objectStore = transaction.objectStore('flats');
        const request = objectStore.put(flat);

        request.onsuccess = function() {
            if (shouldRender) {
                renderFlat(flat);
            }
            resolve(`Flat with ID ${flat.id} updated successfully in IndexedDB`);
        };

        request.onerror = function() {
            reject(`Failed to update flat with ID ${flat.id} in IndexedDB`);
        };
    });
}

export default updateFlat;
