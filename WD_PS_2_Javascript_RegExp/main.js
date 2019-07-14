const btn1 = document.getElementById('btn1');


//  task 1
btn1.addEventListener('click', () => {
    const val1 = parseFloat(document.getElementById('elem1').value);
    const val2 = parseFloat(document.getElementById('elem2').value);

    if (val1 > val2) {
        [val1, val2] = [val2, val1];
    }

    let summa = 0;
    for (let i = val1; i <= val2; i++) {
        if (Math.abs(i) % 10 === 2 || Math.abs(i) % 10 === 3 || Math.abs(i) % 10 === 7) {
            summa += i;
        }
    }
    document.getElementById('result1').textContent = summa;
});


// task 2.1

const calculateTime = document.getElementById('calculateTime');
calculateTime.addEventListener('click', () => {
    const seconds = parseFloat(document.getElementById('input_seconds').value);
    let date = new Date(null);
    date.setSeconds(seconds);

    /*let h = seconds / 3600 ^ 0;
    let m = (seconds - h * 3600) / 60 ^ 0;
    let s = seconds - h * 3600 - m * 60;
    let out = ((h < 10 ? "0" + h : h) + " ч. " + (m < 10 ? "0" + m : m) + " мин. " + (s < 10 ? "0" + s : s) + " сек.");
    document.getElementById('timeResult1').innerText = out;
    */

    const convertTime = function (input, separator) {
        const pad = function (input) {
            return input < 10 ? "0" + input : input;
        };
        return [
            pad(Math.floor(input / 3600)),
            pad(Math.floor(input % 3600 / 60)),
            pad(Math.floor(input % 60)),
        ].join(typeof separator !== 'undefined' ? separator : ':');
    };

    document.getElementById('timeResult1').innerText = convertTime(seconds);
});


// task 2.2
const calculateSeconds = document.getElementById('calculateSeconds');
calculateSeconds.addEventListener('click', () => {

    let input = document.getElementById('input_time');
    input = input.value;
    input = input.split(':');

    let h = parseInt(input[0]);
    let m = parseInt(input[1]);
    let s = parseInt(input[2]);

    let out = h * 60 * 60 + m * 60 + s;

    console.log(out);
    document.getElementById('timeResult2').innerText = `${out} s.`;
});

/** does not take into account the calendar number of days in the month */

const btn_date_interval = document.getElementById('btn_date_interval');
btn_date_interval.addEventListener('click', () => {
    const date1 = new Date(document.getElementById('first_date').value);
    const date2 = new Date(document.getElementById('second_date').value);
    let dateRez = new Date(date2 - date1);

    console.log(dateRez.getMonth());
    const out = `${dateRez.getFullYear() - 1970}year(s), ${dateRez.getMonth()}month(s), ${dateRez.getDay()}day(s), 
        ${dateRez.getUTCHours()}hour(s), ${dateRez.getMinutes()}minute(s), ${dateRez.getSeconds()}second(s)`;

    /** alternate idea
     /*const min = 60;
     const hour = min * 60;
     const day = hour * 24;
     const month = day * 31  ;
     const year = day * 365;

     let years = dateRez / year ^ 0;
     let months = (dateRez - years * year) / month ^ 0;
     let days = (dateRez - years * year - month * months) / day ^ 0;
     let hours = (dateRez - years * year - month * months - days * day) / hour ^ 0;
     let mins = (dateRez - years * year - month * months - days * day - hour * hours) / min ^ 0;
     let seconds = (dateRez - years * year - month * months - days * day - hour * hours - min * mins);
     console.log(out);*/

    document.getElementById('date_interval').innerText = out;

});




