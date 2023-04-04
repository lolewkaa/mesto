import './index.css'

import {Card} from '../scripts/components/Card.js'

import { objectValidation } from '../scripts/utilts/utilts.js';

import {initialCards} from '../scripts/utilts/utilts.js'

import { FormValidator } from '../scripts/components/FormValidator.js';

import { Section } from '../scripts/components/Section.js';

import { PopupWithImage } from '../scripts/components/PopupWithImage.js';

import { PopupWithForm } from '../scripts/components/popupWithForm.js';

import { UserInfo } from '../scripts/components/UserInfo.js';

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
  userName: '.profile__user',
  userJob: '.profile__text'
})
//создаем карточку
const createCard = (item) => {
  const card = new Card(item, '#places', () => {
    popupWithImage.open(item)
  })
  return card.generateCard()
}

//редактирует данные пользователя на странице
const formProfile = new PopupWithForm(profilePopup, {
  handleFormSubmit: (element) => {
    userInfo.setUserInfo(element)
  }
})

//добавляет новую карточку
const popupAddCard = new PopupWithForm(newPlacePopup, {
  handleFormSubmit: ({place, link}) => {
    cardContainer.addItem(createCard({
      name: place,
      link: link,
      alt: place
    }))
  }
})

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
const cardContainer = new Section({
  renderer: (card) => {
    cardContainer.addItem(createCard(card));
  },
}, '.cards'
  )
  //добавить карточки
  cardContainer.renderItems(initialCards)

popupWithImage.setEventListeners()
formProfile.setEventListeners()
popupAddCard.setEventListeners()



