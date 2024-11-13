import About from '@/components/About';
import Footer from '@/components/Footer';
import Grid from '@/components/Grid';
import Hero from '@/components/Hero';
import Nav from '@/components/Nav';
import Testimonials from '@/components/Testimonial';
import { FloatingNav } from '@/components/ui/FloatingNavbar';
import Wavy from '@/components/Wavy';
import WavySecond from '@/components/WavySecons';

export default function Home() {
  return (
    <div>
      <FloatingNav
        navItems={[
          { name: 'About', link: '#about' },
          { name: 'Projects', link: '#projects' },
          { name: 'Testimonials', link: '#testimonials' },
          { name: 'Contact', link: '#contact' },
        ]}
      />
      <Nav />
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
