const images = ["aple-removebg-preview (1).png", "ban-removebg-preview.png", "ban-removebg-preview.png", "grpe-removebg-preview.png", "orng-removebg-preview.png", "kiwi-removebg-preview.png", "pineaple-removebg-preview.png", "str-removebg-preview.png", "water-removebg-preview.png", "pear-removebg-preview.png"];
const words = ["apple", "banana", "cherry", "grape", "orange", "kiwi", "pineapple", "strawberry", "watermelon", "pear"];
let userInput = "";
let score = 0;
let time = 60;
let timerInterval;

function generateRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    currentImageUrl = images[randomIndex];
    const imageElement = document.createElement('img');
    imageElement.src = currentImageUrl;
    imageElement.style.width = '200px'; // Set the width to 200 pixels
    imageElement.style.height = '200px';
    document.getElementById('word').innerHTML = '';
    document.getElementById('word').appendChild(imageElement);
}


function checkImage() {
    const resultElement = document.getElementById('result');
    const userInput = document.getElementById('userInput').value.toLowerCase();

    if (userInput.trim() !== '') {
        resultElement.textContent = "Please press Enter to submit.";
    }
}

function checkWord() {
    userInput = document.getElementById('userInput').value.toLowerCase();
    const resultElement = document.getElementById('result');

    if (userInput.trim() !== '' && userInput === words[images.indexOf(currentImageUrl)]) {
        resultElement.textContent = "Correct!";
        score++;
        document.getElementById('score').textContent = score;
    } else {
        resultElement.textContent = "Incorrect. Try again.";
    }

    document.getElementById('userInput').value = '';
    generateRandomImage();
}

function startTimer() {
    timerInterval = setInterval(() => {
        time--;
        document.getElementById('time').textContent = time;

        if (time === 0) {
            clearInterval(timerInterval);
            document.getElementById('result').textContent = "Time's up!";
            document.getElementById('checkButton').disabled = true;
        }
    }, 1000);
}

document.getElementById('checkButton').addEventListener('click', checkWord);
document.getElementById('userInput').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        checkWord();
    }
});

generateRandomImage();
startTimer();
