import {container, containerLiked} from "./elements.mjs";
import {isFavoritePage, isAllFlatsPage, isGuestPage} from "../model/variables.mjs";
import updateFlatCard from "./updateFlatCard.mjs";

function renderFlat(flat) {
    if (isFavoritePage && !flat.isFavorite) {
        const flatCard = document.getElementById(flat.id);
        if (flatCard) {
            flatCard.remove();
        }
        return;
    }

    if (isAllFlatsPage || isFavoritePage) {
        const flatCard = document.getElementById(flat.id);
        if (flatCard) {
            updateFlatCard(flat);
        } else {
            const formattedTime = new Intl.DateTimeFormat('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            }).format(flat.timestamps);

            const flatHTML = `
<div class="flat-card font" id="${flat.id}">
<div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100" style="width: 18rem;">
      <img src="${flat.image}" id="flat-image-${flat.id}" class="card-img-top image" alt="img">
      <div class="card-body">
        <h5 class="card-title">Flat №${flat.id}</h5>
        <p class="rooms" contenteditable="true">Rooms: ${flat.rooms}</p>
        <p class="area" contenteditable="true">Area: ${flat.areas} m<sup>2</sup></p>
        <p class="price" contenteditable="true">Price: ${flat.prices}$ </p>
        <p class="district" contenteditable="true">District: ${flat.districts}</p>
        <p class="floor" contenteditable="true">Floor: ${flat.floors}</p>
        ${!isGuestPage ? `
        <button id="delete" class="mt-1 float-right btn actions">
        <img src="./images/trash.svg" id="img" alt="delete">
        <span>Delete</span>
        </button>
        <button id="edit" class="mt-1 float-right btn actions">
        <img src="./images/pencil.svg" id="img" alt="edit">
        <span>Edit</span>
        </button>` : ''}
        <button id="description" class="mt-1 float-left btn actions">
        <img src="./images/eye.svg" id="img" alt="edit">
        <span>See more</span>
        </button>
        <button id="favorites" class="mt-1 float-left btn actions">
        <img src="${flat.isFavorite ? './images/completed-heart.svg' : './images/heart.svg'}" id="img" alt="favorites">
        <span>Like</span>
        </button>
      </div>
      <div class="card-footer">
        <small class="text-body-secondary">Last updated ${formattedTime}</small>
      </div>
    </div>
  </div>
</div>
</div>
    `
            if (isAllFlatsPage) {
                container.innerHTML += flatHTML;
            } else if (isFavoritePage) {
                containerLiked.innerHTML += flatHTML;
            }
        }
    }
}

export default renderFlat