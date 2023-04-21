import  Popup  from "./Popup.js";

export class PopupWithSubmit extends Popup {
    constructor( popupElement, {handleFormSubmit}) {
        super(popupElement)
        this._selector = popupElement 
        this._handleFormSubmit = handleFormSubmit
        this._buttonSave = this._popupElement.querySelector('.form__button-save')
        this._buttonText = this._buttonSave.textContent
    }
    open(cardElement, idCard) {
        super.open();
        this.id = idCard;
        this.card = cardElement;
      }

      renderLoading(loading) {
        if(loading) {
        this._buttonSave.textContent = 'Сохранение...'
        }
        else{
          this._buttonSave.textContent = this._buttonText
        }
      }

    setEventListeners(){
        super.setEventListeners();
        
        this._buttonSave.addEventListener('click', () => {
            this._handleFormSubmit(this.id, this.card)
        })
    }

    
}