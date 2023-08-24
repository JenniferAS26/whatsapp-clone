import { createData, saveImage } from "../services/api.js"; 

const DEFAULT_PROFILE_PICTURE = 'https://images.unsplash.com/photo-1635107510862-53886e926b74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80'
const form = document.querySelector('.signin-container__signup-container--form')

form.addEventListener('submit', async event => {
  event.preventDefault();
  const file = singupProfilePicture.files[0];
  const imageUrl = await saveImage(file);

  const formInputValues = {
    name
  }

});