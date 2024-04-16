import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="max-container ">
      <div className="flex flex-wrap items-start justify-between gap-20 max-lg:flex-col">
        <div className="flex flex-col items-start">
          {/* href="/" means home  */}
          <a href="/">
            <img src={footerLogo} alt="Nike Logo" width={150} height={46} />
          </a>
          <p className="mt-6 font-mono text-base leading-7 text-white-400 sm:max-w-sm">
            Find the perfect Shoe at your nearest Nike Store
          </p>
          <div className="mt-8 flex items-center gap-5">
            {socialMedia.map((e) => (
              //Pour faire apparaitre les icones il faut donner un bg-white et non un text-white
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
                <img src={e.src} alt={e.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-1 flex-wrap justify-between gap-20 lg:gap-10">
          {footerLinks.map((e) => (
            <div key={e}>
              <h4 className="mb-6 font-montserrat text-2xl font-medium leading-normal text-white">
                {e.title}
              </h4>
              {/* Comme il y y a un array links, dans l'array footerLinks: on va mapper dessus */}
              <ul>
                {e.links.map((e) => (
                  <li
                    key={e.name}
                    className="mt-3 cursor-pointer text-base leading-normal  text-white-400 hover:text-slate-gray"
                  >
                    <a>{e.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* max-sm= max-640px = on mobile devices */}
      <div className="mt-24 flex justify-between text-white-400 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 cursor-pointer items-center justify-start gap-2 font-montserrat">
          <img
            src={copyrightSign}
            alt="copyright sign"
            width={20}
            height={20}
            className="m-0 rounded-full"
          />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className="cursor-pointer font-montserrat"> Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
