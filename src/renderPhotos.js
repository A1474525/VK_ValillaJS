import {elementCreate} from "./elementCreate";

export function renderPhotos (photos) {
    creatorPhotoCollection(photos, 0, 6)
}
function creatorPhotoCollection (photos, numPhoto, quantity) {
    Array.from({length: quantity}).forEach(() => {
        createPhoto(photos, numPhoto)
        ++numPhoto
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

    photos[numPhoto] !== undefined
    ? elementCreate('img',
        '',
        '',
            photos[numPhoto].sizes[2].url,
        photosSectionContainerIMG)
    : console.log('запрашиваемой фотки нет')
}


