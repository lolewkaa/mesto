export class UserInfo {
    constructor({selectorAuthor,selectorJob}) {
     this._selectorAuthor = document.querySelector(selectorAuthor);
     this._selectorJob = document.querySelector(selectorJob);
    }
    //возвращает объект с данными пользователя
    getUserInfo(){
     return {
      name: this._selectorAuthor.textContent,
      job: this._selectorJob.textContent
     }
    }
    //принимает новые данные пользователя и добавляет их на страницу
    setUserInfo(element){
      this._selectorAuthor.textContent = element.name;
      this._selectorJob.textContent = element.job;
    }
  }
 