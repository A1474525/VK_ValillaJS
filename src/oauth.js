import {myStorage} from "./utils/storage";
import {elementCreate} from "./utils/elementCreate";

export function initBtnEnterVK(){
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
export function initAuthBtnListener() {
    const btn = document.querySelector('.clicked');
    btn.addEventListener('click', () => {
        const redirectUri = 'http://localhost:4400/';
        const clientId = '51476812';
        myStorage.removeStorage()
        window.location.href = 'https://oauth.vk.com/authorize?' +
            `client_id=${clientId}&` +
            `redirect_uri=${redirectUri}&` +
            'response_type=token&' +
            'scope=friends,photos,groups';
    })
}
export function initAuth(resolve, reject) {
    const initTokenFromQueryParams = () => {
        const queryString = window.location.hash;
        const params = new URLSearchParams(queryString);
        const accessToken = params.get('#access_token');
        const user_id = params.get('user_id');
        if (!accessToken || !user_id) {
            console.log('токен или id не получен')
            reject()
        } else {
            myStorage.setItem('token', accessToken)
            myStorage.setItem('myUser_id', user_id)
            resolve()
        }
    }
    window.addEventListener('DOMContentLoaded', initTokenFromQueryParams)
    setTimeout(() => {
        window.removeEventListener('DOMContentLoaded', initTokenFromQueryParams)
    }, 0)
}
