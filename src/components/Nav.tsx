import React from 'react'
import Image from 'next/image'

const Nav = () => {
  return (
    <div className='bg-black p-4 pl-10 hidden md:flex'>
      <Image src="/exp1.svg" alt="logo" width={70} height={70}/>
      <h1 className='text-white font-extrabold text-2xl ml-4 justify-center flex items-center'>Coding Camp Academy</h1>
    </div>
  )
}

export default Nav
