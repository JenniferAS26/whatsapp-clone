
const predefinedPhone = "13256984565";
const predefinedPassword = "147856";

const nextButton = document.getElementById('nextButton');
const openModalBtn = document.getElementById('openModal');
const modal = document.getElementById('modal');
const modalForm = document.getElementById('modal-signin-form');


nextButton.addEventListener('click', signIn);


openModalBtn.addEventListener('click', function() {
    modal.style.display = 'block';
});


modalForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Previene que el formulario se envíe
    signIn();
});

window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

function signIn() {
    const phoneInput = document.getElementById("phone").value;
    const passwordInput = document.getElementById("password").value;

    if (!phoneInput || !passwordInput) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    if (phoneInput !== predefinedPhone) {
        alert("El número ingresado no existe.");
        return;
    }

    if (passwordInput !== predefinedPassword) {
        alert("La contraseña ingresada es incorrecta.");
        return;
    }

    alert(`Bienvenido ${phoneInput}`);
    window.location.href = "index.html";
}
