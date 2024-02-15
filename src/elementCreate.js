
export function elementCreate(tagName, innerHTML, className, src, target = document.body) {
    const element = document.createElement(tagName);
    if (innerHTML) {
        element.innerHtml = innerHTML;
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

