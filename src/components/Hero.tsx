import Image from 'next/image';
import { TextGenerateEffect } from './ui/TextGeneratedEffect';

const Hero = () => {
  return (
    <div className="bg-black text-white flex flex-col md:flex-row items-center justify-center p-8 md:p-16">
      <div className="text-center md:text-left md:w-1/2 space-y-4">
        <TextGenerateEffect
          words="Kuasai Skill Digital Dan Raih Suksesmu"
          className="text-[40px] md:text-5xl lg:text-6xl text-white"
        />
        <h2 className="text-sm md:text-2xl">
          Mulai karirmu di bidang IT dengan program training bootcamp kami
          selama 13 minggu dan dapatkan fasilitas koneksi kerja seumur hidup ke
          1.000+ perusahaan hiring partner Purwadhika yang tersebar di Asia.
        </h2>
        <a href="#about">
          <button className="mt-4 bg-blue-800 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition duration-300 text-xl">
            Get Started
          </button>
        </a>
      </div>
      <div className="mt-8 md:mt-0 md:ml-8 md:w-1/2 flex justify-center">
        <Image src="/heroes.png" alt="hero image" width={500} height={300} />
      </div>
    </div>
  );
};

export default Hero;
