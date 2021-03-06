/*
1. Дана форма с двумя числовыми инпутами.
    Посчитать сумму чисел в промежутке между введеными пользователем (например от -100 до 100),
суммируя только числа которые заканчиваются на 2,3, и 7*/

document.getElementById('btn1').addEventListener('click', () => {
  let val1 = parseFloat(document.getElementById('elem1').value);
  let val2 = parseFloat(document.getElementById('elem2').value);
  if (val1 > val2) {
    [val1, val2] = [val2, val1];
  }

  let sum = 0;
  for (let i = val1; i <= val2; i++) {
    if (Math.abs(i) % 10 === 2 || Math.abs(i) % 10 === 3 || Math.abs(i) % 10 === 7) {
      sum += i;
    }
  }
  document.getElementById('result1').innerHTML = sum.toString();
});
/*
2. Пользователь вводит время в секундах. Вывести в формате: hh:mm:ss (01:05:20).
Ниже наоборот: пользователь вводит время в формате hh:mm:ss, вывести количество секунд.
    */

/*2.1*/

document.getElementById('calculateTime').addEventListener('click', () => {

  const seconds = parseFloat(document.getElementById('input_seconds').value);
  let date = new Date(null);
  date.setSeconds(seconds);

  const convertTime = function (input, separator = ':') {
    const pad = function (input) {
      return input < 10 ? "0" + input : input;
    };
    const secondsInHour = 3600; // seconds in hour
    const secondsInMinut = secondsInHour / 60; // seconds in minut
    const secondsInThis =  60; // seconds
    return [
      pad(Math.floor(input / secondsInHour)),
      pad(Math.floor(input % secondsInMinut)),
      pad(Math.floor(input % secondsInThis)),
    ].join(separator);
  };

  document.getElementById('timeResult1').innerText = convertTime(seconds);
});

/*2.2*/
document.getElementById('calculateSeconds').addEventListener('click', () => {

  const inputElement = document.getElementById('input_time');
  let input = inputElement.value;
  let inputArray = input.split(':');
  const secondsInHour = 3600; // seconds in hour
  const secondsInMinut = secondsInHour / 60; // seconds in minut

  let h = parseInt(inputArray[0]);
  let m = parseInt(inputArray[1]);
  let s = parseInt(inputArray[2]);

  let out = h * secondsInHour + m * secondsInMinut + s;

  document.getElementById('timeResult2').innerText = `${out} s.`;
});

/*
3) Даны два input[type=datetime-local]. Вычислить промежуток времени
прошедший между датами и вывести пользователю сообщение типа:
    2 year(s), 1 month(s), 3 day(s), 5 hour(s), 10 minute(s), 15 second(s).*/
/** does not take into account the calendar number of days in the month */


document.getElementById('btn_date_interval').addEventListener('click', () => {
  let date1 = new Date(document.getElementById('first_date').value);
  let date2 = new Date(document.getElementById('second_date').value);

  console.log(date1 > date2);
  if (date1 > date2) {
    [date1 , date2] = [date2, date1];
  }
  document.getElementById('date_interval').innerHTML = `${date2.getFullYear() - date1.getFullYear()}year(s), ${date2.getMonth() - date1.getMonth()}month(s),
        ${date2.getDate() - date1.getDate()}day(s),${date2.getHours() - date1.getHours()}hour(s), ${date2.getMinutes() -
  date1.getMinutes()}minute(s), ${date2.getSeconds() - date1.getSeconds()}second(s)`;

});


/*4.1 Пользователь вводит габариты шахматной доски (в формате ‘8x8’).
Вывести (как бы нарисовать) шахматную доску.
    */
document.getElementById('btn_chess').addEventListener('click', () => {

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
    const col = Number.parseInt(size[0]);
    const row = Number.parseInt(size[1]);

    draw(col, row);

  } else {
    alert("Wrong value");
  }

});

/*4.2 Пользователь вводит габариты шахматной доски (в формате ‘8x8’).
Вывести (как бы нарисовать) шахматную доску.
    */
document.getElementById('btn_chess2').addEventListener('click', () => {

  function draw(col, row) {
    const board = document.getElementById('board_chess');

    // const boardSize = board.clientWidth;
    const cellSize = (99.9999 / col) / 2;

    while (board.firstChild) {
      board.firstChild.remove();
    }

    for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
        let divRow = document.createElement('div');
        if ((j + i) % 2 === 0) {
          divRow.setAttribute('class', 'cell cell_white')
        } else {
          divRow.setAttribute('class', 'cell cell_black')
        }
        divRow.style.padding = `${cellSize}%`;
        board.appendChild(divRow);
      }
    }
  }

  const input_size = document.getElementById('input_size2').value;
  const size = input_size.split('x');
  if ((Number(size[0])) && (Number(size[1]))) {
    const col = Number.parseInt(size[0]);
    const row = Number.parseInt(size[1]);

    draw(col, row);

  } else {
    alert("Wrong value");
  }

});

/*
5. Дан некий textarea, в который пользователь вводит ссылки или ip через запятую.
    Когда textarea станет неактивным - проверить введены ли ссылки/ip, удалить дичь (то что не ссылки и не ip),
и вывести их отсортированным по алфавиту списком ссылок (Пользователю http:// и https:// не показывать, при
    клике на ссылку открывается новое окно).
*/

document.getElementById('input_textarea').addEventListener('blur', () => {
  const link_out = document.getElementById('link_out');

  while (link_out.firstChild){ // remove oll child elements
    link_out.removeChild(link_out.firstChild);
  }

  let array = document.getElementById('input_textarea').value.split(',');
  array = array.map(item => item.replace(/\s/g, ''));

  const regexpIp = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/g;

  const regexpLink = /^(ht|f)tp(s?)\:\/\/[0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*(:(0-9)*)*(\/?)([a-zA-Z0-9\-\.\?\,\'\/\\\+&amp;%\$#_]*)?$/g;

  let arrayIp = array.filter(value => value.match(regexpIp));

  let arrayLink = array.filter(value => value.match(regexpLink));
  arrayLink = arrayLink.map(item => item.replace(/^(ht|f)tp(s?)\:\/\//gi, ''));

  let outputArr = [...arrayIp, ...arrayLink].sort();

  for (let i = 0; i < outputArr.length; i++) {
    let new_li = document.createElement("li");
    let new_link = document.createElement("a");
    new_link.href =  "//" + outputArr[i]; //  bed idea = "http://"
    new_link.className = "label";
    new_link.innerText = outputArr[i].toString();
    new_link.target = "_blank";
    new_li.appendChild(new_link);
    link_out.appendChild(new_li);
  }

});

/*
6. В textarea вводим текст, в input - регулярку или текст. После нажатии кнопки -
вывести тот же текст, но в нем все, что подходит под регулярку выделено желтым (подсвечено).
(Вот и пригодился тег mark)
*/

function myRegExp() {
  let text = document.getElementById("input_tex").value;
  const regexp = document.getElementById("regexp").value;

  text = text.replace(new RegExp(regexp, 'g'), "<mark>$&</mark>");
  document.getElementById("link_regexp").innerHTML = text;

}

