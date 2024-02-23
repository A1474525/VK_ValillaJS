export function elementCreate(tagName, innerHTML, className, src, target = document.body) {
    const element = document.createElement(tagName);

    if (innerHTML) element.innerHTML = innerHTML;
    if (className) element.className = className;
    if (src) element.src = src;

    if (!target) return console.error('[ELEMENT_CREATE]: give me target, bitch!');
    target.appendChild(element);
    return element;
}

export function removeChildElement(selectors) {
    const element = document.querySelector('.' + selectors);
    if (!element) return;
    while (element.firstChild) {
        element.removeChild(element.firstChild);
        }
}

export function removeElement(selectors) {
    const element = document.querySelector('.' + selectors);
    if (element) element.parentElement.removeChild(element)
}