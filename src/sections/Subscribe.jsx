import Button from "../components/Button";

const Subscribe = () => {
  return (
    <section
      id="contact-us"
      className="max-container flex items-center justify-between gap-10 max-lg:flex-col " //max-lg:flex-col: élements seront disposés en colonnes dans mobile devices <1024px
    >
      <h3 className="font-palanquin text-4xl font-bold leading-[68px] lg:max-w-md">
        Sign Up for <span className="text-coral-red">Updates</span> & Newletters
      </h3>
      {/* lg:max-w-[40%] + w-full: input et button s'étendent dans tout la partie droite de la section et ne prennent que 40% de cette partie droite But: Laissez un espace blanc entre le h3 et ce div (mettre border et border-black pour bien voir l'effet) */}
      {/* flex: pour que input et bouton soient next to each other et sm:border pour qu'il y ait une bordure à partir de 640px et + */}
      <div className="flex w-full items-center gap-5 rounded-full p-2.5 max-sm:flex-col sm:border sm:border-slate-gray lg:max-w-[40%]">
        <input className="input" type="text" placeholder="Your e-mail" />{" "}
        {/* className: input est défini dans index.css et permet d'enelever les bordures de l'input pour donner un effet comme sur le site avec bouton à coté et bordure qui englove tout */}
        <div className="flex items-center max-sm:w-full max-sm:justify-center">
          <Button label="Sign Up" fullwidth />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
