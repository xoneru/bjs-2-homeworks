function  parseCount(str) {
    const number = Number.parseInt(str, 10);
    if (number){
        return number;
    } else {
        throw new Error("Невалидное значение");
    }    
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
        p = p / 2;
        let s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
        s =  parseFloat(s.toFixed(3));
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