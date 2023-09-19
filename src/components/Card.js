import React from "react";

export default function Card({ card, onCardClick }) {
  function handleCardClick() {
    onCardClick(card);
  }

  return (
    <div className="elements__item">
      <button className="button elements__delete" aria-label="Delete"></button>
      <img
        className="elements__image"
        src={card.link}
        alt={card.name}
        onClick={handleCardClick}
      />
      <div className="elements__dashboard">
        <h2 className="elements__text">{card.name}</h2>
        <div className="elements__like-area">
          <button
            type="button"
            className="button elements__like-button"
            aria-label="Like"
          ></button>
          <p className="elements__like-count">{card.likes.length}</p>
        </div>
      </div>
    </div>
  );
}
