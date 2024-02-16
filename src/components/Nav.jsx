import { headerLogo } from "../assets/images"; //pas la peine de mettre /images/header-logo.svg, car comme on a écrit le meme nom {headerLogo} il va le reconnaitre
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants"; //import des liens de la navbar avec text

const Nav = () => {
  return (
    <header className="padding-x absolute z-10 w-full py-8">
      <nav className="max-container flex items-center justify-between">
        {/* max-container est une class qu'on a définit avec @layers @apply dans index.css */}
        <a href="/">
          <img src={headerLogo} alt="Nike Logo" width={130} height={29} />
        </a>
        {/* max-lg: hidden => Max-1024px = hidden / hide on screens smaller than the "lg" breakpoint, which corresponds to a maximum width of 1024 pixels. */}
        <ul className="flex flex-1 items-center justify-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat text-lg leading-normal text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        {/*lg:hidden => >=1024px = hidden donc n'apparait que dans les mobile device ou tablet */}
        <div className="lg:hidden">
          <img src={hamburger} alt="hamburger" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
