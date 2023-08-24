document.addEventListener('DOMContentLoaded', function() {

    // Modal principal
    const modal3puntos = document.getElementById('modal-3puntos');
    const closeModalBtn = document.querySelector('.close-btn');
  
    closeModalBtn.addEventListener('click', function() {
      modal3puntos.style.display = 'none';
    });
  
    // Para mostrar el modal principal (dependiendo de cómo desees hacerlo)
    // Por ejemplo, al hacer clic en un botón:
    // btnShowModal.addEventListener('click', function() {
    //   modal3puntos.style.display = 'block';
    // });
  
    // Modal secundario
    const modalSecundario = document.getElementById('modal-secundario');
    const closeModalBtnSec = document.querySelector('.close-btn-sec');
    const openSecondModalBtn = document.getElementById('openSecondModal');
  
    closeModalBtnSec.addEventListener('click', function() {
      modalSecundario.style.display = 'none';
    });
  
    openSecondModalBtn.addEventListener('click', function() {
      modal3puntos.style.display = 'none'; // Cierra el modal principal
      modalSecundario.style.display = 'block'; // Abre el modal secundario
    });
  });
  