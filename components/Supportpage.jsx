import React from 'react'
import {ArrowRightIcon, FlagIcon} from '@heroicons/react/24/solid'
import{CpuChipIcon, MagnifyingGlassIcon} from '@heroicons/react/24/solid'
import Image from "next/image";
import supImg from '../public/static/images/supportpageimage.jpg'

const Supportpage = () => {
  return (
    <div className='w-full h-screen mt-24'>
        <div className='w-full h=[700px] bg-gray-900/90 absolute'>
        <Image src={supImg} alt="/" className='w-full h-full object-cover mix-blend-overlay' />
        </div>

        {/* Support text overlapping the Support Image  */}
        <div className='max-w-[1240px] mx-auto text-white relative'>

            <div className='px-4 py-12'>
                <h2 className='text-3xl pt-8 font-semibold text-yellow-400
                 uppercase text-center'>Support</h2>
                <h3 className='text-5xl font-bold py-6 text-white text-center'>Finding the Right Team</h3>
                <p className='py-4 text-3xl text-slate-200 text-center'>We ensure that all landlords of subleased apartments comply to a strict and fair standard. We DO NOT tolerate any form of harassment or dishonerely conduct to any of our clients. Need any support? Have a complaint? Follow the links below for help! </p>
            </div>

            {/*Info Boxes */}
            {/*Initializing Div to create the column Formation of info boxes */}
            <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>

                {/*First Info Box*/}
                <div className='bg-white rounded-xl shadow-2xl'>
                    <div className='p-8'>
                        <CpuChipIcon className='w-16 p-4 bg-blue-500 text-white rounded-lg mt-[-4rem]'/>
                        <h3 className='font-bold text-2xl my-6'>Media Inquiries</h3>
                        <p className='text-gray-600 text-xl'>Get In touch with our instagram! Follow Link Below</p>
                    </div>
                    <div className='bg-slate-100 pl-8 py-4'>
                        <p className='flex items-center text-blue-500 hover:underline'>Contact Us <ArrowRightIcon className='w-5 ml-2 hover:underline'/></p>
                    </div>

                </div>

                {/*Second Info Box*/}
                <div className='bg-white rounded-xl shadow-2xl'>
                    <div className='p-8'>
                        <MagnifyingGlassIcon className='w-16 p-4 bg-blue-500 text-white rounded-lg mt-[-4rem]'/>
                        <h3 className='font-bold text-2xl my-6'>Technical Support</h3>
                        <p className='text-gray-600 text-xl'>Need help? Contact bruinsubleasing@gmail.com</p>
                    </div>
                    <div className='bg-slate-100 pl-8 py-4'>
                        <p className='flex items-center text-blue-500 hover:underline'>Contact Us <ArrowRightIcon className='w-5 ml-2 hover:underline'/></p>
                    </div>

                </div>

                 {/*Third Info Box*/}
                 <div className='bg-white rounded-xl shadow-2xl'>
                    <div className='p-8'>
                        <FlagIcon className='w-16 p-4 bg-blue-500 text-white rounded-lg mt-[-4rem]'/>
                        <h3 className='font-bold text-2xl my-6'>File a Report</h3>
                        <p className='text-gray-600 text-xl'>Have a complaint? Contact: bruinsubreportcenter@gmail.com</p>
                    </div>
                    <div className='bg-slate-100 pl-8 py-4'>
                        <p className='flex items-center text-blue-500 hover:underline'>Contact Us <ArrowRightIcon className='w-5 ml-2 hover:underline'/></p>
                    </div>

                </div>

            </div>
        </div>
    </div>
  )
}

export default Supportpage