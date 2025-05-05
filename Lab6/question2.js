"use strict";

function Student(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.grades = [];
}

Student.prototype.inputNewGrade = function (newGrade) {
  this.grades.push(newGrade);
};

Student.prototype.computeAverageGrade = function () {
  if (this.grades.length === 0) return 0;
  const sum = this.grades.reduce((a, b) => a + b, 0);
  return sum / this.grades.length;
};

const students = [];

const cheikh = new Student("Cheikh", "Fame");
cheikh.inputNewGrade(100);
cheikh.inputNewGrade(95);
cheikh.inputNewGrade(90);
students.push(cheikh);

const yaakoub = new Student("Yaakoub", "Kadri");
yaakoub.inputNewGrade(90);
yaakoub.inputNewGrade(98);
yaakoub.inputNewGrade(95);
students.push(yaakoub);

const shaban = new Student("Shaban", "Mutzi");
shaban.inputNewGrade(80);
shaban.inputNewGrade(88);
shaban.inputNewGrade(75);
students.push(yaakoub);

let totalAvg = 0;

students.forEach((std) => {
  totalAvg += std.computeAverageGrade();
});

const classAverage = totalAvg / students.length;
console.log("Class Average:", classAverage);
