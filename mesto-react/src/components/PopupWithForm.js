function PopupWithForm({ name, title, isOpen, onClose }) {

    return (
        <div className={`popup popup_type_${name} ${isOpen ? 'popup_opened' : ''}`} >
            <div className="popup__container">
                <button className="button popup__close-button" aria-label="Close" type="button" onClick={onClose}></button>
                <h2 className="popup__title">{title}</h2>
                <form className="popup__form popup__form_type_add" name={`${name}-form`} noValidate>
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
    );
};

export default PopupWithForm;