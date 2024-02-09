import React from 'react'

const ShoeCard = ({ imgURL, changeBigShoeImg, bigShoeImg }) => {

  //Clique sur miniature change grande image shoe avec image shoe miniature
  const handleClick = () => {
    (bigShoeImg != imgURL.bigShoe) && changeBigShoeImg(imgURL.bigShoe)
  }

  return (
    // Condition si on clique sur miniature dont img==bighShoeImg alors bordure minature sera couleur corail sinon transparente
    <div
      className={`border-2 rounded-xl cursor-pointer max-sm:flex-1 ${bigShoeImg === imgURL.bigShoe ? 'border-coral-red' : 'border-transparent'}`}
      onClick={handleClick}
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