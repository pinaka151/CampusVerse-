let currentIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }
    const offset = currentIndex * -100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

function moveSlides(direction) {
    showSlide(currentIndex + direction);
}

// Auto-slide every 3 seconds
setInterval(() => {
    moveSlides(1);
}, 5000);

// Initialize the first slide
showSlide(currentIndex);










// Interest



let Events = document.getElementsByClassName(".sort")

button.addEventListener("dblclick" , ()=>{
  let HTML =  document.querySelector(".box").innerHTML = "<b>Your account is  hacked ...</b>"
   document.querySelector(".box").innerHTML = HTML + "<p>Your ac password is *********...</p>"

})


button.addEventListener("contextmenu" , ()=>{
  alert("Your are fired")

})


button.addEventListener("keypress" , ()=>{
  alert("tussi kon")

})



document.addEventListener("keypress" , ()=>{
  alert("tussi kon")

})





