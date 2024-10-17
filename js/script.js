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

document.getElementById('interests').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents form from refreshing the page on submit

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const checkboxes = document.querySelectorAll('input[name="events"]:checked');
    
    let selectedEvents = [];
    checkboxes.forEach((checkbox) => {
        selectedEvents.push(checkbox.value);
    });

    // Display the submitted data
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<strong>Name:</strong> ${name} <br>
                           <strong>Email:</strong> ${email} <br>
                           <strong>Selected Events:</strong> ${selectedEvents.length > 0 ? selectedEvents.join(', ') : 'None'}`;
});









