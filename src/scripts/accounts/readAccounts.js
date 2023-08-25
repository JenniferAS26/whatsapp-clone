import { readData, deleteData } from "../services/api.js";
import { getUserById } from "./getUserById.js";
import { homeContainer, chatContainer, contactInfoContainer } from "../navigation.js";

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

const createChatTemplate = async (id, chatContainer) => {
  chatContainer.style.display = 'block'
  const user = await getUserById(id)
  chatContainer.innerHTML = `
  <div class="chats-container__header">
    <div class="chats-container__header--left">
      <img class="arrow-back" src="./src/assets/icons/back-grey.png" alt="arrow icon" onclick="goBack(chatContainer, homeContainer)">
      <div class="contact-info" id=${user.id}>
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
  const contactInfo = document.querySelector('.contact-info')
  contactInfo.addEventListener('click', () => {
    createInfoContactTemplate(contactInfo.id)
    chatContainer.style.display = 'none'

  })

}

export const cardChat = document.querySelectorAll('.card')

cardChat.forEach(chat => {
  chat.addEventListener('click', () => {
    createChatTemplate(chat.id, chatContainer)
    homeContainer.style.display = 'none'
  })
})

export const createInfoContactTemplate = async (id) => {
  contactInfoContainer.style.display = 'grid'

  const user = await getUserById(id)
  contactInfoContainer.innerHTML = `
    <div class="contact-info-container__top">
      <img class="arrow-back-icon" src="./src/assets/icons/back.png" alt="back arrow icon" onclick="goBack(contactInfoContainer, chatContainer)">
      <div class="contact-info-container__top--info contact">
        <img class="contact__photo" src="${user.url_image}" alt="profile picture">
        <h3 class="contact__name">${user.name}</h3>
        <span class="contact__number">${user.cellphone_number}</span>
        <div class="contact__actions">
          <div class="contact__actions--options">
            <button>
              <i class="fa-solid fa-phone"></i>
            </button>
            <span>Audio</span>
          </div>
          <div class="contact__actions--options">
            <button>
              <i class="fa-solid fa-video"></i>
            </button>
            <span>Video</span>
          </div>
          <div class="contact__actions--options">
            <button>
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
            <span>Search</span>
          </div>
        </div>
      </div>
      <img class="contact-menu-icon" src="./src/assets/icons/menu-vertical.png" alt="menu icon">
    </div>
    <div class="contact-info-container__media-links-docs">
      <div class="contact-info-container__media-links-docs--top">
        <p>Media, links, and docs</p>
        <div>
          <span>8.215</span>
          <button>
            <i class="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>
      <div class="contact-info-container__media-links-docs--carousel">
        <img src="./src/assets/images/image1.jpg" alt="carousel images">
        <img src="./src/assets/images/image2.jpg" alt="carousel images">
        <img src="./src/assets/images/image3.jpg" alt="carousel images">
        <img src="./src/assets/images/image4.jpg" alt="carousel images">
      </div>
    </div>
    <div class="contact-info-container__notifications">
      <div class="contact-info-container__notifications--items">
        <i class="fa-solid fa-bell"></i>
        <span>Mute notifications</span>
      </div>
      <div class="contact-info-container__notifications--items">
        <i class="fa-solid fa-fire"></i>
        <span>Custom notifications</span>
      </div>
      <div class="contact-info-container__notifications--items">
        <i class="fa-regular fa-image"></i>
        <span>Media visibility</span>
      </div>
      <div class="contact-info-container__notifications--items">
        <i class="fa-solid fa-star"></i>
        <span>Starred messages</span>
      </div>
    </div>
    <div class="contact-info-container__encryption">
      <div class="contact-info-container__encryption--items">
        <button class="delete-button">
          <i class="fa-solid fa-trash"></i>
        </button>
        <div class="description-wrapper">
          <p>Delete</p>
        </div>
      </div>
      <div class="contact-info-container__encryption--items">
        <i class="fa-solid fa-clock-rotate-left"></i>
        <div class="description-wrapper">
          <p>Disappearing messages</p>
          <span>Off</span>
        </div>
      </div>
      <div class="contact-info-container__encryption--items">
        <i class="fa-solid fa-lock-open"></i>
        <div class="description-wrapper">
          <p>Chat lock</p>
        </div>
      </div>
    </div>
  `
  const contactMenuIcon = document.querySelector('.contact-menu-icon')
  contactMenuIcon.addEventListener('click', () => {
    console.log('soy un precioso click dentro de contact info *-*');
  })

  const deleteButton = document.querySelector('.delete-button')
  deleteButton.addEventListener('click', () => {
    deleteData('users', id)
    contactInfoContainer.style.display = 'none'
    homeContainer.style.display = 'block'
  })

}
