document.addEventListener('DOMContentLoaded', () => {
    const signInButton = document.getElementById('signin-button');
  
    signInButton.addEventListener('click', () => {
      const phoneNumber = document.getElementById('phone-number').value;
      const password = document.getElementById('password').value;
  
      if (phoneNumber === '' || password === '') {
        alert('Por favor, completa todos los campos.');
      } else {
        // Simulated user data (replace this with actual user data from your JSON server)
        const users = [
          { id: 1, phoneNumber: '1234567890', password: 'password123', name: 'Alice' },
          { id: 2, phoneNumber: '9876543210', password: 'securepass', name: 'Bob' },
          // ... other user objects
        ];
  
        const user = users.find(user => user.phoneNumber === phoneNumber);
  
        if (!user) {
          alert('El número de celular ingresado no existe.');
        } else if (user.password !== password) {
          alert('La contraseña ingresada es incorrecta.');
        } else {
          alert(`Bienvenido ${user.name}! Ingreso exitoso.`);
          // Redirect the user to the home page
          window.location.href = 'home.html';
        }
      }
    });
  });
  