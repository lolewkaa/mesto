import Popup from "./Popup.js"
 export class PopupWithImage extends Popup {
    constructor(popupElement){
      super(popupElement)
    this._cardImage = this._popupElement.querySelector('.popup__image')
    this._cardTitle = this._popupElement.querySelector('.popup__title')
    }
    open(element){
      super.open()
      this._cardImage.src = element.link;
      this._cardImage.alt = element.name;
      this._cardTitle.textContent = element.name
    }
  }
