import ServiceCard from "../components/ServiceCard"
import { services } from "../constants"

const Services = () => {

  return (
    // flex-wrap permet au contenu de s'adapter si l'écran rétrécit
    <section className="max-container flex justify-center gap-9 flex-wrap">
{services.map((element)=>(
  <ServiceCard key={element.label} {...element} />
))}
    </section>
  )
}

export default Services