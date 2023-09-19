import api from "../utils/Api";
import React, { useState, useEffect } from "react";
import Card from "./Card";

function Main({ onEditAvatar, onAddPlace, onEditProfile, onCardClick }) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    function getInitialCards() {
      api
        .getInitialCards()
        .then((res) => {
          setCards(res);
        })
        .catch((err) => console.log(err));
    }

    return getInitialCards();
  }, []);

  useEffect(() => {
    function setUserInfo() {
      api
        .getUserInfo()
        .then(({ name, about, avatar }) => {
          setUserName(name);
          setUserDescription(about);
          setUserAvatar(avatar);
        })
        .catch((err) => console.log(err));
    }

    return setUserInfo();
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <button onClick={onEditAvatar} className="profile__avatar-button">
          <img
            src={userAvatar}
            alt="Аватар пользователя"
            className="profile__pic"
          />
        </button>
        <div className="profile__info">
          <div className="profile__container">
            <h1 className="profile__name">{userName}</h1>
            <button
              onClick={onEditProfile}
              type="button"
              aria-label="Edit-Button"
              className="button open-button profile__edit-button"
            ></button>
          </div>
          <p className="profile__work">{userDescription}</p>
        </div>
        <button
          onClick={onAddPlace}
          type="button"
          aria-label="Add-Button"
          className="button open-button profile__add-button"
        ></button>
      </section>
      <section className="elements">
        {cards.map((cardData) => {
          return (
            <Card
              key={cardData._id}
              card={cardData}
              onCardClick={onCardClick}
            />
          );
        })}
      </section>
    </main>
  );
}

export default Main;
