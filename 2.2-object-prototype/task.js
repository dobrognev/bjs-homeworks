String.prototype.isPalindrome = function mrPalindrome() {

    const str = this.replaceAll(" ", "").toLowerCase();
    return str == str.split('').reverse().join('');

}

function getAverageMark(marks) {
    let summ = 0;

    if (marks.length == 0) return 0;

    for (let i in marks) {
        summ += marks[i];
    }
    const roundedAverage = Math.round(summ / marks.length);
    return roundedAverage;

}

function checkBirthday(birthday) {

    let now = Date.now();
    let diff = (now - Date.parse(birthday)) / 86400000 / 365.25;

    return diff >= 18;
}