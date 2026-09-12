import logo from "../../assets/logo-text.png";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 transition-all">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <img src={logo} alt="Dev Stack Logo" className="h-10" />

        {/* Links */}
        <ul className="flex items-center gap-6 cursor-pointer font-medium">
          <li className="text-[#DB2777]">Home</li>
          <li className="text-[#475569] hover:text-[#DB2777] transition">
            Technologies
          </li>
          <li className="text-[#475569] hover:text-[#DB2777] transition">
            Projects
          </li>
          <li className="text-[#475569] hover:text-[#DB2777] transition">
            About
          </li>
          <li className="text-[#475569] hover:text-[#DB2777] transition">
            Contact
          </li>
        </ul>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          <button className="cursor-pointer text-[#334155] hover:text-black font-medium text-sm">
            Sign In
          </button>
          <button className="cursor-pointer bg-[#DB2777] hover:bg-[#be185d] text-white px-6 py-2.5 rounded-full font-medium text-sm transition shadow-sm">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
