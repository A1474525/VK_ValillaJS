import {elementCreate} from "./elementCreate";
import {myStorage} from "./storage";

export function renderFriends (friends) {
    getRandomNumberArray(friends)
    callFunctionForEachValue (numberArray)

}

const numberArray = [];
function getRandomNumberArray (friends) {
    while (numberArray.length < 9) {
        const randomNumber = Math.floor(Math.random() * (friends.response.count + 1));
        if (!numberArray.includes(randomNumber)) numberArray.push(randomNumber);
    }
    return numberArray
}
function callFunctionForEachValue(numberArray) {
    const friends = myStorage.getItem('friends')
    numberArray.forEach(value => {renderFriendCard (friends, value);});

}

function renderFriendCard (friends, number){
    const friendsSectionContainer = document.querySelector(
        '.friends__section-container');
    elementCreate('div',
         '',
         `card-of-friend_${number}`,
         null, friendsSectionContainer)

    const friendsSectionContainerDiv = document.querySelector(
        `.friends__section-container>.card-of-friend_${number}`)
    elementCreate('div',
        '',
        'card-of-friend_photo',
        null, friendsSectionContainerDiv)
    elementCreate('div',
        '',
        'card-of-friend_name',
        null, friendsSectionContainerDiv)

    const friendsSectionContainerDivIMG = document.querySelector(
         `.card-of-friend_${number}>.card-of-friend_photo`)
    friends[number]!==undefined
        ? elementCreate('img',
          '',
          '',
          friends[number].photo_50,
          friendsSectionContainerDivIMG)
        : console.log('друг отошёл покурить (баг с фоткой друга)')

    const friendsSectionContainerDivName = document.querySelector(
        `.card-of-friend_${number}>.card-of-friend_name`)
    friends[number].first_name !== undefined || friends[number].first_name === null
        ? elementCreate('span',
            friends[number].first_name,
            '',
            null,
            friendsSectionContainerDivName)
        : console.log('Имя не указано')
}

