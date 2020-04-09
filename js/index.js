var $img = document.getElementById("im");
var $width = window.innerWidth;
window.onresize = function () {
  var $width = window.innerWidth;
  if ($width <= 767) {
    $img.src = "img/bg-header-mobile.png";
    console.log("mobile");
  } else {
    $img.src = "img/bg-header-desktop.png";
    console.log("pc");
  }
};

function chim() {
  if ($width <= 767) {
    $img.src = "img/bg-header-mobile.png";
    console.log("mobile");
  } else {
    $img.src = "img/bg-header-desktop.png";
    console.log("pc");
  }
}
chim();
