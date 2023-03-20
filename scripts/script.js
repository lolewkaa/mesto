import {Card} from './card.js'
import { objectValidation } from './utilts.js';
import {initialCards} from './utilts.js'
import { FormValidator } from './validate.js';

const profilePopup = document.querySelector('.popup_type_user');
const profileButton = document.querySelector('.profile__button');
const profileAddButton = document.querySelector('.profile__add-button');
const newPlacePopup = document.querySelector('.popup_type_place');
const newPlaceCloseButton = document.querySelector('.popup__button_type_place');
const profileCloseButton = document.querySelector('.popup__button_type_user');

  const validationProfile = new FormValidator(objectValidation, profilePopup)
  validationProfile.enableValidation()
  const validationPlace = new FormValidator(objectValidation, newPlacePopup)
  validationPlace.enableValidation()

const resetInput = (config) => {
  const inputList = document.querySelectorAll(config.inputSelector);
  inputList.forEach((input) => {
    input.classList.remove(config.inputErrorClass);
    input.nextElementSibling.textContent = '';
  });
}

const resetButton = (config) => {
  const buttonSubmint = document.querySelectorAll(config.submitButtonSelector);
  buttonSubmint.forEach((button) => {
    button.classList.add(config.inactiveButtonClass);
    button.setAttribute("disabled", true);
  });
}

function openPopup(popup) {
  popup.classList.add('popup_opened')
  document.addEventListener('keydown', closeByEsc)
}
function closePopup(popup) {
  popup.classList.remove('popup_opened')
  document.removeEventListener('keydown', closeByEsc)
}

function closeByEsc(evt) {
  if (evt.keyCode === 27) {
    const popupOpen = document.querySelector('.popup_opened')
    closePopup(popupOpen)
  }
}
newPlacePopup.addEventListener("click", (evt) => {
  if (evt.currentTarget === evt.target) {
    closePopup(newPlacePopup)
  }
})
profilePopup.addEventListener("click", (evt) => {
  if (evt.currentTarget === evt.target) {
    closePopup(profilePopup)
  }
})


//
profileButton.addEventListener('click', () => {
  openPopup(profilePopup)
  nameInput.value = author.textContent;
  jobInput.value = job.textContent;
  resetInput(objectValidation);
  resetButton(objectValidation);
})
profileAddButton.addEventListener('click', () => {
  openPopup(newPlacePopup)
  resetInput(objectValidation);
  resetButton(objectValidation);
})
newPlaceCloseButton.addEventListener('click', () => {closePopup(newPlacePopup)})
profileCloseButton.addEventListener('click', () => {closePopup(profilePopup)})

const profileForm = document.querySelector('.form_type_profile');
const nameInput = document.querySelector('.form__item_type_name');
const jobInput = document.querySelector('.form__item_type_job');
const author = document.querySelector('.profile__user');
const job = document.querySelector('.profile__text');

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

imagePopup.addEventListener("click", (evt) => {
  if (evt.currentTarget === evt.target) {
    closePopup(imagePopup)
  }
})

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

const newPlaceForm = document.querySelector('.form_type_place');
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

/*const getItemElement = (element) => {
  const cardsElement = newPlaceTemplate.content.cloneNode(true);
  cardsElement.querySelector('.card__description').textContent = element.name;
  const cardImage = cardsElement.querySelector('.card__img')
  cardImage.src = element.link;
  cardImage.alt = element.name;
  const deleteButton = cardsElement.querySelector('.card__button-delete')
  deleteButton.addEventListener('click', deleteCard)
  const likeButton = cardsElement.querySelector('.card__button');
  const clickLike = () => {
    likeButton.classList.toggle('card__button_active')
  }
  likeButton.addEventListener('click', clickLike)
  cardImage.addEventListener('click', () => {openPopup(imagePopup)
  imageTitle.textContent = element.name
  image.src = element.link;
  image.alt = element.name;
})
  return cardsElement
}*/
/*const renderCard = (element, cardList) => {
  cardList.prepend(getItemElement(element));
}*/
// переберём весь исходный массив
/*initialCards.forEach(element => {
  renderCard(element, cardList);
})*/


