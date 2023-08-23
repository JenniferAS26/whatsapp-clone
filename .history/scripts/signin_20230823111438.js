// signin.js

import Swal from 'sweetalert2';

export function initSignInPage() {
  const signInButton = document.getElementById('signin-button');

  signInButton.addEventListener('click', () => {
    const phoneNumber = document.getElementById('phone-number').value;
    const password = document.getElementById('password').value;

    if (phoneNumber === '' || password === '') {
      Swal.fire({
        icon: 'error',
        title: 'Campos Vacíos',
        text: 'Por favor, completa todos los campos.',
      });
    } else {
      // Realizar el proceso de inicio de sesión si los campos no están vacíos
      // Llamar a la función que verifica el número de celular y la contraseña
      // y redireccionar al usuario a la página de inicio si son correctos
    }
  });
}
