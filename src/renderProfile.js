import {getDateStringUtil} from "./utils/get-date-string.util";
import {elementCreate, removeChildElement} from "./utils/elementCreate";
import myMap from "./images/map.png";
import myUniver from "./images/univer.png";
import myBerthDay from "./images/berthDay.png";
import myInfo from "./images/info.png";
import {getRenderField} from "./utils/getRenderField";

export function renderProfile (profile) {
    renderName(profile);
    renderStatusOnline(profile);
    renderFriendsQuantity(profile);
    renderUserOtherCity(profile);
    renderUserOtherYearsOld(profile);
    renderUserOtherDetails(profile);
    renderUserAvatarContainer(profile);
    if (!profile.universities || !profile.universities[0]) return;
    renderUserOtherUniversity(profile.universities[0]);
}

function renderName(profile) {
    removeChildElement('user-data__name')
    if (!profile.first_name || !profile.last_name) return;
    const friendsCount = `${profile.first_name} ${profile.last_name}`;
    getRenderField (friendsCount,
        'user-data__name',
        '',
        '')

}
function renderStatusOnline(profile) {
    removeChildElement('user-data__online')
    if (!profile.online || !profile.last_seen.time) return;
    const statusOnline =profile.online
    const lastSeen = profile.last_seen.time
    const userDataOnline = document.querySelector('.user-data__online');
    const arrayDate = getDateStringUtil(lastSeen)
    elementCreate('span',
        statusOnline === 0 ? `заходил ${arrayDate[0]} в ${arrayDate[1]}` : 'online',
        '', null, userDataOnline)
}
function renderFriendsQuantity(profile) {
    ['friends-quantity', 'friends-name',
        'subscribers-quantity', 'subscribers-name',
        'subscription-quantity', 'subscription-name',
        'community-quantity', 'community-name'].forEach(
            selector => removeChildElement(selector))

    const counters = profile.counters;
    if (!counters) return;
    if (!counters.friends) return;
    const friendsCount = counters.friends;
    getRenderField(friendsCount,
        'friends-quantity',
        'friends-name',
        'друзей')
    if (!counters.friends) return;
    getRenderField(counters.followers,
        'subscribers-quantity',
        'subscribers-name',
        'подписчиков')
    if (!counters.subscriptions) return;
    getRenderField(counters.subscriptions,
        'subscription-quantity',
        'subscription-name',
        'подписок')
    if (!counters.groups) return;
    getRenderField(counters.groups,
        'community-quantity',
        'community-name',
        'сообществ')
}
function renderUserOtherCity(profile) {
    removeChildElement('user-other__сity')
    if (!profile.city) return;
    if (!profile.city.title) return;
    const userOtherCity = document.querySelector('.user-other__сity');
    const map = new Image();
    map.src = myMap;
    elementCreate('img', '', '',
        myMap, userOtherCity);
    elementCreate('span',
        profile.city.title,
        '',
        null,
        userOtherCity);
}
function renderUserOtherUniversity(profile) {
    removeChildElement('user-other__university')
    if (!profile.name) return;
    const userOtherUniversity = document.querySelector('.user-other__university');
    const univer = new Image();
    univer.src = myUniver;
    elementCreate('img',
        '',
        '',
        myUniver,
        userOtherUniversity);
    elementCreate('span',
        profile.name,
        '',
        null,
        userOtherUniversity);
}
function renderUserOtherYearsOld(profile) {
    removeChildElement('user-other__yearsOld')
    if (!profile.bdate) return;
    const userOtherYearsOld = document.querySelector('.user-other__yearsOld');
    const berthDay = new Image();
    berthDay.src = myBerthDay;
    elementCreate('img',
        '',
        '',
        myBerthDay,
        userOtherYearsOld);
    const birthDayData = profile.bdate.split('.');
    const paddedBerthDayData = birthDayData.map((element) => element.padStart(2, '0'));
    const formattedDate = paddedBerthDayData.join('.');
    elementCreate('span',
        formattedDate,
        '',
        null,
        userOtherYearsOld);
}
function renderUserOtherDetails() {
    removeChildElement('user-other__details')
    const userOtherDetails = document.querySelector('.user-other__details');
    const info = new Image();
    info.src = myInfo;
    elementCreate('img',
        '',
        '',
        myInfo,
        userOtherDetails);
    elementCreate('span',
        'Подробнее',
        '',
        null,
        userOtherDetails);
}
function renderUserAvatarContainer(profile) {
    removeChildElement('personal-user__avatar')
    if (!profile.photo_200) return console.log ('ERROR [аватарки у пользователя нет]');

    const userAvatarContainer = document.querySelector('.personal-user__avatar');
    elementCreate('img',
        '',
        '',
        profile.photo_200,
        userAvatarContainer)
}


