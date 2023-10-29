import React from 'react'
import MainBody from './MainBody'
import Sidebar from './Sidebar'

function Body() {
  return (
    // body
    <div className='flex mt-4 lg:mt-10'>
        <div className="w-full lg:w-10/12 lg:mr-14">
          <MainBody />
        </div>
        <div className="hidden lg:flex lg:w-2/12">
          <Sidebar />
        </div>
    </div>
    // sidebar
  )
}

export default Body