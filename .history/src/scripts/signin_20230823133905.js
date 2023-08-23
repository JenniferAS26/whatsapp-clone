// Simulación de una base de datos
const database = {
  "users": [
      {
          "id": 1,
          "name": "Kate Pierse",
          "cellphone-number": 3256984565,
          "password": 147856,
          "url-image": "",
          "online": true,
          "quote": "",
          "date": ""
      }
  ],
  "messages": [
      {
          "idUser1": "user1",
          "idUser2": "user2",
          "chats": [
              {
                  "sendBy": "idUser1",
                  "date": "",
                  "hour": "",
                  "message": "fsddfeff",
                  "view": false
              }
          ]
      }
  ]
};

document.getElementById("signInForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const phoneNumber = document.getElementById("phoneNumber").value;
  const password = document.getElementById("password").value;

  // Validar campos vacíos
  if (!phoneNumber || !password) {
      if (!phoneNumber) alert("El número de teléfono es requerido");
      if (!password) alert("La contraseña es requerida");
      return;
  }

  // Buscar el usuario por número de teléfono en nuestra base de datos
  const user = database.users.find(u => u['cellphone-number'] == phoneNumber);
  if (!user) {
      alert("El número ingresado no existe");
      return;
  }

  // Validar contraseña
  if (user.password != password) {
      alert("La contraseña ingresada es incorrecta");
      return;
  }

  // Si todo está bien, saludar al usuario y redireccionar a la página home
  alert(`Bienvenido ${user.name}`);
  window.location.href = "home.html";  // Asumiendo que la página home se llama home.html
});
