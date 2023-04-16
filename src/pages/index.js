import './index.css'

import {Card} from '../scripts/components/Card.js'

import { objectValidation } from '../scripts/utilts/utilts.js';

//import {initialCards} from '../scripts/utilts/utilts.js'

import { FormValidator } from '../scripts/components/FormValidator.js';

import { Section } from '../scripts/components/Section.js';

import { PopupWithImage } from '../scripts/components/PopupWithImage.js';

import { PopupWithForm } from '../scripts/components/popupWithForm.js';

import { UserInfo } from '../scripts/components/UserInfo.js';

import { Api } from '../scripts/components/Api.js';

import { PopupWithSubmit } from '../scripts/components/PopupWithSubmit.js';

const profilePopup = document.querySelector('.popup_type_user');
const profileButton = document.querySelector('.profile__button');
const profileAddButton = document.querySelector('.profile__add-button');
const newPlacePopup = document.querySelector('.popup_type_place');
const newPlaceCloseButton = document.querySelector('.popup__button_type_place');
const profileCloseButton = document.querySelector('.popup__button_type_user');
const profileForm = document.querySelector('.form_type_profile');
const nameInput = document.querySelector('.form__item_type_name');
const jobInput = document.querySelector('.form__item_type_job');
const author = document.querySelector('.profile__user');
const job = document.querySelector('.profile__text');
const popup = document.querySelectorAll('.popup');
const newPlaceForm = document.querySelector('.form_type_place');
const imagePopup = document.querySelector('.popup_type_image');
const deletePopup = document.querySelector('.popup_type_delete')
const deleteButton = document.querySelector('.card__button-delete')

  const validationProfile = new FormValidator(objectValidation, profilePopup)
  validationProfile.enableValidation()
  const validationPlace = new FormValidator(objectValidation, newPlacePopup)
  validationPlace.enableValidation()

  const popupWithSubmit = new PopupWithSubmit(deletePopup)

//const popupProfile = new Popup(profilePopup)
//const popupPlace = new Popup(newPlacePopup)
const popupWithImage = new PopupWithImage(imagePopup)



  // deleteButton.addEventListener('click', () => {
  //   popupWithSubmit.open()
    
  // })
//popupProfile.setEventListeners()
//popupPlace.setEventListeners()

//форма профиля с данными пользователя
const userInfo = new UserInfo({
  userName: '.profile__user',
  userJob: '.profile__text'
})
//создаем карточку
// const createCard = (item) => {
//   const card = new Card(item, '#places', () => {
//     popupWithImage.open(item)
//   })
//   return card.generateCard()
// }


const createCard = (data) => {
    const card = new Card({
      data,
      handleCardClick: () =>{
        popupWithImage.open(data)
      },
      handleLikeClick: (card) =>{

      },
      handleDeleteIconClick: (card) =>{
        
      },
    },'#places')
    return card.generateCard()
  }


  const cardContainer = new Section({
    renderer: (card) => {
      cardContainer.addItem(createCard(card));
    },
  }, '.cards'
    )


//редактирует данные пользователя на странице
const formProfile = new PopupWithForm(profilePopup, {
  handleFormSubmit: (data) => {
    api.changeUserInfo(data)
    .then((res) => {
      userInfo.setUserInfo(res)
    })
    .catch((error) => 
  console.log(`Ошибка: ${error}`))
  }
})





  // function renderCard ({place, link}) {
  //       cardContainer.addItem(createCard({
  //         name: place,
  //         link: link,
  //         alt: place
  //       }))
  //     }
//добавляет новую карточку
// const popupAddCard = new PopupWithForm(newPlacePopup, {
//   handleFormSubmit: ({place, link}) => {
//     cardContainer.addItem(createCard({
//       name: place,
//       link: link,
//       alt: place
//     }))
//   }
// })
const popupAddCard = new PopupWithForm(newPlacePopup, {
  handleFormSubmit: (data) => {
    api.postNewCard({
            name: data.place,
            link: data.link,
          })
    .then((res) =>{
     
      cardContainer.addItem(createCard(res))
    
  })
}})

//открыть попап имени пользователя
profileButton.addEventListener('click', () => {
  formProfile.open()
  //openPopup(profilePopup)
  //nameInput.value = author.textContent;
  //jobInput.value = job.textContent;

  //возвращаем объект с данными пользователя
  formProfile.showInputValues(userInfo.getUserInfo())
 validationProfile.resetInputs();
 validationProfile.resetButton();
})

//открыть попап добавления карточки
profileAddButton.addEventListener('click', () => {
  popupAddCard.open()
  //openPopup(newPlacePopup)
  validationPlace.resetInputs();
  validationPlace.resetButton();
})

const newPlaceTemplate = document.querySelector('#places')
const cardList = document.querySelector('.cards');
const cardNameInput = document.querySelector('.form__item_type_place');
const cardLinkInput = document.querySelector('.form__item_type_link');
const imageCloseButton = document.querySelector('.popup__button_type_image')
const image = document.querySelector('.popup__image')
const imageTitle = document.querySelector('.popup__title')

//создать секцию
// const cardContainer = new Section({
//   renderer: (card) => {
//     cardContainer.addItem(createCard(card));
//   },
// }, '.cards'
//   )
//   //добавить карточки
//   cardContainer.renderItems(initialCards)
  

  ////
  const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-64',
    headers: {
      authorization:'51cc9dc9-38a6-4ea6-94cb-92255188bdc1',
      'Content-Type': 'application/json'
    }
  })
 //достаем данные о пользователе и устанавливаем их в нужных полях
  api.getUserInfo().then((res) => {
    userInfo.setUserInfo(res)
  }).catch((error) => 
  console.log(`Ошибка: ${error}`)
  )
  

  //подгружаем начальные карточки с сервера
  api.getInitialCards().then((result) => {
      //добавить карточки
      cardContainer.renderItems(result)
  })
  .catch((err) => {
       console.log(err); // выведем ошибку в консоль
     });

 
  
 //добавить новую карточку
  // api.postNewCard().then((res) =>{
    
  //   console.log(res)
   
  
  // })
  

popupWithImage.setEventListeners()
formProfile.setEventListeners()
popupAddCard.setEventListeners()



