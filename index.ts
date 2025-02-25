function getRandomNumber(): number {
    return Math.floor(Math.random() * 1000) + 1;
}

console.log(getRandomNumber());

export default getRandomNumber;