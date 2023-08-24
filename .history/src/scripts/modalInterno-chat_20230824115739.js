document.addEventListener('DOMContentLoaded', function() {

    // Modal
    const modal3puntos = document.getElementById('modal-3puntos');
    const closeModalBtn = document.querySelector('.close-btn');
  
    closeModalBtn.addEventListener('click', function() {
      modal3puntos.style.display = 'none';
    });
  
    // Puedes usar un botón u otro elemento para mostrar el modal. Aquí te muestro un ejemplo:
  
    const btnShowModal = document.getElementById('btnShowModal'); // Asume que tienes un botón con este ID
    btnShowModal.addEventListener('click', function() {
      modal3dfhsdfhsdfsdhfuntos.style.display = 'block';
    });
  
  });
  