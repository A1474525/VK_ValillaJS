import {elementCreate} from "./elementCreate";
import {myStorage} from "./storage";
import {getRandomNumberArray} from "./utils/getRandomNumberArray";

export function renderFriends (friends) {
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
          '',
          randomFriend.photo_50,
          friendsSectionContainerDivIMG)
        : console.warn('друг отошёл покурить (баг с фоткой друга)')

    const friendsSectionContainerDivName = document.querySelector(
        `.card-of-friend_${hisRandomIndex}>.card-of-friend_name`)

    randomFriend !== undefined
    && randomFriend.first_name !== undefined
    && randomFriend.first_name !== null
        ? elementCreate('span',
            randomFriend.first_name,
            '',
            null,
            friendsSectionContainerDivName)
        : console.warn('Имя не указано')
}

