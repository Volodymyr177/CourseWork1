import loadFromIndexedDB from "../model/loadFromIndexedDB.mjs";
import initializeContainer from "../controller/initializeContainer.mjs";

loadFromIndexedDB().then(() => {
    console.log('Data loaded from IndexedDB successfully');
    initializeContainer();
}).catch((error) => {
    console.error('Failed to load data from IndexedDB:', error);
});