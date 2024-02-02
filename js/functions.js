const button = document.querySelector('#dice')
const diceimage = document.getElementById('diceImage')

const getRandomIntNumberInRange = (min,max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

button.addEventListener('click', () => {
    const randomizedNumber = getRandomIntNumberInRange(1,6)
    
    const fileName = `./img/${randomizedNumber}.svg`;
  
    diceimage.src = fileName;

});