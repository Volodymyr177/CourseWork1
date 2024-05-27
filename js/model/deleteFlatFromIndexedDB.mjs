import { db } from "./loadFromIndexedDB.mjs";

function deleteFlatFromIndexedDB(flatId) {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(['flats'], 'readwrite');
        const objectStore = transaction.objectStore('flats');
        const request = objectStore.delete(flatId);

        request.onsuccess = function() {
            console.log(`Flat with ID ${flatId} deleted from IndexedDB`);
            resolve();
        };

        request.onerror = function() {
            console.error(`Failed to delete flat with ID ${flatId} from IndexedDB`);
            reject();
        };
    });
}

export default deleteFlatFromIndexedDB;
