const ApartmentCard = ({ infos }) => {
  return (
    <div className="card">
      <img src={infos.cover} alt={infos.title} className="card__img" />
      <div className="card__gradient" />
      <h2 className="card__title">{infos.title}</h2>
    </div>
  );
};

export default ApartmentCard;
