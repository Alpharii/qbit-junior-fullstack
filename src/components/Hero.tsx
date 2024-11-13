import Image from 'next/image';

const Hero = () => {
  return (
    <div className="bg-indigo-300 text-black flex flex-col md:flex-row items-center justify-center p-8 md:p-16">
      <div className="text-center md:text-left md:w-1/2 space-y-4">
        <h1 className="text-3xl md:text-5xl font-bold">
          Kuasai Skill Digital Raih Suksesmu
        </h1>
        <h2 className="text-sm md:text-2xl text-gray-700">
          Mulai karirmu di bidang IT dengan program training bootcamp kami
          selama 13 minggu dan dapatkan fasilitas koneksi kerja seumur hidup ke
          1.000+ perusahaan hiring partner Purwadhika yang tersebar di Asia.
        </h2>
        <a href="#about">
          <button className="mt-4 bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition duration-300 text-xl">
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
