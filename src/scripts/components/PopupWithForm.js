import  Popup  from "./popup.js";

export class PopupWithForm extends Popup {
    constructor( popupSelector, { handleFormSubmit }) {
        super(popupSelector)
        this._selector = popupSelector 
      this._handleFormSubmit = handleFormSubmit
      this._formElement = this._selector.querySelector('.form')
      this._inputList =  this._formElement.querySelectorAll('.form__item')

      
    }
  
    _getInputValues() {
      // создаём пустой объект
      this._formValues = {};
      // добавляем в этот объект значения всех полей
      this._inputList.forEach(input => {
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
        this.close()
      })
    }
  
    close() {
      super.close()
      this._formElement.reset()
    }
   
  }