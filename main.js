// Homework 5A

// document.addEventListener('DOMContentLoaded', () => {
//   document.getElementById('HideButton').addEventListener('click', () => {
//     const div = document.getElementById('randomTextDiv');
//     div.style.display = 'none';
//   });
// });


// Homework 5B

// const cardDiv = document.createElement('div');
// cardDiv.id = 'card';

// const heading = document.createElement('h2');
// heading.textContent = 'Gandalf';

// const link = document.createElement('a');
// link.href = '#';
// link.textContent = 'Go to profile';

// cardDiv.appendChild(heading);
// cardDiv.appendChild(link);

// document.body.appendChild(cardDiv);



// Homework 5C

document.addEventListener("DOMContentLoaded", function() {
  const questions = [
    {
      question: "Who won the 2018 FIFA World Cup?",
      answers: ["Germany", "Brazil", "France", "Argentina"],
      correct: 2
    },
    {
      question: "Who won the 2014 FIFA World Cup?",
      answers: ["Spain", "Germany", "Brazil", "Argentina"],
      correct: 1
    },
    {
      question: "Who won the 2010 FIFA World Cup?",
      answers: ["Spain", "Netherlands", "Brazil", "Germany"],
      correct: 0
    },
    {
      question: "Who won the 2006 FIFA World Cup?",
      answers: ["Italy", "France", "Germany", "Brazil"],
      correct: 0
    }
  ];

  let score = 0;

  const quizContainer = document.getElementById('quiz');
  const scoreContainer = document.getElementById('score');

  const loadQuiz = () => {
    questions.forEach((q, questionIndex) => {
      const questionDiv = document.createElement('div');
      questionDiv.classList.add('question');
      
      const questionTitle = document.createElement('h2');
      questionTitle.textContent = q.question;
      questionDiv.appendChild(questionTitle);
      
      const answersDiv = document.createElement('div');
      answersDiv.classList.add('answers');
      
      q.answers.forEach((answer, answerIndex) => {
        const answerButton = document.createElement('button');
        answerButton.textContent = answer;
        answerButton.addEventListener('click', () => checkAnswer(questionIndex, answerIndex, answerButton));
        answersDiv.appendChild(answerButton);
      });
      
      questionDiv.appendChild(answersDiv);
      quizContainer.appendChild(questionDiv);
    });
  };

  const checkAnswer = (questionIndex, answerIndex, answerButton) => {
    const question = questions[questionIndex];
    if (answerIndex === question.correct) {
      answerButton.classList.add('correct');
      score++;
    } else {
      answerButton.classList.add('wrong');
    }
    updateScore();
    disableAnswers(questionIndex);
  };

  const disableAnswers = (questionIndex) => {
    const questionDiv = quizContainer.children[questionIndex];
    const answerButtons = questionDiv.getElementsByTagName('button');
    for (let button of answerButtons) {
      button.disabled = true;
    }
  };

  const updateScore = () => {
    scoreContainer.textContent = `Score: ${score}`;
  };

  loadQuiz();
});
