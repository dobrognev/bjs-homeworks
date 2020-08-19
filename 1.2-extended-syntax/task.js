"use strict";

function getResult(a, b, c) {
    let x = [];

    let reDisc = b ** 2 - 4 * a * c

    if (reDisc >= 0)
        x[0] = (-b + Math.sqrt(reDisc)) / 2 * a;
    if (reDisc > 0)
        x[1] = (-b - Math.sqrt(reDisc)) / 2 * a;

    return x;

    // код для задачи №1 писать здесь
    // return x;
}

function getAverageMark(marks) {
    let summ = 0;

    if (!marks.length) {
        console.log("Не были введены оценки");
        return 0;
    }
    else if (marks.length > 5) {
        console.log("Оценок больше чем нужно, им светит обрезание -*|*-");
        marks.splice(5);
    }
    for (let j = 0; j < marks.length; j++) {
        summ = summ + marks[j];
    }
    // код для задачи №2 писать здесь
    return summ / marks.length;
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