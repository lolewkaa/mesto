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
const newPlaceTemplate = document.querySelector('#places')//.content;
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

const deleteCard = (evt) => {
  evt.target.closest('.card').remove()
}

const getItemElement = (element) => {
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
}

imageCloseButton.addEventListener('click', () => {closePopup(imagePopup)})

const renderCard = (element, cardList) => {
  cardList.prepend(getItemElement(element));
}

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


initialCards.forEach(element => {
  renderCard(element, cardList);
})


