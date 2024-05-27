import { db } from "./loadFromIndexedDB.mjs";

function fetchAllFlats(shouldRender = false, renderCallback = null) {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(['flats'], 'readonly');
        const objectStore = transaction.objectStore('flats');
        const request = objectStore.getAll();

        request.onsuccess = function(event) {
            const flats = event.target.result;
            if (shouldRender && renderCallback) {
                flats.forEach(renderCallback);
            }
            resolve(flats);
        };

        request.onerror = function() {
            reject('Failed to get all flats from IndexedDB');
        };
    });
}

export default fetchAllFlats;
