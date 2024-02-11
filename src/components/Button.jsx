
const Button = ({label, iconURL, fullWidth}) => {
  return (
    //${fullWidth && 'w-full'} veut dire que si le components a un props fullWidth activé, alors on lui donne le style w-full
    <button className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red rounded-full text-white border-coral-red ${fullWidth && 'w-full'}`}>
      {label}
      {/* Condition pour ne montrer une cicone dans le button, que s'il y a une icone dispo */}
      {iconURL&&<img 
      src={iconURL} 
      alt="Right Arrow icon"
      className="ml-2 rounded-full w-5 h-5"
      />}
    </button>
  )
}

export default Button