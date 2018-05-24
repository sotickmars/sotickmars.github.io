window.onscroll = function() {myFunction()};

var divMenu = document.getElementById("divMenu");
var sticky = divMenu.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    divMenu.classList.add("sticky")
  } else {
    divMenu.classList.remove("sticky");
  }
}