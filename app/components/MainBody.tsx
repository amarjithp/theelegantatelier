import React from 'react'
import DiamondIcon from '@mui/icons-material/Diamond';
import Image from 'next/image'
import { MdDiamond } from 'react-icons/md'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

function MainBody() {
  return (
    <div className=''>
        <h1 className='whitespace-nowrap 
        text-black font-bold 
        font-Poppins text-4xl lg:text-8xl'>The Elegant Atelier</h1>
        <h2 className='font-Poppins font-semibold mt-2 lg:hidden'>-&gt; A place where you&apos;ll find fine art.</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 lg:mt-8">
            <div className="bg-white mt-5 lg:mt-0">
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
                    <svg className='w-10 h-10 mr-4 bg-headopt rounded-full p-1' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                    </svg>

                    
                    <MdDiamond className='w-10 h-10
                    bg-headopt 
                    rounded-full p-1 justify-center items-center'
                    />
                    

                    <div className='w-32 ml-4 
                    rounded-full flex 
                    justify-center items-center 
                    bg-gray-400'>
                        <p className='text-black'>Products</p>
                    </div>

                </div>

                <div className='mt-4 lg:h-60'>
                    <h2 className='font-Poppins font-bold text-lg'>Discover</h2>
                    <Image
                        className='w-full h-fit mt-2 lg:w-8/12 lg:h-2/3'
                        src="https://pyxis.nymag.com/v1/imgs/0e8/abc/4c1808fa323cce7b95569da349dff28654-ana-de-armas.1x.rsocial.w1200.jpg"
                        alt='Discover'
                        width={300}
                        height={100}
                    />

                    <div className='flex w-full h-fit 
                    items-center 
                    lg:w-8/12 mt-4
                    justify-between'
                    >
                        <p className=''>Ana de Armas</p>
                        <div className='flex'>
                          <AiOutlineLeft className='w-8 h-8 
                          p-1 
                          bg-headopt 
                          rounded-full'
                          />

                          <AiOutlineRight className='w-8 h-8 
                          ml-4 p-1 
                          bg-headopt 
                          rounded-full'
                          />
                        </div>

                    </div>

                </div>

            </div>



            <div className="mt-5 order-first lg:order-none lg:mr-10">
                <Image
                    className='object-fit w-full h-fit lg:h-446 rounded-3xl'
                    src="https://assets.vogue.in/photos/5f61e43c211a71e971416d87/2:3/w_1920,c_limit/JSA_OTH_OTH_NDC%202020%20Wedding%20Scene%20with%20Ana_BTS_IMG_03.jpg"
                    alt="Highlights of Products"
                    width={800}
                    height={800}
                />
            </div>
        </div>
    </div>
  )
}

export default MainBody