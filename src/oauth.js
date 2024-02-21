import {myStorage} from "./utils/storage";
import {elementCreate} from "./utils/elementCreate";

export function initBtn (){
    const btn = document.querySelector('.clicked');
    let btnStat;
    (myStorage.hasItem('token') || (window.location.hash.length !==0))
        ? btnStat = 'Выйти'
        : btnStat = 'Войти'
    elementCreate('span',
        btnStat,
        '',
        null,
        btn);
}
export function initAuthListener () {
    const btn = document.querySelector('.clicked');
    btn.addEventListener('click', () => {
        const redirectUri = 'http://localhost:4400/';
        const clientId = '51476812';
        myStorage.removeStorage()
        window.location.href = 'https://oauth.vk.com/authorize?' +
            `client_id=${clientId}&` +
            `redirect_uri=${redirectUri}&` +
            'response_type=token&' +
            'scope=photos,friends,groups';
    })
}
export function startInitToken (resolve, reject) {
    const initTokenFromQueryParams = () => {
        const queryString = window.location.hash;
        const params = new URLSearchParams(queryString);
        const accessToken = params.get('#access_token');
        if (!accessToken) {
            console.log('токен не получен')
            reject()
        } else {
            myStorage.setItem('token', accessToken)
            resolve()
        }
    }
    window.addEventListener('DOMContentLoaded', initTokenFromQueryParams)
    setTimeout(() => {
        window.removeEventListener('DOMContentLoaded', initTokenFromQueryParams)
    }, 0)
}
