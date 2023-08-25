/** HTML elements */
const homeContainer = document.querySelector('.home-container')
const chatContainer = document.querySelector('.chats-container')
const contactInfoContainer = document.querySelector('.contact-info-container')
const contactInfo = document.querySelector('.contact-info')
const menuChatContainerIcon = document.querySelector('.chat-menu-icon')

const goBack = (chatContainer, homeContainer) => {
  chatContainer.style.display = 'none'
  homeContainer.style.display = 'block'
}

const goToContactInfo = (chatContainer, contactInfoContainer) => {
  chatContainer.style.display = 'none'
  contactInfoContainer.style.display = 'grid'
}