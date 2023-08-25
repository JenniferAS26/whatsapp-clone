const deleteButton = document.querySelector('.delete-button');
const modal = document.getElementById('confirmModal');
const confirmDelete = document.getElementById('confirmDelete');
const cancelDelete = document.getElementById('cancelDelete');

deleteButton.addEventListener('click', () => {
    modal.style.display = 'block'; // Mostrar el modal cuando se haga clic en eliminar
});

confirmDelete.addEventListener('click', () => {
    deleteData('users', id);
    contactInfoContainer.style.display = 'none';
    homeContainer.style.display = 'block';
    modal.style.display = 'none'; // Oculta el modal después de confirmar
});

cancelDelete.addEventListener('click', () => {
    modal.style.display = 'none'; // Oculta el modal si se cancela
});
