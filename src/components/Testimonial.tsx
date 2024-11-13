'use client';

import React from 'react';
import { InfiniteMovingCards } from './ui/InfiniteMovingCard';

// Data Testimonials
const testimonials = [
  {
    quote:
      'Perjuangan saya di bootcamp membuahkan hasil karena setelah lulus saya bisa mendapat pekerjaan yang saya impikan dan bisa mengangkat taraf hidup saya menjadi lebih baik hingga bisa membantu perekonomian keluarga., Tadinya saya berprofesi sebagai ojek online. Namun, saya memiliki impian untuk menjadi Programmer sampai akhirnya saya memutuskan masuk bootcamp Hacktiv8.',
    name: 'Michael Johnson',
    title: 'Director of AlphaStream Technologies',
  },
  {
    quote:
      'Perjuangan saya di bootcamp membuahkan hasil karena setelah lulus saya bisa mendapat pekerjaan yang saya impikan dan bisa mengangkat taraf hidup saya menjadi lebih baik hingga bisa membantu perekonomian keluarga., Tadinya saya berprofesi sebagai ojek online. Namun, saya memiliki impian untuk menjadi Programmer sampai akhirnya saya memutuskan masuk bootcamp Hacktiv8.',
    name: 'Michael Johnson',
    title: 'Director of AlphaStream Technologies',
  },
  {
    quote:
      'Perjuangan saya di bootcamp membuahkan hasil karena setelah lulus saya bisa mendapat pekerjaan yang saya impikan dan bisa mengangkat taraf hidup saya menjadi lebih baik hingga bisa membantu perekonomian keluarga., Tadinya saya berprofesi sebagai ojek online. Namun, saya memiliki impian untuk menjadi Programmer sampai akhirnya saya memutuskan masuk bootcamp Hacktiv8.',
    name: 'Michael Johnson',
    title: 'Director of AlphaStream Technologies',
  },
  {
    quote:
      'Perjuangan saya di bootcamp membuahkan hasil karena setelah lulus saya bisa mendapat pekerjaan yang saya impikan dan bisa mengangkat taraf hidup saya menjadi lebih baik hingga bisa membantu perekonomian keluarga., Tadinya saya berprofesi sebagai ojek online. Namun, saya memiliki impian untuk menjadi Programmer sampai akhirnya saya memutuskan masuk bootcamp Hacktiv8.',
    name: 'Michael Johnson',
    title: 'Director of AlphaStream Technologies',
  },
  {
    quote:
      'Perjuangan saya di bootcamp membuahkan hasil karena setelah lulus saya bisa mendapat pekerjaan yang saya impikan dan bisa mengangkat taraf hidup saya menjadi lebih baik hingga bisa membantu perekonomian keluarga., Tadinya saya berprofesi sebagai ojek online. Namun, saya memiliki impian untuk menjadi Programmer sampai akhirnya saya memutuskan masuk bootcamp Hacktiv8.',
    name: 'Michael Johnson',
    title: 'Director of AlphaStream Technologies',
  },
];

// InfiniteMovingCards Component (assuming it's imported from somewhere)

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-slate-600">
      <h1 className="heading">
        Kind words from
        <span className="text-purple-400"> satisfied clients</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div
          // remove bg-white dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
