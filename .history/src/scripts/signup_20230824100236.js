// Simulación de una base de datos de usuarios con números de teléfono.
let users = [];

document.getElementById('signup-link').addEventListener('click', function() {
    // Mostrar el modal de Sign up (aquí puedes usar un display:block o lo que uses para mostrar tu modal)
    document.querySelector('.modal-signup-container').style.display = 'block';
});

document.querySelector('.signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de la manera predeterminada.

    let phoneNumber = document.querySelector('input[type="number"]').value;

    // Verificación del número de teléfono
    let userExists = users.some(user => user.phoneNumber === phoneNumber);

    if(userExists) {
        alert('El número de celular ingresado ya está registrado.');
    } else {
        let newUser = {
            name: document.querySelector('input[type="text"]').value,
            phoneNumber: phoneNumber,
            password: document.querySelector('input[type="password"]').value,
            imageUrl: document.querySelector('input[type="url"]').value,
            phrase: document.querySelector('textarea').value
        };

        // Suponiendo que postUser es una función que envía al servidor el nuevo usuario.
        postUser(newUser).then(response => {
            if(response.success) {
                users.push(newUser);
                alert('El nuevo usuario fue creado exitosamente.');
                // Cierra el modal de Sign up (puedes esconderlo o hacer lo que prefieras)
                document.querySelector('.modal-signup-container').style.display = 'none';
            } else {
                alert('Hubo un error al crear el usuario.');
            }
        });
    }
});

function postUser(user) {
    // Aquí debes implementar la función que haga la petición POST a tu servidor para registrar el usuario.
    // Este es solo un ejemplo para simular el envío. Puedes usar XMLHttpRequest, Fetch API, Axios, etc.
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ success: true });
        }, 2000);
    });
}




  