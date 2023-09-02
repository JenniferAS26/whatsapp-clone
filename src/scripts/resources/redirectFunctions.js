/** HTML elements */
const homeContainer = document.querySelector('.home-container')
const chatContainer = document.querySelector('.chats-container')
const menuChatContainerIcon = document.querySelector('.chat-menu-icon')
const contactInfoContainer = document.querySelector('.contact-info-container')

const goBack = (currentContainer, previousContainer) => {
  currentContainer.style.display = 'none'
  previousContainer.style.display = 'block'
}
