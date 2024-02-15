//////////// рендеринг страницы ////////////////////////
import {myRequest} from "./request";
import {myStorage} from "./storage";
import myMap from "./images/map.png"
import myUniver from "./images/univer.png"
import myInfo from "./images/info.png"
import myBerthDay from "./images/berthDay.png"



import {elementCreate} from "./elementCreate";


myRequest.create('users.get',
    'fields= bdate, city, online, last_seen, photo_200, universities',
    'profile')

const setInnerHtml = (selector = `class id tag`, content = `<span></span> <p></p>`) => {
    const elementOnTag = document.querySelector(selector)
    const elementOnId = document.querySelector('#' + selector)
    const elementOnClass = document.querySelector('.' + selector)
    const element = elementOnTag ?? elementOnId ?? elementOnClass
    if (!element) return;
    element.innerHTML = content;
}

window.profile = (profile) => {
    const userProfile = profile.response[0]
    myStorage.setItem('profile', userProfile)

/////////////////////////////////// Имя  Пользователя  /////////////////////////////
    setInnerHtml('user-data__name>span',
        `${userProfile.first_name} ${userProfile.last_name}`
    );
/////////////////////////////////// Онлайн   ////////////////////////////////////////
    const statusOnline = userProfile.online
    const lastSeen = userProfile.last_seen.time
    const setTextContentIntoUserDataOnline = (data) =>
        document.querySelector('.user-data__online>span').textContent = data
    setTextContentIntoUserDataOnline(statusOnline === 0 ? getDateAsString(lastSeen) : 'online')

    function getDateAsString(lastSeen) {
        const date = new Date(lastSeen * 1000);
        const dateString = date.toLocaleDateString(); // Дата в формате "MM/DD/YYYY"
        const timeString = date.toLocaleTimeString(); // Время в формате "HH:MM:SS"
        return `заходил ${dateString} в ${timeString}`
    }
//////////////////////////////////////  Город  /////////////////////////////////////////
    const userOtherSity = document.querySelector('.user-other__сity');
    const map = new Image();
    map.src = myMap;
    elementCreate('img', '', '', myMap, userOtherSity);
    elementCreate('span', '', '', null, userOtherSity);
    setInnerHtml('user-other__сity>span', `${userProfile.city.title}`);

//////////////////////////////////////  Универ  /////////////////////////////////////////
    const userOtherUniversity = document.querySelector('.user-other__university');
    const univer = new Image();
    univer.src = myUniver;
    elementCreate('img', '', '', myUniver, userOtherUniversity);
    elementCreate('span', '', '', null, userOtherUniversity);
    setInnerHtml('user-other__university>span',userProfile.universities[0].name);

//////////////////////////////////////  Возраст  /////////////////////////////////////////
     const userOtherYearsOld = document.querySelector('.user-other__yearsOld');
     const berthDay = new Image();
     berthDay.src = myBerthDay;
     elementCreate('img', '', '', myBerthDay, userOtherYearsOld);
     const berthDayData = userProfile.bdate.split('.');
     const paddedBerthDayData = berthDayData.map((element) => element.padStart(2, '0'));
     const formattedDate = paddedBerthDayData.join('.');
     console.log(typeof formattedDate);
     elementCreate('span', `formattedDate`, '', null, userOtherYearsOld);
     setInnerHtml ('user-other__yearsOld>span' , formattedDate )

//////////////////////////////////////  Детали  /////////////////////////////////////////
     const userOtherDetails = document.querySelector('.user-other__details');
     const info = new Image();
     info.src = myInfo;
     elementCreate('img', '', '', myInfo, userOtherDetails);
     elementCreate('span', ``, '', null, userOtherDetails);
     setInnerHtml ('user-other__details>span' , "Подробнее" )









//////////////////////////////////////  Аватарка   /////////////////////////////////////////
    const mainAvatarContainer = document.querySelector('.main__avatar');
    elementCreate('img', '', '', userProfile.photo_200, mainAvatarContainer)
}


