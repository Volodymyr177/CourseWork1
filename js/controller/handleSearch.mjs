import { inputSearch, container } from "../view/elements.mjs";
import fetchAllFlats from "../model/fetchAllFlats.mjs";
import loadAndRenderFlats from "../model/loadAndRenderFlats.mjs";

function handleSearch(event) {
    event.preventDefault();

    const searchQuery = inputSearch.value.trim().toLowerCase();

    fetchAllFlats()
        .then(flats => {
            if (!searchQuery) {
                loadAndRenderFlats(flats, container);
                return;
            }

            const filteredFlats = flats.filter(flat => {
                const combinedText = `${flat.id} ${flat.rooms} ${flat.areas} ${flat.prices} ${flat.districts} ${flat.floors} ${flat.descriptions}`.toLowerCase();
                return combinedText.includes(searchQuery);
            });

            loadAndRenderFlats(filteredFlats, container);
        })
        .catch(error => {
            console.error(error);
        });
}

export default handleSearch;