

const profilePopup = document.querySelector('.popup_type_user');
const profileButton = document.querySelector('.profile__button');
const profileAddButton = document.querySelector('.profile__add-button');
const newPlacePopup = document.querySelector('.popup_type_place');
const newPlaceCloseButton = document.querySelector('.popup__button_type_place');
const profileCloseButton = document.querySelector('.popup__button_type_user');


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



/*const deleteCard = (evt) => {
  evt.target.closest('.card').remove()
}*/
//
class Card {
  constructor(data, templateSelector, handleCardClick) {
    this._image = data.image
    this._text = data.text
    this._templateSelector = templateSelector
    this._handleCardClick = handleCardClick
  }
  //возвращаем разметку карточки(для наполнения данными и размещения другие методы)
  _getTemplate() {
    const cardElement = document
    .querySelector('#places')
    .content
    .querySelector('.card')
    .cloneNode(true)
    return cardElement
  }
  //добавляем данные в разметку
  generateCard() {
    //разметка в приватном поле element
    this._element = this._getTemplate()
    //Добавим данные
    this._cardElementImage = this._element.querySelector('.card__img')
    this._cardElementTitle = this._element.querySelector('.card__description')
    this._likeButton = this._element.querySelector('.card__button');
    this._deleteButton = this._element.querySelector('.card__button-delete')

    this._cardElementImage.src = this._image
    this._cardElementImage.alt = this._image
    this._cardElementTitle.textContent = this._text
    
    this._setEventListeners();
    //вернем элемент наружу
    return this._element
  }
_clickLike() {
  this._likeButton.classList.toggle('card__button_active')
}

_deleteCard() {
  this._cardElement.remove();
  this._cardElement = null;
}


_setEventListeners() {
this._cardElementImage.addEventListener('click', () => {
  this._handleCardClick(this._name, this._link)
})
this._likeButton.addEventListener('click', () => this._clickLike())
this._deleteButton.addEventListener('click', () => this._deleteCard())
}

}
//

handleCardClick = (element) => {
  openPopup(imagePopup)
  const cardImage = cardsElement.querySelector('.card__img')
  cardImage.src = element.link;
  cardImage.alt = element.name;
  imageTitle.textContent = element.name
}

initialCards.forEach((item) => {
  const card = new Card(item, '#places', handleCardClick)
  const cardElement = card.generateCard()
  cardList.append(cardElement)
})


/*const createCard = (cardData) => {
  const card = new Card(cardData, '#places', handleCardClick);

  return card.generateCard();
};
initialCards.forEach((cardData) => {
  cardList.append(createCard(cardData));
});*/

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

imageCloseButton.addEventListener('click', () => {closePopup(imagePopup)})

const renderCard = (card) => {
  cardList.prepend(card);
};
/*const renderCard = (element, cardList) => {
  cardList.prepend(getItemElement(element));
}*/

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

// переберём весь исходный массив



/*initialCards.forEach(element => {
  renderCard(element, cardList);
})*/


