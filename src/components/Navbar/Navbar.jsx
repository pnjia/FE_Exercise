import { useState } from "react";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="border min-w-full py-2 px-4 flex justify-between items-center bg-gray-100">
      {/* Logo */}
      <div className="text-xl font-bold">
        <h2>L O G O</h2>
      </div>

      {/* Menu */}
      <div className="hidden md:flex space-x-6">
        <a href="#home" className="hover:text-blue-500">Home</a>
        <a href="#about" className="hover:text-blue-500">About</a>
        <a href="#contact" className="hover:text-blue-500">Contact</a>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          className="text-xl focus:outline-none"
          onClick={toggleSidebar}
        >
          ☰
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-2/3 bg-gray-100 shadow-lg z-50 transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300`}
      >
        <div className="flex justify-between items-center px-4 py-2 border-b">
          <h2 className="text-xl font-bold">Menu</h2>
          <button
            className="text-xl focus:outline-none"
            onClick={toggleSidebar}
          >
            ✕
          </button>
        </div>
        <div className="flex flex-col space-y-4 p-4">
          <a
            href="#home"
            className="hover:text-blue-500"
            onClick={toggleSidebar}
          >
            Home
          </a>
          <a
            href="#about"
            className="hover:text-blue-500"
            onClick={toggleSidebar}
          >
            About
          </a>
          <a
            href="#contact"
            className="hover:text-blue-500"
            onClick={toggleSidebar}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;