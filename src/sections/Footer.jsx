import { copyrightSign } from '../assets/icons'
import { footerLogo } from '../assets/images'
import { footerLinks, socialMedia } from '../constants'

const Footer = () => {
  return (
    <footer className="max-container ">

      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          {/* href="/" means home  */}
          <a href="/">
            <img src={footerLogo} alt="Nike Logo" width={150} height={46} />
          </a>
          <p className='text-white-400 mt-6 text-base leading-7 font-mono sm:max-w-sm'>Find the perfect Shoe at your nearest Nike Store</p>
          <div className='flex items-center gap-5 mt-8'>
            {socialMedia.map((e) => (
              //Pour faire apparaitre les icones il faut donner un bg-white et non un text-white
              <div className='bg-white rounded-full flex justify-center items-center w-12 h-12'>
                <img src={e.src} alt={e.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>

        <div className='flex flex-1 justify-between gap-20 flex-wrap lg:gap-10'>
          {footerLinks.map((e) => (
            <div key={e}>
              <h4 className='text-white font-montserrat text-2xl leading-normal font-medium mb-6'>{e.title}</h4>
              {/* Comme il y y a un array links, dans l'array footerLinks: on va mapper dessus */}
              <ul>
                {e.links.map((e) => (
                  <li key={e.name} className='mt-3 text-white-400 text-base leading-normal  hover:text-slate-gray cursor-pointer'>
                    <a>{e.name}</a>
                  </li>
                ))}

              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* max-sm= max-640px = on mobile devices */}
      <div className='flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center'>
        <div className='flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer'>
          <img src={copyrightSign} alt="copyright sign" width={20} height={20} className='m-0 rounded-full' />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className='font-montserrat cursor-pointer'> Terms & Conditions</p>
      </div>
    </footer>
  )
}

export default Footer