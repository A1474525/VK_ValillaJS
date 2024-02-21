
//////////// локальное хранилище /////////////
export class Storage {
    #storageActions = {
        GET_ITEM: 'get item',
        GET_ITEM_SUCCESS: 'get item success',
        GET_ITEM_FAILURE: 'get item failure',
    }

    #keysActions = Object.keys(this.#storageActions)
    getItem(key) {
        console.log(`[${this.#keysActions.at(0)}]: ${this.#storageActions.GET_ITEM}`)
        const data = localStorage.getItem(key)
        if (data) {
            console.log(`[${this.#keysActions.at(1)}]: ${this.#storageActions.GET_ITEM_SUCCESS}`)
            return JSON.parse(data)
        }
        console.log(`[${this.#keysActions.at(2)}]: ${this.#storageActions.GET_ITEM_FAILURE}`)
        return null;
    }
    setItem(key, data) {
        // if (!data) return;
        localStorage.setItem(key, JSON.stringify(data))
    }
    removeItem(key) {
        if (!key) return;
        localStorage.removeItem (key);
    }
    removeStorage() {
        localStorage.clear();
    }
    hasItem(key){
        const data = localStorage.getItem(key)
        return !!data
    }

}
export const myStorage = new Storage();






