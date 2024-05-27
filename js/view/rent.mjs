import loadFromIndexedDB from "../model/loadFromIndexedDB.mjs";
import addFlat from "../controller/addFlat.mjs";
import { form } from "./elements.mjs";

form.addEventListener('submit', addFlat);

loadFromIndexedDB().then(() => {
    console.log('Data loaded from IndexedDB successfully');
}).catch((error) => {
    console.error('Failed to load data from IndexedDB:', error);
});
