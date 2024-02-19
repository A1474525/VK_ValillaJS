export function getRandomNumberArray (count) {
    const numberArray = [];
    while (numberArray.length < 9) {
        const randomNumber = Math.floor(Math.random() * (count + 1));
        if (!numberArray.includes(randomNumber)) numberArray.push(randomNumber);
    }
    return numberArray
}