import  Popup  from "./Popup.js";

export class PopupWithSubmit extends Popup {
    constructor( popupElement) {
        super(popupElement)
        this._selector = popupElement 
     

    }
}