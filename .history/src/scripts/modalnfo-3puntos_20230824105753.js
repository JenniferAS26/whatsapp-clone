var modal = document.getElementById('myModal');
var btn = document.querySelector('.contact-info-container__encryption--items');
hdkfhsdfhsjdkfhsjdhfsjdhfkjsdhfksdhar span = document.querySelector('.close-btn');

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}