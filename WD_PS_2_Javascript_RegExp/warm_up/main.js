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


const btn_chess = document.getElementById('btn_chess');
btn_chess.addEventListener('click', () => {

    function draw(col, row) {
        let h = null;
        const canvas = document.getElementById('canvas_chess');
        if (canvas.getContext) {
            const ctx = canvas.getContext('2d');

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            h = canvas.height / Math.max(col, row);

            for (let i = 0; i < col; i++) {
                for (let j = 0; j < row; j++) {
                    if ((j + i) % 2 === 0) {
                        ctx.fillRect(i * h, j * h, h, h);
                    } else {
                        ctx.strokeRect(i * h, j * h, h, h);
                    }
                }
            }

        } else {
            alert("Wrong canvas")
        }
    }

    const input_size = document.getElementById('input_size').value;
    const size = input_size.split('x');
    if ((Number(size[0])) && (Number(size[1]))) {
        const col = size[0];
        const row = size[1];

        draw(col, row);

    } else {
        alert("Wrong value")
    }

});

const input_textarea = document.getElementById('input_textarea');
input_textarea.addEventListener('blur', () => {
    const link_out = document.getElementById('link_out');
    if (link_out.childNodes.length) {
        link_out.removeChild(link_out.firstChild);
    }

    let array = input_textarea.value.split(',');
    array = array.map(item => item.replace(/\s/g, ''));
    // console.log(array);

    const regexpIp = /(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/g;
    const regexpLink = /((http|https|ftp|ftps)\:\/\/)|(www\.)[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\/\S*)?/gi;

      // "(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)";
      // "(https?:\\/\\/)?([\\da-z\\.-]+)\\.([a-z\\.]{2,6})([\\/\\w \\.-]*)*\\/?";
      // "([\\da-z\\.-]+)\\.([a-z\\.]{2,6})([\\/\\w \\.-]*)*\\/?";

    let arrayIp =  array.filter(value => value.match(regexpIp));

    let arrayLink =  array.filter(value => value.match(regexpLink));
    arrayLink = arrayLink.map(item => item.replace(/http\:\/\/|https\:\/\//gi, ''));

    let outputArr = [...arrayIp, ...arrayLink].sort();
    // console.log(outputArr);

    let output_li = document.getElementById("link_out");
    output_li.innerText  = "";

    for(let i = 0 ;i < outputArr.length; i++) {
        let new_li = document.createElement("li");
        let new_link = document.createElement("a");
        new_link.href = "http://" + outputArr[i];
        new_link.className = "label";
        new_link.innerText = outputArr[i];
        new_link.target = "_blank";
        new_li.appendChild(new_link);
        output_li.appendChild(new_li);
    }

});

function myRegExp() {
    let text = document.getElementById("input_tex").value;
    const regexp = document.getElementById("regexp").value;
    console.log(new RegExp(regexp,'gi'));
    text = text.replace(new RegExp(regexp,'g'), "<mark>$&</mark>");
    document.getElementById("link_regexp").innerHTML = text;

}

