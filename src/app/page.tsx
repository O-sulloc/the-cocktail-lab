import Navbar from "@/components/Navbar";
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import Features from '@/components/Features';
import Services from '@/components/Services';
import Options from '@/components/Options';
import Brands from '@/components/Brands';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Products />
      <Features />
      <Services />
      <Options />
      <Brands />
    </main>
  );
}
