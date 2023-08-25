document.querySelector('.form__submit').addEventListener('click', function(e) {
    e.preventDefault(); // Prevents form submission
  
    let phoneNumber = document.querySelector('.singup-number-input').value;
  
    // Here we assume that there's an endpoint that checks for existing phone numbers
    fetch('https://your-api-endpoint/check-phone-number?number=' + phoneNumber)
      .then(response => response.json())
      .then(data => {
        if(data.exists) {
          alert('El número de celular ingresado ya está registrado.');
        } else {
          let name = document.querySelector('.singup-name-input').value;
          let password = document.querySelector('.singup-password-input').value;
          let quote = document.querySelector('.singup-quote-textarea').value;
  
          // Now we can create the user
          fetch('https://your-api-endpoint/create-user', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              name: name,
              phoneNumber: phoneNumber,
              password: password,
              quote: quote
            })
          })
          .then(response => response.json())
          .then(data => {
            if(data.success) {
              // Show modal
              document.getElementById('successModal').style.display = 'block';
              setTimeout(() => {
                document.getElementById('successModal').style.display = 'none';
              }, 2000);
            } else {
              alert('Hubo un error al registrar el usuario.');
            }
          })
        }
      });
  });
  



  