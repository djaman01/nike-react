import { shoe8 } from "../assets/images"
import Button from "../components/Button"

const SuperQuality = () => {


  return (
    <section id="about-us" className='flex justify-between items-center gap-10 w-full max-container max-lg:flex-col'>

      <div className='flex flex-1 flex-col'>

        <h2 className=" capitalize font-palanquin text-4xl font-bold lg:max-w-lg">
          We Provide You <span className="text-coral-red">Super Quality</span> Shoes
        </h2>

        <p className="mt-4 lg:max-w-lg">Ensuring Premium Comfort and Style</p>
        {/* info-text et un custom style écrit dans index.js */}

        <div className="mt-6">
          <Button label="View Details info-text" />
        </div>

      </div>

      <div className="flex flex-1 justify-center items-center">
        <img src={shoe8} alt={shoe8} width={570} height={522} />
      </div>



    </section>
  )
}

export default SuperQuality