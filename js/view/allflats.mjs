import loadFromIndexedDB from "../model/loadFromIndexedDB.mjs";
import {container, btnSearch, formSearch} from "./elements.mjs";
import handleDeleteButtonClick from "../controller/deleteFlat.mjs";
import goToDescription from "../view/description.mjs";
import handleSearch from "../controller/handleSearch.mjs";
import changeContainer from "../controller/changeContainer.mjs";

changeContainer(container)

container.addEventListener('click', handleDeleteButtonClick);

container.addEventListener('click', goToDescription)

btnSearch.addEventListener('click', handleSearch)

formSearch.addEventListener('submit', handleSearch)

loadFromIndexedDB().then(() => {
    console.log('Data loaded from IndexedDB successfully');
}).catch((error) => {
    console.error('Failed to load data from IndexedDB:', error);
});