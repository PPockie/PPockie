let btnDownloadCV = document.querySelector(".btnDownloadCV");
 btnDownloadCV.addEventListener("click",function(){
     alert("Hahaha I'm joking.")
 })

 let menu = document.querySelector('#menu-icon');
 let navber = document.querySelector('.navbar');

 menu.onclick = () => {
    menu.classList.toggle('bx-box');
    navber.classList.toggle('active');
 }
var header = document.querySelector(".navber");
var btns = document.querySelectorAll(".acbtn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}
