// Simulación de una base de datos de usuarios con números de teléfono.
let users = [];


/* document.getElementById('modalClose').addEventListener('click', function() {
    document.getElementById('modalSignup').style.display = 'none';
}); */

// Mostrar el modal de Sign up al hacer clic en "Sign up for free"
document.getElementById('showSignupModal').addEventListener('click', function() {
    document.getElementById('modalSignup').style.display = 'block';
});

// Verificar y registrar un nuevo usuario al completar el formulario de registro
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let phoneNumber = document.getElementById('signupPhone').value;
    let userExists = users.some(user => user.phoneNumber === phoneNumber);

    if(userExists) {
        alert('El número de celular ingresado ya está registrado.');
    } else {
        let newUser = {
            name: document.getElementById('signupName').value,
            phoneNumber: phoneNumber,
            password: document.getElementById('signupPassword').value,
            imageUrl: document.getElementById('signupImageURL').value,
            phrase: document.getElementById('signupPhrase').value
        };

        postUser(newUser).then(response => {
            if(response.success) {
                users.push(newUser);
                alert('El nuevo usuario fue creado exitosamente.');
                document.getElementById('modalSignup').style.display = 'none';
            } else {
                alert('Hubo un error al crear el usuario.');
            }
        });
    }
});

// Verificar las credenciales al completar el formulario de inicio de sesión
document.getElementById('signinForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let phoneNumber = document.getElementById('signinPhone').value;
    let password = document.getElementById('signinPassword').value;
    let user = users.find(u => u.phoneNumber === phoneNumber);

    if (user && user.password === password) {
        alert('Inicio de sesión exitoso!');
        // Aquí puedes redirigir al usuario o mostrar alguna otra página
    } else {
        alert('Credenciales incorrectas. Inténtalo de nuevo.');
    }
});

function postUser(user) {
    return axios.post('/register', user)
        .then(response => {
            return { success: true }; // Asumiendo que si la petición es exitosa, el usuario se registró correctamente
        })
        .catch(error => {
            console.error("Error al registrar el usuario:", error);
            return { success: false };
        });
}





  