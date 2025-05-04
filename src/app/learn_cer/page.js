import React from 'react'
import Image from 'next/image'
const page = () => {
  return (
    <main>
     <div className='flex justify-center'>
      <div className='max-w-5xl mt-6 mb-6 border-2 p-8 rounded-2xl w-5xl bg-white text-black max-sm:ml-2 max-sm:mr-2 max-sm:w-md max-md:w-xl '>
      <p className='text-4xl font-bold'>Certificate</p>
      <div className='border-b-[#e2497e] border-b-6 w-47 rounded-3xl mt-2 mb-2'></div>
      <div className='grid grid-cols-1 gap-4 mt-2'>
        <div className='border-2 shadow-2xl p-4 rounded-2xl'>
           {/*item 1 */}
          <div className='mb-2 relative w-full h-150 max-sm:h-70 max-md:h-70'>
          <Image src='/cert-images/1.png' alt="game" layout='fill' objectFit='fill'/>
          </div>
          <div className='mt-2'>
          <p className='font-bold text-xl'>Game Jam 2025</p>
          <p>Game Jam 2025: The Chronicle of Klong San</p>
          <p>At FabLab Bangkok, KX Building</p>
          </div>
          
        </div>
        {/*item 2 */}
        <div className='border-2 shadow-2xl p-4 rounded-2xl '>
          <div className='mb-2 relative w-full h-150 max-sm:h-70 max-md:h-70'>
          <Image src='/cert-images/2.jpg' alt="game" layout='fill' objectFit='fill'/>
          </div>
          <div className='mt-2'>
          <p className='font-bold text-xl text-pretty'>Thailand Teaching Academy Award 2024 (11<sup>th</sup>)</p>
          <p>Silver medal award</p>
          <p>At Rajamangala University of Technology Isan Khon Kean Campus</p>
          </div>
        </div>
        {/*item 3 */}
        <div className='border-2 shadow-2xl p-4 rounded-2xl'>
          <div className='mb-2 relative w-full h-150 max-sm:h-70 max-md:h-70'>
          <Image src='/cert-images/3.png' alt="game" layout='fill' objectFit='fill'/>
          </div>
          <div className='mt-2'>
          <p className='font-bold text-xl'>Github for Developer</p>
          <p>BorntoDev Co., Ltd.</p>
          </div>
        </div>
      </div>
      </div>
      </div> 
    </main>
  )
}

export default page