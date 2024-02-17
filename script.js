// getting elements.
const buttonLogin = document.querySelector('#button-login');
const inputEmail = document.querySelector('#input-email-login');
const inputPassword = document.querySelector('#input-password-login');

function login(event) {
  event.preventDefault();
  (inputEmail.value === 'tryber@teste.com' && inputPassword.value === '123456')
    ? alert('Olá, Tryber!')
    : alert('Email ou senha inválidos.')
}

buttonLogin.addEventListener('click', login);