export const path = window.location.pathname;
export const isFavoritePage = path.includes('favorites.html') || path.includes('favorites-for-guest.html');
export const isAllFlatsPage = path.includes('allflats.html') || path.includes('allflats-for-guest.html');
export const isAdminPage = path.includes('allflats.html') || path.includes('favorites.html')
export const isGuestPage = path.includes('allflats-for-guest.html') || path.includes('favorites-for-guest.html');
export const contentContainer = document.getElementById('content-container')
export let flats = []
