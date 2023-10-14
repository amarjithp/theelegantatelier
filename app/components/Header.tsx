import React from 'react'

function Header() {
  return (
    <div className='flex p-5'>
        {/* header__left */}
        <div>
            {/* logo */}
            <h1 className='text-black font-bold font-mono text-3xl'>The Elegant Atelier</h1>
        </div>

        {/* header__mid */}
        <div className='flex ml-20 p-1 rounded-full pr-10 items-center bg-slate-400 space-x-10'>
            <input className='text-black border-4 rounded-full solid pl-4' type="text" placeholder='Catalog Atelier'/>
            <h2>Gallery</h2>
            <h2>Payment</h2>
            <h2>Delivery</h2>
            <h2>Support</h2>
            <h2>Blog</h2>
            <h2>Contacts</h2>
        </div>

        <div className='flex ml-28 '>
            <svg  className="w-10 h-10 p-2 pt-2 bg-slate-400 rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd" />
            </svg>

            <svg className="w-10 h-10 ml-4 p-2 pt-2 bg-black text-white rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M1 1.75A.75.75 0 011.75 1h1.628a1.75 1.75 0 011.734 1.51L5.18 3a65.25 65.25 0 0113.36 1.412.75.75 0 01.58.875 48.645 48.645 0 01-1.618 6.2.75.75 0 01-.712.513H6a2.503 2.503 0 00-2.292 1.5H17.25a.75.75 0 010 1.5H2.76a.75.75 0 01-.748-.807 4.002 4.002 0 012.716-3.486L3.626 2.716a.25.25 0 00-.248-.216H1.75A.75.75 0 011 1.75zM6 17.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15.5 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            </svg>

        </div>
    </div>
  )
}

export default Header;