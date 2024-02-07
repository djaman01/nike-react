import CustomerReviews from "./sections/CustomerReviews";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import PopularProducts from "./sections/PopularProducts";
import Services from "./sections/Services";
import SpecialOffer from "./sections/SpecialOffer";
import Subscribe from "./sections/Subscribe";
import SuperQuality from "./sections/SuperQuality";

const App = () => (
  <main className='relative'>
    {/* <Nav/> */}
    
    <section className=" padding-b xl:padding-1 wide:padding-r">
      <Hero/>
    </section>

    <section className="padding">
     < PopularProducts/>
    </section>
    <section className="padding">
      <SuperQuality/>
    </section>
    <section className="padding-x py-10">
      <Services/>
    </section>
    <section className="padding">
      <SpecialOffer/>
    </section>
    <section className="padding bg-pale-blue ">
      <CustomerReviews/>
    </section>
    <section className="padding-x py-16 w-full sm:py-32">
      <Subscribe/>
    </section>
    <section className="bg-black padding-x padding-t pb-8">
      <Footer/>
    </section>

  </main>
);

export default App;