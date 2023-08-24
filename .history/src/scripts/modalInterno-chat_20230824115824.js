document.addEventListener('DOMContentLoaded', function() {

    // Modal
    const modalInter = document.getElementById('modal-3puntos');
    const closeModalBtn = document.querySelector('.close-btn');
  
    closeModalBtn.addEventListener('click', function() {
      modalInter.style.display = 'none';
    });
  
    // Puedes usar un botón u otro elemento para mostrar el modal. Aquí te muestro un ejemplo:
  
    const btnShowModal = document.getElementById('btnShowModal'); // Asume que tienes un botón con este ID
    btnShowModal.addEventListener('click', function() {
      modalInterno-caht.style.display = 'block';
    });
  
  });
  