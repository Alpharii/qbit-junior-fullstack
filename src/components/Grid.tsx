import React from 'react';

type FeatureBoxProps = {
  title: string;
  description: string;
  imageUrl?: string; // Menambahkan prop untuk image
};

const FeatureBox = ({ title, description, imageUrl }: FeatureBoxProps) => {
  return (
    <div className="p-4 max-w-sm">
      <div className="flex rounded-lg h-full dark:bg-gray-800 bg-teal-400 p-8 flex-col">
        <div className="flex items-center mb-3">
          <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>
          <h2 className="text-white dark:text-white text-lg font-medium">
            {title}
          </h2>
        </div>

        {/* Gambar yang ditambahkan di sini */}
        {imageUrl && (
          <img
            src={imageUrl}
            alt={title}
            className="m-4 p-4 w-10/12 h-auto object-cover rounded-lg"
          />
        )}

        <div className="flex flex-col justify-between flex-grow">
          <p className="leading-relaxed text-base text-white dark:text-gray-300">
            {description}
          </p>
          <a
            href="#"
            className="mt-3 text-black dark:text-white hover:text-blue-600 inline-flex items-center"
          >
            Learn More
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

const Grid = () => {
  const features = [
    {
      title: 'Bootcamp Fullstack Developer Javascript MERN',
      description:
        'Jadi Programmer handal dalam 16 minggu, belajar secara intensif untuk mempersiapkan kamu menjadi talenta digital siap kerja. Daftar Beasiswa JADIAN25 sekarang dan dapatkan potongan hingga Rp20 Juta. Kuota terbatas!',
      imageUrl: './exp1.svg', // Contoh URL gambar
    },
    {
      title: 'Bootcamp Backend Developer Golang',
      description:
        'Jadi Programmer handal dalam 16 minggu, belajar secara intensif untuk mempersiapkan kamu menjadi talenta digital siap kerja. Daftar Beasiswa JADIAN25 sekarang dan dapatkan potongan hingga Rp20 Juta. Kuota terbatas!',
      imageUrl: './exp4.svg', // Contoh URL gambar
    },
    {
      title: 'Bootcamp Data Science & Data Analyst',
      description:
        'Jadi Programmer handal dalam 16 minggu, belajar secara intensif untuk mempersiapkan kamu menjadi talenta digital siap kerja. Daftar Beasiswa JADIAN25 sekarang dan dapatkan potongan hingga Rp20 Juta. Kuota terbatas!',
      imageUrl: './exp3.svg', // Contoh URL gambar
    },
  ];

  return (
    <div className="flex flex-wrap justify-center bg-black py-10 md:py-5">
      {features.map((feature, index) => (
        <FeatureBox
          key={index}
          title={feature.title}
          description={feature.description}
          imageUrl={feature.imageUrl}
        />
      ))}
    </div>
  );
};

export default Grid;
