const Navbar = () => {
  return (
    <nav className="bg-slate-900 text-white flex justify-between items-center px-8 py-4">
      <h1 className="text-2xl font-bold">FutureInvest</h1>

      <ul className="flex gap-6">
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;