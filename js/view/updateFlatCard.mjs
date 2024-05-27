function updateFlatCard(flat) {
    const flatCard = document.getElementById(flat.id);
    if (flatCard) {
        const formattedTime = new Intl.DateTimeFormat('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        }).format(flat.timestamps);

        flatCard.querySelector('.rooms').innerHTML = `Rooms: ${flat.rooms}`;
        flatCard.querySelector('.area').innerHTML = `Area: ${flat.areas} m<sup>2</sup>`;
        flatCard.querySelector('.price').innerHTML = `Price: ${flat.prices}$`;
        flatCard.querySelector('.district').innerHTML = `District: ${flat.districts}`;
        flatCard.querySelector('.floor').innerHTML = `Floor: ${flat.floors}`;
        flatCard.querySelector('.text-body-secondary').innerHTML = `Last updated ${formattedTime}`;

        const flatImage = flatCard.querySelector(`#flat-image-${flat.id}`);
        flatImage.src = flat.image;

        const favoriteButtonImage = flatCard.querySelector('#favorites img');
        if (favoriteButtonImage) {
            favoriteButtonImage.src = flat.isFavorite ? './images/completed-heart.svg' : './images/heart.svg';
        }
    }
}

export default updateFlatCard