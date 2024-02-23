const popup = document.getElementById('popup');
const overlay = document.querySelector('.popup-overlay');
const closeBtn = document.querySelector('.popup-close');

export function openPopup() {
    popup.classList.add('show');
    overlay.classList.add('show');
    closeBtn.addEventListener('click', closePopup);
    overlay.addEventListener('click', closePopup);
}

export function closePopup() {
    popup.classList.remove('show');
    overlay.classList.remove('show');
    closeBtn.removeEventListener('click', closePopup)
    overlay.removeEventListener('click', closePopup)
}

