(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,r){for(var n=0;n<r.length;n++){var o=r[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,r){if("object"!==e(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===e(i)?i:String(i)),o)}var i}var r=function(){function e(t){var r=t.data,n=t.userId,o=t.templateSelector,i=t.handleCardClick,u=t.handleLikeClick,c=t.handleDeleteIconClick,a=t.handleDeleteLikeClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._link=r.link,this._name=r.name,this.cardData=r,this._likeServer=r.likes,this._idUserCard=r.owner._id,this.idCard=r._id,this._templateSelector=o,this._handleCardClick=i,this._handleLikeClick=u,this._handleDeleteIconClick=c,this._handleDeleteLikeClick=a,this._userId=n}var r,n;return r=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".card").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._cardElementImage=this._element.querySelector(".card__img"),this._cardElementTitle=this._element.querySelector(".card__description"),this._likeButton=this._element.querySelector(".card__button"),this._deleteButton=this._element.querySelector(".card__button-delete"),this._cardElementImage.src=this._link,this._cardElementImage.alt=this._name,this._cardElementTitle.textContent=this._name,this.likeNumber=this._element.querySelector(".card__page-lakes"),this.showLikes(this.cardData),this._idUserCard!==this._userId&&this._deleteButton.remove(),this._setEventListeners(),this._element}},{key:"cardLike",value:function(){var e=this;return this._likeServer.find((function(t){return t._id===e._userId}))}},{key:"showLikes",value:function(e){this._likeServer=e.likes,0===this._likeServer.length?this.likeNumber.textContent="":this.likeNumber.textContent=this._likeServer.length,this.cardLike()?this._likeButton.classList.add("card__button_active"):this._likeButton.classList.remove("card__button_active")}},{key:"clickLike",value:function(){this.cardLike()?this._handleDeleteLikeClick(this.idCard):this._handleLikeClick(this.idCard)}},{key:"deleteCard",value:function(){this._element.remove(),this._element=null}},{key:"_setEventListeners",value:function(){var e=this;this._cardElementImage.addEventListener("click",(function(){return e._handleCardClick()})),this._likeButton.addEventListener("click",(function(){return e.clickLike()})),this._deleteButton.addEventListener("click",(function(){return e._handleDeleteIconClick(e,e.idCard)}))}}])&&t(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),e}(),n={formSelector:".form",submitButtonSelector:".form__submit",inactiveButtonClass:"form__submit_inactive",inputSelector:".form__item",inputErrorClass:"form__item_type_error"};function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,c(n.key),n)}}function u(e,t,r){return(t=c(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e){var t=function(e,t){if("object"!==o(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===o(t)?t:String(t)}var a=function(){function e(t,r){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),u(this,"resetInputs",(function(){n._inputList.forEach((function(e){e.classList.remove(n._inputErrorClass),e.nextElementSibling.textContent=""}))})),u(this,"resetButton",(function(){n._submitButtonSelector.classList.add(n._inactiveButtonClass),n._submitButtonSelector.setAttribute("disabled",!0)})),u(this,"_showInputError",(function(e,t){n._errorElement=n._form.querySelector(".".concat(e.id,"-error")),e.classList.add(n._inputErrorClass),n._errorElement.textContent=t,n._errorElement.classList.add(n._errorClass)})),u(this,"_hideInputError",(function(e){n._errorElement=n._form.querySelector(".".concat(e.id,"-error")),e.classList.remove(n._inputErrorClass),n._errorElement.classList.remove(n._errorClass),n._errorElement.textContent=""})),u(this,"_isValid",(function(e){e.validity.valid?n._hideInputError(e):n._showInputError(e,e.validationMessage)})),this._data=t,this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._form=r,this._inputList=Array.from(this._form.querySelectorAll(this._data.inputSelector)),this._submitButtonSelector=this._form.querySelector(this._submitButtonSelector)}var t,r;return t=e,(r=[{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput(this._inputList)?(this._submitButtonSelector.classList.add(this._inactiveButtonClass),this._submitButtonSelector.setAttribute("disabled",!0)):(this._submitButtonSelector.classList.remove(this._inactiveButtonClass),this._submitButtonSelector.removeAttribute("disabled"))}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._isValid(t),e._toggleButtonState()}))}))}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}}])&&i(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==l(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==l(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===l(o)?o:String(o)),n)}var o}var f=function(){function e(t,r){var n=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=n,this._container=document.querySelector(r)}var t,r;return t=e,(r=[{key:"renderItems",value:function(e,t){var r=this;e.forEach((function(e){r._renderer(e,t)}))}},{key:"addItem",value:function(e){this._container.append(e)}},{key:"addInitalCards",value:function(e){this._container.prepend(e)}}])&&s(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function y(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,m(n.key),n)}}function d(e,t,r){return(t=m(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function m(e){var t=function(e,t){if("object"!==p(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==p(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===p(t)?t:String(t)}var h=function(){function e(t){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),d(this,"_handleEscClose",(function(e){"Escape"===e.key&&r.close()})),d(this,"_handleOverlayClose",(function(e){e.target===e.currentTarget&&r.close()})),this._popupElement=t,this._closeButton=this._popupElement.querySelector(".popup__button")}var t,r;return t=e,(r=[{key:"open",value:function(){this._popupElement.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupElement.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._closeButton.addEventListener("click",(function(){e.close()})),this._popupElement.addEventListener("mousedown",this._handleOverlayClose)}}])&&y(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function _(e){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_(e)}function b(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==_(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==_(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===_(o)?o:String(o)),n)}var o}function v(){return v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=g(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},v.apply(this,arguments)}function S(e,t){return S=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},S(e,t)}function g(e){return g=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},g(e)}var k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&S(e,t)}(u,e);var t,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=g(n);if(o){var r=g(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===_(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._cardImage=t._popupElement.querySelector(".popup__image"),t._cardTitle=t._popupElement.querySelector(".popup__title"),t}return t=u,(r=[{key:"open",value:function(e){v(g(u.prototype),"open",this).call(this),this._cardImage.src=e.link,this._cardImage.alt=e.name,this._cardTitle.textContent=e.name}}])&&b(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(h);function w(e){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(e)}function E(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==w(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==w(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===w(o)?o:String(o)),n)}var o}function j(){return j="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=O(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},j.apply(this,arguments)}function C(e,t){return C=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},C(e,t)}function O(e){return O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},O(e)}var L=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&C(e,t)}(u,e);var t,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=O(n);if(o){var r=O(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===w(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e,t){var r,n=t.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,e))._selector=e,r._handleFormSubmit=n,r._formElement=r._selector.querySelector(".form"),r._inputList=r._formElement.querySelectorAll(".form__item"),r._buttonSave=r._formElement.querySelector(".form__button-save"),r._buttonText=r._buttonSave.textContent,r}return t=u,(r=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"showInputValues",value:function(e){this._inputList.forEach((function(t){t.value=e[t.name]}))}},{key:"setEventListeners",value:function(){var e=this;j(O(u.prototype),"setEventListeners",this).call(this),this._formElement.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues()),e.close()}))}},{key:"renderLoading",value:function(e){this._buttonSave.textContent=e?"Сохранение...":this._buttonText}},{key:"close",value:function(){j(O(u.prototype),"close",this).call(this),this._formElement.reset()}}])&&E(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(h);function P(e){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P(e)}function I(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==P(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==P(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===P(o)?o:String(o)),n)}var o}var q=function(){function e(t){var r=t.userName,n=t.userJob,o=t.userAvatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=document.querySelector(r),this._userJob=document.querySelector(n),this._userAvatar=document.querySelector(o)}var t,r;return t=e,(r=[{key:"getUserInfo",value:function(){return{name:this._userName.textContent,about:this._userJob.textContent}}},{key:"setUserInfo",value:function(e){this._userName.textContent=e.name,this._userJob.textContent=e.about}},{key:"setUserAvatar",value:function(e){this._userAvatar.src=e.avatar}}])&&I(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function T(e){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},T(e)}function B(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==T(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==T(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===T(o)?o:String(o)),n)}var o}var x=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._address=t.baseUrl,this._headers=t.headers}var t,r;return t=e,(r=[{key:"getUserInfo",value:function(){return fetch("".concat(this._address,"/users/me"),{method:"GET",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._address,"/cards"),{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"changeUserInfo",value:function(e){return fetch("".concat(this._address,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"postNewCard",value:function(e){return fetch("".concat(this._address,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"deleteCard",value:function(e){return fetch("".concat(this._address,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"likeCard",value:function(e){return fetch("".concat(this._address,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"deleteLikeCard",value:function(e){return fetch("".concat(this._address,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"changeAvatar",value:function(e){return fetch("".concat(this._address,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}}])&&B(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function R(e){return R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},R(e)}function A(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==R(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==R(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===R(o)?o:String(o)),n)}var o}function D(){return D="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=N(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},D.apply(this,arguments)}function U(e,t){return U=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},U(e,t)}function N(e){return N=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},N(e)}var V=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&U(e,t)}(u,e);var t,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=N(n);if(o){var r=N(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===R(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e,t){var r,n=t.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,e))._selector=e,r._handleFormSubmit=n,r._buttonSave=r._popupElement.querySelector(".form__button-save"),r._buttonText=r._buttonSave.textContent,r}return t=u,(r=[{key:"open",value:function(e,t){D(N(u.prototype),"open",this).call(this),this.id=t,this.card=e}},{key:"renderLoading",value:function(e){this._buttonSave.textContent=e?"Сохранение...":this._buttonText}},{key:"setEventListeners",value:function(){var e=this;D(N(u.prototype),"setEventListeners",this).call(this),this._buttonSave.addEventListener("click",(function(){e._handleFormSubmit(e.id,e.card)}))}}])&&A(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(h);function F(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var J=document.querySelector(".popup_type_user"),H=document.querySelector(".profile__button"),M=document.querySelector(".popup_type_avatar"),z=document.querySelector(".profile__add-button"),G=document.querySelector(".popup_type_place"),$=(document.querySelector(".popup__button_type_place"),document.querySelector(".popup__button_type_user"),document.querySelector(".form_type_profile"),document.querySelector(".form__item_type_name"),document.querySelector(".form__item_type_job"),document.querySelector(".profile__user"),document.querySelector(".profile__text"),document.querySelectorAll(".popup"),document.querySelector(".form_type_place"),document.querySelector(".popup_type_image")),K=document.querySelector(".popup_type_delete"),Q=(document.querySelector(".card__button-delete"),document.querySelector(".profile__avatar-change")),W=new a(n,J);W.enableValidation();var X=new a(n,G);X.enableValidation();var Y=new a(n,M);Y.enableValidation();var Z=new V(K,{handleFormSubmit:function(e,t){Z.renderLoading(!0),le.deleteCard(e).then((function(){t.deleteCard(),Z.close()})).catch((function(e){console.log(e)})).finally((function(){Z.renderLoading(!1)}))}}),ee=new k($),te=new q({userName:".profile__user",userJob:".profile__text",userAvatar:".profile__avatar"}),re=function(e,t){var n=new r({data:e,userId:t,templateSelector:"#places",handleCardClick:function(){ee.open(e)},handleLikeClick:function(e){le.likeCard(e).then((function(e){n.showLikes(e)})).catch((function(e){return console.log("Ошибка: ".concat(e))}))},handleDeleteIconClick:function(e,t){Z.open(e,t)},handleDeleteLikeClick:function(e){le.deleteLikeCard(e).then((function(e){n.showLikes(e)})).catch((function(e){return console.log("Ошибка: ".concat(e))}))}});return n.generateCard()},ne=new f({renderer:function(e,t){ne.addItem(re(e,t))}},".cards"),oe=new L(J,{handleFormSubmit:function(e){oe.renderLoading(!0),le.changeUserInfo(e).then((function(e){te.setUserInfo(e)})).catch((function(e){return console.log("Ошибка: ".concat(e))})).finally((function(){oe.renderLoading(!1)}))}}),ie=document.querySelector(".profile__avatar"),ue=new L(M,{handleFormSubmit:function(e){ue.renderLoading(!0),le.changeAvatar(e).then((function(e){te.setUserAvatar(e)})).finally((function(){ue.renderLoading(!1)}))}});ie.onmouseover=function(){Q.classList.add("profile__avatar-change_opened")},ie.onmouseout=function(){Q.classList.remove("profile__avatar-change_opened")},ie.addEventListener("click",(function(){ue.open(),Y.resetInputs(),Y.resetButton()}));var ce=new L(G,{handleFormSubmit:function(e){ce.renderLoading(!0),le.postNewCard({name:e.place,link:e.link}).then((function(e){ne.addInitalCards(re(e,ae))})).catch((function(e){return console.log("Ошибка: ".concat(e))})).finally((function(){ce.renderLoading(!1)}))}});H.addEventListener("click",(function(){oe.open(),oe.showInputValues(te.getUserInfo()),W.resetInputs(),W.resetButton()})),z.addEventListener("click",(function(){ce.open(),X.resetInputs(),X.resetButton()})),document.querySelector("#places"),document.querySelector(".cards"),document.querySelector(".form__item_type_place"),document.querySelector(".form__item_type_link"),document.querySelector(".popup__button_type_image"),document.querySelector(".popup__image"),document.querySelector(".popup__title");var ae,le=new x({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-64",headers:{authorization:"51cc9dc9-38a6-4ea6-94cb-92255188bdc1","Content-Type":"application/json"}});Promise.all([le.getUserInfo(),le.getInitialCards()]).then((function(e){var t,r,n=(r=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,u,c=[],a=!0,l=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;a=!1}else for(;!(a=(n=i.call(r)).done)&&(c.push(n.value),c.length!==t);a=!0);}catch(e){l=!0,o=e}finally{try{if(!a&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(l)throw o}}return c}}(t,r)||function(e,t){if(e){if("string"==typeof e)return F(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?F(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],i=n[1];ae=o._id,te.setUserInfo(o),te.setUserAvatar(o),ne.renderItems(i,ae)})).catch((function(e){return console.log("Ошибка: ".concat(e))})),ee.setEventListeners(),oe.setEventListeners(),ce.setEventListeners(),Z.setEventListeners(),ue.setEventListeners()})();
//# sourceMappingURL=main.js.map