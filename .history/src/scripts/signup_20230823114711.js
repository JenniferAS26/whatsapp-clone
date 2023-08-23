document.addEventListener('DOMContentLoaded', () => {
    const signupButton = document.getElementById('signup-button');
  
    signupButton.addEventListener('click', () => {
      const name = document.getElementById('name').value;
      const phoneNumber = document.getElementById('phone-number').value;
      const password = document.getElementById('password').value;
      const profileUrl = document.getElementById('profile-url').value;
  
      // Simulated user data (replace this with actual user data from your JSON server)
      const users = [
        { id: 1, phoneNumber: '1234567890' },
        { id: 2, phoneNumber: '9876543210' },
        // ... other user objects
      ];
  
      const existingUser = users.find(user => user.phoneNumber === phoneNumber);
  
      if (existingUser) {
        alert('El número de celular ingresado ya está registrado.');
      } else {
        // Create new user logic (POST request, etc.)
  
        alert('Nuevo usuario creado exitosamente.');
        window.location.href = 'signin.html';
      }
    });
  });
  