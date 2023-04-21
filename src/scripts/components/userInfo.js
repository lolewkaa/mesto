export class UserInfo {
    constructor({userName,userJob, userAvatar}) {
     this._userName = document.querySelector(userName);
     this._userJob = document.querySelector(userJob);
     this._userAvatar = document.querySelector(userAvatar)
    }
    //возвращает объект с данными пользователя
    getUserInfo(){
     return {
      name: this._userName.textContent,
      about: this._userJob.textContent
     }
    }
    //принимает новые данные пользователя и добавляет их на страницу
    setUserInfo(element){
      this._userName.textContent = element.name;
      this._userJob.textContent = element.about;
    }

    setUserAvatar(data) {
      this._userAvatar.src = data.avatar
    }
  }
 