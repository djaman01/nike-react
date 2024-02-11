import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"

const SpecialOffer = () => {

  return (
    // max-xl:flex-col-reverse = max-1280px = pour écran de 0 à 1280px, il y aura flex-col-reverse / In fait ça pour que quand les écrand seront plus petits, l'image sera en-dessous du texte
    <section className="flex flex-wrap items-center gap-10 max-container max-xl:flex-col-reverse ">

      <div className="flex-1 sm:ml-20"> {/* flex-1 s'érit à l'intérieur d'un flex container, pour que l'element prennent autant de place que possible */}
        <img src={offer} width={773} height={687} className="object-contain w-full" />
      </div>

      <div className='flex flex-1 flex-col'>

        <h2 className=" capitalize font-palanquin text-4xl font-bold lg:max-w-lg">
          <span className="text-coral-red">Special</span> Offer
        </h2>

        <p className="mt-4 lg:max-w-lg">Click below to see our special offers !</p>
        {/* info-text et un custom style écrit dans index.js */}

        <div className="flex flex-wrap gap-4 mt-9 ">
          <Button label="Shop Now" iconURL={arrowRight} />
          <button className="bg-gray-400 rounded-full border-slate-gray text-white px-4"> Learn More</button>
        </div>

      </div>


    </section>
  )
}

export default SpecialOffer