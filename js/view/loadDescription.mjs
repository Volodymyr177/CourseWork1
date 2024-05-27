import loadFlatById from "../model/loadFlatById.mjs";
import loadFromIndexedDB from '../model/loadFromIndexedDB.mjs';
import {contentContainer} from "../model/variables.mjs";

loadFromIndexedDB().then(() => {
    const flatId = localStorage.getItem('selectedFlatId');
    if (flatId) {
        loadFlatById(flatId)
            .then(flat => {
                contentContainer.innerHTML = `
                    <div class="flat-card font" id="${flat.id}">
                        <div class="row row-cols-1 row-cols-md-3 g-4">
                            <div class="col">
                                <div class="card h-100" style="width: 18rem;">
                                    <img src="${flat.image}" id="flat-image-${flat.id}" class="card-img-top image" alt="img">
                                    <div class="card-body">
                                        <h5 class="card-title">Flat №${flat.id}</h5>
                                        <p class="rooms">Rooms: ${flat.rooms}</p>
                                        <p class="area">Area: ${flat.areas} m<sup>2</sup></p>
                                        <p class="price">Price: ${flat.prices}$</p>
                                        <p class="district">District: ${flat.districts}</p>
                                        <p class="floor">Floor: ${flat.floors}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="description" class="font">
                        <div id="flat-text">
                            <dl class="row">
                                <dt class="col-sm-3">Description</dt>
                                <dd class="col-sm-9">${flat.descriptions}</dd>
                            </dd>
                            </dl>
                        </div>
                    </div>`;
            })
            .catch(error => {
                console.error(error);
                contentContainer.innerHTML = `<p>Failed to load flat description. Please try again later.</p>`;
            });
    } else {
        contentContainer.innerHTML = `<p>No flat selected. Please go back and select a flat.</p>`;
    }
}).catch(error => {
    console.error('Failed to load IndexedDB:', error);
    contentContainer.innerHTML = `<p>Failed to initialize IndexedDB. Please try again later.</p>`;
});
