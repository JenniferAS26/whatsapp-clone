import { createData, saveImage } from "../services/api.js"; 
import { 
  singupProfilePicture,
  singupNameInput,
  singupNumberInput,
  singupPasswordInput,
  singupQuoteInput 
} from "../navigation.js";

const imagePreview = document.querySelector('.current-picture')
const imageReaderAPI = new FileReader()

const form = document.querySelector('.signin-container__signup-container--form')

form.addEventListener('submit', async event => {
  event.preventDefault();
  const file = singupProfilePicture.files[0]
  const imageUrl = await saveImage(file)

  const formInputValues = {
    name: singupNameInput.value,
    cellphone_number: singupNumberInput.value,
    password: singupPasswordInput.value,
    url_image: imageUrl,
    quote: singupQuoteInput.value,
    date: Date()
  }

  await createData('users', formInputValues)
})

// Update image immediately
imageReaderAPI.onloadend = () => {
  imagePreview.src = imageReaderAPI.result    
}

singupProfilePicture.onchange = event => loadImageWithoutUploadIt(event)

function loadImageWithoutUploadIt (event) {
  const chosenImage = event.target.files[0]
  imageReaderAPI.readAsDataURL(chosenImage)
}
