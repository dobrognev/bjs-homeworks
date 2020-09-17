class PrintEditionItem {

    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        return this.state * 1.5;
    }

    set stateValue(_state_) {
        if (this.state < 0) {
            state = 0
        } else if (this.state > 100) {
            state = 100
        } else state = this.state
    }
    get stateValue() {
        return this._state_;
    }
}

const sherlock = new PrintEditionItem("Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008);

console.log(sherlock.name) // Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе
console.log(sherlock.releaseDate); // 2019
console.log(sherlock.state); // 100
sherlock.fix();
console.log(sherlock.state); // 100