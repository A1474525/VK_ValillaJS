import {elementCreate} from "./elementCreate";

export function getRenderField (element, selectorNum, selectorName, name ){
     if (!element) return;
    const q = document.querySelector('.' + selectorNum);
    elementCreate('span', element,'',null, q);
    if (!selectorName) return;
    const p = document.querySelector('.' + selectorName);
    elementCreate('span', name, '', null, p);
}