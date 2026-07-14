import logo from "../assets/logo.png";

const Logo = () => {
  return (
    <div className="flex justify-center py-6">
      <img src={logo} alt="logo" className="w-28" />
    </div>
  );
};

export default Logo;