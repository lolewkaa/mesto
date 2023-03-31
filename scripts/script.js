import {Card} from './card.js'


import { objectValidation } from './utilts.js';

import {initialCards} from './utilts.js'

import { FormValidator } from './FormValidator.js';

//import Popup from './popup.js'

import { Section } from './Section.js';

import { PopupWithImage } from './PopupWithImage.js';

import { PopupWithForm } from './popupWithForm.js';

import { UserInfo } from './UserInfo.js';

//import '../pages/index.css'

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

  const validationProfile = new FormValidator(objectValidation, profilePopup)
  validationProfile.enableValidation()
  const validationPlace = new FormValidator(objectValidation, newPlacePopup)
  validationPlace.enableValidation()

//const popupProfile = new Popup(profilePopup)
//const popupPlace = new Popup(newPlacePopup)
const popupWithImage = new PopupWithImage(imagePopup)

//popupProfile.setEventListeners()
//popupPlace.setEventListeners()

//форма профиля с данными пользователя
const userInfo = new UserInfo({
  selectorAuthor: '.profile__user',
  selectorJob: '.profile__text'
})
//создаем карточку
const createCard = (item) => {
  const card = new Card(item, '#places', () => {
    popupWithImage.open(item)
  })
  return card.generateCard()
}
//создаем попап добавления карточки
const popupAddCard = new PopupWithForm('.popup_type_place', {
  handleFormSubmit: ({link,title}) => {
    cardList.addItem(createCard({
      name: title,
      link: link,
      alt: title,
    }))
  }
})



//создаем попап имени пользователя
const formProfile = new PopupWithForm('.form_type_profile', {
  handleFormSubmit: (element) => {
    userInfo.setUserInfo(element)
  }
})
//открыть попап имени пользователя
profileButton.addEventListener('click', () => {
  popupProfile.open()
  //openPopup(profilePopup)
  //nameInput.value = author.textContent;
  //jobInput.value = job.textContent;

  //возвращаем объект с данными пользователя
  getUserInfo()
 validationProfile.resetInputs();
 validationProfile.resetButton();
})
//открыть попап добавления карточки
profileAddButton.addEventListener('click', () => {
  popupPlace.open()
  //openPopup(newPlacePopup)
  validationPlace.resetInputs();
  validationPlace.resetButton();
})
//отправить форму
function handleProfileFormSubmit (evt) {
  evt.preventDefault(); 
  //author.textContent = nameInput.value;
  //job.textContent = jobInput.value;
  closePopup(profilePopup)
  
}

profileForm.addEventListener('submit', handleProfileFormSubmit);


//
const newPlaceTemplate = document.querySelector('#places')
const cardList = document.querySelector('.cards');
const cardNameInput = document.querySelector('.form__item_type_place');
const cardLinkInput = document.querySelector('.form__item_type_link');
const imageCloseButton = document.querySelector('.popup__button_type_image')
const image = document.querySelector('.popup__image')
const imageTitle = document.querySelector('.popup__title')

//создать секцию
const cardContainer = new Section({
  renderer: (card) => {
    cardContainer.addItem(createCard(card));
  
  },
}, '.cards'
  )
  cardContainer.renderItems(initialCards)

/*newPlaceForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const element = {
    name: cardNameInput.value, 
    link: cardLinkInput.value
  };
  //renderCard(element, cardList)
  //cardContainer.addItem(createCard(element));
  evt.target.reset()
  popupPlace.close()
 
})*/

popupWithImage.setEventListeners()
formProfile.setEventListeners()
popupAddCard.setEventListeners()

//imageCloseButton.addEventListener('click', () => {closePopup(imagePopup)})


/*function openPopup(popup) {
  popup.classList.add('popup_opened')
  document.addEventListener('keydown', closeByEsc)
}*/
/*function closePopup(popup) {
  popup.classList.remove('popup_opened')
  document.removeEventListener('keydown', closeByEsc)
}*/

/*function closeByEsc(evt) {
  if (evt.key === 'Escape') {
    const popupOpen = document.querySelector('.popup_opened')
    closePopup(popupOpen)
  }
}*/

/*popup.forEach((item) => {
  item.addEventListener('mousedown', (evt) => {
    if (evt.target === evt.currentTarget) {
      closePopup(item);
    };
  });
});*/

/*initialCards.forEach((item) => {
  cardList.append(createCard(item))
})*/

/*const renderCard = (card) => {
  cardList.prepend(createCard(card));
};*/
//newPlaceCloseButton.addEventListener('click', () => {popupPlace.close()})
//profileCloseButton.addEventListener('click', () => {popupProfile.close()})


