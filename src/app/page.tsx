import About from '@/components/About';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Wavy from '@/components/Wavy';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Wavy />
      <About />
    </div>
  );
}
