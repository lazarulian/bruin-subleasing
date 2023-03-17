import React from 'react'
import {
    ListBulletIcon,
    ShieldCheckIcon,
    PencilIcon
} from '@heroicons/react/24/solid'
import Image from "next/image";
import Link from "next/link";
import bigImage from '../public/static/images/uclahousing.jpeg'

const Hero = () => {
    return(
        <div className= ' w-full h-screen flex flex-col justify-between'>
            <div className = 'grid md:grid-cols-2 max-w-[1240px] m-auto'>
                <div className='mb-30flex  md:ml-10 flex-col justify-center md:items-start w-full px-2 py-8'>
                    <p className ='text-2xl'>Subleasing Made Easy</p>
                    <h1 className='py-3 text-5xl md:text-7xl font-bold text-gray-900'>UCLA Bruin Subleasing</h1>
                    <p className='text-2xl'>Subleasing, Renting, All in One Place.</p>
                    <Link href={`/listings`}>
                        <button className='py-3 px-6 sm:w-[60%] my-4 text-white border bg-blue-500 border-blue-400 hover:bg-transparent hover:text-blue-400 rounded-md' >Get Started </button>
                    </Link>
                </div>

                {/*Image Div*/}
                <div className='mb-40 m'>
                    <Image src={bigImage} alt="/" className=' w-[600px] rounded-xl shadow-2xl '/>
                </div>

                {/*Bottom Most Border: div contains Border Outline*/}
                <div className=' mt-4 absolute flex flex-col py-4 md:min-w-[760px] bottom-[5%]
                                mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-gray-900 
                                border border-slate-300 rounded-xl text-center shadow-xl'>
                    <p className='text-white mb-4 text-xl'>Our Leasing Services</p>

                    {/*Assigning Icons to bottom most Topics*/}
                    <div className='grid grid-cols-3 gap-4'>
                        <div className='flex flex-col items-center'>
                            <ListBulletIcon className='h-6 text-blue-400 mb-2' />
                            <p className='text-white'>Safe Communication</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <PencilIcon className='h-6 text-blue-400 mb-2' />
                            <p className='text-white'>Bruin Oriented Leasing</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <ShieldCheckIcon className='h-6 text-blue-400 mb-2' />
                            <p className='text-white'>Transparency Guaranteed</p>
                        </div>
                    </div>
                </div>


            </div>
        </div>

    )
}


export default Hero
