let InputDays = document.querySelector('.date');
let InputMonths = document.querySelector('.month');
let inputYears = document.querySelector('.year');

let showAge = document.querySelector('.show');
const btn = document.querySelector('.btn');

let todayDate = new Date();
let d = todayDate.getDay();
let m = todayDate.getMonth();
let y = todayDate.getFullYear();

let maxDays;
let monthNum;



btn.addEventListener('click', (day, month, year) => {
    day = InputDays.value;
    month = InputMonths.value;
    year = inputYears.value;

    if (InputDays.value == '' || InputMonths.value == '' || inputYears.value == '') {
        return alert("Please enter date of birth properly");
    }

    if (m == 1) { //january
        maxDays = 31;
        monthNum = 1;
    } else if (m == 2) { //february
        maxDays = 28;
        monthNum = 2;
    } else if (m == 3) { // march
        maxDays = 31;
        monthNum = 3;
    } else if (m == 4) { //april
        maxDays = 30;
        monthNum = 4;
    } else if (m == 5) { //may
        maxDays = 31;
        monthNum = 5;
    } else if (m == 6) { // june
        maxDays = 30;
        monthNum = 6;
    } else if (m == 7) { //july
        maxDays = 31;
        monthNum = 7;
    } else if (m == 8) { //august
        maxDays = 31;
        monthNum = 8;
    } else if (m == 9) { // septamber 
        maxDays = 30;
        monthNum = 9;
    } else if (m == 10) { // october
        maxDays = 31;
        monthNum = 10;
    } else if (m == 11) { //november
        maxDays = 30;
        monthNum = 11;
    } else { // december
        maxDays = 31;
        monthNum = 12;
    }

    let ageYears = y - year;

    if (m <= month) {
        m = m + 12;
    }
    let ageMonth = m - month;

    let ageDays = (maxDays - d) + parseInt(day);

    showAge.innerHTML = `Your age is ${ageYears} years , ${ageMonth} months , and ${ageDays} days`

});