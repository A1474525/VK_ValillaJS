//////////// локальное хранилище /////////////
export class Storage {
    getItem(key) {
        const data = localStorage.getItem(key)
        // if (data)
            return JSON.parse(data)
        // return null;
    }
    setItem(key, data) {
        // if (!data) return;
        localStorage.setItem(key, JSON.stringify(data))
    }
}
export const myStorage = new Storage();










// //////////////////////////////////////  Фотографии пользователя   /////////////////////////////////////////
//      const photosSectionContainer = document.querySelector('.photos__section-container');
//      elementCreate('div', ``, '', null, photosSectionContainer);
//      elementCreate('img', '', '', profile.photo_200, photosSectionContainer)

