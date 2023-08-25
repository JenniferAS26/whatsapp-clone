import { readData } from "../services/api.js";
import { getUserById } from "./getUserById.js";
import { 
  homeContainer, 
  chatContainer 
} from "../navigation.js";

const registeredAccounts = await readData('users')

const chatsContainer = document.querySelector('.home-container__main--cards-container')

registeredAccounts.forEach(existingAccount => {
  const { name, url_image, date, id } = existingAccount
  const dateObject = new Date(date)
  const formatedDate = dateObject.toLocaleTimeString([], {hour: "2-digit", minute: "2-digit"}) // a.m / p.m
  
  chatsContainer.innerHTML += `
  <div class="card" id=${id}>
    <div class="profile-container">
      <img class="profile-container__image" src="${url_image}" alt="profile picture">
      <p class="profile-container__title">${name}</p>
    </div>
    <span class="connection">${formatedDate}</span>
  </div>
  `
})

export const cardChat = document.querySelectorAll('.card')
// []
cardChat.forEach(chat => {
  chat.addEventListener('click', () => {
    createChatTemplate(chat.id, chatContainer)
    homeContainer.style.display = 'none'
  })
  
})

const createChatTemplate = async (id, chatContainer) => {
  chatContainer.style.display = 'block'

  const user = await getUserById(id)
  chatContainer.innerHTML = `
  <div class="chats-container__header">
    <div class="chats-container__header--left">
      <img class="arrow-back" src="./src/assets/icons/back-grey.png" alt="arrow icon" onclick="goBack(chatContainer, homeContainer)">
      <div class="contact-info" id=${user.id} onclick="goToContactInfo(chatContainer, contactInfoContainer)">
        <img src="${user.url_image}" alt="profile picture">
        <p class="username">${user.name}</p>
      </div>
  </div>
  <div class="chats-container__header--right">
      <img src="./src/assets/icons/video-camera-white.png" alt="video camera icon">
      <img src="./src/assets/icons/phone-white.png" alt="telephone icon">
      <img class="chat-menu-icon" src="./src/assets/icons/menu-vertical.png" alt="menu icon">
      </div>
  </div>
  <div class="chats-container__main">
    <div class="chats-container__main--wallpaper-container"></div>
    <div class="chats-container__main--bottom-container">
      <div class="emojis">
      <img class="smiley-face" src="./src/assets/icons/smiley-face.png" alt="smiley-face icon">
      </div>
      <input class="input" type="text" placeholder="Type a message">
      <div class="icons">
        <img class="clip-icon" src="./src/assets/icons/clip.png" alt="clip icon">
        <img class="camera-icon" src="./src/assets/icons/camera.png" alt="camera icon">
      </div>
      <img class="microphone-icon" src="./src/assets/icons/voice-note.png" alt="microphone icon">
    </div>
  </div>
  `
}

const createInfoContactTemplate = async (id, contactInfoContainer) => {
  contactInfoContainer.style.display = 'grid'
  const user = await getUserById(id)
  contactInfoContainer.innerHTML = `
  
  `
}

