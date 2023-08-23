// Esta es solo una simulación de una base de datos
const userDatabase = {
  "1234567890": { name: "John Doe", password: "password123" }
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

  // Validar si el número de teléfono existe en nuestra base de datos
  const user = userDatabase[cellphone-number];
  if (!user) {
      alert("El número ingresado no existe");
      return;
  }

  // Validar contraseña
  if (user.password !== password) {
      alert("La contraseña ingresada es incorrecta");
      return;
  }

  // Si todo está bien, saludar al usuario y redireccionar a la página home
  alert(`Bienvenido ${user.name}`);
  window.location.href = "home.html";  // Asumiendo que la página home se llama home.html
});

