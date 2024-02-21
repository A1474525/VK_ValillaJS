import {removeChildElement, elementCreate} from "./utils/elementCreate";
import {myStorage} from "./utils/storage";

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
    myStorage.removeItem('num')
    removeChildElement ('popup-content' )
    removeChildElement ('popup-content-btn-left' )
    removeChildElement ('popup-content-btn-right' )
    // const popupContent = document.querySelector('.popup-content');
    // popupContent.removeChild(popupContent.lastChild); // todo
    // const popupBtn = document.querySelector('.btnPhoto');
    // popupBtn.removeChild(popupBtn.lastChild); // todo
}

document.addEventListener('DOMContentLoaded', () => {
    const closeBtn = document.querySelector('.popup-close');
    const overlay = document.querySelector('.popup-overlay');

    closeBtn.addEventListener('click', closePopup); // todo  есть
    overlay.addEventListener('click', closePopup);
    const closePopupHandler = () => closePopup();
    const overlayClickHandler = () => closePopup();
    closeBtn.removeEventListener('click', closePopupHandler);
    overlay.removeEventListener('click', overlayClickHandler);
});
