let slideIndex = 0;
showSlides();

function showSlides() {
  console.log("Hello");
  let i;
  let slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 1500); // Change image every 2 seconds
}


function validateForm() {
  const name = document.querySelector('#name');
  const email = document.querySelector('#email');
  const message = document.querySelector('#message');
  if (name.value === '' || email.value === '' || message.value === '') {
    return false;
  }

  window.alert("Hi " + name.value + "! Thank you for contacting us!");
  name.value = '';
  email.value = '';
  message.value = '';

  return true; 
}

const form = document.querySelector('#contact-us form'); 
form.addEventListener('submit', validateForm);
