import Image from 'next/image'

const Hero = () => {
  return (
    <div className='bg-blue-200 text-black'>
      <h1>Coding Academy</h1>
      <h2>From Zero to Expert: Dive into Coding with Industry Professionals</h2>
      <Image src="/heroes.png" alt="hero image" width={500} height={300} />
      </div>
  )
}

export default Hero
