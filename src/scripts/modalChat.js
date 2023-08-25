document.querySelector('.chat-menu-icon').addEventListener('click', function() {
  const modal = document.getElementById('modalChat');
  
  if(modal.style.display === "none" || modal.style.display === "") {
      modal.style.display = "block";
  } else {
      modal.style.display = "none";
  }
});
