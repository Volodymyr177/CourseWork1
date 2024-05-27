import { db } from "./loadFromIndexedDB.mjs";

function addToIndexedDB(flat) {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(['flats'], 'readwrite');
        const objectStore = transaction.objectStore('flats');
        const request = objectStore.add(flat);

        request.onsuccess = function() {
            console.log('Flat added to IndexedDB');
            resolve();
        };

        request.onerror = function() {
            console.error('Failed to add flat to IndexedDB');
            reject();
        };
    });
}

export default addToIndexedDB;
