// JavaScript Document
function validateFirstName(fname) {
    var pattern = /^[A-Za-z\-]+$/;
    return pattern.test(fname);
}
function validateLastName(lname){
    var pattern = /^[A-Za-z\-]+$/;
    return pattern.test(lname);
}
function validateEmail(email){
    var pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return pattern.test(email)
}
function validatePhoneNumber(phoneNumber) {
    var pattern = /^(?:\+\d{1,3})?(?:\s?\(\d{1,4}\)\s?|\s?\d{1,4}[-\s]?)?\d{6,}$/;
    return pattern.test(phoneNumber);
}
function validateForm() {
    var firstNameInput = document.getElementById("first-name");
    var fnErrorSpan = document.getElementById("fn-error");
    var lastNameInput = document.getElementById("last-name");
    var lnErrorSpan = document.getElementById("ln-error");
    var emailInput = document.getElementById("email");
    var emailError = document.getElementById('email-error');
    var phoneInput = document.getElementById('phone');
    var phoneError = document.getElementById('phone-error')
    var spanerror = document.querySelector(`span`);

    if (validateFirstName(firstNameInput.value)) {
        fnErrorSpan.textContent = ""; // Clear error message
        console.log("First name is valid.");
        fnErrorSpan.innerHTML = ('')
    } else {
        fnErrorSpan.innerHTML = (spanerror.textContent.color='* Invalid First Name')
        console.log("Invalid first name.");
    }
    if (validateLastName(lastNameInput.value)) {
        lnErrorSpan.textContent = ""; // Clear error message
        console.log("First name is valid.");
        lnErrorSpan.innerHTML = ('')
    } 
    else {
        lnErrorSpan.innerHTML = (spanerror.style.color='* Invalid')
        console.log("Invalid first name.");
    }
    if (validateEmail(emailInput.value)){
        emailError.textContent = "";
        console.log('Email is valid');
        emailError.innerHTML = ('')
    }
    else{
        emailError.innerHTML = (spanerror.style.color = '*  Invalid Email')
        console.log('invalid email')
    }
    if(validatePhoneNumber(phoneInput.value)){
        phoneError.textContent = "";
        console.log('Phone # is Valid');
        phoneError.innerHTML=('');
    }
    else{
        phoneError.innerHTML = (spanerror.color = '* Invalid Phone #')
        console.log('Invalid')
    }
}


