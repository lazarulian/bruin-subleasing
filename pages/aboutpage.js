import React from 'react'
import {CloudIcon, FlagIcon} from '@heroicons/react/24/solid'
import{ShieldCheckIcon, AcademicCapIcon} from '@heroicons/react/24/solid'
import Image from "next/image";
import supImg from '../public/static/images/gaileyheights.jpg'

function aboutpage () {
  return (
    <div className='w-full h-full mt-3'>
        <div className='w-screen h=screen absolute'>
        <Image src={supImg} alt="/" className='w-screen h-screen object-cover mix-blend-overlay' />
        </div>

        {/* About Text Box  */}
        <div className='flex flex-rows max-w-[300px] mx-auto text-white relative'>
        <CloudIcon className='w-16  text-white'/>
            <div className='flex flex-col py-4 md:min-w-[200px]
                mx-1 transform px-2
                 rounded-xl text-center'>
                    <p className='font-medium text-5xl text-white'>About Us</p>    
            </div>
        </div>

        {/**InfoBoxes */}
         <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-6 gap-y-4 px-4 sm:pt-2 text-black'>
                {/*First Info Box*/}
                <div className='bg-white mb-10 transition duration-500 hover:scale-105  my-3 bg-opacity-90 hover:bg-opacity-100 rounded-xl shadow-2xl'>
                    <div className='p-8'>
                        <AcademicCapIcon className=' w-12 p-1 bg-blue-400 text-white rounded-lg mt-[-4rem]'/>
                        <h3 className='font-bold text-2xl text-yellow-500 text-center my-4'>Working For Our Community</h3>
                        <p className='text-gray-800 px-2 text-center text-xl '>We believe in the importance of community and collaboration. We recognize that students are faced with a multitude of challenges during their college experience, including financial pressures, and social isolation. Our platform seeks to address these challenges by providing a space where students can come together and support each other.</p>
                    </div>
                </div>

                {/*Second Info Box*/}
                <div className='bg-white mb-20 transition duration-500 hover:scale-105 hover:bg-opacity-100 rounded-xl bg-opacity-90 shadow-2xl'>
                    <div className='px-4'>
                        <h3 className=' py-4 font-bold text-2xl text-blue-400 text-center '>Mission Statement</h3>
                        <p className='text-gray-800 px-2 text-xl text-center'>Our mission is to provide a platform for students who are looking to sublease their apartments to other students. We understand that the process of finding a subletter can be time-consuming, stressful, and often confusing. Therefore, we aim to simplify the process and create a safe and efficient space for students to find their ideal subletter.</p>
                    </div>
                </div>

                 {/*Third Info Box*/}
                 <div className='bg-white rounded-xl transition mb-10 duration-500 hover:scale-105 hover:bg-opacity-100 bg-opacity-90 my-3 shadow-2xl'>
                    <div className='p-8'>
                        <ShieldCheckIcon className='w-12 p-1 bg-blue-400 text-white rounded-lg mt-[-4rem]'/>
                        <h3 className='font-bold text-center text-yellow-500 text-2xl my-4'>We Strive For Safety</h3>
                        <p className='text-gray-800 px-2 text-center text-xl'>Our platform offers a user-friendly interface that allows students to easily navigate the subleasing process. We prioritize the safety of our users and ensure that all subletters are verified before being allowed to access the platform. And we vow to uphold trust and transparency in any subleasing agreement, to form a safer and secure enviornment</p>
                    </div>
                </div>

            </div>



    </div>
  );
}

export default aboutpage;