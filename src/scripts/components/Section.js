export class Section{
    constructor({ renderer }, containerSelector){
   
    this._renderer = renderer
    this._container = document.querySelector(containerSelector)
    }

    renderItems(items, user) {
      items.forEach(item => {
       this._renderer(item, user)
    })}

    addItem(card) {
      
      this._container.append(card)
    }

    addInitalCards(element) {
      this._container.prepend(element);
    }
  }