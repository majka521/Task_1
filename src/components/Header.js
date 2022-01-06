export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="header__nav">
          <ul className="header__nav__list">
            <li className="header__nav__list__element">
              <a href="." className="header__nav__list__element__link">
                Buy
              </a>
            </li>
            <li className="header__nav__list__element">
              <a href="." className="header__nav__list__element__link">
                Sell
              </a>
            </li>
            <li className="header__nav__list__element">
              <a href="." className="header__nav__list__element__link">
                About
              </a>
            </li>
          </ul>
          <ul className="header__nav__panel">
            <li className="header__nav__panel__element">
              <a href="." className="header__nav__panel__element__register">
                Register
              </a>
            </li>
            <li className="header__nav__panel__element">
              <a href="." className="header__nav__panel__element__login">
                Login
              </a>
            </li>
          </ul>
        </nav>
        <div className="header__home">
          <ul className="header__home__list">
            <li className="header__home__list__element">
              <a href="." className="header__home__list__element__link">
                Home
              </a>
            </li>
            <li className="header__home__list__element">
              <a href="." className="header__home__list__element__link">
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
