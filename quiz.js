document.addEventListener('DOMContentLoaded', () => {
    const quizContainer = document.getElementById('quiz-container');
    const finalMessage = document.getElementById('final-message');
    const options = document.querySelectorAll('.option');
    let correctAnswers = 0;
    let questionsAnswered = 0;

    options.forEach(option => {
        option.addEventListener('click', (event) => {
            const answer = event.target.getAttribute('data-answer');
            const feedback = event.target.parentElement.querySelector('.feedback');

            if (feedback.textContent !== '') {
                return; // If the question is already answered, do nothing
            }

            if (answer === 'correct') {
                feedback.textContent = 'Correct!';
                feedback.style.color = '#2ecc71';
                correctAnswers++;
            } else {
                feedback.textContent = 'Wrong!';
                feedback.style.color = '#e74c3c';
            }

            questionsAnswered++;
            if (questionsAnswered === 6) {
                if (correctAnswers === 6) {
                    finalMessage.textContent = 'Congratulations! You got all answers correct!';
                } else {
                    finalMessage.textContent = `You got ${correctAnswers} out of 6 questions correct.`;
                }
            }
        });
    });
});
