import { db } from "./loadFromIndexedDB.mjs";

function getFlatById(flatId) {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(['flats'], 'readwrite');
        const objectStore = transaction.objectStore('flats');
        const request = objectStore.get(flatId);

        request.onsuccess = function(event) {
            const flat = event.target.result;
            if (flat) {
                resolve(flat);
            } else {
                reject(`Flat with ID ${flatId} not found in IndexedDB`);
            }
        };

        request.onerror = function() {
            reject(`Failed to get flat with ID ${flatId} from IndexedDB`);
        };
    });
}

export default getFlatById;
