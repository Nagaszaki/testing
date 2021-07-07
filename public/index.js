'use strict'
const Form = document.querySelector('form');
const p = document.createElement('p');
document.querySelector('body').appendChild(p);
Form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (Form.firstname.value === '' || Form.lastname.value === '' || Form.passport.value === '') {
    alert('Please fill out the form');
    return;
  }

  const data = {
    firstname: Form.firstname.value,
    lastname: Form.lastname.value,
    passport: Form.passport.value
  };

  fetch('http://localhost:3000/api/booking', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((message) => {
      if(message.bookingReference){
        p.innerText = `Successful booking. Your booking reference is ${message.bookingReference}`;
      } else {
        p.innerText = `Unsuccessful booking. Error is: ${message.message}`;
      }
    });
});
