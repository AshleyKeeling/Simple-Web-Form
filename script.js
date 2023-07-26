const form = document.getElementById('form');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const phoneNumber = document.getElementById('phoneNumber');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const termsAndConditions = document.getElementById('termsAndConditions');
const news = document.getElementById('news');
const signUpBtn = document.getElementById('signUp');

signUpBtn.addEventListener('click', formValidation);

function formValidation() {
    // checks if all the html validation passed and checks if the passwords are the same
    if(form.checkValidity() && checkPassword()) {
        let message = `
        First Name: ${firstName.value},
        Last Name: ${lastName.value},
        Phone Number: ${phoneNumber.value},
        Email: ${email.value},
        Password: ${password.value},
        Terms and Conditions: ${termsAndConditions.checked},
        Receive News: ${news.checked}
        `
        console.log(message);
        alert('Account Created - ' + message);
        form.reset() 
    }
}

// checks if the passwords match
function checkPassword() {
    if(password.value == confirmPassword.value) {
        return true;
    } else {
        alert('passwords do not match');
        return false;
    }
}

function onFormSubmit() {
    event.preventDefault();
}