import investmentImg from "../assets/investment.png";
import growthImg from "../assets/growth.png";
import marketImg from "../assets/market.png";
import financeImg from "../assets/finance.png";

export const Cards = () => {
  const services = [
    {
      id: 1,
      image: investmentImg,
      title: "Investment Planning",
      description: "Smart strategies for long-term wealth growth.",
    },
    {
      id: 2,
      image: growthImg,
      title: "Business Growth",
      description: "Scale your business with innovative solutions.",
    },
    {
      id: 3,
      image: marketImg,
      title: "Market Analysis",
      description: "Understand trends and customer behavior.",
    },
    {
      id: 4,
      image: financeImg,
      title: "Financial Strategy",
      description: "Plan and manage finances effectively.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-8">
      {services.map((item) => (
        <div
          key={item.id}
          className="shadow-lg rounded-lg overflow-hidden"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-52 object-cover"
          />

          <div className="p-4">
            <h2 className="text-xl font-bold">{item.title}</h2>

            <p className="mt-2 text-gray-600">
              {item.description}
            </p>

            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
              Read More
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};