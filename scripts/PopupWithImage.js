import Popup from "./popup.js"
 export class PopupWithImage extends Popup {
    constructor(popupSelector){
      super(popupSelector)
    this._cardImage = this._popupSelector.querySelector('.popup__image')
    this._cardTitle = this._popupSelector.querySelector('.popup__title')
    }
    open(element){
      super.open()
      this._cardImage.src = element.link;
      this._cardImage.alt = element.name;
      this._cardTitle.textContent = element.name
    }
  }
