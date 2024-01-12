const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName;
candidateName = "";

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question;
let correctAnswer;
let candidateAnswer;

question = "Who was the first American woman in space? ";
correctAnswer = "Sally Ride";
candidateAnswer = "";

//TODO: Variables for Part 2
let questions;
let correctAnswers;
let candidateAnswers;

/* questions = [ "Who was the first American woman in space?  ",
             "True or false: 5 kilometer == 5000 meters?","(5 + 3)/2 * 10 = ?",
             "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?",
              "What is the minimum crew size for the ISS?" ];  */
  //correctAnswers=["Sally Ride","true","40","Tajectory",3];
  //candidateAnswers=[];

function askForName() {

  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("Enter your name : ");
}

function askQuestion() {

  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  candidateAnswer= input.question(question);
}

// function askQuestion() {
//   console.log("hello");
//   var i = 0;
//   questions.forEach((element) => {
//     console.log(element);
//     candidateAnswers[i]= input.question(element);
//     i++;
// }


//);

// console.log("candidateAnswers");
// candidateAnswers.forEach((elementVal) => {
//   console.log(elementVal);
//   //candidateAnswers[i]= input.question(element);
//   //i++;
// }


// );

// }

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  if (candidateAnswer === correctAnswer){
    console.log("Your answer is correct");
  }
  else{
    console.log("Wrong answer");
  }

  let grade;  //TODO 3.2 use this variable to calculate the candidates score.


  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log("Hi "+candidateName+" welcome");
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};