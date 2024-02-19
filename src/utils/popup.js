export function openPopup() {
    const popup = document.getElementById('popup');
    const overlay = document.querySelector('.popup-overlay');
    popup.classList.add('show');
    overlay.classList.add('show');
}

export function closePopup() {
    const popup = document.getElementById('popup');
    const overlay = document.querySelector('.popup-overlay');
    popup.classList.remove('show');
    overlay.classList.remove('show');
}

document.addEventListener('DOMContentLoaded', () => {
    const closeBtn = document.querySelector('.popup-close');
    const overlay = document.querySelector('.popup-overlay');

    closeBtn.addEventListener('click', closePopup); // todo
    overlay.addEventListener('click', closePopup); // todo
});
