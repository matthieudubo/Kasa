const Banner = ({ title, bgImg, altImg }) => {
  return (
    <div className="banner">
      <div className="banner__darken"></div>
      <img src={bgImg} alt={altImg} className="banner__bgImg" />
      <h1>{title}</h1>
    </div>
  );
};

export default Banner;
