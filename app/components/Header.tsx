'use client';
import React, { useState } from 'react'
import { MdSegment } from 'react-icons/md'

function Header() {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  return (
    <>
    <div className='flex justify-between'>
        {/* header__left */}
        <div>
            {/* logo */}

            {/* <h1 className='hidden lg:flex whitespace-nowrap 
            text-black font-bold 
            font-Poppins text-xl'>The Elegant Atelier</h1> */}
            <h1 className='whitespace-nowrap 
            text-black font-bold 
            font-Poppins text-xl'>tela</h1>
        </div>

        {/* header__mid */}
        <div className='hidden lg:flex  border-4 border-headopt rounded-full bg-headopt w-2/3'>
            <input className='pl-4 pr-16 rounded-full outline-none' type="text" placeholder='Catalog Atelier'/>
                <div className='flex w-full items-center justify-evenly'>
                    <h2><a href="">Products</a></h2>
                    <h2><a href="">About Us</a></h2>
                    <h2><a href="">Delivery</a></h2>
                    <h2><a href="">Support</a></h2>
                    <h2><a href="">Blog</a></h2>
                    <h2><a href="">Contact Us</a></h2>
                </div>
                
            
        </div>

        <div className='flex align-middle'>
            <svg  className="w-10 h-10 p-2 mr-3 bg-headopt rounded-full justify-end" 
                onClick={() => setIsSearchVisible(!isSearchVisible)}
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd" />
            </svg>
            
            <div onClick={() => console.log("clicked opt")}>
                <MdSegment className='w-10 h-10 p-2 bg-headopt rounded-full' />
            </div>
        </div>
        
    </div>

    <div className='mx-5'>
    {isSearchVisible && <input className='lg:hidden border-headopt pl-9 border-4 rounded-full border-solid 
    w-full flex align-middle mt-2 ' 
    type="text" 
    placeholder='Catalog Atelier'/>}
    </div>  
    
    </>

  )
}

export default Header;