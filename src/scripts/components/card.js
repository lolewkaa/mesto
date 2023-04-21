export class Card {
  constructor({data, userId, templateSelector, handleCardClick, handleLikeClick, handleDeleteIconClick, handleDeleteLikeClick}) {
    this._link = data.link
    this._name = data.name
    this.cardData = data
    this._likeServer = data.likes
    this._idUserCard = data.owner._id
    this.idCard = data._id
    this._templateSelector = templateSelector
    this._handleCardClick = handleCardClick
    this._handleLikeClick = handleLikeClick
    this._handleDeleteIconClick = handleDeleteIconClick
    this._handleDeleteLikeClick = handleDeleteLikeClick
    this._userId = userId
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

    this.likeNumber = this._element.querySelector('.card__page-lakes')
    
    this.showLikes(this.cardData)


    // console.log(this._idUserCard)
    if (this._idUserCard !== this._userId) {
      this._deleteButton.remove();
    }

    this._setEventListeners();
    //вернем элемент наружу
    return this._element
  }

cardLike() {
  return this._likeServer.find((likedCard) => likedCard._id === this._userId)
}


showLikes(card){
  this._likeServer = card.likes
  if (this._likeServer.length === 0) {
    this.likeNumber.textContent = ''
  }
  else {
    this.likeNumber.textContent = this._likeServer.length
  }
  if (this.cardLike()) {
    this._likeButton.classList.add('card__button_active')
  }
  else {
    this._likeButton.classList.remove('card__button_active')
  }
}

// clickLike() {
//   if (this.cardLike()){
//   this._likeButton.classList.toggle('card__button_active')
//   }
// }

clickLike() {
  if (this.cardLike()){
  this._handleDeleteLikeClick(this.idCard)
  }
  else {
    this._handleLikeClick(this.idCard)
  }
}

deleteCard() {
  this._element.remove();
  this._element = null;
}


_setEventListeners() {
  this._cardElementImage.addEventListener('click', () =>
  this._handleCardClick(/*{
    link: this._link,
    name: this._name,
  }*/));
  
this._likeButton.addEventListener('click', () => this.clickLike())
this._deleteButton.addEventListener('click', () => this._handleDeleteIconClick(this, this.idCard))
}

}