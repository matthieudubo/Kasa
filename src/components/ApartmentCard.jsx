import { Link } from "react-router-dom";

const ApartmentCard = ({ infos }) => {
  return (
    <Link to={`/flat/${infos.id}`} className="card">
      <img src={infos.cover} alt={infos.title} className="card__img" />
      <div className="card__gradient" />
      <h2 className="card__title">{infos.title}</h2>
    </Link>
  );
};

export default ApartmentCard;
