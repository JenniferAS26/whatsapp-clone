document.addEventListener('DOMContentLoaded', () => {
  const signinButton = document.getElementById('signin-button');

  signinButton.addEventListener('click', () => {
    const phoneNumber = document.getElementById('phone-number').value;
    const password = document.getElementById('password').value;
    const phoneError = document.getElementById('phone-error');
    const passwordError = document.getElementById('password-error');

    // Reset error messages
    phoneError.textContent = '';
    passwordError.textContent = '';

    if (phoneNumber === '' || password === '') {
      if (phoneNumber === '') {
        phoneError.textContent = 'Phone number is required';
      }
      if (password === '') {
        passwordError.textContent = 'Password is required';
      }
    } else {
      // Simulated user data (replace this with actual user data from your JSON server)
      const users = [
        { phoneNumber: '1234567890', password: 'password123', name: 'Alice' },
        { phoneNumber: '9876543210', password: 'securepass', name: 'Bob' },
        // ... other user objects
      ];

      const user = users.find(user => user.phoneNumber === phoneNumber);

      if (!user) {
        alert('The entered phone number does not exist.');
      } else if (user.password !== password) {
        alert('Incorrect password.');
      } else {
        alert(`Welcome ${user.name}! Login successful.`);
        // Redirect the user to the home page
        window.location.href = 'home.html';
      }
    }
  });
});
