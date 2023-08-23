const database = {
  users: [
      {
          id: 1,
          name: "Kate Pierse",
          "cellphone-number": 3256984565,
          password: "147856",
          "url-image": "",
          online: true,
          quote: "",
          date: ""
      }
  ]
};

document.addEventListener("DOMContentLoaded", function() {
  if (document.querySelector('.signin-container__auth-container')) {
    document.addEventListener("DOMContentLoaded", function() {
      if (document.querySelector('.signin-container__auth-container')) {
          // Logic for Sign in
          const form = document.querySelector('.signin-container__auth-container--form');
          
          form.addEventListener('submit', function(event) {
              event.preventDefault();
              
              const phoneInput = form.querySelector('input[type="number"]');
              const passwordInput = form.querySelector('input[type="password"]');
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
              // You can then redirect the user to the home page or any other page
              // For instance: location.href = '/home.html';
          });
      }
  
      // [You can add the Sign up logic here as previously provided...]
  });
  

  if (document.querySelector('.signup-container')) {
      // Logic for Sign up
      const form = document.querySelector('.signup-form');
      form.addEventListener('submit', function(event) {
          event.preventDefault();
          
          const nameInput = form.querySelector('input[type="text"]');
          const phoneInput = form.querySelector('input[type="number"]');
          const passwordInput = form.querySelector('input[type="password"]');
          const urlInput = form.querySelector('input[type="url"]');
          const quoteTextarea = form.querySelector('textarea');

          // Check if phone number exists
          const existingUser = database.users.find(user => user["cellphone-number"] === parseInt(phoneInput.value));
          if (existingUser) {
              alert('El número de celular ingresado ya está registrado.');
              return;
          }

          // Add new user to 'database'
          const newUser = {
              id: database.users.length + 1,
              name: nameInput.value,
              "cellphone-number": parseInt(phoneInput.value),
              password: passwordInput.value,
              "url-image": urlInput.value,
              online: true,
              quote: quoteTextarea.value,
              date: new Date().toISOString()
          };
          database.users.push(newUser);
          
          alert('El nuevo usuario fue creado exitosamente.');
      });
  }
});



  