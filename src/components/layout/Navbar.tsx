import logo from "../../assets/logo-text.png";

const navLinks = ["Home", "Technologies", "Projects", "About", "Contact"];

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-md transition-all">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <a href="#home" className="mr-auto">
          <img src={logo} alt="Dev Stack Logo" className="h-9" />
        </a>

        <ul className="mx-auto flex items-center gap-6 font-medium">
          {navLinks.map((link, index) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className={
                  index === 0
                    ? "text-[#DB2777]"
                    : "text-[#475569] transition hover:text-[#DB2777]"
                }
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex items-center gap-4">
          <button className="cursor-pointer text-sm font-medium text-[#334155] hover:text-black">
            Sign In
          </button>
          <button className="brand-gradient cursor-pointer rounded-full px-6 py-2.5 text-sm font-medium text-white shadow-sm transition hover:opacity-90">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
