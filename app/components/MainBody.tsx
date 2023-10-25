import React from 'react'
import DiamondIcon from '@mui/icons-material/Diamond';

function MainBody() {
  return (
    <div className='bg-green-400'>
        <h1 className='whitespace-nowrap 
        text-black font-bold 
        font-Poppins text-8xl'>The Elegant Atelier</h1>

        <div className="grid grid-cols-2 mt-14">
            <div className="bg-white">
                <h2 className='whitespace-nowrap 
                text-black 
                font-Poppins 
                font-bold 
                text-3xl'>What do we do?
                </h2>

                <p className='mt-5 text-black font-Poppins font-semibold'>We&apos;re
                just a few people <br></br> who create elegant<br></br>
                crafts & jewellery</p>
                <div className='flex mt-8'>
                    <svg className='w-10 h-10 mr-4 bg-green-400 rounded-full p-1' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                    </svg>

                    <DiamondIcon className='w-10 h-10 
                    bg-green-400 
                    rounded-full p-1'/>

                    <div className='w-32 ml-4 rounded-full flex justify-center items-center bg-yellow-400'>
                        <p>Products</p>
                    </div>

                </div>

            </div>



            <div className="mr-10">
                <img className='object-fit w-full h-446 rounded-3xl h-fit'
                src='https://assets.vogue.in/photos/5f61e43c211a71e971416d87/2:3/w_1920,c_limit/JSA_OTH_OTH_NDC%202020%20Wedding%20Scene%20with%20Ana_BTS_IMG_03.jpg'
                alt="test" />
            </div>
        </div>
    </div>
  )
}

export default MainBody