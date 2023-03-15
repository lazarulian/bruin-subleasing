import React from 'react'

const Infotab = () => {
  return (
    <div className='w-full my-32'>
        <div className='max-w-[1240px] mx-auto'>
            <div className='text-center mb-5'>
                <h2 className='text-5xl font-bold'>Operated for and by UCLA Students</h2>
                <p className='text-3xl py-6 text-gray-500'>To create a free and subsidized way to sublease in UCLA to other current bruins and UCLA staff. And to counteract the lack of public domain and communication when apartment hunting. </p>

            </div>
            <div className='grid md:grid-cols-3 gap-10 px-2 text-center max-w-6xl mx-auto'>
                <div className='border py-8 rounded-xl shadow-xl'>
                    <p className='text-6xl font-bold text-blue-500 mt-2'>100%</p>
                    <p className='text-gray-400 mt-2'>Bruin Run</p>
                </div>
                <div className='border py-8 rounded-xl shadow-xl'>
                    <p className='text-6xl font-bold text-blue-500 mt-2'>24/7</p>
                    <p className='text-gray-400 mt-2'>Support</p>
                </div>
                <div className='border py-8 rounded-xl shadow-xl'>
                    <p className='text-6xl font-bold text-blue-500 mt-2'>FREE</p>
                    <p className='text-gray-400 mt-2'>For all Alumni and UCLA Students</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Infotab