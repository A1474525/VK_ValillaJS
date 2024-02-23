import {elementCreate, removeChildElement} from "./utils/elementCreate";
import {myStorage} from "./utils/storage";
import {getRandomNumberArray} from "./utils/getRandomNumberArray";
import {runInitions, runInitPhotos} from "./initProfile";

export function renderFriends (friends) {
    removeChildElement('friends__section-container')
    const randomArray = getRandomNumberArray(friends.response.count)
    renderFriendCardForEachValue(randomArray)
}
function renderFriendCardForEachValue(numberArray) {
    const friends = myStorage.getItem('friends')
    numberArray.forEach(randomNumber => renderFriendCard(friends[randomNumber], randomNumber));
}
function renderFriendCard (randomFriend, hisRandomIndex){
    const friendsSectionContainer = document.querySelector(
        '.friends__section-container');
    elementCreate('div',
         '',
         `card-of-friend_${hisRandomIndex}`,
         null, friendsSectionContainer)

    const friendsSectionContainerDiv = document.querySelector(
        `.friends__section-container > .card-of-friend_${hisRandomIndex}`)
    elementCreate('div',
        '',
        'card-of-friend_photo',
        null, friendsSectionContainerDiv)
    elementCreate('div',
        '',
        'card-of-friend_name',
        null, friendsSectionContainerDiv)

    const friendsSectionContainerDivIMG = document.querySelector(
         `.card-of-friend_${hisRandomIndex}>.card-of-friend_photo`)
    randomFriend !== undefined
        ? elementCreate('img',
          '',
          hisRandomIndex,
          randomFriend.photo_50,
          friendsSectionContainerDivIMG)
        : console.warn('друг отошёл покурить (баг с фоткой друга)')

    const friendsSectionContainerDivName = document.querySelector(
        `.card-of-friend_${hisRandomIndex}>.card-of-friend_name`)

    !!randomFriend
    && !!randomFriend.first_name
        ? elementCreate('span',
            randomFriend.first_name,
            '',
            null,
            friendsSectionContainerDivName)
        : console.warn('Имя не указано')
}
export function openerClickFriend (friends) {
    const friend = document.querySelector('.friends__section-container');
    if (friend.dataset.listenerAdded){
        console.log('Обработчик события click уже добавлен');
        return;
    }
    const clickFriend = (event) => {
        const numFriend = +event.target.className
        const userID = friends.response.items[numFriend].id.toString()
        myStorage.setItem('user_id', userID)
        runInitions(userID)
        runInitPhotos (userID)
        friend.removeEventListener('click', clickFriend) // good idea
    }
    friend.addEventListener('click', clickFriend)
}

