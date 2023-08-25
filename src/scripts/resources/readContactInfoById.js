import { getUserById } from "../accounts/getUserById.js"
import { contactInfoContainer } from "../navigation.js"

// const createInfoContactTemplate = async (id) => {
//   const user = await getUserById(id)
//   console.log(user);
//   contactInfoContainer.innerHTML = `
//     <div class="contact-info-container__top">
//       <img class="arrow-back-icon" src="./src/assets/icons/back.png" alt="back arrow icon">
//       <div class="contact-info-container__top--info contact">
//         <img class="contact__photo" src="${user.url_image}" alt="profile picture">
//         <h3 class="contact__name">${user.name}</h3>
//         <span class="contact__number">${user.cellphone_number}</span>
//         <div class="contact__actions">
//           <div class="contact__actions--options">
//             <button>
//               <i class="fa-solid fa-phone"></i>
//             </button>
//             <span>Audio</span>
//           </div>
//           <div class="contact__actions--options">
//             <button>
//               <i class="fa-solid fa-video"></i>
//             </button>
//             <span>Video</span>
//           </div>
//           <div class="contact__actions--options">
//             <button>
//               <i class="fa-solid fa-magnifying-glass"></i>
//             </button>
//             <span>Search</span>
//           </div>
//         </div>
//       </div>
//       <img class="contact-menu-icon" src="./src/assets/icons/menu-vertical.png" alt="menu icon">
//     </div>
//     <div class="contact-info-container__media-links-docs">
//       <div class="contact-info-container__media-links-docs--top">
//         <p>Media, links, and docs</p>
//         <div>
//           <span>8.215</span>
//           <button>
//             <i class="fa-solid fa-chevron-right"></i>
//           </button>
//         </div>
//       </div>
//       <div class="contact-info-container__media-links-docs--carousel">
//         <img src="./src/assets/images/image1.jpg" alt="carousel images">
//         <img src="./src/assets/images/image2.jpg" alt="carousel images">
//         <img src="./src/assets/images/image3.jpg" alt="carousel images">
//         <img src="./src/assets/images/image4.jpg" alt="carousel images">
//       </div>
//     </div>
//     <div class="contact-info-container__notifications">
//       <div class="contact-info-container__notifications--items">
//         <i class="fa-solid fa-bell"></i>
//         <span>Mute notifications</span>
//       </div>
//       <div class="contact-info-container__notifications--items">
//         <i class="fa-solid fa-fire"></i>
//         <span>Custom notifications</span>
//       </div>
//       <div class="contact-info-container__notifications--items">
//         <i class="fa-regular fa-image"></i>
//         <span>Media visibility</span>
//       </div>
//       <div class="contact-info-container__notifications--items">
//         <i class="fa-solid fa-star"></i>
//         <span>Starred messages</span>
//       </div>
//     </div>
//     <div class="contact-info-container__encryption">
//       <div class="contact-info-container__encryption--items">
//         <button class="delete-button">
//           <i class="fa-solid fa-trash"></i>
//         </button>
//         <div class="description-wrapper">
//           <p>Delete</p>
//         </div>
//       </div>
//       <div class="contact-info-container__encryption--items">
//         <i class="fa-solid fa-clock-rotate-left"></i>
//         <div class="description-wrapper">
//           <p>Disappearing messages</p>
//           <span>Off</span>
//         </div>
//       </div>
//       <div class="contact-info-container__encryption--items">
//         <i class="fa-solid fa-lock-open"></i>
//         <div class="description-wrapper">
//           <p>Chat lock</p>
//         </div>
//       </div>
//     </div>
//   `
// }

// await createInfoContactTemplate();

// const contactInfos = document.querySelectorAll('.contact-info')


// contactInfos.forEach(contactInfo => {
//   contactInfo.addEventListener('click', () => {
//     contactInfoContainer.style.display = 'grid'
//     createInfoContactTemplate(contactInfoContainer)
//     // chatContainer.style.display = 'none'
//     console.log('click on contact info');
//   })
// })
