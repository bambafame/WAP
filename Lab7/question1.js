"use strict";

function Student(studentId) {
  this.studentId = studentId;
  this.answers = [];
}

Student.prototype.addAnswer = function (question) {
  this.answers.push(question);
};

function Question(qid, answer) {
  this.qid = qid;
  this.answer = answer;
}

Question.prototype.checkAnswer = function (answer) {
  return this.answer === answer;
};

function Quiz(questionsArray, students) {
  this.students = students;
  this.questions = new Map();
  questionsArray.forEach((q) => {
    this.questions.set(q.qid, q.answer);
  });
}

Quiz.prototype.scoreStudentBySid = function (sid) {
  let score = 0;
  const student = this.students.find((std) => std.studentId === sid);
  if (!student) return 0;
  for (let answer of student.answers) {
    const correctAnswer = this.questions.get(answer.qid);
    if (answer.checkAnswer(correctAnswer)) {
      score++;
    }
  }
  return score;
};

Quiz.prototype.getAverageScore = function () {
  if (this.students.length === 0) return 0;

  const total = this.students.reduce(
    (sum, student) => sum + this.scoreStudentBySid(student.studentId),
    0
  );

  return total / this.students.length;
};
