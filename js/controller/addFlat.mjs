import {inputRooms, inputArea, inputPrice, inputDistrict, inputFloor, inputDescription, photoUploadInput} from "../view/elements.mjs";
import addFlatToDBAndRender from "../model/addFlatToDBAndRender.mjs";

function addFlat(event) {
    event.preventDefault()

    const room = inputRooms.value
    const area = inputArea.value
    const price = inputPrice.value
    const district = inputDistrict.value
    const floor = inputFloor.value
    const description = inputDescription.value

    const timestamp = Date.now()

    let newFlat = {
        id: timestamp,
        rooms: room,
        areas: area,
        prices: price,
        districts: district,
        floors: floor,
        descriptions: description,
        timestamps: timestamp
    };

    const handleFlatAddition = (flat) => {
        addFlatToDBAndRender(flat).then(() => {
            inputRooms.value = 'Select the rooms count';
            inputArea.value = '';
            inputPrice.value = '';
            inputDistrict.selectedIndex = 0;
            inputFloor.value = '';
            inputDescription.value = '';
        }).catch(error => {
            console.error('Failed to handle flat addition', error);
        });
    };

    if (photoUploadInput.files?.[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            newFlat.image = e.target.result;
            handleFlatAddition(newFlat);
            photoUploadInput.value = null;
        };
        reader.readAsDataURL(photoUploadInput.files[0]);
    } else {
        newFlat.image = './images/without-image.svg';
        handleFlatAddition(newFlat);
    }
}

export default addFlat