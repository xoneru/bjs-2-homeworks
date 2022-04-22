function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

let studentMasha = new Student("Maria", "female", 22);
let studentVika = new Student("Viktoria", "female", 19);
let StudentMark = new Student("Mark", "male", 22);
let studentAlexey = new Student("Alexey", "male", 27);
let studentMisha = new Student("Mikhail", "male", 28);
Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectname;
}

Student.prototype.addMark = function (mark) {
  if(this.marks === undefined) {
    this.mark = [];
  }
  this.mark.push(mark);
}

Student.prototype.addMarks = function (...mark) {
  if (this.marks === undefined) {
    this.marks = [];
  }
  mark.forEach((item, idx, mark) => this.marks.push(mark[idx]))
}