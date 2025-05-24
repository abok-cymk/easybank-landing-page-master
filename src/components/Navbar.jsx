import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);
  return (
    <nav className="fixed z-40 w-full left-1/2 -translate-x-1/2 shadow bg-gray-50">
      <div className="flex items-center justify-between py-4 px-4 max-w-6xl mx-auto">
        <a href="#">
          <img src="/logo.svg" alt="Easy bank" />
        </a>
        <ul className="hidden lg:flex items-center gap-6 text-grayish-blue text-sm/7">
          <li>
            <a
              href="#"
              className="hover:underline hover:decoration-[.2em] hover:underline-offset-[2.4em] hover:decoration-lime-green"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:underline hover:decoration-[.2em] hover:underline-offset-[2.4em] hover:decoration-lime-green"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:underline hover:decoration-[.2em] hover:underline-offset-[2.4em] hover:decoration-lime-green"
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:underline hover:decoration-[.2em] hover:underline-offset-[2.4em] hover:decoration-lime-green"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:underline hover:decoration-[.2em] hover:underline-offset-[2.4em] hover:decoration-lime-green"
            >
              Careers
            </a>
          </li>
        </ul>
        <button
          type="button"
          className="hidden lg:block bg-gradient-to-r from-lime-green to-bright-cyan px-8 py-3 text-sm/6 rounded-full shadow cursor-pointer text-light-grayish-blue font-semibold transition hover:opacity-80"
        >
          Request Invite
        </button>
        <button
          type="button"
          className="lg:hidden flex cursor-pointer relative"
          onClick={toggleMenu}
          ref={buttonRef}
        >
          {menuOpen ? (
            <img src="/icon-close.svg" alt="" />
          ) : (
            <img src="/icon-hamburger.svg" alt="" />
          )}
        </button>
        {menuOpen && (
          <ul
            ref={menuRef}
            className="absolute z-30 max-w-[min(100vw,_300px)] rounded-lg w-full left-1/2 -translate-x-1/2 top-20 flex justify-center items-center flex-col gap-4 text-dark-blue text-sm/7 bg-very-light-gray shadow py-6"
          >
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}
