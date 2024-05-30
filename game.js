

// Iteration 2: Generate 2 random numbers and display them on the screen

function generateRandomNumbers() {
    const num1 = Math.floor(Math.random() * 100) + 1;
    const num2 = Math.floor(Math.random() * 100) + 1;
    document.getElementById('number1').textContent = num1;
    document.getElementById('number2').textContent = num2;
    return { num1, num2 };
}

let numbers = generateRandomNumbers();

// Iteration 3: Make the options button functional

document.getElementById('greater-than').addEventListener('click', function() {
    checkAnswer('greater');
});

document.getElementById('equal-to').addEventListener('click', function() {
    checkAnswer('equal');
});

document.getElementById('lesser-than').addEventListener('click', function() {
    checkAnswer('lesser');
});

function checkAnswer(choice) {
    const { num1, num2 } = numbers;
    let correct = false;
    
    if (choice === 'greater' && num1 > num2) correct = true;
    if (choice === 'equal' && num1 === num2) correct = true;
    if (choice === 'lesser' && num1 < num2) correct = true;
    
    if (correct) {
        alert('Correct!');
        score += 1;
    } else {
        alert('Incorrect!');
        localStorage.setItem('score', score);
        window.location.href = 'gameover.html';
    }

    numbers = generateRandomNumbers();
}

// Iteration 4: Build a timer for the game

let timeLeft = 30; // 30 seconds for the game
const timerElement = document.getElementById('timer');
timerElement.textContent = timeLeft;

const timerInterval = setInterval(() => {
    timeLeft -= 1;
    timerElement.textContent = timeLeft;

    if (timeLeft <= 0) {
        clearInterval(timerInterval);
        localStorage.setItem('score', score);
        window.location.href = 'gameover.html';
    }
}, 1000);

let score = 0;

