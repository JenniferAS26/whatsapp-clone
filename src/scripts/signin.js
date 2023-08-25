const predefinedPhone = "13256984565";
const predefinedPassword = "147856";

const nextButton = document.getElementById('nextButton');
const modal = document.querySelector('.modal-signin-container');
const modalForm = document.getElementById('modal-signin-form');

// Creando el modal de errores usando JavaScript
const errorModal = document.createElement('div');
errorModal.setAttribute('id', 'errorModal');
errorModal.setAttribute('class', 'error-modal');

const errorModalContent = document.createElement('div');
errorModalContent.setAttribute('class', 'error-modal-content');

const closeErrorModalBtn = document.createElement('span');
closeErrorModalBtn.setAttribute('class', 'close-button');
closeErrorModalBtn.innerHTML = '&times;';

const errorMessageDiv = document.createElement('p');
errorMessageDiv.setAttribute('id', 'errorMessage');

errorModalContent.appendChild(closeErrorModalBtn);
errorModalContent.appendChild(errorMessageDiv);
errorModal.appendChild(errorModalContent);
document.body.appendChild(errorModal);

closeErrorModalBtn.onclick = function() {
    errorModal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target === errorModal) {
        errorModal.style.display = 'none';
    }
}

function showErrorModal(message) {
    errorMessageDiv.textContent = message;
    errorModal.style.display = 'block';
}

nextButton.addEventListener('click', function() {
    if (validateFields()) {
        modal.style.display = 'flex';
    }
});

window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

modalForm.addEventListener('submit', function(event) {
    event.preventDefault();
    signIn();
});

function validateFields() {
    const phoneInput = document.getElementById("phone");
    const passwordInput = document.getElementById("password");

    if (!phoneInput.value.trim()) {
        showErrorModal("Por favor, ingresa tu número telefónico.");
        return false;
    }

    if (!passwordInput.value.trim()) {
        showErrorModal("Por favor, ingresa tu contraseña.");
        return false;
    }

    return true;
}

function signIn() {
    const phoneInputValue = document.getElementById("phone").value;
    const passwordInputValue = document.getElementById("password").value;

    if (phoneInputValue !== predefinedPhone) {
        showErrorModal("El número ingresado no existe.");
        return;
    }

    if (passwordInputValue !== predefinedPassword) {
        showErrorModal("La contraseña ingresada es incorrecta.");
        return;
    }

    alert(`Bienvenido ${phoneInputValue}`);
    modal.style.display = 'none';
    window.location.href = "index.html";
}
