function PopupWithForm({ name, title, isOpen, onClose, children, buttonTitle }) {

    return (
        <div className={`popup popup_type_${name} ${isOpen ? 'popup_opened' : ''}`} >
            <div className="popup__container">
                <button className="button popup__close-button" aria-label="Close" type="button" onClick={onClose}></button>
                <h2 className="popup__title">{title}</h2>
                <form className="popup__form popup__form_type_add" name={`${name}-form`} noValidate>
                    {children}
                    <button type="submit" className="button popup__save-button">{buttonTitle}</button>
                </form>
            </div>
        </div>
    );
};

export default PopupWithForm;