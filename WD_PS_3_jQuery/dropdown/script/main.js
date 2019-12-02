const Avatars = [
  {
    name: 'Galya',
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

$(document).ready(function () {
  $("#option").append($("<ul>").attr("class", "list"));
  Avatars.forEach((element) => {
    $(".list").append($("<li>").attr("class", "list_item")
      .append($("<img>").attr("src", element.img).height(24).width(24))
      .append($("<span>").text(element.name)));
  });

  $(".selected").click(function () {
    $("#option ul").toggle(200);
  });

  $(".list_item").click(function () {
    $(".selected span").html($(this).html());
    $(".list").hide(200);
  });

  $(document).click(function (element) {
    if (! $(element.target).parents().hasClass('wrapper')){
      $("#option ul").hide(200);
    }
  });

});