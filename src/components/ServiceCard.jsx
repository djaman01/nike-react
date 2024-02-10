
// grâce au spread operator utilisé dans Services.jsx lors de l'appel de ce component, on peut destructurer les properties de l'objet de l'array dans la variable services de index.js
const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    //shadow-3xl est ce qui permet de surélever la card est de lui donner une ombre
    <div className="flex-1 w-full rounded-[20px] shadow-3xl px-10 py-16">

      <div className="w-11 h-11 flex justify-center items-center bg-coral-red rounded-full">
        <img src={imgURL} alt={label} width={24} height={24} />
      </div>

      <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold">{label}</h3>
      {/* break-words: applies overflow-wrap to words, not letters so that the world stay in 1 line */}
      <p className="mt-3 font-montserrat text-lg leading-normal text-slate-gray break-words">{subtext}</p>


    </div>
  )
}

export default ServiceCard