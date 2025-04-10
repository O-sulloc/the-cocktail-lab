import Navbar from "@/components/Navbar";
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import Features from '@/components/Features';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Products />
      <Features />
    </main>
  );
}
