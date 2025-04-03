const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white py-4 px-6 hidden md:flex items-center justify-between">
      {/* Left Side: Logo */}
      <div className="text-xl font-bold">
        <a href="#" className="hover:text-gray-300 transition-colors">
          Text Logo
        </a>
      </div>

      {/* Right Side: Navigation Links */}
      <div className="flex space-x-6">
        <a href="#" className="hover:text-gray-300 transition-colors">
          About
        </a>
        <a href="#" className="hover:text-gray-300 transition-colors">
          Movies
        </a>
        <a href="#" className="hover:text-gray-300 transition-colors">
          Policy
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
