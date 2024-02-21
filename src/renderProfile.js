import {getDateStringUtil} from "./utils/get-date-string.util";
import {elementCreate} from "./utils/elementCreate";
import myMap from "./images/map.png";
import myUniver from "./images/univer.png";
import myBerthDay from "./images/berthDay.png";
import myInfo from "./images/info.png";

export function renderProfile (profileResponse) {
    const trueProfile = profileResponse.response[0]
    renderName(trueProfile);
    renderStatusOnline(trueProfile);
    renderFriendsQuantity(trueProfile);
    renderUserOtherCity(trueProfile);
    renderUserOtherUniversity(trueProfile.universities[0]);
    renderUserOtherYearsOld(trueProfile);
    renderUserOtherDetails(trueProfile);
    renderUserAvatarContainer(trueProfile);
}

function renderName(profile) {
    window.userDataName = document.querySelector('.user-data__name');
    elementCreate( 'span',
        `${profile.first_name} ${profile.last_name}`,
        '',
        null,
        userDataName)
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


