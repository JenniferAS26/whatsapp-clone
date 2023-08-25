const modal = document.getElementById('modal-3puntos');
const imgIcon = document.querySelector('.contact-menu-icon');
/* const span = document.querySelector('.close-btn'); */
const editItem = document.querySelector('.modal-content p:nth-child(3)'); // selecciona el elemento "Edit"

imgIcon.onclick = function() {
  modal.style.display = "block";
}

/* Si decides añadir un botón de cierre más tarde, puedes descomentar el código siguiente:
span.onclick = function() {
  modal.style.display = "none";
}
*/

editItem.onclick = function() {
  alert('Edit button clicked!');
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
