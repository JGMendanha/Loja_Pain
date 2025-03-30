import Link from 'next/link'
import logo from '@/app/images/logo.png';

function Navbar(){
    return(
        <nav className='fixed 
        top-0 
        w-full 
        flex items-center 
        py-2 px-8 z-50
        justify-between 
        bg-slate-950
        text-gray-100'>

          <Link className='text-nd h-12 font-extrabold
          flex items-center' href="/">

          <img
            src={logo.src} // Acessa a URL processada
            alt="Logo Pain Gaming"
            className="h-8 mr-2"
          />
            paiN Gaming

          </Link>

        </nav>
    )
}

export default Navbar