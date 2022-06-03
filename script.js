// adding javascript styles
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
    

});
// get the values from the input
function checkInputs() {
const usernameValue = username.value.trim();
const emailValue = email.value.trim();
const passwordValue = password.value.trim();
const password2Value = password2.value.trim();

if(usernameValue === ''){
    setErrorFor(username, 'Username can not be blank');
}
else if(usernameValue.length < 6){
    setErrorFor(username, 'Username must be at least 6 characters long');
}
else {
    setSuccessFor(username);
}
if(emailValue === '') {
    setErrorFor(email, 'Email can not be blank');
}
else {
    setSuccessFor(email);
}
if(passwordValue === '') {
    setErrorFor(password, 'Password can not be blank');
}
else if(passwordValue.length < 8){
    setErrorFor(password, 'Password must be at least 8 characters long');
}
else {
    setSuccessFor(password);
}
if(password2Value === '') {
    setErrorFor(password2, 'password2 can not be blank');
}
else if(passwordValue !== password2Value) {
    setErrorFor(password2, 'Passwords does not match');
}
else if(password2Value.length < 8){
    setErrorFor(password2, 'Password2 must be at least 8 characters long');
}
else{
    setSuccessFor(password2);
}
}

function setErrorFor(input, message) {
const formControl = input.parentElement; 
const small = formControl.querySelector('small');
formControl.className = 'form-control error';
small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}