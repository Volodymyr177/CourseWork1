import {isAdminPage, isGuestPage} from "../model/variables.mjs";

function goToDescription(event) {
    if (event.target && event.target.closest('button')?.id === 'description') {
        const flatCard = event.target.closest('.flat-card');
        const flatId = flatCard.id;
        localStorage.setItem('selectedFlatId', flatId);
        if (isAdminPage) {
            window.location.href = 'description.html';
        } else if (isGuestPage) {
            window.location.href = 'description-for-guest.html';
        }
    }
}

export default goToDescription;
