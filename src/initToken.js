//////////////////////// Получение токена  /////////////////////////
import {myStorage} from "./storage";

const initToken = () => {
    const queryString = window.location.hash;
    const params = new URLSearchParams(queryString);
    const accessToken = params.get('#access_token');
    myStorage.setItem('token', accessToken)
//    console.log(myStorage.getItem('token'))
}
window.addEventListener('load', initToken)
window.removeEventListener('DOMContentLoaded', initToken)