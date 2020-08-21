"use strict";

function calculateTotalMortgage(percent, contribution, amount, date) {

    if (typeof (percent) != "number" || percent < 0 || percent === NaN) {
        console.log("Введен неверный тип данных у процентов")
        return "Введен неверный тип данных у процентов";
    }
    if (typeof (contribution) != "number" || contribution < 0 || contribution === NaN) {
        console.log("Введен неверный тип данных у первоначального взноса")
        return "Введен неверный тип данных у первоначального взноса";
    }
    if (typeof (amount) != "number" || amount < 0 || amount === NaN) {
        console.log("Введен неверный тип данных у суммы кредиты")
        return "Введен неверный тип данных у суммы кредита";
    }
    if (contribution >= amount) {
        console.log("Ипотека бессмысленна")
        return 0;
    }

    let S = amount - contribution;
    let P = (percent / 100) * 1 / 12;
    let N = 12 * (date.getFullYear() - new Date().getFullYear()) + (date.getMonth() + 1) - (new Date().getMonth() + 1);
    console.log(`Количество месяцев выплаты ипотеки ${N}`);
    // Платеж = S * ( P + P / ( (  ( 1 + P ) ^ n ) - 1 ) )
    let totalAmount = N * (S * (P + P / ((Math.pow((1 + P), N)) - 1)));
    console.log(`Сумма выплаты ипотеки составляет : ` + totalAmount.toFixed(2) + `руб. Осталось месяцев оплаты ${N}`);
    return parseFloat(totalAmount.toFixed(2));
}

function getGreeting(name) {
    // код для задачи №2 писать здесь
    // return greeting;
}