import About from '@/components/About';
import Grid from '@/components/Grid';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
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
    </div>
  );
}
