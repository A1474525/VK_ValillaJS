import './styles.css'
import {initAuthListener, initBtn, startInitToken} from "./oauth";
import {runInitProfile} from "./initProfile";
import {runInitFriends} from "./initProfile";
import {runInitPhotos} from "./initProfile";
import {openPopup} from './popup.js';
import {myStorage} from "./utils/storage";

initBtn ()
initAuthListener()
if (!myStorage.hasItem('token')) {
new Promise((resolve, reject) => startInitToken(resolve, reject))   //
    .then(() => {
        // if (history.length > 0)
        //     history.back();
        window.location.hash = '' // todo повторяющийся код
        runInitProfile() // todo повторяющийся код arguments: (profileId)
        runInitFriends() // todo повторяющийся код arguments: (profileId)
        //todo либо storageGet('currentUser: { id: asda, scope: asda, calledMethods: ..., history: ... }')
        runInitPhotos() // todo повторяющийся код arguments: (profileId)
    }).catch(() => {
        alert ('Нужно авторизоваться еще раз =(')
    })
}
else {
    window.location.hash = '' // todo повторяющийся код
    runInitProfile(profile) // todo повторяющийся код
    runInitFriends(friends) // todo повторяющийся код
    runInitPhotos(photos) // todo повторяющийся код
}







//openPopup();
















// export class Request {
//     constructor(...props) {
//         this.url = props.url
//         this.url = props.url
//         this.url = props.url
//         this.url = props.url
//         this.url = props.url
//     }
//
//     send(params) {
//         this.url === '' // true
//     }
//
//     create(url) {
//
//     }
// }
//




// profileCreate(token: Object) {
//
// }

// const friends = {
//     method: 'friends.get',
//     usId: currentProfile.id,
//     order: 'hints',
//     count: cnt,
//     params: 'photo_100',
// };
// new MethodRequest(friends).createSendRequest();

// export default class MethodRequest extends Token
//     constructor(options) {
//         super();
//         options.usId ? this.usId = options.usId : this.usId = this.userId;
//         options.offset ? this.offset = options.offset : this.offset = 0;
//         options.count ? this.count = options.count : this.count = '';
//         options.owner_id ? this.owner_id = options.owner_id : this.owner_id = '';
//         options.order ? this.order = options.order : this.order = '';
//         options.params ? this.params = options.params : this.params = '';
//         options.extended ? this.extended = options.extended : this.extended = '';
//         options.search ? this.search = options.search : this.search = '';
//         this.search = options.search ?? ''
//
//         this.method = options.method;
//         this.params = options.params;
//     }
//
//     createSendRequest() {
//         const url = `https://api.vk.com/method/${this.method}?`
//             + `q=${this.search}&`
//             + `user_id=${this.usId}&`
//             + `extended=${this.extended}&`
//             + `offset=${this.offset}&`
//             + `count=${this.count}&`
//             + `order=${this.count}&`
//             + `owner_id=${this.owner_id}&`
//             + `fields=${this.params}&`
//             + `access_token=${this.token}&photo_sizes=1&v=5.131`;
//
//         if (this.method === 'users.get') elementCreate('script', '', '', `${url}&callback=profile`);
//         if (this.method === 'users.getFollowers') elementCreate('script', '', '', `${url}&callback=followers`);
//         if (this.method === 'photos.getAll') elementCreate('script', '', '', `${url}&callback=photos`);
//         if (this.method === 'friends.get') elementCreate('script', '', '', `${url}&callback=friends`);
//         if (this.method === 'groups.get') elementCreate('script', '', '', `${url}&callback=groups`);
//         if (this.method === 'users.search') elementCreate('script', '', '', `${url}&callback=search`);
//     }
// }