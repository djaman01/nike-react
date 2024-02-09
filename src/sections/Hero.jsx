import { useState } from "react"
import { arrowRight } from "../assets/icons"
import { bigShoe1 } from "../assets/images" //pour import automatiquement en .map, écrire le component image avec src={bigShoe1} qui est le nom du fichier sans - ni .png
import Button from "../components/Button"
import ShoeCard from "../components/ShoeCard"
import { shoes, statistics } from "../constants" //Pour import les statistics automatqiueemnt en .map

const Hero = () => {

  //UseState pour store les images de la big Shoe et qui par défaut montre la bigShoe1
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1)

  return (
    <section
      id='home' //To scroll to this section by clicking on the home button on the nav bar
      className=" w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container" //max-container= custom style / min-h-screen= minimu height of element = full height of the component / xl = on extra large device it'll be flex-row
    >
      {/* xl:w-2/5 = on extra large devices it'll take 2/5 of the screen */}
      <div className="relative flex flex-col justify-center items-start w-full xl:w-2/5 max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">Our Summer Collection</p>

        <h1 className="mt-10 font-palanquin text-8xl font-bold max-sm:text-[72px] max-sm:leading[82]">

          {/* xl:bg-white: car dans les grands écrans, le on veut que le text soit un peu au-dessus de l'image de la chaussure et qu'il est un cadre blanc */}
          <span className=" relative z-10 pr-10 xl:bg-white xl:whitespace-nowrap "> The New Arrival</span>
          <br />
          <span className="text-coral-red mt-3 inline-block"> Nike </span> Shoes

        </h1>

        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">Discover Stylish Nike arrivals, quality comfort, and innovation for your active life.</p>

        <Button label="Shop now" iconURL={arrowRight} />

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">{/* flex-wrap:If the screen is smaller, the elements will start collapsing slowly for small devices / w-full: the elements inside the div will take all the width of the div */}
          {statistics.map((stat) => (
            <div key={stat.label}>  {/* stat.label en key because it's unique */}
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leadin-7 font-montserrat text-slate-gray">{stat.label}</p>
            </div>

          ))}

        </div>

      </div>

      {/* Right side of the section that will contain shoes images */}
      <div className="relative flex flex-1 justify-center items-center bg-primary bg-hero bg-cover bg-center xl:min-h-screen max-xl:py-40">     {/*bg-hero= custom class / flex-1: so the image inside it expands nicely  */}
        <img
          src={bigShoeImg} //state qui par défaut montre bigShoe1
          alt="Shoe 1"
          width={610}
          height={14}
          className="object-contain relative z-10"
        />
        {/* Container of the little images below the big shoe images, that we can select to see it bigger in teh image above */}
        <div className="flex absolute -bottom-[5%] gap-4 sm:gap-6 sm:left-[10%] max-sm:px-6">
          {shoes.map((e) => (
            <div key={e}>
              <ShoeCard
                imgURL={e}
                changeBigShoeImg={(element) => {setBigShoeImg(element) }} //element= paramètre dont la valeur =imgURL.bigShoe donné dans le component ShoeCard => Permet de changer big shoe image en fonction s"élection miniature
                bigShoeImg={bigShoeImg} //

              />
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}

export default Hero