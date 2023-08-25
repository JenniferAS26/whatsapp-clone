document.addEventListener("DOMContentLoaded", function() {

    const correctPhoneNumber = "1234567890"; // replace with your valid phone number
    const correctPassword = "password123";   // replace with your valid password
    const correctUserName = "John Doe";      // replace with your valid user name

    document.getElementById("next-button").addEventListener("click", function(event) {
        event.preventDefault();

        const phoneNumberInput = document.getElementById("phone-input");
        const passwordInput = document.getElementById("password-input");

        // Check for empty fields
        if (!phoneNumberInput.value) {
            showModal('Phone number is required');
            return;
        }

        if (!passwordInput.value) {
            showModal('Password is required');
            return;
        }

        // Check if phone number is incorrect
        if (phoneNumberInput.value !== correctPhoneNumber) {
            showModal("el número ingresado no existe");
            return;
        }

        // Check if password is incorrect
        if (passwordInput.value !== correctPassword) {
            showModal("la contraseña ingresada es incorrecta");
            return;
        }

        // If phone number and password are correct
        alert(`Bienvenido ${correctUserName}`);

        // Redirect to home page
        window.location.href = '/home'; // replace '/home' with your home page URL
    });

});

function showModal(message) {
    document.getElementById("errorMessage").textContent = message;
    document.getElementById("errorModal").style.display = "block";
}

function closeModal() {
    document.getElementById("errorModal").style.display = "none";
}
