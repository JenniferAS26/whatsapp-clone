/** HTML elements */
const homeContainer = document.querySelector('.home-container')
const chatContainer = document.querySelector('.chats-container')
const menuChatContainerIcon = document.querySelector('.chat-menu-icon')

const goBack = (chatContainer, homeContainer) => {
  chatContainer.style.display = 'none'
  homeContainer.style.display = 'block'
}

