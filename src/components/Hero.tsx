'use client';
import Image from 'next/image';
import { TextGenerateEffect } from './ui/TextGeneratedEffect';
import MagicButton from './MagicButton';

const Hero = () => {
  const handleScroll = (event: React.MouseEvent) => {
    event.preventDefault();
    const target = document.querySelector('#about');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="bg-black text-white flex flex-col md:flex-row items-center justify-center p-8 md:p-16 pt-32">
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
        <button onClick={handleScroll}>
          <MagicButton title="Get Started" position="right" />
        </button>
      </div>
      <div className="mt-8 md:mt-0 md:ml-8 md:w-1/2 flex justify-center">
        <Image
          src="/pyro.jpg"
          alt="hero image"
          width={500}
          height={300}
          className="rounded-lg w-8/12"
        />
      </div>
    </div>
  );
};

export default Hero;
