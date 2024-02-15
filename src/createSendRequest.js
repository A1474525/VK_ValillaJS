import {myStorage} from "./storage";


export function elementCreate(tagName, innerHtml, className, src, target = document.body) {
    const element = document.createElement(tagName);
    if (innerHtml) {
        element.innerHtml = innerHtml;
    }
    if (className) {
        element.className = className;
    }
    if (src) {
        element.src = src;
    }
    target.appendChild(element);
    return element;
}

////  создает в боди html  скрипт для запроса















    // const mainAvatarContainer = document.getElementById('avatar');
    // const avatar = document.createElement('img');
    // avatar.src = `${response.response[0].photo_200}`;
    // avatar.alt = 'alt';
    // mainAvatarContainer.appendChild(avatar);
    //
    //
    // const section = document.getElementById('section');
    // const nameOnline = document.createElement('div')
    // section.appendChild(nameOnline);
    // const myName = document.createElement('div')
    // myName.textContent = `${response.response[0].first_name}
    // ${response.response[0].last_name}`
    // nameOnline.appendChild(myName);

    // const lastSeen = +response.response[0].last_seen.time
    // elementCreate('div',
    //     !statusOnline
    //         ? `<span>${ getDateAsString(lastSeen) }</span>`
    //         : `<span>online</span>`,
    //     null, null, nameOnline
    // )
    //
    // function getDateAsString(lastSeen) {
    //     const date = new Date(lastSeen * 1000);
    //     const dateString = date.toLocaleDateString(); // Дата в формате "MM/DD/YYYY"
    //     const timeString = date.toLocaleTimeString(); // Время в формате "HH:MM:SS"
    //     return `заходил ${dateString} в ${timeString}`
    // }








//}











//         elementCreate('script', '', '', `${url}&callback=profile`);
// }






/////////   https://<адрес-сервера>/method/<имя-API-метода>?<параметры> ////



