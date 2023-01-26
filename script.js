
// var div = document.getElementById("#bdy");
// div.addEventListener("touchstart", function() {
//     var card = document.getElementById("#crd");
//     card.classList.toggle("card-hover");
// });


document.getElementById("bdy").addEventListener("touchstart", myFunction);
function myFunction() {
  document.getElementById("crd").classList.toggle("card-hover");
  document.getElementById("song").play();
}

