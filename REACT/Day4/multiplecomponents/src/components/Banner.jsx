import banner from "../assets/banner.png";

const Banner = () => {
  return (
   <> <section
      className="h-[300px] bg-cover bg-center flex flex-col justify-center items-center text-black"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      <h1 className="text-4xl font-bold">
        Grow Your Business With Confidence
      </h1>

      <p className="mt-3 text-lg">
        Professional solutions for modern companies
      </p>

      <button className="mt-4 bg-blue-600 px-5 py-2 rounded">
        Get Started
      </button>
    </section></>
  );
};

export default Banner;