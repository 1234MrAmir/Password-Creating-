// show hide password 
let pasw = document.querySelector('#pas');
let toggleBtn = document.querySelector('#toggle-btn');

toggleBtn.onclick = function () {
    if (pasw.type === 'password') {
        pasw.setAttribute('type', 'text');
        toggleBtn.classList.add('hide');
    }
    else {
        pasw.setAttribute('type', 'password');
        toggleBtn.classList.remove('hide');
    }
}


// validation password
let lowercase = document.getElementById('lower');
let upercase = document.getElementById('uper');
let digit = document.getElementById('number');
let specialchar = document.getElementById('specialCharacter');
let minilength = document.getElementById('length');


function checkpassword(data) {
    console.log(data);
    const lower = new RegExp('(?=.*[a-z])'); // for Single lower case
    const uper = new RegExp('(?=.*[A-Z])'); //for single Upper case
    const number = new RegExp('(?=.*[0-9])'); // for single number
    const special = new RegExp('(?=.*[#?!@$%^&*-])'); // for special character
    const length = new RegExp('(?=.{8,})'); // for length

    // lower case validation check
    if (lower.test(data)) {
        lowercase.classList.add('valid');
    }
    else {
        lowercase.classList.remove('valid');
    }

    // Uper case validation check
    if (uper.test(data)) {
        upercase.classList.add('valid');
    }
    else {
        upercase.classList.remove('valid');
    }

    // number validation check
    if (number.test(data)) {
        digit.classList.add('valid');
    }
    else {
        digit.classList.remove('valid');
    }

    // special character validation check
    if (special.test(data)) {
        specialchar.classList.add('valid');
    }
    else {
        specialchar.classList.remove('valid');
    }

    // password length validation check
    if (length.test(data)) {
        minilength.classList.add('valid');
    }
    else {
        minilength.classList.remove('valid');
    }
}



