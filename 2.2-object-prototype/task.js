String.prototype.isPalindrome = function mrPalindrome() {

    let str = this.replaceAll(" ", "").toLowerCase();
    return str == str.split('').reverse().join('');

}

function getAverageMark(marks) {
    let summ = 0;

    if (marks.length == 0) return 0;

    for (let i in marks) {
        summ += marks[i];
    }

    return roundedAverage = Math.round(summ / marks.length);

}

function checkBirthday(birthday) {

    let now = Date.now();
    let diff = (now - Date.parse(birthday)) / 86400000 / 365;
    diff = Math.round(diff);
    if (diff >= 18) {
        return true
    }
    else { return false }

}