import logo from '../img/logo.svg';

function Header() {
  return (
    <header className="header">
      <img src={logo} className="header__logo" alt="логотип Место" />
    </header>
  )
};

export default Header