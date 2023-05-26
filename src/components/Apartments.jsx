import ApartmentCard from "./ApartmentCard";
import { useEffect, useState } from "react";

const Apartments = () => {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    fetch("db.json")
      .then((res) => res.json())
      .then((data) => setApartments(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="apartments">
      {apartments.map((apartment) => (
        <ApartmentCard key={apartment.id} infos={apartment} />
      ))}
    </div>
  );
};

export default Apartments;
