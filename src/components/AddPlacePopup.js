import { useState, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

export default function AddPlacePopup({
  isOpen,
  onClose,
  isLoadingForm,
  onAddCard
}) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  useEffect(() => {
    setName("");
    setLink("");
  }, []);

  function handleNameInputChange(evt) {
    setName(evt.target.value);
  }

  function handleLinkInputChange(evt) {
    setLink(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onAddCard({
      name: name,
      link: link,
    });

    setName('');
    setLink('');
  }

  return (
    <PopupWithForm
      name="add"
      title="Добавить место"
      isOpen={isOpen}
      onClose={onClose}
      buttonTitle={isLoadingForm ? "Создание..." : "Создать"}
      onSubmit={handleSubmit}
      children={
        <>
          <input
            className="popup__input popup__input_type_place"
            placeholder="Название"
            minLength={2}
            maxLength={30}
            required
            onChange={handleNameInputChange}
            value={name}
          />
          <input
            className="popup__input popup__input_type_link"
            placeholder="Ссылка на картинку"
            required
            type='url'
            value={link}
            onChange={handleLinkInputChange}
          />
        </>
      }
    />
  );
}
