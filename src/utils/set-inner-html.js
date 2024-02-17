



export const setInnerHtml = (selector = `class id tag`, content = `<span></span> <p></p>`) => {
    const elementOnTag = document.querySelector(selector)
    const elementOnId = document.querySelector('#' + selector)
    const elementOnClass = document.querySelector('.' + selector)
    const element = elementOnTag ?? elementOnId ?? elementOnClass
    if (!element) return;
    element.innerHTML = content;
}