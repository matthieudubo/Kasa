import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const Accordion = ({ title, description, equipments }) => {
  const [showContent, setShowContent] = useState(false);

  const userClick = () => {
    setShowContent(!showContent);
  };

  return (
    <div className="accordion">
      <button className="accordion__title" onClick={userClick}>
        <h2>{title}</h2>
        <div
          className={`${
            showContent && "accordion__chevron--rotate"
          } accordion__chevron`}
        >
          <ChevronDownIcon />
        </div>
      </button>
      <div className={showContent ? "accordion__content" : "disable"}>
        {description && <p>{description}</p>}
        {equipments && (
          <ul>
            {equipments.map((equipment, id) => {
              return <li key={id}>{equipment}</li>;
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Accordion;
