export class Card {
  constructor(data, templateSelector, handleCardClick, handleLikeClick, handleDeleteIconClick) {
    this._link = data.link
    this._name = data.name
    this._templateSelector = templateSelector
    this._handleCardClick = handleCardClick
    this._handleLikeClick = handleLikeClick
    this._handleDeleteIconClick = handleDeleteIconClick
  }
  //возвращаем разметку карточки(для наполнения данными и размещения другие методы)
  _getTemplate() {
    const cardElement = document
    .querySelector(this._templateSelector)
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

    this._cardElementImage.src = this._link
    this._cardElementImage.alt = this._name
    this._cardElementTitle.textContent = this._name
    
    this._setEventListeners();
    //вернем элемент наружу
    return this._element
  }
_clickLike() {
  this._likeButton.classList.toggle('card__button_active')
}

_deleteCard() {
  this._element.remove();
  this._element = null;
}


_setEventListeners() {
  this._cardElementImage.addEventListener('click', () =>
  this._handleCardClick({
    link: this._link,
    name: this._name,
  }));
  
this._likeButton.addEventListener('click', () => this._clickLike())
this._deleteButton.addEventListener('click', () => this._deleteCard())
}

}