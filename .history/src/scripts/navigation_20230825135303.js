/** Containers */
const signinContainer = document.querySelector('.signin-container')
const welcomeContainerInsideSinginContainer = document.querySelector('.signin-container__welcome-container')
const authenticationContainerInsideSigninContainer = document.querySelector('.signin-container__auth-container')
const singupContainerInsideSigninContainer = document.querySelector('.signin-container__signup-container')
export const homeContainer = document.querySelector('.home-container')
const statusContainer = document.querySelector('.status-container')
const callsContainer = document.querySelector('.calls-container')
export const chatContainer = document.querySelector('.chats-container')
const takeAPictureContainer = document.querySelector('.take-a-picture-container')
const sendPictureContainer = document.querySelector('.send-picture-container')
export const contactInfoContainer = document.querySelector('.contact-info-container')
const modalEditContactInfo = document.querySelector('.edit-contact')

 
/** Other elements */
const singupRedirect = document.querySelector('.signup-redirect')
// const cardChat = document.querySelectorAll('.card')
const videoRecordCounter = document.querySelector('.video-counter')
// export const contactInfo = document.querySelector('.contact-info')
const menuChatContainerIcon = document.querySelector('.chat-menu-icon')
const backContactInfoIcon = document.querySelector('.arrow-back-icon')
const menuContactInfoIcon = document.querySelector('.contact-menu-icon')

/** Forms and Inputs */
const signinForm = document.querySelector('.signin-container__auth-container--form')
const signupForm = document.querySelector('.signin-container__signup-container--form')
export const singupProfilePicture = document.querySelector('.singup-input-image')
export const singupNameInput = document.querySelector('.singup-name-input')
export const singupNumberInput = document.querySelector('.singup-number-input')
export const singupPasswordInput = document.querySelector('.singup-password-input')
export const singupQuoteInput = document.querySelector('.singup-quote-textarea')

/** Buttons */
const agreeButton = document.querySelector('.agree-continue')
const backSignupContainerButton = document.querySelector('.signup-back')
const chatsHeaderButtons = document.querySelectorAll('.chats')
const statusHeaderButtons = document.querySelectorAll('.status')
const callsHeaderButtons = document.querySelectorAll('.calls')
const closePictureButtons = document.querySelectorAll('.close-picture')
const takePhotoButton = document.querySelector('.take-photo')
const takeVideoOptionButton = document.querySelector('.take-video-option')
const takePhotoOptionButton = document.querySelector('.take-foto-option')

/** Clickable icons  */
const arrowBackChatContainerIcon = document.querySelector('.arrow-back')
const cameraIcons = document.querySelectorAll('.camera-icon')
const menuHomeIcon = document.querySelector('.home-menu-icon')

/** Events */
agreeButton.addEventListener('click', () => {
  welcomeContainerInsideSinginContainer.style.display = 'none'
  authenticationContainerInsideSigninContainer.style.display = 'grid'
})

backSignupContainerButton.addEventListener('click', () => {
  singupContainerInsideSigninContainer.style.display = 'none'
  authenticationContainerInsideSigninContainer.style.display = 'grid'
})

singupRedirect.addEventListener('click', () => {
  authenticationContainerInsideSigninContainer.style.display = 'none'
  singupContainerInsideSigninContainer.style.display = 'grid'
})

signinForm.addEventListener('submit', event => {
  event.preventDefault()
  signinContainer.style.display = 'none'
  homeContainer.style.display = 'block'
})


chatsHeaderButtons.forEach(chatsHeaderButton => {
  chatsHeaderButton.addEventListener('click', () => {
    homeContainer.style.display = 'block'
    statusContainer.style.display = 'none'
    callsContainer.style.display = 'none'
  })
})

statusHeaderButtons.forEach(statusHeaderButton => {
  statusHeaderButton.addEventListener('click', () => {
    homeContainer.style.display = 'none'
    statusContainer.style.display = 'block'
    callsContainer.style.display = 'none'
  })
})

callsHeaderButtons.forEach(callsHeaderButton => {
  callsHeaderButton.addEventListener('click', () => {
    homeContainer.style.display = 'none'
    statusContainer.style.display = 'none'
    callsContainer.style.display = 'block'
  })
})

// chatCard.forEach...
// arrowBackIcon...
// arrowBackChatContainerIcons.forEach(arrowBackChatContainerIcon => {
// arrowBackChatContainerIcon.onclick = () => {
//   chatContainer.style.display = 'none'
//   homeContainer.style.display = 'block'
//   console.log('holi perro');
// }
// })

// contactInfos.forEach(contactInfo => {
// contactInfo.addEventListener('click', () => {
//   chatContainer.style.display = 'none'
//   contactInfoContainer.style.display = 'grid'
// })
// })

// menuChatContainerIcons.forEach(menuChatContainerIcon => {
// menuChatContainerIcon.addEventListener('click', () => {
//   console.log('click para abrir el modal :)');
// })
// })

cameraIcons.forEach(cameraIcon => {
  cameraIcon.addEventListener('click', () => {
    chatContainer.style.display = 'none'
    homeContainer.style.display = 'none'
    statusContainer.style.display = 'none'
    callsContainer.style.display = 'none'
    takeAPictureContainer.style.display = 'block'
  })
})

closePictureButtons.forEach(closePictureButton => {
  closePictureButton.addEventListener('click', () => {
    takeAPictureContainer.style.display = 'none'
    sendPictureContainer.style.display = 'none'
    chatContainer.style.display = 'block'
  })
})

takeVideoOptionButton.addEventListener('click', () => {
  videoRecordCounter.style.display = 'flex'
  takeVideoOptionButton.style.backgroundColor = '#232D36' // add toggle
})

takePhotoOptionButton.addEventListener('click', () => {
  videoRecordCounter.style.display = 'none'
  takePhotoOptionButton.style.backgroundColor = '#232D36' // add toggle
})

takePhotoButton.addEventListener('click', () => {
  takeAPictureContainer.style.display = 'none'
  sendPictureContainer.style.display = 'block'
})

// contactInfo...

// backContactInfoIcon.addEventListener('click', () => {
//   contactInfoContainer.style.display = 'none'
//   chatContainer.style.display = 'block'
// })

// menuContactInfoIcon.addEventListener('click', () => {
//   console.log('click para abrir el modal :)');
// })

// menuChatContainerIcon

menuHomeIcon.addEventListener('click', () => {
  modalEdit-contact.style.display = 'block'
})