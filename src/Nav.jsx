import { useState } from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu

  function toggleDarkMode() {
    setIsDarkMode(!isDarkMode);
    document.documentElement.className = !isDarkMode ? "dark" : "";
  }

  function toggleMenu() {
    setMenuOpen(!menuOpen); // Toggle mobile menu visibility
  }

  return (
    <>
      <nav className="flex flex-row justify-between items-center p-5 border-b dark:border-gray-800">
        {/* Logo */}
        <div>
          <h1 className="text-2xl font-bold">Portfolio</h1>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex">
          <ul className="flex justify-around gap-10 items-center">
            <li>
              <Link to="/" className="font-bold hover:text-accent">
                Home
              </Link>
            </li>
            <li>
              <Link to="/skills" className="font-bold hover:text-accent">
                Skills
              </Link>
            </li>
            <li>
              <Link to="/projects" className="font-bold hover:text-accent">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" className="font-bold hover:text-accent">
                Contact
              </Link>
            </li>
            {/* Dark Mode Toggle */}
            <li>
              <button onClick={toggleDarkMode} className="text-xl">
                {isDarkMode ? (
                  <i className="bi bi-brightness-high"></i>
                ) : (
                  <i className="bi bi-moon"></i>
                )}
              </button>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
          <button onClick={toggleMenu} className="text-xl">
            {menuOpen ? <i className="bi bi-x"></i> : <i className="bi bi-list"></i>}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Links */}
      {menuOpen && (
  <div className={`
    md:hidden 
    transform 
    transition-transform 
    duration-700 
    ease-in-out 
    ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'}
    bg-background-transparent 
    dark:bg-background-transparent 
    rounded-b-2xl
  `}>
          <ul className="flex flex-col items-center gap-5 py-5">
            <li>
              <Link to="/" className="font-bold hover:text-accent" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/skills" className="font-bold hover:text-accent" onClick={toggleMenu}>
                Skills
              </Link>
            </li>
            <li>
              <Link to="/projects" className="font-bold hover:text-accent" onClick={toggleMenu}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" className="font-bold hover:text-accent" onClick={toggleMenu}>
                Contact
              </Link>
            </li>
            {/* Dark Mode Toggle */}
            <li>
              <button onClick={toggleDarkMode} className="text-xl">
                {isDarkMode ? (
                  <i className="bi bi-brightness-high"></i>
                ) : (
                  <i className="bi bi-moon"></i>
                )}
              </button>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
