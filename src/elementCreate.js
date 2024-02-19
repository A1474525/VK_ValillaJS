
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
    target.appendChild(element);
    return element;
}

export function removeChildOnContainer (nameContainer) {
    nameContainer.removeChild(nameContainer.firstChild);
}

//