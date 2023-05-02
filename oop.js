// 1. 
class Circle {
    constructor(x, y, radius) {
      this.x = x;
      this.y = y;
      this.radius = radius;
    }
  
    getLength() {
      return 2 * Math.PI * this.radius;
    }
  
    static getLengthByRadius(radius) {
      return 2 * Math.PI * radius;
    }
  
    getCopy() {
      return new Circle(this.x, this.y, this.radius);
    }
  
    static createCircle(x, y, radius) {
      return new Circle(x, y, radius);
    }
  
    containsPoint(x, y) {
      const distance = Math.sqrt((x - this.x) ** 2 + (y - this.y) ** 2);
      return distance <= this.radius;
    }
  
    toString() {
      return `Circle(x=${this.x}, y=${this.y}, radius=${this.radius})`;
    }
  }

// 2. Напишіть функцію propsCount(currentObject), яка приймає об’єкт і визначає кількість властивостей цього об’єкта.
// Наприклад:
//  let mentor = { 
//             course: "JS fundamental", 
//             duration: 3,
//             direction: "web-development" 
//         };
// propsCount(mentor);  // 3

function propsCount(currentObject) {
    let count = 0;
    for (let prop in currentObject) {
      if (currentObject.hasOwnProperty(prop)) {
        count++;
      }
    }
    return count;
  }

// 3. 
class Person {
    constructor(name, surname) {
      this.name = name;
      this.surname = surname;
    }
  
    showFullName() {
      console.log(`${this.name} ${this.surname}`);
    }
  }
  
  class Student extends Person {
    constructor(name, surname, year) {
      super(name, surname);
      this.year = year;
    }
  
    showFullName(middleName) {
      console.log(`${this.name} ${middleName} ${this.surname}`);
    }
  
    showCourse() {
      const currentYear = new Date().getFullYear();
      const course = currentYear - this.year + 1;
      console.log(`Current course: ${course}`);
    }
  }

// 4. А. Реалізувати клас, який описує простий маркер.
//    У класі мають бути такі компоненти:
//  - поле, яке зберігає колір маркера;
//  - поле, яке зберігає кількість чорнила в маркері (у відсотках);
//  - метод друку (метод приймає рядок і виводить текст відповідним кольором;
// текст виводиться до тих пір, 
// поки в маркері є чорнило; один не пробіловий символ – це 0,5% чорнила в маркері).
 
// В. Реалізувати клас, що описує маркер, що заправляється, 
// успадкувавши його від простого маркера і додавши метод для заправки маркера. 
// Продемонструвати роботу написаних методів.

constructor(color, inkPercentage) {
    this.color = color;
    this.inkPercentage = inkPercentage;
}

print(text) {
    let printedText = '';
    for (let i = 0; i < text.length; i++) {
        if (text[i] !== ' ') {
            if (this.inkPercentage >= 0.5) {
                printedText += text[i];
                this.inkPercentage -= 0.5;
            } else {
                break;
            }
        } else {
            printedText += ' ';
        }
    }
    console.log('%c' + printedText, 'color' + this.color); 
}

class refillMarker extends Marker {
    constructor(color, inkPercentage) {
        super(color, inkPercentage);
    }

    refill(addInk) {
        this.inkPercentage = Math.min(this.inkPercentage + addInk, 100);
    }
}

// 5. 
class Worker {
constructor(fullName, dayRate, workingDays) {
    this.fullName = fullName;
    this.dayRate = dayRate;
    this.workingDays = workingDays;
    }
    
    showSalary() {
        const salary = this.dayRate * this.workingDays;
        console.log(`Зарплатня працівника ${this.fullName} за ${this.workingDays}: ${salary}`)
    }

    #experience = 1.2;

    showSalaryWithExp() {
        const salary = this.dayRate * this.workingDays * this.#experience;
        console.log(`Зарплатня працівника ${this.fullName} за ${this.workingDays} з врахуванням досвіду ${this.#experience}: ${salary}`);
    }

    get experience() {
        return this.#experience;
    }
    
    set experience(value) {
        this.#experience = value;
    }
}

const expWorker = new Worker('Pedro Pascal', 100, 10);
console.log(`Початковий досвід працівника ${expWorker.fullName}: ${expWorker.experience}`);
expWorker.experience = 1.5;
console.log(`Новий досвід працівника ${expWorker.fullName}: ${expWorker.experience}`);
expWorker.showSalaryWithExp();

const worker1 = new Worker('Ivan Franko', 100, 20);
worker1.experience = 1.6;

const worker2 = new Worker('Taras Shevchenko', 200, 10);
worker2.experience = 1.2;

const worker3 = new Worker('Stepan Bandera', 150, 15);
worker3.experience = 1.8;

const workers = [worker1, worker2, worker3];