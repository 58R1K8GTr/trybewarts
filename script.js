// getting elements.
const buttonLogin = document.querySelector('#button-login');
const inputEmail = document.querySelector('#input-email');
const inputPassword = document.querySelector('#input-password');

function login(event) {
  event.preventDefault();
  if (inputEmail.value === 'tryber@teste.com' && inputPassword.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

buttonLogin.addEventListener('click', login);