/** Containers */
const signinContainer = document.querySelector('.signin-container')
const welcomeContainerInsideSinginContainer = document.querySelector('.signin-container__welcome-container')
const authenticationContainerInsideSigninContainer = document.querySelector('.signin-container__auth-container')
const homeContainer = document.querySelector('.home-container')
const statusContainer = document.querySelector('.status-container')
const callsContainer = document.querySelector('.calls-container')

/** Forms */
const signinForm = document.querySelector('.signin-container__auth-container--form')

/** Buttons */
const agreeButton = document.querySelector('.agree-continue')
const chatsHeaderButtons = document.querySelectorAll('.chats')
const statusHeaderButtons = document.querySelectorAll('.status')
const callsHeaderButtons = document.querySelectorAll('.calls')


/** Events */
agreeButton.addEventListener('click', () => {
  welcomeContainerInsideSinginContainer.style.display = 'none'
  authenticationContainerInsideSigninContainer.style.display = 'grid'
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
