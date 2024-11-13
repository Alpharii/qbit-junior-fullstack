'use client';
import React from 'react';
import Image from 'next/image';
import MagicButton from './MagicButton';

const About = () => {
  const handleScroll = (event: React.MouseEvent) => {
    event.preventDefault();
    const target = document.querySelector('#bootcamp');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="about" className="bg-slate-600 text-black -mt-4 pb-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
        {/* Image Section */}
        <div className="flex justify-center md:w-1/2">
          <Image
            src="/people-coding.jpg"
            alt="hero image"
            width={400}
            height={300}
            className="rounded-lg w-4/6"
          />
        </div>

        {/* Text Section */}
        <div className="text-center md:text-left md:w-1/2 space-y-4 text-white">
          <h1 className="text-4xl font-bold">About Us</h1>
          <h2 className="text-lg md:text-xl text-white leading-relaxed">
            Wujudkan impian jadi Programmer tanpa pusing biaya. Belajar di
            Bootcamp Full Stack JavaScript & Data Science bisa bayar setelah
            lulus hingga dapat kerja!
          </h2>
          <button onClick={handleScroll}>
            <MagicButton title="Daftar Sekarang" position="right" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
