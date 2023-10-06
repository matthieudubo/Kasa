import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const FlatCarousel = ({ imgs, alt }) => {
  const [currentImg, setCurrentImg] = useState(0);

  const prevImg = () => {
    currentImg > 0
      ? setCurrentImg(currentImg - 1)
      : setCurrentImg(imgs.length - 1);
  };

  const nextImg = () => {
    currentImg < imgs.length - 1
      ? setCurrentImg(currentImg + 1)
      : setCurrentImg(0);
  };

  return (
    <div className="flatCarousel">
      {imgs.length > 1 && (
        <button
          onClick={prevImg}
          className="flatCarousel__chevron flatCarousel__chevron--left"
        >
          <ChevronLeftIcon />
        </button>
      )}
      {imgs.length > 1 && (
        <button
          onClick={nextImg}
          className="flatCarousel__chevron flatCarousel__chevron--right"
        >
          <ChevronRightIcon />
        </button>
      )}
      <span className="flatCarousel__counter">
        {currentImg + 1}/{imgs.length}
      </span>
      {imgs.map((img, i) => (
        <img
          src={img}
          alt={alt}
          key={img}
          className={i === currentImg ? "active" : ""}
        />
      ))}
    </div>
  );
};

export default FlatCarousel;
