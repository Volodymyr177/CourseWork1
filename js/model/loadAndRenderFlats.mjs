import renderFlat from "../view/renderFlat.mjs";

function loadAndRenderFlats(flats, container) {
    container.innerHTML = '';
    flats.forEach(renderFlat);
}

export default loadAndRenderFlats;