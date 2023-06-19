import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notFound">
      <div className="notFound__title">
        <h1>404</h1>
        <h2>Oops! La page que vous demandez n'existe pas</h2>
      </div>
      <Link className="notFound__link" to="/">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
};

export default NotFound;
