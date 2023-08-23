// signup.js
document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector('.signup-form');
  
  form.addEventListener('submit', function(event) {
      event.preventDefault();
      
      let hasError = false;

      // Validations
      const inputs = form.querySelectorAll('input, textarea');
      inputs.forEach(input => {
          const errorDiv = input.nextElementSibling;
          if (!input.value.trim()) {
              hasError = true;
              errorDiv.textContent = 'This field is required.';
          } else {
              errorDiv.textContent = '';
          }
      });

      if (hasError) return;

      const nameInput = form.querySelector('input[type="text"]');
      const phoneInput = form.querySelector('input[type="number"]');
      const passwordInput = form.querySelector('input[type="password"]');
     

      // Check if phone number exists
      const existingUser = dataBase.users.find(user => user["cellphone-number"] === parseInt(phoneInput.value));
      if (existingUser) {
          alert('El número de celular ingresado ya está registrado.');
          return;
      }

      // Add new user to 'database'
      const newUser = {
          id: dataBase.users.length + 1,
          name: nameInput.value,
          "cellphone-number": parseInt(phoneInput.value),
          password: passwordInput.value
      };
      database.users.push(newUser);
      
      alert('El nuevo usuario fue creado exitosamente.');
  });
});



  