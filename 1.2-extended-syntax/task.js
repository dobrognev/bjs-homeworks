"use strict";

function getResult(a, b, c) {
    let x = [];

    let z = b ** 2 - 4 * a * c

    if (z >= 0)
        x[0] = (-b + Math.sqrt(z)) / 2 * a;
    if (z > 0)
        x[1] = (-b - Math.sqrt(z)) / 2 * a;

    return x;

    // код для задачи №1 писать здесь
    // return x;
}

function getAverageMark(marks) {
    let averageMark = 0;
    let summ = 0;

    if (marks.length == false) {
        console.log("Не были введены оценки");
        averageMark = 0;
    }
    else if (marks.length > 5) {
        console.log("Оценок больше чем нужно, им светит обрезание -*|*-");
        marks.splice(5);
        for (let j = 0; j < marks.length; j++) {
            summ = summ + marks[j];
        }
        averageMark = summ / marks.length;

    } else {
        for (let i = 0; i < marks.length; i++) {
            summ = summ + marks[i];
        }
        averageMark = summ / marks.length;

    }
    // код для задачи №2 писать здесь
    return averageMark;
}

function askDrink(name, dateOfBirthday) {

    const age = new Date().getFullYear() - dateOfBirthday.getFullYear();

    if (age >= 18) {
        return `Не желаете ли олд-фэшн, ${name}?`
    } else {
        return `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`
    }
    // код для задачи №3 писать здесь
    // return result;
}