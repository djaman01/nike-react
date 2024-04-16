
//Carte miniature pour les chaussures
const ShoeCard = ({ imgURL, changeBigShoeImg, bigShoeImg }) => {

  // bigShoe= 2eme propertY des objets de l'array shoes dans index.js/Dans Hero.jsx on va mapper sur l'array shoes
  //Dans Hero.jsx => props: imgURL={e} / bigShoeImg= la state bigShoeImg qui a pour valeur par défaut bigShoe1 / changeBigShoeIgh est une function qui appelle setBigShoeImg(element) donc element va etre = imgURL.bigShoe = e.bigShoe = image miniature
  //Donc  e.bigShoe = img miniature != bigShoeImg=bigShoe 1 alors change l'image de la grande chausse avec l'image de la miniature 
  const handleClick = () => {
    (bigShoeImg != imgURL.bigShoe) && changeBigShoeImg(imgURL.bigShoe)
  }


  return (
    // Condition si on clique sur miniature dont img==bighShoeImg alors bordure minature sera couleur corail sinon transparente
    <div
      className={`border-2 rounded-xl cursor-pointer max-sm:flex-1 ${bigShoeImg === imgURL.bigShoe ? 'border-coral-red' : 'border-transparent'}`}
      onClick={handleClick} //!!!!! onClick avec la function handleClick au-dessus
    >

      <div className='flex justify-center items-center bg-card bg-center bg-cover rounded-xl sm:w-40 sm:h-40 max-sm:p-4'>
        <img
          src={imgURL.thumbnail}
          alt="Shoe Collection"
          width={127}
          height={103}
          className='object-contain'
        />
      </div>

    </div >
  )
}

export default ShoeCard