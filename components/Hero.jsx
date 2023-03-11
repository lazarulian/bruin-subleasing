import React from 'react'
import {
    ListBulletIcon,
    ShieldCheckIcon,
    PencilIcon
} from '@heroicons/react/24/solid'
import Image from "next/image";
import bigImage from '../public/static/images/uclahousing.jpeg'

const Hero = () => {
    return(
        <div className= 'w-full h-screen bg-zinc-200 flex flex-col justify-between'>
            <div className = 'grid md:grid-cols-2 max-w-[1240px] m-auto'>
                <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                    <p className ='text-2xl'>Subleasing Made Easy</p>
                    <h1 className='py-3 text-5xl md:text-7xl font-bold text-gray-900'>UCLA Bruin Subleasing</h1>
                    <p className='text-2xl'>Subleasing, Renting, All in One Place.</p>
                    <button className='py-3 px-6 sm:w-[60%] my-4 text-white border bg-blue-500 border-blue-500 hover:bg-transparent hover:text-blue-500 rounded-md' >Get Started </button>
                </div>

                {/*Image Div*/}
                <div>
                    <Image src={bigImage} alt="/" className=' w-full rounded-xl drop-shadow-2xl'/>
                </div>

                {/* Div To add Spacing Between Bottom Bar and Photo */}
                <div className=' py-20 sm:py-4'></div>

                {/*Bottom Most Border: div contains Border Outline*/}
                <div className=' absolute flex flex-col py-4 md:min-w-[760px] bottom-[5%]
                mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200 
                border border-slate-300 rounded-xl text-center shadow-xl'>
                    <p>Leasing Services</p>

                    {/*Assigning Icons to bottom most Topics*/}
                    <div className='flex justify-between flex-wrap px-4'>
                        <p className='flex px-2 py-2 text-slate-500' ><ListBulletIcon className='h-6 text-blue-500' /> Safe & Convenient Communication </p>
                        <p className='flex px-3 py-2 text-slate-500' ><PencilIcon className='h-6 text-blue-500' /> Bruin Oriented Leasing </p>
                        <p className='flex px-2 py-2 text-slate-500' ><ShieldCheckIcon className='h-6 text-blue-500' /> Transparency Guranteed </p>
                    </div>
                </div>


            </div>
        </div>

    )
}


export default Hero
