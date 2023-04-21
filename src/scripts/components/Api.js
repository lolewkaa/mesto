export class Api {
constructor(setting){
  this._address = setting.baseUrl
  this._headers = setting.headers  

}
//возвращает данные о пользователе
getUserInfo(){
    //создаем запрос на сервер и возвращаем его ответ
    return fetch(`${this._address}/users/me`, {
        method: 'GET',
        headers: this._headers,
    }).then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
})
}


getInitialCards() {
    return fetch(`${this._address}/cards`, {
      headers: this._headers,
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
  
        // если ошибка, отклоняем промис
        return Promise.reject(`Ошибка: ${res.status}`);
      });
  }


  changeUserInfo(data) {
    return fetch(`${this._address}/users/me`, {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({
          name: data.name,
          about: data.about
        })
      })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
  
        // если ошибка, отклоняем промис
        return Promise.reject(`Ошибка: ${res.status}`);
      });
}

postNewCard(data) {
    return fetch(`${this._address}/cards`, {
        method: 'POST',
        headers: this._headers,
          body: JSON.stringify({
            name: data.name,
            link: data.link
          }),
    }).then(res => {
        if (res.ok) {
          return res.json();
        }
  
        // если ошибка, отклоняем промис
        return Promise.reject(`Ошибка: ${res.status}`);
      });
}

deleteCard(cardId){
  return fetch(`${this._address}/cards/${cardId}`, {
    method: 'DELETE',
    headers: this._headers,
}).then(res => {
    if (res.ok) {
      return res.json();
    }

    // если ошибка, отклоняем промис
    return Promise.reject(`Ошибка: ${res.status}`);
  });
}

likeCard(cardId){
  return fetch(`${this._address}/cards/${cardId}/likes`, {
    method: 'PUT',
    headers: this._headers,
  }).then(res => {
    if (res.ok) {
      return res.json();
    }

    // если ошибка, отклоняем промис
    return Promise.reject(`Ошибка: ${res.status}`);
  });
}

deleteLikeCard(cardId){
  return fetch(`${this._address}/cards/${cardId}/likes`, {
    method: 'DELETE',
    headers: this._headers,
  }).then(res => {
    if (res.ok) {
      return res.json();
    }

    // если ошибка, отклоняем промис
    return Promise.reject(`Ошибка: ${res.status}`);
  });
}

changeAvatar(data) {
 return fetch(`${this._address}/users/me/avatar`, {
  method: 'PATCH', 
  headers: this._headers,
  body: JSON.stringify({
    avatar: data.avatar
  }),
 }).then(res => {
  if (res.ok) {
    return res.json();
  }

  // если ошибка, отклоняем промис
  return Promise.reject(`Ошибка: ${res.status}`);
}); 
}


}


