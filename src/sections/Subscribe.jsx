import Button from "../components/Button"

const Subscribe = () => {

  return (
    <section
      id="contact-us"
      className="max-container flex justify-between items-center gap-10 max-lg:flex-col " //max-lg:flex-col: élements seront disposés en colonnes dans mobile devices <1024px
    >
      <h3 className="text-4xl leading-[68px] font-palanquin font-bold lg:max-w-md">
        Sign Up for <span className="text-coral-red">Updates</span> & Newletters
      </h3>
      {/* lg:max-w-[40%] + w-full: input et button s'étendent dans tout la partie droite de la section et ne prennent que 40% de cette partie droite But: Laissez un espace blanc entre le h3 et ce div (mettre border et border-black pour bien voir l'effet) */}
      {/* flex: pour que input et bouton soient next to each other et sm:border pour qu'il y ait une bordure à partir de 640px et + */}
      <div className="lg:max-w-[40%] w-full flex items-center gap-5 p-2.5 rounded-full sm:border sm:border-slate-gray max-sm:flex-col">
        <input className="input" type="text" placeholder="Your e-mail" /> {/* className: input est défini dans index.css et permet d'enelever les bordures de l'input pour donner un effet comme sur le site avec bouton à coté et bordure qui englove tout */}

        <div className="flex items-center max-sm:justify-center max-sm:w-full">
          <Button label="Sign Up" fullwidth />
        </div>
      </div>


    </section>

  )
}

export default Subscribe