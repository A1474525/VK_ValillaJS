export function elementCreate(tagName, innerHTML, className, src, target = document.body) {
    const element = document.createElement(tagName);
    if (innerHTML) {
        element.innerHTML = innerHTML;
    }
    if (className) {
        element.className = className;
    }
    if (src) {
        element.src = src;
    }
    if (!target) return console.error('[ELEMENT_CREATE]: give me target, bitch!');
    target.appendChild(element);
    return element;
}

export function removeChildElement(selectors) {
    const element = document.querySelector('.' + selectors);
    if (element) element.removeChild(element.lastChild);
    console.log( 'произошло удаление Чайлда')
}

export function removeElement(selectors) {
    const element = document.querySelector('.' + selectors);
    if (element) element.parentElement.removeChild(element)
}