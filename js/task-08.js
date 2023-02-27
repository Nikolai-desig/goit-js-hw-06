const form = document.querySelector('.login-form');

form.addEventListener('submit', formSubmit);

function formSubmit(event) {
    event.preventDefault();

    const formElement = event.currentTarget.elements;
    console.log(formElement);
    const email = formElement.email.value;
    console.log(email);
    const password = formElement.password.value;
    console.log(password);

    const formField = {
        email,
        password,
    }
    if (email === '' || password === '') {
        alert('Fill all forms')
    } else {
        console.log(formField);
    }

    event.currentTarget.reset();
}
