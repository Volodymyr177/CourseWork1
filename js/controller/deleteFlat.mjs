import deleteFlatFromIndexedDB from "../model/deleteFlatFromIndexedDB.mjs";

function handleDeleteButtonClick(event) {
    if (event.target && event.target.closest('button')?.id === 'delete') {
        const flatCard = event.target.closest('.flat-card');
        const flatId = parseInt(flatCard.id, 10);

        deleteFlatFromIndexedDB(flatId)
            .then(() => {
                if (flatCard) {
                    flatCard.remove();
                }
            })
            .catch(error => {
                console.error(error);
            });
    }
}

export default handleDeleteButtonClick;
