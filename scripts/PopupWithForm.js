import  Popup  from "./popup.js";

export class PopupWithForm extends Popup {
    constructor( { handleFormSubmit }, popupSelector, form) {
        super(popupSelector)
      this._handleFormSubmit = handleFormSubmit
      //this._buttonSubmit = this._popupSelector.querySelector('.form__button-save ')
      this._form = form
      this._inputList =  Array.from(this._form.querySelectorAll('.form__item'));
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
    
    setEventListeners(){
      super.setEventListeners()
      this._form.addEventListener('submit',(evt) => {
        evt.preventDefault();
        this._handleFormSubmit(this._getInputValues())
      })
    }
  
    close() {
      super.close()
      this._form.reset()
    }
   
  }