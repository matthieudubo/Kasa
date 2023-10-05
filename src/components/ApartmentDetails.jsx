import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { StarIcon } from "@heroicons/react/24/solid";
import Tag from "./Tag";
import Accordion from "./Accordion";
import FlatCarousel from "./FlatCarousel";
import NotFound from "./NotFound";

const ApartmentDetails = () => {
  const [apartment, setApartment] = useState(null);
  const stars = [1, 2, 3, 4, 5];
  const idFlat = useParams().id;

  useEffect(() => {
    fetch("db.json")
      .then((res) => res.json())
      .then((data) =>
        setApartment(...data.filter((apartment) => apartment.id === idFlat))
      )
      .catch((error) => console.error(error));
  }, [idFlat]);

  if (apartment == null) return <NotFound />;
  return (
    <div className="apartmentDetails">
      <FlatCarousel imgs={apartment.pictures} alt={apartment.title} />
      <div className="apartmentDetails__content">
        <div className="apartmentDetails__content__left">
          <div className="apartmentDetails__content__left--titles">
            <h1>{apartment.title}</h1>
            <h2>{apartment.location}</h2>
          </div>
          <div className="apartmentDetails__content__left--tags">
            {apartment.tags.map((tag, id) => (
              <Tag key={id} tagName={tag} />
            ))}
          </div>
        </div>
        <div className="apartmentDetails__content__right">
          <div className="apartmentDetails__content__right__author">
            <div className="apartmentDetails__content__right__author--name">
              <span>{apartment.host.name.split(" ")[0]}</span>
              <span>{apartment.host.name.split(" ")[1]}</span>
            </div>
            <div className="apartmentDetails__content__right__author--img">
              <img src={apartment.host.picture} alt={apartment.host.name} />
            </div>
          </div>
          <div className="apartmentDetails__content__right__rating">
            {stars.map((star, id) => (
              <StarIcon
                key={id}
                className={
                  star < apartment.rating
                    ? "apartmentDetails__content__right__rating--on"
                    : ""
                }
              />
            ))}
          </div>
        </div>
      </div>
      <div className="apartmentDetails__accordions">
        <Accordion title="Description" description={apartment.description} />
        <Accordion title="Équipements" equipments={apartment.equipments} />
      </div>
    </div>
  );
};

export default ApartmentDetails;
