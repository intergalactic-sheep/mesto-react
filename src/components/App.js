import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import React, { useState } from "react";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  function handleEditAvatarClick() {
    setIsEditAvatarOpen(true);
  }

  function handleEditProfileClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarOpen(false);
    setIsEditProfilePopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <ImagePopup 
        card={selectedCard} 
        onClose={closeAllPopups} 
      />
      <PopupWithForm
        name="edit"
        title="Редактировать профиль"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      />
      <PopupWithForm
        name="add"
        title="Добавить место"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      />
      <PopupWithForm
        name="avatar"
        title="Обновить аватар"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      />

      {/* <div className="popup popup_type_edit">
        <div className="popup__container">
          <button className="button popup__close-button" aria-label="Close" type="button"></button>
          <h2 className="popup__title">Редактировать профиль</h2>
          <form className="popup__form popup__form_type_edit" name="edit-form" noValidate>
            <input className="popup__input popup__input_type_name" placeholder="Имя" name="name" type="text" required
              minLength="2" maxLength="40" />
            <span className="popup__input-error name-error"></span>
            <input className="popup__input popup__input_type_work" placeholder="О себе" name="about" type="text" required
              minLength="2" maxLength="200" />
            <span className="popup__input-error about-error"></span>
            <button type="submit" className="button popup__save-button">Сохранить</button>
          </form>
        </div>
      </div> */}

      {/* <div className="popup popup_type_add">
        <div className="popup__container">
          <button className="button popup__close-button" aria-label="Close" type="button"></button>
          <h2 className="popup__title">Новое место</h2>
          <form className="popup__form popup__form_type_add" name="add-form" noValidate>
            <input className="popup__input popup__input_type_place" name="name" type="text" placeholder="Название" required
              minLength="2" maxLength="30" />
            <span className="popup__input-error name-error"></span>
            <input className="popup__input popup__input_type_link" name="link" type="url" placeholder="Ссылка на картинку"
              required />
            <span className="popup__input-error link-error"></span>
            <button type="submit" className="button popup__save-button">Создать</button>
          </form>
        </div>
      </div>

      <div className="popup popup_type_image">
        <div className="popup__image-container">
          <button className="button popup__close-button" aria-label="Close" type="button"></button>
          <img className="popup__image" alt="#" src="#" />
          <p className="popup__subtitle"></p>
        </div>
      </div>

      <div className="popup popup_type_confirm">
        <div className="popup__container">
          <button className="button popup__close-button" aria-label="Close" type="button"></button>
          <h2 className="popup__title">Вы уверены?</h2>
          <form className="popup__form popup__form_type_confirm" name="confirm-form" noValidate>
            <button type="submit" className="button popup__save-button">Да</button>
          </form>
        </div>
      </div>

      <div className="popup popup_type_avatar">
        <div className="popup__container">
          <button className="button popup__close-button" aria-label="Close" type="button"></button>
          <h2 className="popup__title">Обновить аватар</h2>
          <form className="popup__form popup__form_type_avatar" name="avatar-form" noValidate>
            <input className="popup__input popup__input_type_avatar" name="avatar" type="url" placeholder="Ссылка на картинку"
              required />
            <span className="popup__input-error avatar-error"></span>
            <button type="submit" className="button popup__save-button">Сохранить</button>
          </form>
        </div>
      </div> */}
    </div>
  );
}

export default App;
