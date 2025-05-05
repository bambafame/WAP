"use strict";

class Student {
  constructor(studentId) {
    this.studentId = studentId;
    this.answers = [];
  }

  addAnswer(question) {
    this.answers.push(question);
  }
}

class Question {
  constructor(qid, answer) {
    this.qid = qid;
    this.answer = answer;
  }

  checkAnswer(givenAnswer) {
    return this.answer === givenAnswer;
  }
}

class Quiz {
  constructor(questionsArray, students) {
    this.students = students;
    this.questions = new Map();
    questionsArray.forEach((q) => {
      this.questions.set(q.qid, q.answer);
    });
  }

  scoreStudentBySid(sid) {
    let score = 0;
    const student = this.students.find((std) => std.studentId === sid);
    if (!student) return 0;
    for (let answer of student.answers) {
      const correctAnswer = this.questions.get(answer.qid);
      if (answer.checkAnswer(correctAnswer)) {
        console.log("jentre");
        score++;
      }
    }
    return score;
  }

  getAverageScore() {
    if (this.students.length === 0) return 0;

    const total = this.students.reduce(
      (sum, student) => sum + this.scoreStudentBySid(student.studentId),
      0
    );

    return total / this.students.length;
  }
}
