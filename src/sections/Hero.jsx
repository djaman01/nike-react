import { arrowRight } from "../assets/icons"
import Button from "../components/Button"

const Hero = () => {
  return (
    <section
      id='home' //To scroll to this section by clicking on the home button on the nav bar
      className=" w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container" //max-container= custom style / min-h-screen= minimu height of element = full height of the screen (mais il reste des elements en-dessous c'est comme ça) / xl = on extra large device it'll be flex-row
    >
      {/* xl:w-2/5 = on extra large devices it'll take 2/5 of the screen */}
      <div className="relative flex flex-col justify-center items-start w-full xl:w-2/5 max-xl:padding-x pt-28">
        <p>Our Summer Collection</p>
        <h1>
          <span> The New Arrival</span>
          <br />
          <span> Nike </span> Shoes
        </h1>
        <p>Discover Stylish Nike arrivals, quality comfort, and innovation for your active life.</p>

        <Button label="Shop now" iconURL={arrowRight} />
      </div>


    </section>
  )
}

export default Hero