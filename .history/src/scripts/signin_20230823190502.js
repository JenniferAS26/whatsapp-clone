// signin.js
document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector('?)
  form.addEventListener('submit', function(event) {
      event.preventDefault();
      
      const phoneInput = form.querySelector('form__input[type="number"]');
      const passwordInput = form.querySelector('form__input[type="password"]');
      const phoneErrorDiv = phoneInput.nextElementSibling;
      const passwordErrorDiv = passwordInput.nextElementSibling;

      // Reset error messages
      phoneErrorDiv.textContent = '';
      passwordErrorDiv.textContent = '';

      // Validate empty fields
      if (!phoneInput.value.trim()) {
          phoneErrorDiv.textContent = 'This field is required.';
          return;
      }
      if (!passwordInput.value.trim()) {
          passwordErrorDiv.textContent = 'This field is required.';
          return;
      }

      // Check if user exists based on the phone number
      const user = database.users.find(u => u["cellphone-number"] === parseInt(phoneInput.value));
      if (!user) {
          alert('El número ingresado no existe.');
          return;
      }

      // Check if password matches
      if (user.password !== passwordInput.value) {
          alert('La contraseña ingresada es incorrecta.');
          return;
      }

      // If everything is okay, sign the user in
      alert(`Bienvenido ${user.name}`);
      // Redirect the user to the home page (if you have one)
      window.location.href = 'index.html';
  });
});
