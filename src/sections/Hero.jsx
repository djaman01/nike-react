import { arrowRight } from "../assets/icons"
import { bigShoe1 } from "../assets/images" //pour import automatiquement, écrire le component image avec src={bigShoe1} qui est le nom du fichier sans - ni .png
import Button from "../components/Button"


const Hero = () => {
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
      </div>

      {/* Right side of the section that will contain shoes images */}

      <div className="relative flex flex-1 justify-center items-center bg-primary bg-hero bg-cover bg-center xl:min-h-screen max-xl:py-40">     {/*bg-hero= custom class / flex-1: so the image inside it expands nicely  */}
        <img
          src={bigShoe1}
          alt="Shoe 1"
          width={610}
          height={14}
          className="object-contain relative z-10"
        />

        {/* Container of the little images below the big shoe images, that we can select to see it bigger in teh image above */}
        <div>
          
        </div>

      </div>

    </section>
  )
}

export default Hero