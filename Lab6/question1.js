"use strict";

let student = {
  firstName: "",
  lastName: "",
  grades: [],
  inputNewGrade(newGrade) {
    this.grades.push(newGrade);
  },

  computeAverageGrade() {
    if (this.grades.length === 0) return 0;
    const sum = this.grades.reduce((a, b) => a + b, 0);
    return sum / this.grades.length;
  },
};

const students = [];

// Student 1
const yaakoub = Object.create(student);
yaakoub.firstName = "Yaakoub";
yaakoub.lastName = "Kadri";
yaakoub.grades = [];
yaakoub.inputNewGrade(90);
yaakoub.inputNewGrade(98);
yaakoub.inputNewGrade(95);
students.push(yaakoub);
// Student 2
const shaban = Object.create(student);
shaban.firstName = "Shaban";
shaban.lastName = "Mutzi";
shaban.grades = [];
shaban.inputNewGrade(80);
shaban.inputNewGrade(88);
shaban.inputNewGrade(75);
students.push(yaakoub);
// Student 3
const cheikh = Object.create(student);
cheikh.firstName = "Cheikh";
cheikh.lastName = "Fame";
cheikh.grades = [];
cheikh.inputNewGrade(100);
cheikh.inputNewGrade(95);
cheikh.inputNewGrade(90);
students.push(cheikh);

let totalAvg = 0;

students.forEach((std) => {
  totalAvg += std.computeAverageGrade();
});

const classAverage = totalAvg / students.length;
console.log("Class Average:", classAverage);
