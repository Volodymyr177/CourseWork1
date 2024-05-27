import getFlatById from "../model/getFlatById.mjs";
import updateFlat from "../model/updateFlat.mjs";

function editFlat(flatId, newRooms, newArea, newPrice, newDistrict, newFloor) {
    getFlatById(flatId)
        .then(flat => {
            flat.rooms = newRooms;
            flat.areas = newArea;
            flat.prices = newPrice;
            flat.districts = newDistrict;
            flat.floors = newFloor;
            flat.timestamps = Date.now();

            return updateFlat(flat);
        })
        .then(message => {
            console.log(message);
        })
        .catch(error => {
            console.error(error);
        });
}

export default editFlat;