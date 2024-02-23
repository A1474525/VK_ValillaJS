import {myStorage} from "./storage";
import {elementCreate} from "./elementCreate";
import {getDateStringUtil} from "./get-date-string.util";

class Requests {
    get #token() {
        return myStorage.getItem('token');
    }
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
