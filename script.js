// getting elements.
const buttonLogin = document.querySelector('#button-login');
const inputEmail = document.querySelector('#input-email-login');
const inputPassword = document.querySelector('#input-password-login');
const containerRate = document.querySelector('#container-rate');

// code.
function login(event) {
  event.preventDefault();
  (inputEmail.value === 'tryber@teste.com' && inputPassword.value === '123456')
    ? alert('Olá, Tryber!')
    : alert('Email ou senha inválidos.')
}

buttonLogin.addEventListener('click', login);

for (let indexInput = 1; indexInput < 11; indexInput += 1) {
  const label = document.createElement('label');
  const inputCheckbox = document.createElement('input');
  inputCheckbox.type = 'radio';
  inputCheckbox.name = 'rate';
  inputCheckbox.value = indexInput;
  label.innerText = indexInput;
  label.appendChild(inputCheckbox);
  containerRate.appendChild(label);
}