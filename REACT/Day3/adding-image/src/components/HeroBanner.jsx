import banner from "../assets/image.png"
const HeroBanner = () => {
  return (
    <div className="hero">
      <img src={banner} alt="" />
      <div className="hero-content">
        <h1>Welcome To React</h1>
        <button>Explore</button>
      </div>
    </div>
  );
};

export default HeroBanner;