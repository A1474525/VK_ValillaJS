import {setInnerHtml} from "./utils/set-inner-html";
import {getDateStringUtil} from "./utils/get-date-string.util";
import {elementCreate} from "./elementCreate";
import myMap from "./images/map.png";
import myUniver from "./images/univer.png";
import myBerthDay from "./images/berthDay.png";
import myInfo from "./images/info.png";

export function renderProfile (profile) {
    renderName(profile.response[0]);
    renderStatusOnline(profile.response[0]);
    renderFriendsQuantity(profile.response[0]);
    renderUserOtherCity(profile.response[0]);
    renderUserOtherUniversity(profile.response[0].universities[0]);
    renderUserOtherYearsOld(profile.response[0]);
    renderUserOtherDetails(profile.response[0]);
    renderUserAvatarContainer(profile.response[0]);
}

function renderName(profile) {
     setInnerHtml('user-data__name>span', `${profile.first_name} ${profile.last_name}`);
}

function renderStatusOnline(profile) {
    const statusOnline =profile.online
    const lastSeen = profile.last_seen.time
    const userDataOnline = document.querySelector('.user-data__online');
    const arrayDate = getDateStringUtil(lastSeen)
    elementCreate('span',
        statusOnline === 0 ? `заходил ${arrayDate[0]} в ${arrayDate[1]}` : 'online',
        '', null, userDataOnline)
}

function renderFriendsQuantity(profile) {
    const friendsQuantity = document.querySelector('.friends-quantity');
    elementCreate('span', profile.counters.friends, '', null, friendsQuantity);

    const subscriberQuantity = document.querySelector('.subscribers-quantity');
    elementCreate('span', profile.counters.followers, '', null, subscriberQuantity);

    const subscriptionQuantity = document.querySelector('.subscription-quantity');
    elementCreate('span', profile.counters.subscriptions, '', null, subscriptionQuantity);

    const communityQuantity = document.querySelector('.community-quantity');
    elementCreate('span', profile.counters.groups, '', null, communityQuantity);
}

function renderUserOtherCity(profile) {
     const userOtherCity = document.querySelector('.user-other__сity');
     const map = new Image();
     map.src = myMap;
     elementCreate('img', '', '', myMap, userOtherCity);
     elementCreate('span', profile.city.title, '', null, userOtherCity);
}

function renderUserOtherUniversity(profile) {
    const userOtherUniversity = document.querySelector('.user-other__university');
    const univer = new Image();
    univer.src = myUniver;
    elementCreate('img', '', '', myUniver, userOtherUniversity);
    elementCreate('span', profile.name, '', null, userOtherUniversity);
}

function renderUserOtherYearsOld(profile) {
    const userOtherYearsOld = document.querySelector('.user-other__yearsOld');
    const berthDay = new Image();
    berthDay.src = myBerthDay;
    elementCreate('img', '', '', myBerthDay, userOtherYearsOld);
    const berthDayData = profile.bdate.split('.');
    const paddedBerthDayData = berthDayData.map((element) => element.padStart(2, '0'));
    const formattedDate = paddedBerthDayData.join('.');
    elementCreate('span', formattedDate, '', null, userOtherYearsOld);
}

function renderUserOtherDetails() {
    const userOtherDetails = document.querySelector('.user-other__details');
    const info = new Image();
    info.src = myInfo;
    elementCreate('img', '', '', myInfo, userOtherDetails);
    elementCreate('span', 'Подробнее', '', null, userOtherDetails);
}

function renderUserAvatarContainer(profile) {
    const userAvatarContainer = document.querySelector('.personal-user__avatar');
    elementCreate('img', '', '', profile.photo_200, userAvatarContainer)
}


