const popups = document.querySelector('.popup');
const button = document.querySelector('.profile__button');
const buttonPlus = document.querySelector('.profile__add-button');
const popupsPlace = document.querySelector('.popup_type_place');
const closeiconPlace = document.querySelector('.form__button_type_place');
const closeicon = document.querySelector('.form__button');

function showPopupPlace() {
  popupsPlace.classList.add('popup_opened');
}
buttonPlus.addEventListener('click', showPopupPlace);

function removePopupPlace() {
  popupsPlace.classList.remove('popup_opened');
}
closeiconPlace.addEventListener('click', removePopupPlace);

function showClick() {
  popups.classList.add('popup_opened');
  nameInput.value = author.textContent;
  jobInput.value = job.textContent;
}
button.addEventListener('click', showClick);

function removeClick() {
  popups.classList.remove('popup_opened');
}

closeicon.addEventListener('click', removeClick);

let formElement = document.querySelector('.form');
let nameInput = document.querySelector('.form__item_type_name');
let jobInput = document.querySelector('.form__item_type_job');
let author = document.querySelector('.profile__user');
let job = document.querySelector('.profile__text');

function handleFormSubmit (evt) {
  evt.preventDefault(); 
  author.textContent = nameInput.value;
  job.textContent = jobInput.value;
  removeClick();
  
}

formElement.addEventListener('submit', handleFormSubmit);


const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];


//
const placesTemplate = document.querySelector('#places')//.content;
const cardList = document.querySelector('.cards');
const cardNameInput = document.querySelector('.form__item_type_place');
const cardLinkInput = document.querySelector('.form__item_type_link');
const popupsImage = document.querySelector('.popup_type_image');
const closeIconImage = document.querySelector('.popup__button')
const image = document.querySelector('.popup__image')
const imageTitle = document.querySelector('.popup__title')

function removePopup() {
  popupsImage.classList.remove('popup_opened');
}

const deleteClick = (evt) => {
  evt.target.closest('.card').remove()
}

const getItemElement = (element) => {
  const cardsElement = placesTemplate.content.cloneNode(true);
  cardsElement.querySelector('.card__description').textContent = element.name;
  cardsElement.querySelector('.card__img').src = element.link;
  const deleteButton = cardsElement.querySelector('.card__button-delete')
  deleteButton.addEventListener('click', deleteClick)
  const likebutton = cardsElement.querySelector('.card__button');
  const clickLike = () => {
    likebutton.classList.toggle('card__button_active')
  }
  likebutton.addEventListener('click', clickLike)
  const cardImage = cardsElement.querySelector('.card__img')
  function showPopup() {
    imageTitle.textContent = element.name
    image.src = element.link;
    popupsImage.classList.add('popup_opened');
  }
  cardImage.addEventListener('click', showPopup)
  closeIconImage.addEventListener('click', removePopup)
  return cardsElement
}


const renderCard = (element, cardList) => {
  cardList.prepend(getItemElement(element));
}

const formElementPlace = document.querySelector('.form_type_place');
formElementPlace.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const element = {
    name: cardNameInput.value, 
    link: cardLinkInput.value
  };
  renderCard(element, cardList)
  removePopupPlace()
})


initialCards.forEach(element => {
  renderCard(element, cardList);
})