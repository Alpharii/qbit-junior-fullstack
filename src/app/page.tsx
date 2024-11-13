import About from '@/components/About';
import Footer from '@/components/Footer';
import Grid from '@/components/Grid';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Testimonials from '@/components/Testimonial';
import Wavy from '@/components/Wavy';
import WavySecond from '@/components/WavySecons';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Wavy className="bg-black" fillColor="#475569" />
      <About />
      <WavySecond className="bg-black" fillColor="#475569" />
      <Grid />
      <Wavy className="bg-black" fillColor="#475569" />
      <Testimonials />
      <WavySecond className="bg-black" fillColor="#475569" />
      <Footer />
    </div>
  );
}
