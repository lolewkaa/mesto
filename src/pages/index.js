import "./index.css";

import { Card } from "../scripts/components/Card.js";

import { objectValidation } from "../scripts/utilts/utilts.js";

import { FormValidator } from "../scripts/components/FormValidator.js";

import { Section } from "../scripts/components/Section.js";

import { PopupWithImage } from "../scripts/components/PopupWithImage.js";

import { PopupWithForm } from "../scripts/components/popupWithForm.js";

import { UserInfo } from "../scripts/components/UserInfo.js";

import { Api } from "../scripts/components/Api.js";

import { PopupWithSubmit } from "../scripts/components/PopupWithSubmit.js";

const profilePopup = document.querySelector(".popup_type_user");
const profileButton = document.querySelector(".profile__button");
const avatarPopup = document.querySelector(".popup_type_avatar");
const profileAddButton = document.querySelector(".profile__add-button");
const newPlacePopup = document.querySelector(".popup_type_place");
const newPlaceCloseButton = document.querySelector(".popup__button_type_place");
const profileCloseButton = document.querySelector(".popup__button_type_user");
const profileForm = document.querySelector(".form_type_profile");
const nameInput = document.querySelector(".form__item_type_name");
const jobInput = document.querySelector(".form__item_type_job");
const author = document.querySelector(".profile__user");
const job = document.querySelector(".profile__text");
const popup = document.querySelectorAll(".popup");
const newPlaceForm = document.querySelector(".form_type_place");
const imagePopup = document.querySelector(".popup_type_image");
const deletePopup = document.querySelector(".popup_type_delete");
const deleteButton = document.querySelector(".card__button-delete");
const pencyl = document.querySelector(".profile__avatar-change");

const validationProfile = new FormValidator(objectValidation, profilePopup);
validationProfile.enableValidation();
const validationPlace = new FormValidator(objectValidation, newPlacePopup);
validationPlace.enableValidation();
const validationAvatar = new FormValidator(objectValidation, avatarPopup);
validationAvatar.enableValidation();

const popupWithSubmit = new PopupWithSubmit(deletePopup, {
  handleFormSubmit: (id, card) => {
    popupWithSubmit.renderLoading(true);
    api
      .deleteCard(id)
      .then(() => {
        card.deleteCard();
        popupWithSubmit.close();
      })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      })
      .finally(() => {
        popupWithSubmit.renderLoading(false);
      });
  },
});

const popupWithImage = new PopupWithImage(imagePopup);

//форма профиля с данными пользователя
const userInfo = new UserInfo({
  userName: ".profile__user",
  userJob: ".profile__text",
  userAvatar: ".profile__avatar",
});

const createCard = (data, user) => {
  const card = new Card({
    data: data,
    userId: user,
    templateSelector: "#places",
    handleCardClick: () => {
      popupWithImage.open(data);
    },
    handleLikeClick: (cardID) => {
      api
        .likeCard(cardID)
        .then((res) => {
          card.showLikes(res);
        })
        .catch((error) => console.log(`Ошибка: ${error}`));
    },
    handleDeleteIconClick: (cardID, cardElement) => {
      popupWithSubmit.open(cardID, cardElement);
      //console.log(cardID)
    },
    handleDeleteLikeClick: (cardID) => {
      api
        .deleteLikeCard(cardID)
        .then((res) => {
          card.showLikes(res);
        })
        .catch((error) => console.log(`Ошибка: ${error}`));
    },
  });
  return card.generateCard();
};

const cardContainer = new Section(
  {
    renderer: (item, userId) => {
      cardContainer.addItem(createCard(item, userId));
      //console.log(item)
    },
  },
  ".cards"
);

//редактирует данные пользователя на странице
const formProfile = new PopupWithForm(profilePopup, {
  handleFormSubmit: (data) => {
    formProfile.renderLoading(true);
    api
      .changeUserInfo(data)
      .then((res) => {
        userInfo.setUserInfo(res);
        formProfile.close();
      })
      .catch((error) => console.log(`Ошибка: ${error}`))
      .finally(() => {
        formProfile.renderLoading(false);
      });
  },
});
const avatarBatton = document.querySelector(".profile__avatar");
const formAvatar = new PopupWithForm(avatarPopup, {
  handleFormSubmit: (data) => {
    formAvatar.renderLoading(true);
    api
      .changeAvatar(data)
      .then((res) => {
        userInfo.setUserAvatar(res);
        formAvatar.close();
      })
      .finally(() => {
        formAvatar.renderLoading(false);
      });
  },
});

avatarBatton.onmouseover = function () {
  pencyl.classList.add("profile__avatar-change_opened");
};
avatarBatton.onmouseout = function () {
  pencyl.classList.remove("profile__avatar-change_opened");
};

avatarBatton.addEventListener("click", () => {
  formAvatar.open();

  validationAvatar.resetInputs();
  validationAvatar.resetButton();
});

const popupAddCard = new PopupWithForm(newPlacePopup, {
  handleFormSubmit: (data) => {
    popupAddCard.renderLoading(true);
    api
      .postNewCard({
        name: data.place,
        link: data.link,
      })
      .then((res) => {
        cardContainer.addInitalCards(createCard(res, userId));
        popupAddCard.close();
      })
      .catch((error) => console.log(`Ошибка: ${error}`))
      .finally(() => {
        popupAddCard.renderLoading(false);
      });
  },
});

//открыть попап имени пользователя
profileButton.addEventListener("click", () => {
  formProfile.open();
  //возвращаем объект с данными пользователя
  formProfile.showInputValues(userInfo.getUserInfo());
  validationProfile.resetInputs();
  validationProfile.resetButton();
});

//открыть попап добавления карточки
profileAddButton.addEventListener("click", () => {
  popupAddCard.open();
  //openPopup(newPlacePopup)
  validationPlace.resetInputs();
  validationPlace.resetButton();
});

const newPlaceTemplate = document.querySelector("#places");
const cardList = document.querySelector(".cards");
const cardNameInput = document.querySelector(".form__item_type_place");
const cardLinkInput = document.querySelector(".form__item_type_link");
const imageCloseButton = document.querySelector(".popup__button_type_image");
const image = document.querySelector(".popup__image");
const imageTitle = document.querySelector(".popup__title");

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-64",
  headers: {
    authorization: "51cc9dc9-38a6-4ea6-94cb-92255188bdc1",
    "Content-Type": "application/json",
  },
});

let userId;
Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([dataUser, resCard]) => {
    userId = dataUser._id;
    userInfo.setUserInfo(dataUser);
    userInfo.setUserAvatar(dataUser);
    cardContainer.renderItems(resCard, userId);
  })
  .catch((error) => console.log(`Ошибка: ${error}`));

popupWithImage.setEventListeners();
formProfile.setEventListeners();
popupAddCard.setEventListeners();
popupWithSubmit.setEventListeners();
formAvatar.setEventListeners();
