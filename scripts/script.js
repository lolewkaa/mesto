let popups = document.querySelector('.popup');

let button = document.querySelector('.profile__button');



function showClick() {
  popups.classList.add('popup_opened');
  nameInput.value = author.textContent;
  jobInput.value = job.textContent;
}

button.addEventListener('click', showClick);

function removeClick() {
  popups.classList.remove('popup_opened');
}

let closeicon = document.querySelector('.form__button');
closeicon.addEventListener('click', removeClick);


/*let likebutton = document.querySelector('section.cards div.card .card__button');

likebutton.classList.remove('card__button_active');

likebutton.addEventListener('click', function (){
likebutton.classList.toggle('card__button_active');
})*/

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