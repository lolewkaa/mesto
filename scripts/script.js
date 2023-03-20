import {Card} from './card.js'
import { objectValidation } from './utilts.js';
import {initialCards} from './utilts.js'
import { FormValidator } from './FormValidator.js';

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


  const validationProfile = new FormValidator(objectValidation, profilePopup)
  validationProfile.enableValidation()
  const validationPlace = new FormValidator(objectValidation, newPlacePopup)
  validationPlace.enableValidation()

function openPopup(popup) {
  popup.classList.add('popup_opened')
  document.addEventListener('keydown', closeByEsc)
}
function closePopup(popup) {
  popup.classList.remove('popup_opened')
  document.removeEventListener('keydown', closeByEsc)
}

function closeByEsc(evt) {
  if (evt.key === 'Escape') {
    const popupOpen = document.querySelector('.popup_opened')
    closePopup(popupOpen)
  }
}

popup.forEach((item) => {
  item.addEventListener('click', (evt) => {
    if (evt.target === evt.currentTarget) {
      closePopup(item);
    };
  });
});


//
profileButton.addEventListener('click', () => {
  openPopup(profilePopup)
  nameInput.value = author.textContent;
  jobInput.value = job.textContent;
 validationProfile.resetInputs();
 validationProfile.resetButton();
})
profileAddButton.addEventListener('click', () => {
  openPopup(newPlacePopup)
  validationPlace.resetInputs();
  validationPlace.resetButton();
})
newPlaceCloseButton.addEventListener('click', () => {closePopup(newPlacePopup)})
profileCloseButton.addEventListener('click', () => {closePopup(profilePopup)})

function handleProfileFormSubmit (evt) {
  evt.preventDefault(); 
  author.textContent = nameInput.value;
  job.textContent = jobInput.value;
  closePopup(profilePopup)
  
}

profileForm.addEventListener('submit', handleProfileFormSubmit);


//
const newPlaceTemplate = document.querySelector('#places')
const cardList = document.querySelector('.cards');
const cardNameInput = document.querySelector('.form__item_type_place');
const cardLinkInput = document.querySelector('.form__item_type_link');
const imagePopup = document.querySelector('.popup_type_image');
const imageCloseButton = document.querySelector('.popup__button_type_image')
const image = document.querySelector('.popup__image')
const imageTitle = document.querySelector('.popup__title')



const handleCardClick = (element) => {
  openPopup(imagePopup)
  image.src = element.link;
  image.alt = element.name;
  imageTitle.textContent = element.name
}

const createCard = (item) => {
  const card = new Card(item, '#places', handleCardClick)
  return card.generateCard()
}
initialCards.forEach((item) => {
  cardList.append(createCard(item))
})

const renderCard = (card) => {
  cardList.prepend(createCard(card));
};


newPlaceForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const element = {
    name: cardNameInput.value, 
    link: cardLinkInput.value
  };
  renderCard(element, cardList)
  evt.target.reset()
  closePopup(newPlacePopup)
})

imageCloseButton.addEventListener('click', () => {closePopup(imagePopup)})


