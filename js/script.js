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
//---- Send Email ----
function sendEmail(){
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "peettanawat123@gmail.com",
    Password : "Kingshadow12",
    To : 'poksmilepop@gmail.com',
    From : document.getElementsByID("email").value,
    Subject : "Contact Form Enquiry",
    Body : "Name :" + document.getElementById("name").value
     + "<br /> Email :" + document.getElementById("email").value 
     + "<br /> Phone no." + document.getElementById("phone").value
     + "<br /> Message :" + document.getElementById("message").value
}).then(
  message => alert("Ok")
);
}
