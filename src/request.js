import {myStorage} from "./storage";
import {elementCreate} from "./elementCreate";
import {getDateStringUtil} from "./utils/get-date-string.util";

class Requests {
    get #token() {
        return myStorage.getItem('token');
    }
    // #token = myStorage.getItem('token');
    #url = 'https://api.vk.com/method/'

    create(method, params, callback) {
        elementCreate('script',
            null,
            null,
            `${this.#url}${method}?${params}
            &access_token=${this.#token}
            &v=5.131
            &callback=${callback}`
        )
    }
}

 export const myRequest = new Requests();


// export class Profile {
//     profile;
//
//     constructor(profile) {
//         super()
//         myStorage.setItem('profile');
//         this.profile = profile;
//         this.createProfile()
//     }
//
//     createProfile() {
//         this.createStatus();
//         this.createName();
//         this.createPhoto();
//     }
//
//     createStatus() {
//         const statusOnline = this.profile.online
//         const lastSeen = this.profile.last_seen.time
//         const setStatus = (data) =>
//             document.querySelector('.user-data__online>span').textContent = data
//         const statusAsArray = getDateStringUtil(lastSeen);
//         setStatus(statusOnline === 0
//             ? `заходил ${statusAsArray[0]} в ${statusAsArray[1]}`
//             : 'online')
//     }
// }