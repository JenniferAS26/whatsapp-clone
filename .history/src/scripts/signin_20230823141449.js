const userData = {
  cellphone-number: '3256984565',
  password: '147856',
  username: 'Kate Pierse'
};

document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector('.form');
  const phoneInput = document.querySelector('.form__input[type="number"]');
  const passwordInput = document.querySelector('.form__input[type="password"]');
  const phoneError = phoneInput.nextElementSibling;
  const passwordError = passwordInput.nextElementSibling;

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Clear previous errors
    phoneError.textContent = '';
    passwordError.textContent = '';

    // Check for empty fields
    if (!phoneInput.value.trim()) {
      phoneError.textContent = 'El número de celular es requerido.';
      return;
    }

    if (!passwordInput.value) {
      passwordError.textContent = 'La contraseña es requerida.';
      return;
    }

    // Check for valid phone number
    if (phoneInput.value !== validData.phoneNumber) {
      alert('El número ingresado no existe.');
      return;
    }

    // Check for valid password
    if (passwordInput.value !== validData.password) {
      alert('La contraseña ingresada es incorrecta.');
      return;
    }

    // If valid phone and password
    alert(`Bienvenido ${userData.username}`);
    window.location.href = 'index.html';  // Assuming '/home' is the URL for the home page
  });
});