const modal = document.getElementById('modal-3puntos');
const btn = document.querySelector('.contact-info-container__encryption--items');
const span = document.querySelector('.close-btn');
const editItem = document.querySelector('.modal-content p:nth-child(3)'); // selecciona el elemento "Edit"

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

editItem.onclick = function() {
  alert('Edit button clicked!');
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

