import { useState } from "react";
import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images"; //pour import automatiquement en .map, écrire le component image avec src={bigShoe1} qui est le nom du fichier sans - ni .png
import Button from "../components/Button";
import ShoeCard from "../components/ShoeCard";
import { shoes, statistics } from "../constants"; //Pour import les statistics automatqiueemnt en .map

const Hero = () => {
  //UseState pour store les images de la big Shoe et qui par défaut montre la bigShoe1
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section
      id="home" //To scroll to this section by clicking on the home button on the nav bar
      className=" max-container flex min-h-screen w-full flex-col justify-center gap-10 xl:flex-row" //max-container= custom style / min-h-screen= minimu height of element = full height of the component / xl = on extra large device it'll be flex-row
    >
      {/* xl:w-2/5 = on extra large devices it'll take 2/5 of the screen */}
      <div className="max-xl:padding-x relative flex w-full flex-col items-start justify-center pt-28 xl:w-2/5">
        <p className="font-montserrat text-xl text-coral-red">
          Our Summer Collection
        </p>

        <h1 className="max-sm:leading[82] mt-10 font-palanquin text-8xl font-bold max-sm:text-[72px]">
          {/* xl:bg-white: car dans les grands écrans, le on veut que le text soit un peu au-dessus de l'image de la chaussure et qu'il est un cadre blanc */}
          <span className=" relative z-10 pr-10 xl:whitespace-nowrap xl:bg-white ">
            {" "}
            The New Arrival
          </span>
          <br />
          <span className="mt-3 inline-block text-coral-red"> Nike </span> Shoes
        </h1>

        <p className="mb-14 mt-6 font-montserrat text-lg leading-8 text-slate-gray sm:max-w-sm">
          Discover Stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>

        <Button label="Shop now" iconURL={arrowRight} />

        <div className="mt-20 flex w-full flex-wrap items-start justify-start gap-16">
          {/* flex-wrap:If the screen is smaller, the elements will start collapsing slowly for small devices / w-full: the elements inside the div will take all the width of the div */}
          {statistics.map((stat) => (
            <div key={stat.label}>
              {" "}
              {/* stat.label en key because it's unique */}
              <p className="font-palanquin text-4xl font-bold">{stat.value}</p>
              <p className="leadin-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Right side of the section that will contain shoes images */}
      <div className="relative flex flex-1 items-center justify-center bg-primary bg-hero bg-cover bg-center max-xl:py-40 xl:min-h-screen">
        {" "}
        {/*bg-hero= custom class / flex-1: so the image inside it expands nicely  */}
        <img
          src={bigShoeImg} //state qui par défaut montre bigShoe1 et qui va changer d'img en fct de la miniature sur laquelle on va cliquer
          alt="Shoe 1"
          width={610}
          height={14}
          className="relative z-10 object-contain"
        />
        {/* Container of the little images below the big shoe images, that we can select to see it bigger in teh image above */}
        <div className="absolute -bottom-[5%] flex gap-4 max-sm:px-6 sm:left-[10%] sm:gap-6">
          {shoes.map((e) => (
            <div key={e}>
              {/* Voir ShoeCard component pour comprendre car on l'import ici et on donne aux props props les valeur de l'array shoes */}
              <ShoeCard
                imgURL={e}
                changeBigShoeImg={(element) => {
                  setBigShoeImg(element);
                }} 
                bigShoeImg={bigShoeImg} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
