import React from 'react'
import { appleImg, bagImg, searchImg } from '../utils'
import { navLists } from './constants'


const Navbar = () => {
  return (
    <header className='w-full py-5 sm:px-10 px-5 flex justify-between items-center'>
  <nav className='flex  w-full max-w-6xl justify-between mx-auto'>
<picture>
<img src={appleImg} alt='Apple' width={14} height={18}/>
</picture>

<div className='flex justify-center max-sm:hidden '>
{navLists.map((nav)=>(
 <div key={nav} className='px-5 text-gray-400 hover:text-white transition-all text-sm '>
{nav}
 </div>
))}
</div>
<div className='flex gap-x-6'>
<img src={searchImg} alt='search' width={18} height={18}/>
<img src={bagImg} alt='bag' width={18} height={18}/>
</div>

  </nav>
  
    </header>
  )
}

export default Navbar