import {myRequest} from "./utils/request";
import {myStorage} from "./utils/storage";
import {renderProfile} from "./renderProfile";
import {openerClickFriend, renderFriends} from "./renderFriends";
import {openerClickPhoto, renderPhotosCollection} from "./renderPhotos";
import {removeChildElement} from "./utils/elementCreate";

export function runInitions() {
    let userID = myStorage.getItem('user_id')
    !!userID
        ? console.log('запрашиваемый ИД загрузился')
        : userID = myStorage.getItem('myUser_id');
    runInitProfile (userID)
    removeChildElement('friends__section-container')
    runInitFriends (userID)
    removeChildElement('photos__section-container')
    runInitPhotos (userID)
}

export function runInitProfile(userID) {
    myRequest.create('users.get',
        `user_ids=${userID}&fields= bdate, city, online, last_seen, photo_200, universities, counters`,
        'profile')

window.profile = (profile) => {
    if (!profile.response || !profile.response[0]) return;
    const userProfile = profile.response[0];
    myStorage.setItem('profile', userProfile);
    renderProfile(userProfile)
}
}
export function runInitFriends (userID) {
    myRequest.create('friends.get',
        `user_id=${userID}&fields=photo_50,first_name,last_name`,
        'friends')

window.friends = (friends) => {
    if (!friends.response || !friends.response.items) return;
    const userFriends = friends.response.items;
    myStorage.setItem('friends', userFriends);
    renderFriends(friends)
    openerClickFriend(friends)
}}
export function runInitPhotos (userID) {
    myRequest.create('photos.getAll',
        `owner_id=${userID}`,
        'photos')

window.photos = (photos) => {
    if (!photos.response) return;
    const userPhotos = photos.response.items;
    myStorage.setItem('photos', userPhotos);
    renderPhotosCollection(userPhotos)
    openerClickPhoto(userPhotos)
}}

export function btnReturnMyPage () {
    const myVK = document.querySelector('.header__myVK');
    if (myVK.dataset.listenerAdded) return;
    const clickMyVK = () => {
        console.log('клик по myVK')
        const userID = myStorage.getItem('myUser_id')
        myStorage.setItem('user_id', userID)
        runInitions()
    }
    myVK.addEventListener('click', clickMyVK)
    myVK.dataset.listenerAdded = 'true';
}

