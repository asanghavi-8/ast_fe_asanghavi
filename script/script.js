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
  const error = document.querySelector('.error');
  let isValid = true;


  const namePattern = /^[A-Za-z\s]+$/;  
  const emailPattern =  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; 

  if (!nameField.value.match(namePattern)) {
    isValid = false;
    error.innerText = 'Enter a valid name!';
    error.style.display = 'block';
  }

  if (!emailField.value.match(emailPattern)) {
    isValid = false;
    error.innerText = 'Enter a valid email!';
    error.style.display = 'block';
  }

  if (messageField.value.length < 10 || message.value.length > 200) {
    isValid = false;
    error.innerText = 'Invalid Message: Should be between 10 to 200 characters!';
    error.style.display = 'block';
  }

  if(isValid){
    window.alert("Hi " + name.value + "! Thank you for contacting us!");
    error.innerHTML = '';
    error.style.display = 'none';
  }
  name.value = '';
  email.value = '';
  message.value = '';
  
}

const form = document.querySelector('#contact-us form'); 
form.addEventListener('submit', validateForm)

//Fetching Product Data

// async function fetchData() {
//   try {
//     const response = await fetch("https://dummyjson.com/products?limit=10");

//     if (!response.ok) {
//       throw new Error('Error in fetching data.');
//     }

//     const data = await response.json();

//     const cardsContainer = document.querySelector('#product-cards');

//     data.products.forEach(product => {
//       const card = document.createElement('div');
//       card.classList.add('card');
      
//       const title = document.createElement('h3');
//       title.textContent = product.title; 
      
    
//       const description = document.createElement('p');
//       description.textContent = product.description || 'No description available'; 
      
  
//       const price = document.createElement('p');
//       price.textContent = `Price: $${product.price}`; 

    
//       const image = document.createElement('img');
//       image.src = product.images[0]; 
//       image.alt = product.name; 
//       image.style.width = '100%';
      
      
//       card.appendChild(image);  
//       card.appendChild(title);  
//       card.appendChild(description); 
//       card.appendChild(price);

//       cardsContainer.appendChild(card);
//     });
//   } catch (error) {
//     console.error(error);
//   }
// }

// fetchData();




