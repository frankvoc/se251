//JavaScript Document
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
    var pattern = /^\d{10}$/;

    return pattern.test(phoneNumber);
}
function validateForm() {
    var firstNameInput = document.getElementById("first-name");
    var fnErrorSpan = document.getElementById("fn-error");
    var lastNameInput = document.getElementById("last-name");
    var lnErrorSpan = document.getElementById("ln-error");
    var emailInput = document.getElementById("email");
    var emailError = document.getElementById('email-error');
    var confirmEmailInput = document.getElementById("confirm-email");
    var confirmEmailError = document.getElementById("confirm-email-error");
    var phoneInput = document.getElementById('phone');
    var phoneError = document.getElementById('phone-error')
    var spanerror = document.querySelector(`span`);

    var valid = true;

    if (!validateFirstName(firstNameInput.value)) {
        fnErrorSpan.innerHTML = (spanerror.style.color='* Invalid First Name');
        valid = false;
    } else {
        fnErrorSpan.textContent = "";
    }

    if (!validateLastName(lastNameInput.value)) {
        lnErrorSpan.innerHTML = (spanerror.style.color='* Invalid');
        valid = false;
    } else {
        lnErrorSpan.textContent = "";
    }

    if (!validateEmail(emailInput.value)) {
        emailError.innerHTML = (spanerror.style.color = '* Invalid Email');
        valid = false;
    } else {
        emailError.textContent = "";
    }

    if (emailInput.value !== confirmEmailInput.value) {
        confirmEmailError.textContent = "* Email confirmation does not match";
        valid = false;
    } else {
        confirmEmailError.textContent = "";
    }

    if (!validatePhoneNumber(phoneInput.value)) {
        phoneError.innerHTML = (spanerror.color = '* Invalid Phone #');
        valid = false;
    } else {
        phoneError.textContent = "";
    }

    if (valid) {
        var person = {
            firstName: firstNameInput.value,
            lastName: lastNameInput.value,
            email: emailInput.value,
            phone: phoneInput.value
        };
        confirmation(person);
        document.getElementById("form").style.display = "none";
        document.getElementById("confirmation").style.display = "block";
    }
}

function formatPhoneNumber(phone) {
    if (phone.length === 10) {
        return phone.substring(0, 3) + '-' + phone.substring(3, 6) + '-' + phone.substring(6);
    } else {
        return phone;
    }
}

function confirmation(person){
    var confirmInfo = document.getElementById("info");
    confirmInfo.innerHTML = `
    <p>${person.firstName} ${person.lastName}</p>
    <p>${person.email}</p>
    <p>${formatPhoneNumber(person.phone)}</p>`;
}
