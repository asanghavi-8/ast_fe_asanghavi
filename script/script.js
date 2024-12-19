//Carousel 

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
  setTimeout(showSlides, 2000); 
}

//Form Validation

function validateForm(event) {
  event.preventDefault();
  const nameField = document.querySelector('#name');
  const emailField = document.querySelector('#email');
  const messageField = document.querySelector('#message');
  const nameError = document.querySelector('#name-error');
  const emailError = document.querySelector('#email-error');
  const messageError = document.querySelector('#message-error');

 
  let isValid = true;


  const namePattern = /^[A-Za-z\s]+$/;  
  const emailPattern =  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; 

  if (!nameField.value.match(namePattern)) {
    isValid = false;
    nameError.classList.add('active');
    console.log("name")
  } else {
    nameError.classList.remove('active');
  }

  if (!emailField.value.match(emailPattern)) {
    isValid = false;
    emailError.classList.add('active');
    console.log("e")
  } else {
    emailError.classList.remove('active');
  }

  if (messageField.value.length < 10 || messageField.value.length > 200) {
    isValid = false;
    messageError.classList.add('active');
    console.log("m")
  } else {
    messageError.classList.remove('active');
  }

  if (isValid) {
    window.alert("Hi " + nameField.value + "! Thank you for contacting us!");
    nameField.value = '';
    emailField.value = '';
    messageField.value = '';
  }
  
}

const form = document.querySelector('#contact-us form'); 
form.addEventListener('submit', validateForm)

//Fetching Product Data

async function fetchData() {
  try {
    const response = await fetch("https://dummyjson.com/products?limit=10");

    if (!response.ok) {
      throw new Error('Error in fetching data.');
    }

    const data = await response.json();
    console.log(data);

    const cardsContainer = document.querySelector('#product-cards');
    if(data && data.products){
      data.products.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('card');
        
        const title = document.createElement('h3');
        title.textContent = product.title; 
        
      
        const description = document.createElement('p');
        description.textContent = product.description || 'No description available'; 
        
    
        const price = document.createElement('p');
        price.textContent = `Price: $${product.price}`; 
        price.classList.add('bold');
  
      
        const image = document.createElement('img');
        image.src = product.images[0]; 
        image.alt = product.name; 
        image.style.width = '100%';
        
        
        card.appendChild(image);  
        card.appendChild(title);  
        card.appendChild(description); 
        card.appendChild(price);
  
        cardsContainer.appendChild(card);
      });
    }
    
  } catch (error) {
    console.error(error);
  }
}

fetchData();




