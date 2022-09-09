/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
}

function menuToggle() {
    const toggleMenu = document.querySelector('.menu');
    toggleMenu.classList.toggle('active')
}


const personal_url = 'https://mtnhack.herokuapp.com/info/view';
async function getPersonalInfo() {
    const response = await fetch(personal_url);
    const personalInfo = await response.json();
    const {firstName, lastName, middleName, addressLineOne, addressLineTwo, city, country} = personalInfo;

    document.getElementById('firstName').textContent = firstName;
    document.getElementById('lastName').textContent = lastName;
    document.getElementById('middleName').textContent = middleName;
    document.getElementById('addressLineOne').textContent = addressLineOne;
    document.getElementById('addressLineTwo').textContent = addressLineTwo;
    document.getElementById('city').textContent = city;
    document.getElementById('country').textContent = country;
}
getPersonalInfo();

const qualifications_url = 'https://mtnhack.herokuapp.com/info/qualifications';
async function getQualifications() {
    const response = await fetch(qualifications_url);
    const qualifications = await response.json();
    const {institution, qualification, startDate, finishDate} = qualifications;

    document.getElementById('institution').textContent = institution;
    document.getElementById('qualification').textContent = qualification;
    document.getElementById('startDate').textContent = startDate;
    document.getElementById('finishDate').textContent = finishDate;
}
getQualifications();

const licence_url = 'https://mtnhack.herokuapp.com/info/license';
async function getLicense() {
    const response = await fetch(licence_url);
    const license = await response.json();
    const  {licenseCode, validity, driverRestrictions, prDPCat} = license;

    document.getElementById('licenseCode').textContent = licenseCode;
    document.getElementById('validity').textContent = validity;
    document.getElementById('driverRestrictions').textContent = driverRestrictions;
    document.getElementById('finishDate').textContent = prDPCat;
}
getLicense();

function verifyPassword() {
    var pw = document.getElementById("pswd").value;

    //checking if password is empty

    if (pw === "") {
        producePrompt('Password is required', 'pw-error', 'red')
        return false;
    }

    //minimum password length validation
    if (pw.length < 8) {
        producePrompt('Password must be more than 8 characters long', 'pw-error', 'red')
        return false

    }
    producePrompt('Valid', 'pw-error', 'green');
    return true;
}


function validateName() {

    var name = document.getElementById('contact-name').value;

    if (name.length === 0) {
        producePrompt('Name is required', 'name-error', 'red')
        return false;
    }

    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        producePrompt('First name please.', 'name-error', 'red');
        return false;
    }
    producePrompt('Valid', 'name-error', 'green');
    return true;
}

function validateSurname() {

    var name = document.getElementById('contact-surname').value;

    if (name.length === 0) {
        producePrompt('Name is required', 'surname-error', 'red')
        return false;
    }

    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        producePrompt('Lastname please', 'surname-error', 'red');
        return false;

    }
    producePrompt('Valid', 'surname-error', 'green');
    return true;
}

function validatePhone() {

    var phone = document.getElementById('contact-phone').value;

    if (phone.length === 0) {
        producePrompt('Phone number is required.', 'phone-error', 'red');
        return false;
    }

    if (phone.length !== 10) {
        producePrompt('Include area code.', 'phone-error', 'red');
        return false;
    }

    if (!phone.match(/^[0-9]{10}$/)) {
        producePrompt('Only digits, please.', 'phone-error', 'red');
        return false;
    }

    producePrompt('Valid', 'phone-error', 'green');
    return true;
}

function validateEmail() {

    var email = document.getElementById('contact-email').value;

    if (email.length === 0) {
        producePrompt('Email Invalid', 'email-error', 'red');
        return false;
    }

    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        producePrompt('Email Invalid', 'email-error', 'red');
        return false;
    }

    producePrompt('Valid', 'email-error', 'green');
    return true;

}

function validateForm() {
    if (validateName() || validatePhone() || validateEmail()) {
        jsShow('submit-error');
        producePrompt('Please fix errors to submit.', 'submit-error', 'red');
        // setTimeout(function(){jsHide('submit-error');}, 2000);
        return true;
    } else {

    }
}

function jsShow(id) {
    document.getElementById(id).style.display = 'block';
}

function jsHide(id) {
    document.getElementById(id).style.display = 'none';
}

function producePrompt(message, promptLocation, color) {
    document.getElementById(promptLocation).innerHTML = message;
    document.getElementById(promptLocation).style.color = color;
}




