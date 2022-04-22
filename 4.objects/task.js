"use strict"
function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;    
}

let studentMaria = new Student("Maria", "female", 22);
let studentViktiria = new Student("Viktoria", "female", 24);
let studentalexey = new Student("Alexey", "male", 22);
let studentMark = new Student("Mark", "male", 19);
let studentMikhail = new Student("Mikhail", "male", 27);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
    if(this.marks === undefined){ 
      this.marks = [];
    }
      this.marks.push(mark);
}

Student.prototype.addMarks = function (...mark) {
  if(this.marks === undefined){ 
    this.marks = []; 
    } 
    mark.forEach((item, idx, mark) => this.marks.push(mark[idx]));   
}

Student.prototype.getAverage = function () { 
  let sum = 0;
  let marks = this.marks;
  marks.forEach((item, idx, marks) => sum += item);
  return sum / marks.length;
}

Student.prototype.exclude = function (reason) { 
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}