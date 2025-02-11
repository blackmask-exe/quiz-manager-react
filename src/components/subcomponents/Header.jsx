const Header = () => {
  return (
    <header className="fixed -top-1 left-0 right-0 bg-[#000000] z-50">
      <nav className="flex justify-between items-center max-w-7xl mx-auto py-1 px-4">
        <div className="space-x-4">
          <button className="text-lg text-white bg-[#000000] transition-colors duration-300 hover:opacity-80">
            Home
          </button>
          <button className="text-lg text-white bg-[#000000] transition-colors duration-300 hover:opacity-80">
            Projects
          </button>
          <button className="text-lg text-white bg-[#000000] transition-colors duration-300 hover:opacity-80">
            Contact
          </button>
        </div>
        <button className="text-lg text-white bg-[#000000] transition-all duration-300 cursor-pointer">
          🌙 Dark
        </button>
      </nav>
      <div className="w-[85%] mx-auto">
        <hr className="border-t border-gray-800 opacity-50" />
      </div>
    </header>
  );
};

export default Header;
