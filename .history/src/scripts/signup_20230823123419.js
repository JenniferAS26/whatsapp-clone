document.addEventListener('DOMContentLoaded', () => {
  const signupButton = document.getElementById('signup-button');

  signupButton.addEventListener('click', () => {
    const name = document.getElementById('name').value;
    const phoneNumber = document.getElementById('phone-number').value;
    const password = document.getElementById('password').value;
    const profileUrl = document.getElementById('profile-url').value;
    const nameError = document.getElementById('name-error');
    const phoneError = document.getElementById('phone-error');
    const passwordError = document.getElementById('password-error');
    const profileUrlError = document.getElementById('profile-url-error');

    // Reset error messages
    nameError.textContent = '';
    phoneError.textContent = '';
    passwordError.textContent = '';
    profileUrlError.textContent = '';

    if (name === '' || phoneNumber === '' || password === '' || profileUrl === '') {
      if (name === '') {
        nameError.textContent = 'Name is required';
      }
      if (phoneNumber === '') {
        phoneError.textContent = 'Phone number is required';
      }
      if (password === '') {
        passwordError.textContent = 'Password is required';
      }
      if (profileUrl === '') {
        profileUrlError.textContent = 'Profile URL is required';
      }
    } else {
      // Simulated user data (replace this with actual user data from your JSON server)
      const users = [
        { phoneNumber: '1234567890', name: 'Alice' },
        { phoneNumber: '9876543210', name: 'Bob' },
        // ... other user objects
      ];

      const existingUser = users.find(user => user.phoneNumber === phoneNumber);

      if (existingUser) {
        alert('The entered phone number is already registered.');
      } else {
        // Perform registration logic here (POST request to your JSON server)
        // For simulation purposes, let's just display a success message
        alert('Registration successful! You can now sign in.');
        // Redirect the user to the sign in page
        window.location.href = 'signin.html';
      }
    }
  });
});

  