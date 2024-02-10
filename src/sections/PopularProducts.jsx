import PopularProductCard from "../components/PopularProductCard"
import { products } from "../constants"

const PopularProducts = () => {
  return (
    //on rajoute l'id pour pouvoir scroll to this section 
    <section id="products" className="max-container max-sm:mt-12">

      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">Our <span className="text-coral-red">Popular </span> Products</h2>
        <p className="mt-2 font-montserrat text-slate-gray">Discover our Top quality shoes, that joins comfort, design and value</p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-14 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 sm:gap-4 ">
        {products.map((element) => (
          <PopularProductCard key={element.name} {...element} />
        ))}
      </div>


    </section>
  )
}

export default PopularProducts