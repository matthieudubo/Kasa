import bgImg from "../assets/img_1.webp";
import Apartments from "./Apartments";
import Banner from "./Banner";

const Home = () => {
  return (
    <div className="home">
      <Banner
        title="Chez vous, partout et ailleurs"
        bgImg={bgImg}
        altImg="photo de montagne en bord de mer"
      />
      <main>
        <Apartments />
      </main>
    </div>
  );
};

export default Home;
