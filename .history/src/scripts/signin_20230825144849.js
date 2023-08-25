const predefinedPhone = "13256984565";
const predefinedPassword = "147856";

const nextButton = document.getElementById('nextButton');
const errorModal = document.getElementById('modalInput');
const errorMessageDiv = errorModal.querySelector('#modalErrorMessage');

// Funciones
function showErrorModal(message) {
    errorMessageDiv.textContent = message;
    errorModal.style.display = 'block';
}

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
    window.location.href = "index.html";  // Redirecciona a la página de inicio
}

// Eventos
nextButton.addEventListener('click', function(event) {
    event.preventDefault();
    if (validateFields()) {
        signIn();
    }
});

// Cierra el modal de error al hacer clic fuera de él
window.addEventListener('click', function(event) {
    if (event.target === errorModal) {
        errorModal.style.display = 'none';
    }
});

// Cierra el modal de error al empezar a escribir en cualquier input
const formInputs = document.querySelectorAll(".form__input");
formInputs.forEach(input => {
    input.addEventListener("input", function() {
        errorModal.style.display = 'none';
    });
});
