export class FormValidator {
  constructor(data, form){
    this._formSelector = data.formSelector;
    this._inputSelector = data.inputSelector;
    this._submitButtonSelector = data.submitButtonSelector;
    this._inactiveButtonClass = data.inactiveButtonClass;
    this._inputErrorClass = data.inputErrorClass;
    this._errorClass = data.errorClass;
    this._form = form;
    }
    enableValidation() {
      this._setEventListeners()
    }
    _showInputError = (inputElement, errorMessage) => {
      this._errorElement = this._form.querySelector(`.${inputElement.id}-error`);
      inputElement.classList.add(this._inputErrorClass);
      this._errorElement.textContent = errorMessage;
      this._errorElement.classList.add(this._errorClass);
    };

    _hideInputError = (inputElement) => {
      this._errorElement = this._form.querySelector(`.${inputElement.id}-error`);
      inputElement.classList.remove(this._inputErrorClass);
      this._errorElement.classList.remove(this._errorClass);
      this._errorElement.textContent = '';
    };
      //проверяет валидность поля
    _isValid = (inputElement) => {
      if (!inputElement.validity.valid) {
        this._showInputError(inputElement, inputElement.validationMessage);
      } else {
        this._hideInputError(inputElement);
      }
    }
     //отключает и включает кнопку 
    _toggleButtonState () {
      this._inputList = this._form.querySelectorAll(this._inputSelector)
      this._submitButton = this._form.querySelector(this._submitButtonSelector);
      if (this._hasInvalidInput(this._inputList)) {
        this._submitButton.classList.add(this._inactiveButtonClass)
        this._submitButton.setAttribute("disabled", true);
      } 
      else {
        this._submitButton.classList.remove(this._inactiveButtonClass)
        this._submitButton.removeAttribute("disabled");
      }
    }
    // добавит обработчики сразу всем полям формы 
  _setEventListeners () {
    this._toggleButtonState()
    this._inputList = this._form.querySelectorAll(this._inputSelector)   
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._isValid(inputElement)
        this._toggleButtonState()
      })
    })
  }
  //проверяет наличие невалидного поля
  _hasInvalidInput() {
    this._inputList = Array.from(this._form.querySelectorAll(this._inputSelector))
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid
    })
  }

  }




  /*const showInputError = (formElement, inputElement, errorMessage, inputErrorClass, errorClass) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(errorClass);
  };
  const hideInputError = (formElement, inputElement, inputErrorClass, errorClass) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(inputErrorClass);
    errorElement.classList.remove(errorClass);
    errorElement.textContent = '';
  };*/
  
  //проверяет валидность поля
  /*const isValid = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      hideInputError(formElement, inputElement);
    }
  }*/
  // добавит обработчики сразу всем полям формы
  /*const setEventListeners = (formElement, 
    {inputSelector, submitButtonSelector, inactiveButtonClass, ...rest}) => {
    const inputList = Array.from(formElement.querySelectorAll(inputSelector))
    const buttonElement = formElement.querySelector(submitButtonSelector)
    toggleButtonState(inputList, buttonElement, inactiveButtonClass)
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        isValid(formElement, inputElement)
        toggleButtonState(inputList, buttonElement, inactiveButtonClass)
      })
    })
  }*/
  
  /*const objectValidation = {
    formSelector: '.form',
    submitButtonSelector: '.form__submit',
    inactiveButtonClass: 'form__submit_inactive',
    inputSelector: '.form__item',
    inputErrorClass: 'form__item_type_error',
  }*/

  //найдёт на странице и обработает все формы
  /*const enableValidation = ({formSelector, ...rest}) => {
    const formList = Array.from(document.querySelectorAll(formSelector))
  
    formList.forEach((formElement) => {
      setEventListeners(formElement, rest)
    })
    objectValidation
  }*/
  //проверяет наличие невалидного поля
  /*function hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid
    })
  }*/

  
 //отключает и включает кнопку
  /*function toggleButtonState (inputList, buttonElement, inactiveButtonClass) {
    if (hasInvalidInput(inputList)) {
      buttonElement.classList.add(inactiveButtonClass)
      buttonElement.setAttribute("disabled", true);
    } 
    else {
      buttonElement.classList.remove(inactiveButtonClass)
      buttonElement.removeAttribute("disabled");
    }
  }*/
  /*enableValidation({
    formSelector: '.form',
    inputSelector: '.form__item',
    submitButtonSelector: '.form__submit',
    inactiveButtonClass: 'form__submit_inactive',
    inputErrorClass: 'form__item_type_error',
    errorClass: 'form-item-error_active'
  });*/

 
  