/** Containers */
const signinContainer = document.querySelector('.signin-container')
const welcomeContainerInsideSinginContainer = document.querySelector('.signin-container__welcome-container')
const authenticationContainerInsideSigninContainer = document.querySelector('.signin-container__auth-container')

/** Forms */
const signinForm = document.querySelector('.signin-container__auth-container--form')

/** Buttons */
const agreeButton = document.querySelector('.agree-continue')


/** Events */
agreeButton.addEventListener('click', () => {
  welcomeContainerInsideSinginContainer.style.display = 'none'
  authenticationContainerInsideSigninContainer.style.display = 'grid'
})

signinForm.addEventListener('submit', event => {
  event.preventDefault()
  signinContainer.style.display = 'none'
})