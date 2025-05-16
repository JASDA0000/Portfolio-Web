import React from 'react'
import Navbar from '../../../components/Navbar'
import Image from 'next/image'
import LinkButton from '../../../components/LinkButton'

const page = () => {
  return (
    <main>
     <div className='flex flex-col min-h-screen'>
      <div className='flex-1 flex justify-center items-start'>
      <div className='mt-6 mb-6 border-2 p-8 rounded-2xl w-5xl bg-white text-black max-sm:w-md ml-6 mr-6 max-md:w-xl'>
      <p className='text-4xl font-bold'>Portfolio</p>
      <div className='border-b-purple-500 border-b-6 w-40 rounded-3xl mt-2 mb-2'></div>
      <div className='grid grid-cols-3 gap-4 mt-2 max-sm:grid-cols-1 max-md:grid-cols-1'>
        <div className='border-2 shadow-2xl p-4 rounded-2xl'>
           {/*item 1 */}
          <div className='mb-2 relative w-full h-50'>
          <Image src='/images/ch.png' alt="game" layout='fill' objectFit='cover' />
          </div>
          <div className='mt-2'>
          <p className='font-bold text-xl'>Chemistry Matching</p>
          <p>Puzzle Game</p>
          <p>Game Developer</p>
          <p>Framework</p>
          </div>
          <div>
            <Image src='/icon/unity.png' width={32} height={32} alt='logo-unity'></Image>
          </div>
          {/* button */}
          <div className='flex justify-center'>
          <LinkButton href="https://jasda0000.itch.io/chemistrymatching">See More.</LinkButton>
          </div>
        </div>
        {/*item 2 */}
        <div className='border-2 shadow-2xl p-4 rounded-2xl'>
        <div className='relative w-full h-50 mb-2'>
          <Image src='/images/klongsan (1).jpg' alt="game" layout='fill' objectFit='contain' />
          </div>
          <div className='mt-2'>
          <p className='font-bold text-base'>The Whispering Legacy of Khlongsan</p>
          <p>Puzzle Game, Adventure Game</p>
          <p>Game Developer</p>
          <p>Framework</p>
          </div>
          <div>
            <Image src='/icon/unity.png' width={32} height={32} alt="logo-unity" />
          </div>
           {/* button */}
           <div className='flex justify-center'>
          <LinkButton href="https://kammam.itch.io/thewhisperinglegacyofkhlongsan">See More.</LinkButton>
          </div>
        </div>
         {/*item 3 */}
        <div className='border-2 shadow-2xl p-4 rounded-2xl'>
        <div className='relative w-full h-50 mb-2'>
          <Image src='/images/scratch.png' alt="web" layout='fill' objectFit='contain'  />
          </div>
          <p className='font-bold text-xl'>Stlearing</p>
          <p>Web Developer</p>
          &nbsp;&nbsp;
          <p>Framework</p>
          <div className='flex'>
            <Image src='/icon/firebase.png' width={32} height={32} alt="logo-firebase" />
            <Image src='/icon/bootstrap.png' width={32} height={32} alt="logo-bootstrap" />
          </div>
          {/* button */}
          <div className='flex justify-center'>
          <LinkButton href="https://stlearing.web.app/index.htm">See More.</LinkButton>
          </div>
        </div>
      </div>
      </div>
      </div> 
      </div>
    </main>
  )
}

export default page