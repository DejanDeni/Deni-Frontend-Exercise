const submitButton = document.getElementById('submitButton');
const fullNameInput = document.getElementById('fullNameId');
const usernameInput = document.getElementById('usernameId');
const emailInput = document.getElementById('emailId');
const phoneNumberInput = document.getElementById('phoneNumberId');
const passwordInput = document.getElementById('passwordId');
const confirmPassowrdInput = document.getElementById('confirmPassowrdId');
const maleInput = document.getElementById('maleInput');
const femaleInput = document.getElementById('femaleInput');

const errorMessage = document.getElementById('errorMessage');

const lettersRegEx = /^[a-zA-Z ]+$/;
const emailRegEx = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
const phoneNumberRegEx = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

submitButton.addEventListener('click', () => {
    if (
        fullNameInput.value.length === 0 ||
        usernameInput.value.length === 0 ||
        emailInput.value.length === 0 ||
        phoneNumberInput.value.length === 0 ||
        passwordInput.value.length === 0 ||
        confirmPassowrdInput.value.length === 0
    ) {
        return errorMessage.innerHTML = 'Site polinja se zadolzitelni'
    }

    if (!femaleInput.checked && !maleInput.checked) {
        return errorMessage.innerHTML = 'Mora da odberite pol'
    }

    if (!phoneNumberRegEx.test(phoneNumberInput.value)) {
        return errorMessage.innerHTML = 'Nevaliden telefonski broj'
    }

    if (!lettersRegEx.test(fullNameInput.value)) {
        return errorMessage.innerHTML = 'Full Name mora da sodrzi samo bukvi'
    }

    if (!emailRegEx.test(emailInput.value)) {
        return errorMessage.innerHTML = 'Nevaliden email'
    }

    if (passwordInput.value !== confirmPassowrdInput.value) {
        return errorMessage.innerHTML = 'Lozinkite mora da bidat isti'
    }

    return errorMessage.innerHTML = ''
})
