import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <Logo />
        <span>&copy; 2020 Kasa. All rights reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
