import renderDataFromIndexedDB from "../view/renderDataFromIndexedDB.mjs";

export let db;

function loadFromIndexedDB() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open('FlatsDB', 2);

        request.onupgradeneeded = function(event) {
            const db = event.target.result;
            const objectStore = db.objectStoreNames.contains('flats')
                ? event.target.transaction.objectStore('flats')
                : db.createObjectStore('flats', { keyPath: 'id' });

            if (!objectStore.indexNames.contains('rooms')) {
                objectStore.createIndex('rooms', 'rooms', { unique: false });
            }
            if (!objectStore.indexNames.contains('areas')) {
                objectStore.createIndex('areas', 'areas', { unique: false });
            }
            if (!objectStore.indexNames.contains('prices')) {
                objectStore.createIndex('prices', 'prices', { unique: false });
            }
            if (!objectStore.indexNames.contains('districts')) {
                objectStore.createIndex('districts', 'districts', { unique: false });
            }
            if (!objectStore.indexNames.contains('floors')) {
                objectStore.createIndex('floors', 'floors', { unique: false });
            }
            if (!objectStore.indexNames.contains('descriptions')) {
                objectStore.createIndex('descriptions', 'descriptions', { unique: false });
            }
            if (!objectStore.indexNames.contains('image')) {
                objectStore.createIndex('image', 'image', { unique: false });
            }
            if (!objectStore.indexNames.contains('isFavorite')) {
                objectStore.createIndex('isFavorite', 'isFavorite', { unique: false });
            }
        };


        request.onsuccess = function(event) {
            db = event.target.result;
            console.log('IndexedDB opened successfully');
            renderDataFromIndexedDB();
            resolve(db);
        };

        request.onerror = function() {
            console.error('Failed to open IndexedDB');
            reject();
        };
    });
}

export default loadFromIndexedDB;
