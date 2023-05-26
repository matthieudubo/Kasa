import Logo from "./Logo";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar__logo">
        <Logo />
      </div>
      <div className="navbar__menu">
        <ul>
          <li>
            <a href="/">Accueil</a>
          </li>
          <li>
            <a href="about">&Agrave; Propos</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
