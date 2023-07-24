import { Link } from "react-router-dom";
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
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="about">&Agrave; Propos</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
