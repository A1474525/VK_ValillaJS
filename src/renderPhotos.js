import {elementCreate, removeChildElement, removeElement} from "./utils/elementCreate";
import {openPopup} from './popup.js';
import btnRight from "./images/arrow.png";
import {myStorage} from "./utils/storage";
const AMOUNT_PHOTO_INTO_ALBUM = 6;
const SIZE = 4;

export function renderPhotosCollection(photos) {
    Array.from({ length: AMOUNT_PHOTO_INTO_ALBUM },
        (_, index) => {
        createPhoto(photos, index);
    });
}
function createPhoto (photos, numPhoto) {
    const photosSectionContainer = document.querySelector(
        '.photos__section-container');
    elementCreate('div',
        '',
        `card-of-photo${numPhoto}`,
        null, photosSectionContainer)
     const photosSectionContainerIMG = document.querySelector(
         `.card-of-photo${numPhoto}`)

    !!photos[numPhoto] && !!photos[numPhoto].sizes && !!photos[numPhoto].sizes[2]
    ? elementCreate('img',
        '',
        `${numPhoto}`,
            photos[numPhoto].sizes[2].url,
        photosSectionContainerIMG)
    : console.log('запрашиваемой фотки нет')
}
export function openerClickPhoto() {
    const image = document.querySelector('.photos__section-container');
    const clickPhoto = (event) => {
        const num = +event.target.className
        myStorage.setItem('num', num);
        console.log('получили номер фотки при клике: ', num)
        openPopup();
        popupBtn();
        popupContent()
        event.target.removeEventListener('click', clickPhoto)
    }
    image.addEventListener('click', clickPhoto)
}


function popupContent() {
    removeElement ('popup-content-img' )
    const photos = myStorage.getItem('photos');
    console.log('длинна массива фотографий', photos.length)
    const num = myStorage.getItem('num');
    const popupContent = document.querySelector('.popup-content');
    num !== undefined
    && photos[num].sizes[SIZE] !== undefined
        ? elementCreate('img',
            '',
            'popup-content-img',
            photos[num].sizes[SIZE].url,
            popupContent)
        : console.log('запрашиваемой фотки нет')
}
function popupBtn() {
    const popupContentBtnLeft = document.querySelector('.popup-content-btn-left');
    removeChildElement('popup-content-btn-right')
    removeChildElement('popup-content-btn-left')
    if (!popupContentBtnLeft.classList.contains('btn-left')) {
    const arrow = new Image();
    arrow.src = btnRight;
    elementCreate('img', '', 'btn-left', btnRight, popupContentBtnLeft);
    const popupContentBtnRight = document.querySelector('.popup-content-btn-right');
    elementCreate('img', '', 'btn-right', btnRight, popupContentBtnRight);
    }
    const buttonLeft = document.querySelector('.btn-left');
    let num = myStorage.getItem('num');
    const photos = myStorage.getItem('photos');
    buttonLeft.addEventListener('click', function (){
        num = num > 0 ? num -1 : 0;
        myStorage.setItem('num', num)
        popupContent();
        console.log (num)
    })
    const buttonRight = document.querySelector('.btn-right')
    buttonRight.addEventListener('click', function (){
        num = num < (photos.length - 1) ? num + 1 : (photos.length - 1)
        myStorage.setItem('num', num)
        popupContent();
        console.log (num)
    })
}

