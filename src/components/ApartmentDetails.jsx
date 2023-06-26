import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { StarIcon } from "@heroicons/react/24/solid";
import Tag from "./Tag";
import Accordion from "./Accordion";
import FlatCarousel from "./FlatCarousel";

const ApartmentDetails = () => {
  const [apartment, setApartment] = useState(null);

  const location = useLocation();
  const apartmentId = location.state.apartmentId;
  const stars = [1, 2, 3, 4, 5];

  useEffect(() => {
    fetch("db.json")
      .then((res) => res.json())
      .then((data) =>
        setApartment(
          ...data.filter((apartment) => apartment.id === apartmentId)
        )
      )
      .catch((error) => console.error(error));
  }, [apartmentId]);

  if (apartment == null) return <div>Loading...</div>;
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
