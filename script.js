// getting elements.
const buttonLogin = document.querySelector('#button-login');
const inputEmail = document.querySelector('#input-email-login');
const inputPassword = document.querySelector('#input-password-login');
const containerRate = document.querySelector('#container-rate');
const textareaDescribe = document.querySelector('#textarea-describe');
const inputAgreement = document.querySelector('#agreement');
const buttonSubmit = document.querySelector('#submit-btn');

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

textareaDescribe.value = 'uma hard skill: javascript em andamento.\numa soft skill: empatia.'

function enableButtonSubmit(event) {
  if (event.target.checked) {
    buttonSubmit.disabled = false;
  } else {
    buttonSubmit.disabled = true;
  }
}

inputAgreement.addEventListener('click', enableButtonSubmit);