const toggleMenu = document.querySelector('#toggle-menu');
const closeBtn = document.querySelector('#close-btn');
const menuItems = document.querySelectorAll('.menu-item');
// for-top-nav
function openNav() {
  document.querySelector('.mobile-menu').classList.add('active');
  toggleMenu.classList.add('invisible');
  document.body.style.overflowY = 'hidden';
}

toggleMenu.addEventListener('click', openNav);

function closeNav() {
  document.querySelector('.mobile-menu').classList.remove('active');
  toggleMenu.classList.remove('invisible');
  document.body.style.overflowY = 'auto';
}

closeBtn.addEventListener('click', closeNav);

menuItems.forEach((item) => {
  item.addEventListener('click', closeNav);
});

// for scrolling effect //
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});

// form validation
const form = document.querySelector('form');// get the form
const username = document.getElementById('name');// get the name
const email = document.getElementById('email');// get the email
const message = document.getElementById('message');// get the message

// for setting the error message
const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.errorMsg');

  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success');
};

// for setting the the success message
const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.errorMsg');

  errorDisplay.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
};

let submitPt = 0;// for calcuating the result should be 3

const validateInputs = () => {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const messageValue = message.value.trim();

  // for name validation
  if (usernameValue === '') {
    setError(username, 'Username is required');
    return;
  } if (usernameValue.split('').length > 30) {
    setError(username, 'Username should not exceed 30 characters');
    return;
  }
  setSuccess(username);
  submitPt += 1;

  // for email validation
  if (emailValue === '') {
    setError(email, 'Email is required');
    return;
  } if (emailValue !== emailValue.toLowerCase()) {
    setError(email, 'Email should be in lowercase');
    return;
  }
  setSuccess(email);
  submitPt += 1;

  // for message validation
  if (messageValue === '') {
    setError(message, 'Please add a message');
  } else if (messageValue.split('').length > 500) {
    setError(message, 'Message should be short and do not exceed 500 characters');
  } else {
    setSuccess(message);
    submitPt += 1;
  }
};

// the validation when the form is submitted
form.addEventListener('submit', (e) => {
  e.preventDefault();// prevent sumitting

  validateInputs();// run checks

  // deciding to submit or not
  if (submitPt === 3) {
    form.submit();
  } else {
    submitPt = 0;
  }
});
