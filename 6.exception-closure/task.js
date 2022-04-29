function  parseCount(str) {
    const number = Number.parseInt(str, 10);
    if (number){
        return number;
    }
    throw new Error("Невалидное значение");  
}

function validateCount(str) {
    try {
        return parseCount(str)
    } catch (e) {
        return e;
    } 
}

class Triangle {
    constructor(a, b, c) {
        if (((a + b) <= c) || ((b + c) <= a ) || ((a + c) <= b)) {
        throw new Error("Треугольник с такими сторонами не существует");
        } 
        this.a = a;
        this.b = b;
        this.c = c;
    }

    getPerimeter(){
        return  parseFloat((this.a + this.b + this.c).toFixed(3));
    }

    getArea() {
        let p = this.getPerimeter();
        let s = Math.sqrt((p / 2) * ((p / 2) - this.a) * ((p /2) - this.b) * ((p / 2) - this.c));
        s = parseFloat(s.toFixed(3));
        return s;
    }

}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch(e) {
        const obj = {};
        obj.getArea = function() {return ("Ошибка! Треугольник не существует")};
        obj.getPerimeter = function() {return ("Ошибка! Треугольник не существует")};
        return obj;
    }
}