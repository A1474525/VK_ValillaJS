//////////// рендеринг страницы ////////////////////////
import {myRequest} from "./request";
import {myStorage} from "./storage";

myRequest.create('users.get',
    'fields= bdate, city, online, last_seen, photo_200, universities',
    'profile')

const setInnerHtml = (selector, content) => {
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
    // globalThis.userProfile = ;
    // console.log(userProfile);
    setInnerHtml('user-data__name>span', `${userProfile.first_name} ${userProfile.last_name}`);
    document.querySelector('.user-other__сity>span').textContent = userProfile.city.title;
//    document.querySelector('.user-other__university>span').textContent = userProfile.universities[0];

    const statusOnline = userProfile.online
    const lastSeen = userProfile.last_seen.time
    console.log(typeof statusOnline)
    const setTextContentIntoUserDataOnline = (data) =>
        document.querySelector('.user-data__online>span').textContent = data
    setTextContentIntoUserDataOnline(statusOnline === 0 ? getDateAsString(lastSeen) : 'online')

    function getDateAsString(lastSeen) {
        const date = new Date(lastSeen * 1000);
        const dateString = date.toLocaleDateString(); // Дата в формате "MM/DD/YYYY"
        const timeString = date.toLocaleTimeString(); // Время в формате "HH:MM:SS"
        return `заходил ${dateString} в ${timeString}`
    }
}











//window.profile = (response) => console.log(response)




// window.addEventListener('DOMContentLoaded', () => {
//     //if (myStorage.getItem('token') === 'null')  new Token().createToken();
//
//     if (myStorage.getItem('token') !== 'null') {
//         const user = {
//             method: 'users.get',
//             params: 'online,last_seen,bdate,city,universities,photo_200,counters,followers_count',
//         };
//         new MethodRequest(user).createSendRequest();
//     }
// });



