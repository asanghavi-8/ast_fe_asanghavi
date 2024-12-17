let slideIndex = 0;
showSlides();

function showSlides() {
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


function validateForm(event) {
  event.preventDefault();
  const name = document.querySelector('#name');
  const email = document.querySelector('#email');
  const message = document.querySelector('#message');
  const error = document.querySelector('.error');
  let isValid = true;


  const namePattern = /^[A-Za-z\s]+$/;  
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]$/; 

  if (!name.value.match(namePattern)) {
    isValid = false;
    error.innerText = 'Enter a valid name!';
    error.style.display = 'block';
  }

  if (!email.value.match(emailPattern)) {
    isValid = false;
    error.innerText = 'Enter a valid email!';
    error.style.display = 'block';
  }

  if (message.value.length < 10 || message.value.length > 200) {
    isValid = false;
    error.innerText = 'Message should be between 10 and 200 characters!';
    error.style.display = 'block';
  }

  if(isValid){
    error.style.display = 'none';
    window.alert("Hi " + name.value + "! Thank you for contacting us!");
   
  }
  
  name.value = '';
  email.value = '';
  message.value = '';
   
}

const form = document.querySelector('#contact-us form'); 
form.addEventListener('submit', validateForm)




