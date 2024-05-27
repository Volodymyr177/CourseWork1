import changeContainer from "./changeContainer.mjs";
import {containerLiked} from "../view/elements.mjs";
import handleDeleteButtonClick from "./deleteFlat.mjs";
import goToDescription from "../view/description.mjs";

function initializeContainer() {
    changeContainer(containerLiked);

    containerLiked.addEventListener('click', handleDeleteButtonClick);
    containerLiked.addEventListener('click', goToDescription);
}

export default initializeContainer