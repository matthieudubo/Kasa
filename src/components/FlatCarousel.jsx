import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const FlatCarousel = ({ imgs, alt }) => {
  return (
    <Carousel
      className="flatCarousel"
      infiniteLoop
      showArrows={false}
      showStatus={false}
      showThumbs={false}
      showIndicators={false}
      renderArrowPrev={(clickHandler) => {
        return (
          <button
            onClick={clickHandler}
            onKeyDown={clickHandler}
            className="flatCarousel__chevron flatCarousel__chevron--left"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
        );
      }}
      renderArrowNext={(clickHandler) => {
        return (
          <button
            onClick={clickHandler}
            onKeyDown={clickHandler}
            className="flatCarousel__chevron flatCarousel__chevron--right"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        );
      }}
    >
      {imgs.map((img, id) => (
        <div className="flatCarousel__img" key={id}>
          <img src={img} alt={alt} />
        </div>
      ))}
    </Carousel>
  );
};

export default FlatCarousel;
