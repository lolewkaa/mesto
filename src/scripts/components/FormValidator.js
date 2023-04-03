export class FormValidator {
  constructor(data, form){
    this._data = data
    this._formSelector = data.formSelector;
    this._inputSelector = data.inputSelector;
    this._submitButtonSelector = data.submitButtonSelector;
    this._inactiveButtonClass = data.inactiveButtonClass;
    this._inputErrorClass = data.inputErrorClass;
    this._errorClass = data.errorClass;
    this._form = form;
    this._inputList =  Array.from(this._form.querySelectorAll(this._data.inputSelector));
    this._submitButtonSelector = this._form.querySelector(this._submitButtonSelector);
    }
    enableValidation() {
      this._setEventListeners()
    }

    resetInputs = () => {  
    this._inputList.forEach((input) => {
      input.classList.remove(this._inputErrorClass);
      input.nextElementSibling.textContent = '';
    });
    }
    resetButton = () => {
      this._submitButtonSelector.classList.add(this._inactiveButtonClass);
      this._submitButtonSelector.setAttribute("disabled", true);
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
      if (this._hasInvalidInput(this._inputList)) {
        this._submitButtonSelector.classList.add(this._inactiveButtonClass)
        this._submitButtonSelector.setAttribute("disabled", true);
      } 
      else {
        this._submitButtonSelector.classList.remove(this._inactiveButtonClass)
        this._submitButtonSelector.removeAttribute("disabled");
      }
    }
    // добавит обработчики сразу всем полям формы 
  _setEventListeners () {
    this._toggleButtonState() 
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._isValid(inputElement)
        this._toggleButtonState()
      })
    })
  }
  //проверяет наличие невалидного поля
  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid
    })
  }

  }
