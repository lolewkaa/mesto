let popups = document.querySelector('.popup');
popups.classList.remove('popup_opened');


let button = document.querySelector('.profile__button');
button.addEventListener('click', function (){
popups.classList.add('popup_opened');
})

let closeicon = document.querySelector('.form__button');
closeicon.addEventListener('click', function (){
  popups.classList.remove('popup_opened');
})


/*let likebutton = document.querySelector('section.cards div.card .card__button');

likebutton.classList.remove('card__button_active');

likebutton.addEventListener('click', function (){
likebutton.classList.toggle('card__button_active');
})*/

let formElement = document.querySelector('.form');

let nameInput = document.querySelector('.form__user');
let jobInput = document.querySelector('.form__item');

let author = document.querySelector('.profile__user');
let job = document.querySelector('.profile__text');

let saveicon = document.querySelector('.form__button-save');

function handleFormSubmit (evt) {
  evt.preventDefault(); 
  author.textContent = nameInput.value;
  job.textContent = jobInput.value;
  saveicon.addEventListener('click', function (){
    popups.classList.remove('popup_opened');
  })
}

formElement.addEventListener('submit', handleFormSubmit);