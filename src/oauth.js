import {myStorage} from "./storage";
import {elementCreate} from "./elementCreate";
import {removeStorage} from "./storage";

export function getAuthorization () {
    return new Promise((resolve) => {
        const btn = document.querySelector('.clicked');
        window.btnName ='';
        if (myStorage.getItem('token') === null
            || myStorage.getItem('token') === undefined) {
            btnName ='Войти'
            authorization()
            startInitToken(resolve)

        }
        else {
            btnName =  'Выйти'
            outOfAuth()
            window.location.hash = ''; // good idea
            console.log('clean hash bitch');
            authorization()
        }
        elementCreate('span',
            btnName,
            '',
            null,
            btn);
    });
}
function authorization () {
    const btn = document.querySelector('.clicked');
    btn.addEventListener('click', () => { // todo не очищается addEventListener
        const redirectUri = 'http://localhost:4400/';
        const clientId = '51476812';
        window.location.href = 'https://oauth.vk.com/authorize?' +
            `client_id=${clientId}&` +
            `redirect_uri=${redirectUri}&` +
            'response_type=token&' +
            'scope=photos,friends,groups';
    })
}
function startInitToken (resolve) {
    const initToken = () => {
        const queryString = window.location.hash;
        const params = new URLSearchParams(queryString);
        const accessToken = params.get('#access_token');
        myStorage.setItem('token', accessToken)
        resolve()
    }
    window.addEventListener('load', initToken)
    window.removeEventListener('DOMContentLoaded', initToken)
}
function outOfAuth () {
    const btn = document.querySelector('.clicked');
    btn.addEventListener('click', () => { // todo не очищается addEventListener
        removeStorage()
    })
}
