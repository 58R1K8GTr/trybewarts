// getting elements.
const buttonLogin = document.querySelector('#button-login');
const inputEmail = document.querySelector('#input-email-login');
const inputPassword = document.querySelector('#input-password-login');
const containerRate = document.querySelector('#container-rate');
const textareaDescribe = document.querySelector('#textarea');
const inputAgreement = document.querySelector('#agreement');
const buttonSubmit = document.querySelector('#submit-btn');
const pCounter = document.querySelector('#counter');
const evaluationForm = document.querySelector('#evaluation-form');
const main = document.querySelector('main');
const imageCrest = document.querySelector('#trybewarts-forms-logo');
const inputName = document.querySelector('#input-name');
const inputLastname = document.querySelector('#input-lastname');
const inputEmailform2 = document.querySelector('#input-email');
const inputHouse = document.querySelector('#house');
const inputsFamily = document.querySelectorAll('.family');
const inputsSubjects = document.querySelectorAll('.subject');

// code.
function login(event) {
  event.preventDefault();
  if (inputEmail.value === 'tryber@teste.com' && inputPassword.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

buttonLogin.addEventListener('click', login);

const inputsRate = [];
for (let indexInput = 1; indexInput < 11; indexInput += 1) {
  const label = document.createElement('label');
  const inputCheckbox = document.createElement('input');
  inputCheckbox.type = 'radio';
  inputCheckbox.name = 'rate';
  inputCheckbox.classList.add('rate');
  inputCheckbox.value = indexInput;
  label.innerText = indexInput;
  label.appendChild(inputCheckbox);
  inputsRate.push(inputCheckbox);
  containerRate.appendChild(label);
}

textareaDescribe.value = 'uma hard skill: javascript em andamento.'
  + '\numa soft skill: empatia.';

function enableButtonSubmit(event) {
  if (event.target.checked) {
    buttonSubmit.disabled = false;
  } else {
    buttonSubmit.disabled = true;
  }
}

inputAgreement.addEventListener('click', enableButtonSubmit);

function counter(event) {
  pCounter.innerText = 500 - event.target.value.length;
}

textareaDescribe.addEventListener('input', counter);

pCounter.innerText = 500 - textareaDescribe.value.length;

function getInputRadioCheckedValue(elements) {
  for (let indexInput = 0; indexInput < elements.length; indexInput += 1) {
    const inputRadio = elements[indexInput];
    if (inputRadio.checked) {
      return inputRadio.value;
    }
  }
}

function getInputCheckboxCheckedvalues(elements) {
  const listChecked = [];
  for (let indexInput = 0; indexInput < elements.length; indexInput += 1) {
    const inputCheckbox = elements[indexInput];
    if (inputCheckbox.checked) {
      listChecked.push(inputCheckbox.value);
    }
  }
  return listChecked;
}

function createFormElement(id) {
  const formData = document.createElement('form');
  formData.style.width = '675px';
  formData.style.display = 'flex';
  formData.style.flexDirection = 'column';
  formData.id = id;
  return formData;
}

function createPElement(innerText) {
  const pElement = document.createElement('p');
  pElement.innerText = innerText;
  return pElement;
}

function afterSubmit(event) {
  event.preventDefault();
  evaluationForm.style.display = 'none';
  const formData = createFormElement('form-data');
  formData.appendChild(createPElement(`Nome: ${inputName.value} ${inputLastname.value}`));
  formData.appendChild(createPElement(`Email: ${inputEmailform2.value}`));
  formData.appendChild(
    createPElement(`Casa: ${inputHouse.options[inputHouse.selectedIndex].value}`),
  );
  formData.appendChild(createPElement(`Família: ${getInputRadioCheckedValue(inputsFamily)}`));
  formData.appendChild(
    createPElement(`Matérias: ${getInputCheckboxCheckedvalues(inputsSubjects).join(', ')}`),
  );
  formData.appendChild(createPElement(`Avaliação: ${getInputRadioCheckedValue(inputsRate)}`));
  formData.appendChild(createPElement(`Observações: ${textareaDescribe.value}`));
  main.insertBefore(formData, imageCrest);
}

evaluationForm.addEventListener('submit', afterSubmit);
