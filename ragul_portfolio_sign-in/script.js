const username = document.getElementById("username");
const email = document.getElementById("email");
const mobile = document.getElementById("phone");
const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");

form.addEventListener("submit", (e) => {
    if (!validateInputs()) {
        e.preventDefault();
    }
 });

// VALIDATING INPUTS
function validateInputs() {
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const mobileVal = mobile.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();
    let success = true;

    if (usernameVal === "") {
        success = false;
        setError(username, "Please enter username");
    } else {
        setSuccess(username);
    }

    if (emailVal === "") {
        success = false;
        setError(email, "Please enter email");
    } else if (!validateEmail(emailVal)) {
        success = false;
        setError(email, "Please enter a valid email");
    } else {
        setSuccess(email);
    }

    if (mobileVal === "") {
        success = false;
        setError(mobile, "Please enter mobile number");
    } else if (mobileVal.length<10) {
        success = false;
        setError(mobile, "mobile number must be atleast 10 characters");
    } else {
        setSuccess(mobile);
    }

    if (passwordVal === "") {
        success = false;
        setError(password, "Please enter password");
    } else if (passwordVal.length < 10) {
        success = false;
        setError(password, "Password must be atleast 10 characters long");
    } else {
        setSuccess(password);
    }
    if (cpasswordVal === "") {
        success = false;
        setError(cpassword, "Please enter confirm password");
    } else if (cpasswordVal !== passwordVal) {
        success = false;
        setError(cpassword, "Password does not match");
    } else {
        setSuccess(cpassword);
    }

    return success;
}

//SETTING ERROR MSG 
function setError(element, message) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector(".error");
    errorElement.innerText = message;
}

// SETTING SUCCESS MSG
function setSuccess(element) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector(".error");
    errorElement.innerText = "";
}

// EMAIL VALIDATION
const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};
