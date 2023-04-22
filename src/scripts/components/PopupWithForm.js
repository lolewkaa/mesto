import  Popup  from "./Popup.js";

export class PopupWithForm extends Popup {
    constructor( popupElement, { handleFormSubmit }) {
        super(popupElement)
        this._selector = popupElement 
      this._handleFormSubmit = handleFormSubmit
      this._formElement = this._selector.querySelector('.form')
      this._inputList =  this._formElement.querySelectorAll('.form__item')
      this._buttonSave = this._formElement.querySelector('.form__button-save')
      this._buttonText = this._buttonSave.textContent
    }
  
    _getInputValues() {
      // создаём пустой объект
      this._formValues = {};
      // добавляем в этот объект значения всех полей
      this._inputList.forEach((input) => {
        this._formValues[input.name] = input.value;
      });
    
      // возвращаем объект значений
      return this._formValues;
    }
    showInputValues(element){
      this._inputList.forEach((input) => {
        input.value = element[input.name]
      })
    }

    setEventListeners(){
      super.setEventListeners()
      this._formElement.addEventListener('submit',(evt) => {
        evt.preventDefault();
        this._handleFormSubmit(this._getInputValues())
      })
    }

    renderLoading(loading) {
      if(loading) {
      this._buttonSave.textContent = 'Сохранение...'
      }
      else{
        this._buttonSave.textContent = this._buttonText
      }
    }
  
    close() {
      super.close()
      this._formElement.reset()
    }
   
  }