const predefinedPhone = "123456789"; // Número predefinido para el ejemplo
const predefinedPassword = "password123"; // Contraseña predefinida para el ejemplo

const modal = document.getElementById('modal');
const openModalBtn = document.getElementById('openModal');

// Función para abrir el modal
openModalBtn.addEventListener('click', function() {
    modal.style.display = 'block';
});

// Función para cerrar el modal al hacer click fuera del contenido
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Función para realizar las validaciones de inicio de sesión
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

    // Mostrar el mensaje de bienvenida
    alert(`Bienvenido ${phoneInput}`); // En un caso real, preferiblemente se usaría el nombre del usuario.

    // Redireccionar al usuario a la página home
    window.location.href = "home.html";
}




  