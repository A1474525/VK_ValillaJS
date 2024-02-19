import {removeChildOnContainer} from './elementCreate'

//////////// локальное хранилище /////////////
export class Storage {
    getItem(key) {
        const data = localStorage.getItem(key)
        // if (data)
            return JSON.parse(data)
        // return null;
    }
    setItem(key, data) {
        // if (!data) return;
        localStorage.setItem(key, JSON.stringify(data))
    }
    removeItem(key) {
        localStorage.removeItem(key);
    }
}
export const myStorage = new Storage();
export function removeStorage(){
    localStorage.clear();
    removeChildOnContainer(userDataName)
}







