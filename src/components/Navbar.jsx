const Navbar = () => {
  return (
    <div className="bg-gradient-to-r from-[#83F8E8] to-[#BB95FD] p-4">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo / Brand */}
        <div className="text-white text-2xl font-bold">Navbar</div>

        {/* Navbar Links */}
        <div className="space-x-4">
          <a
            href="#"
            className="text-white hover:text-[#83F8E8] transition duration-300"
          >
            Home
          </a>
          <a
            href="#"
            className="text-white hover:text-[#83F8E8] transition duration-300"
          >
            About Us
          </a>
          <a
            href="#"
            className="text-white hover:text-[#83F8E8] transition duration-300"
          >
            Contact
          </a>
          <a
            href="#"
            className="text-white hover:text-[#83F8E8] transition duration-300"
          >
            Services
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
