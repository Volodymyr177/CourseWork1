import editFlat from "./editFlat.mjs";
import addToFavorites from "./addToFavorites.mjs";

function changeContainer(container) {
    container.addEventListener('click', function(event) {
        if (event.target && event.target.closest('button')?.id === 'edit') {
            const flatCard = event.target.closest('.flat-card');
            const flatId = flatCard.id;
            const newRooms = flatCard.querySelector('.rooms').textContent.replace('Rooms: ', '').trim();
            const newArea = flatCard.querySelector('.area').textContent.replace('Area: ', '').replace(' m2', '').trim();
            const newPrice = flatCard.querySelector('.price').textContent.replace('Price: ', '').replace('$', '').trim();
            const newDistrict = flatCard.querySelector('.district').textContent.replace('District: ', '').trim();
            const newFloor = flatCard.querySelector('.floor').textContent.replace('Floor: ', '').trim();

            editFlat(parseInt(flatId), newRooms, newArea, newPrice, newDistrict, newFloor);
        } else if (event.target && event.target.closest('button')?.id === 'favorites') {
            const flatCard = event.target.closest('.flat-card');
            const flatId = parseInt(flatCard.id, 10);
            addToFavorites(flatId);
        }
    });
}

export default changeContainer