const Avatars = [
  {
    name: 'Glya',
    img: './image/avatar/Gelya.png'
  },
  {
    name: 'Lena',
    img: './image/avatar/Lena.png'
  },
  {
    name: 'Marusya',
    img: './image/avatar/Marusya.png'
  },
  {
    name: 'Pavel',
    img: './image/avatar/Pavel.png'
  },
  {
    name: 'Ruslan',
    img: './image/avatar/Ruslan.png'
  },
  {
    name: 'Sveta',
    img: './image/avatar/Sveta.png'
  },
  {
    name: 'Vasya',
    img: './image/avatar/Vasya.png'
  },
  {
    name: 'Yura',
    img: './image/avatar/Yura.png'
  }
];

$(document).ready(() => {
  createOptions(Avatars);

  $('#select').on('click', function () {
    $(this).find('.child').toggleClass('visible');
  });
  $('#select > li').on('click', function () {
    $("#selected").html($(this).html());
  });

});

function createOptions(avatars) {
  let option = $("#select");
  option.append(`<li class="child visible" id="selected"><div><span>Select Human</span></div></li>`);
  for (let element of avatars) {
    option.append(`<li class="child" value='${element.name}' ><img src='${element.img}' alt='${element.img}'><div>${element.name}</div></li>`);
  }

}