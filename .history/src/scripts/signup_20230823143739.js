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
      // Logic for Sign in
      // [omitted for brevity... you can add the sign in logic previously provided here]
  }

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



  