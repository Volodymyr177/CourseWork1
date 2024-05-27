import { db } from "./loadFromIndexedDB.mjs";

function loadFlatById(flatId) {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(['flats'], 'readonly');
        const objectStore = transaction.objectStore('flats');
        const request = objectStore.get(parseInt(flatId, 10));

        request.onsuccess = function(event) {
            const flat = event.target.result;
            if (flat) {
                resolve(flat);
            } else {
                reject('Flat not found');
            }
        };

        request.onerror = function() {
            reject('Failed to load flat from IndexedDB');
        };
    });
}

export default loadFlatById;
