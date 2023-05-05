#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
import figlet from 'figlet';

// Define the quiz questions and answers
const questions = [
  {
    type: 'list',
    name: 'q1',
    message: 'What is the capital of France?',
    choices: ['Paris', 'Madrid', 'London', 'Berlin'],
    answer: 'Paris',
  },
  {
    type: 'list',
    name: 'q2',
    message: 'What is the largest planet in our solar system?',
    choices: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
    answer: 'Jupiter',
  },
  {
    type: 'list',
    name: 'q3',
    message: 'What is the tallest mammal in the world?',
    choices: ['Elephant', 'Giraffe', 'Rhino', 'Hippo'],
    answer: 'Giraffe',
  },
];

// Define the quiz app function
const runQuiz = async () => {
  // Print the app title
  console.log(chalk.yellow(figlet.textSync('Quiz App')));

  // Ask the questions
  const answers = await inquirer.prompt(questions);

  // Calculate the result
  let score = 0;
  for (const question of questions) {
    if (answers[question.name] === question.answer) {
      score++;
    }
  }

  // Print the result
  console.log(chalk.green(`You scored ${score} out of ${questions.length}!`));
};

// Call the quiz app function
runQuiz();
