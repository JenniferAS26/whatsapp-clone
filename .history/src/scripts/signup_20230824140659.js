


// Simulación de una base de datos de usuarios con números de teléfono.
let users = [];

document.querySelector('.modal-close').addEventListener('click', function() {
    document.querySelector('.modal-signup-container').style.display = 'none';
);

// Mostrar el modal de Sign up al hacer clic en "Sign up for free"
document.querySelector('.signup-redirect').addEventListener('click', function() {
    document.querySelector('.modal-signup-container').style.display = 'block';
});

// Verificar y registrar un nuevo usuario al completar el formulario de registro
document.querySelector('.signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let phoneNumber = document.querySelector('.signup-form input[type="number"]').value;

    // Verificación del número de teléfono
    let userExists = users.some(user => user.phoneNumber === phoneNumber);

    if(userExists) {
        alert('El número de celular ingresado ya está registrado.');
    } else {
        let newUser = {
            name: document.querySelector('.signup-form input[type="text"]').value,
            phoneNumber: phoneNumber,
            password: document.querySelector('.signup-form input[type="password"]').value,
            imageUrl: document.querySelector('.signup-form input[type="url"]').value,
            phrase: document.querySelector('.signup-form textarea').value
        };

        // Suponiendo que postUser es una función que envía al servidor el nuevo usuario.
        postUser(newUser).then(response => {
            if(response.success) {
                users.push(newUser);
                alert('El nuevo usuario fue creado exitosamente.');
                document.querySelector('.modal-signup-container').style.display = 'none';
            } else {
                alert('Hubo un error al crear el usuario.');
            }
        });
    }
});

// Verificar las credenciales al completar el formulario de inicio de sesión
document.querySelector('.signin-container__auth-container--form').addEventListener('submit', function(event) {
    event.preventDefault();

    let phoneNumber = document.querySelector('.signin-container__auth-container--form input[type="number"]').value;
    let password = document.querySelector('.signin-container__auth-container--form input[type="password"]').value;

    let user = users.find(u => u.phoneNumber === phoneNumber);

    if (user && user.password === password) {
        alert('Inicio de sesión exitoso!');
        // Aquí puedes redirigir al usuario o mostrar alguna otra página
    } else {
        alert('Credenciales incorrectas. Inténtalo de nuevo.');
    }
});

function postUser(user) {
    // Aquí debes implementar la función que haga la petición POST a tu servidor para registrar el usuario.
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ success: true });
        }, 2000);
    });
}





  