import logo from "../../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="container mx-auto grid gap-10 px-6 py-12 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr] lg:gap-16">
        <div>
          <img src={logo} alt="Dev Stack Logo" className="h-8 w-auto" />
          <p className="mt-4 max-w-xs text-sm leading-6 text-slate-500">
            Curated tools, technologies, and resources for developing modern
            software.
          </p>
          <div className="mt-5 flex gap-5 text-xs font-medium text-slate-600">
            <a href="#" className="transition hover:text-pink-600">
              GitHub
            </a>
            <a href="#" className="transition hover:text-pink-600">
              Twitter
            </a>
            <a href="#" className="transition hover:text-pink-600">
              LinkedIn
            </a>
          </div>
        </div>

        <FooterColumn
          title="Product"
          links={["Home", "Technologies", "Projects"]}
        />
        <FooterColumn title="Company" links={["About", "Contact", "Careers"]} />
        <FooterColumn
          title="Legal"
          links={["Privacy Policy", "Terms of Service"]}
        />
      </div>

      <div className="border-t border-gray-100">
        <div className="container mx-auto flex flex-col gap-3 px-6 py-5 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 DevStack. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="transition hover:text-pink-600">
              Privacy
            </a>
            <a href="#" className="transition hover:text-pink-600">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface FooterColumnProps {
  title: string;
  links: string[];
}

const FooterColumn = ({ title, links }: FooterColumnProps) => {
  return (
    <div>
      <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900">
        {title}
      </h2>
      <ul className="mt-4 space-y-3 text-sm text-slate-500">
        {links.map((link) => (
          <li key={link}>
            <a href="#" className="transition hover:text-pink-600">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
