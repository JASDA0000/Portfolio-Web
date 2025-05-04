import React from 'react'
import Image from 'next/image'
const Footer = () => {
  return (
    <footer className='flex'>
        <div className='bg-[radial-gradient(circle,rgba(63,94,251,1)_0%,rgba(252,70,107,1)_100%)] h-auto w-full p-2'>
            <div className='flex flex-col justify-center'>
              <div className='flex justify-center space-x-2'>
                <a href='https://github.com/JASDA0000'>
                <Image src={'/icon/GitHub.png'} width={16} height={16} alt='logo-github'/>
                </a>
                <a href='https://linkedin.com/in/jasda0000'><Image src={'/icon/LinkedIn.png'} width={16} height={16} alt='logo-LinkedIn'/>
                  </a>
                </div>
                <p className='text-center'>Made with Next.js and Tailwind</p>
              <p className='text-center'>
                © {new Date().getFullYear()} Jasda. All rights reserved.🐻
                </p>
              </div>
</div>
    </footer>
  )
}

export default Footer